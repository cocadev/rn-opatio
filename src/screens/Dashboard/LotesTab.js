import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView } from 'expo';
import { Calendar } from 'react-native-calendars';
import { customStyles } from './customStyles'
import Polygons from '../../components/Polygons';
import Notes from './LotesTab/notes';
import Tareas from './LotesTab/tareas';
import Cultivos from './LotesTab/cultivos';
import text from '../../common/text';
import api from '../../common/api'
import Header from '../../components/Header2';
import * as ICON from '../../components/Icons';
import * as CONFIG  from '../../common/config'


const height = Math.round(Dimensions.get('window').height);

export default class LotesTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectTab: 1,
            modal: false,
            calendar: false,
            isWaiting: true,
            polygons: null,
            REGION : {
                latitude: CONFIG.LATITUDE,
                longitude: CONFIG.LONGITUDE,
                latitudeDelta: CONFIG.LATITUDE_DELTA,
                longitudeDelta: CONFIG.LONGITUDE_DELTA,
            }
        }
    }

    componentDidMount(){
        const field_id = this.props.navigation.state.params.field_id;
        api.getLotesCamposByFieldId(field_id,(err, res) => {
            if (err == null) {
                this.setState({ 
                    isWaiting: false, 
                    polygons: res.data.polygons.coordinates,
                    REGION : {
                        latitude: 12,
                        longitude: 22,
                        latitudeDelta: CONFIG.LATITUDE_DELTA,
                        longitudeDelta: CONFIG.LONGITUDE_DELTA,
                    }
                })
            } else {
                this.setState({ isWaiting: false })
            }
        })
    }

    renderModal() {
        return (
            <Modal
                visible={this.state.modal}
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>

                        <TouchableOpacity onPress={() => this.setState({ modal: false })} style={{ alignItems: 'flex-end' }}>
                            <ICON.IconClose />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: p(12), justifyContent: 'center' }}>
                            <ICON.IconModalField1 left={p(14)} right={p(14)} />
                            <TouchableOpacity onPress={() => this.setState({ calendar: true, modal: false })}>
                                <ICON.IconModalField2 left={p(14)} right={p(14)} />
                            </TouchableOpacity>
                            <ICON.IconModalField3 left={p(14)} right={p(14)} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: p(12), justifyContent: 'center' }}>
                            <ICON.IconModalField4 left={p(14)} right={p(14)} />
                            <ICON.IconModalField5 left={p(14)} right={p(14)} />
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        const { selectTab, modal, calendar, polygons, REGION } = this.state;
        return (
            <ScrollView style={styles.container}>

                <MapView
                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    initialRegion={REGION}
                    customMapStyle={CONFIG.CUSTOM_STYLE}
                    cacheEnabled={true}
                    zoomEnabled
                    scrollingEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                >
                    { polygons && <Polygons coordinates={ polygons } /> }
                </MapView>

                <Header title={'Lote 21'} />
                
                <View style={customStyles.searchView}>
                    <Image source={images.blackSearch} style={customStyles.searchIcon} />
                    <TextInput
                        style={customStyles.textinput}
                        placeholder={'Buscar'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <View style={{ position: 'absolute', right: 15, top: p(190) }}>
                    <TouchableOpacity onPress={() => this.setState({ modal: true })}>
                        <ICON.IconRoundLayer />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ICON.IconLocate1 />
                    </TouchableOpacity>
                </View>

                {
                    !calendar &&
                    <View style={styles.searchView}>
                        <TextInput style={styles.searchInput} placeholder={'Notas del lote'} />
                        <Image source={images.search_white} style={{ width: p(18), height: p(18), marginRight: p(20) }} />
                    </View>
                }

                {
                    !calendar &&
                    <View style={styles.tab}>
                        <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 1 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                            <Text style={{ color: colors.TEXT, fontSize: p(14) }}>NOTAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 2 ? colors.BLUE : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                            <Text style={{ color: colors.TEXT, fontSize: p(14) }}>TAREAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 3 ? colors.GREEN2 : colors.GREY3, backgroundColor: selectTab == 3 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 3 })}>
                            <Text style={{ color: colors.TEXT, fontSize: p(14) }}>CULTIVOS</Text>
                        </TouchableOpacity>
                    </View>
                }


                {!calendar && selectTab == 1 && <Notes />}
                {!calendar && selectTab == 2 && <Tareas />}
                {!calendar && selectTab == 3 && <Cultivos />}

                {modal && this.renderModal()}

                {
                    calendar && <View style={{ marginTop: p(240), flex: 1 }}>
                        <View style={{ height: p(63), backgroundColor: colors.BLUE2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={text.t_30_400_ff}>{'NDVI'}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: p(8)}}>
                            <Calendar
                                style={styles.calendar}
                                theme={{
                                    arrowColor: '#707070',
                                }}
                                onDayPress={(day) => { console.log('selected day', day) }}
                                markingType={'custom'}
                                markedDates={{
                                    '2019-06-05': { customStyles: customCalendarStyles },
                                    '2019-06-10': { customStyles: customCalendarStyles },
                                    '2019-06-15': { customStyles: customCalendarStyles },
                                    '2019-06-20': { customStyles: customCalendarStyles },
                                    '2019-06-25': { customStyles: customCalendarStyles },
                                    '2019-06-30': { customStyles: customCalendarStyles },
                                }}
                                hideArrows={false}
                            />
                        </View>
                    </View>

                }


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F5FCFF'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: p(300),
        marginTop: p(60)
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    searchView: {
        backgroundColor: colors.GREY4,
        alignItems: 'center',
        flexDirection: 'row',
        height: p(55),
        marginTop: p(240)
    },
    searchInput: {
        flex: 1,
        marginHorizontal: p(26),
        paddingHorizontal: p(12),
        backgroundColor: colors.GREY5,
        borderRadius: p(12),
        fontSize: p(21),
        height: p(36),
        color: colors.GREY4,
        fontWeight: '700'
    },
    head: {
        backgroundColor: '#eeeeed',
        justifyContent: 'center',
        paddingLeft: p(25),
        height: p(50),
        borderBottomColor: '#e8e8e7',
        borderBottomWidth: 1
    },
    itemLote: {
        borderBottomColor: colors.GREY2,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: p(20),
        alignItems: 'center',
        height: p(72)
    },
    headText: {
        fontWeight: '700',
        color: '#354052',
        fontSize: p(16)
    },
    tab: {
        flexDirection: 'row',
        backgroundColor: colors.GREY3,
        height: p(60)
    },
    tabItem: {
        flex: 1,
        borderTopColor: colors.GREY3,
        borderTopWidth: p(8),
        backgroundColor: colors.GREY3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: p(243),
        height: p(172),
        padding: p(13),
        borderRadius: 5,
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        opacity: 0.95,
    },
    modalContainer: {
        flex: 1,
        height: height + 24,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginTop: p(-70),
        paddingRight: p(30),
        alignItems: "flex-end",
        justifyContent: 'center'
    },
    calendar: {
        marginTop: p(2),
        width: p(270),
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#707070'
    }
});