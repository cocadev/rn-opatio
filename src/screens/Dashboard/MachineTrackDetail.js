import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native';
import ActionButton from 'react-native-action-button';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../../components/Header2';
import { CUSTOM_STYLE, COORDINATES, CENTER, REGION, MARKERS_LATITUDE_DELTA, LONGITUDE, LATITUDE, PERCENT_SPECIAL_MARKERS, NUM_MARKERS, LOTES1, INTRO } from '../../common/config'
import XMarksTheSpot from '../Map/CustomOverlayXMarksTheSpot';

import GPS from './MaquinariasTab/gps';
import AlarmasDetail from './MaquinariasTab/alarmasDetail';
import Statistic from './MaquinariasTab/statistics';
import { customStyles } from './customStyles'
import * as BTN from '../../components/Buttons';
import text from '../../common/text';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export default class MachineTrackDetail extends Component {

    constructor(props) {
        super(props)
        const markerInfo = [];
        for (let i = 1; i < NUM_MARKERS; i++) {
            markerInfo.push({
                latitude: (((Math.random() * 2) - 1) * MARKERS_LATITUDE_DELTA) + LATITUDE,
                longitude: (((Math.random() * 2) - 1) * MARKERS_LATITUDE_DELTA) + LONGITUDE,
                isSpecial: Math.random() < PERCENT_SPECIAL_MARKERS,
                id: i,
            });
        }
        this.state = {
            markerInfo,
            selectTab: 1,
            modal1: false,
            modal2: false
        }
    }

    _renderItem = ({ item }) => (
        <View style={styles.itemLote}>
            <Image source={item.visible ? images.dot1 : images.dot2} style={{ width: p(30), height: p(30), marginRight: p(20) }} />
            <Text style={{ fontSize: p(20), fontWeight: '700', color: colors.TEXT, marginTop: -5 }}>Lote{item.id}</Text>
            <Text style={{ fontSize: p(15), flex: 1, marginLeft: p(20), color: colors.TEXT, marginTop: -5 }}>{item.count} ha</Text>
            <Image source={item.download ? images.download : images.check} style={{ width: p(16), height: p(20) }} />
        </View>
    )

    update1() {
        this.setState({ modal1: true })
    }
    update2() {
        this.setState({ modal2: true })
    }

    renderModal1() {
        return (
            <Modal
                visible={this.state.modal1}
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={[text.t_14_700_60, { textAlign: 'center'}]}>{'\n\nVas a descargar las alarmas, el recorrido y las estadísticas de esta maquinaria para los últimos 7 días.\n\n Podrás acceder a esta información desde donde estés, sin necesidad de tener conexión a internet.\n\n'}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity onPress={() => this.setState({ modal1: false })}>
                                <BTN.AcceptCancel title={'CANCELAR'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ modal1: false })}>
                                <BTN.AcceptCancel title={'ACEPTAR'} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    renderModal2() {
        return (
            <Modal
                visible={this.state.modal2}
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={[text.t_14_700_60, { textAlign: 'center', lineHeight: p(21)}]}>{'\nVas a desvincular el GPS de esta maquinaria. Esto quiere decir que todo lo que haga este GPS de ahora hasta que sea vinculado con una nueva maquinaria no se guardara. \n\n\n\n'}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity onPress={() => this.setState({ modal2: false })}>
                                <BTN.AcceptCancel title={'CANCELAR'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ modal2: false })}>
                                <BTN.AcceptCancel title={'ACEPTAR'} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        const { selectTab, modal1, modal2 } = this.state;
        const markers = this.state.markerInfo.map((markerInfo) =>
            <MapView.Marker
                coordinate={markerInfo}
                key={markerInfo.id}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={images.marker} style={{ width: p(35), height: p(35) }} />
                    <Text style={{ fontSize: p(18), fontWeight: '700', color: colors.WHITE }}> Lote {markerInfo.id}</Text>
                </View>
            </MapView.Marker>
        );
        return (
            <ScrollView style={styles.container}>

                {selectTab == 1 && <MapView
                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    initialRegion={REGION}
                    customMapStyle={CUSTOM_STYLE}
                    cacheEnabled={true}
                    zoomEnabled
                    scrollingEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                >
                    <XMarksTheSpot coordinates={COORDINATES} center={CENTER} />
                    {markers}
                </MapView>}

                <Header title={'Tractor 150'} address={'John Deere 6130J '} description={'Cesar Cuestas'} />

                {selectTab !== 1 && <View>
                    <Image source={images.downloadRound} style={{ width: p(65), height: p(65), position: 'absolute', right: 15, top: p(132), zIndex: 1 }} />
                    <Image source={images.trackImg} style={{ width: width, height: p(210) }} />
                </View>}

                {selectTab == 1 && <View style={customStyles.searchView}>
                    <Image source={images.blackSearch} style={customStyles.searchIcon} />
                    <TextInput
                        style={customStyles.textinput}
                        placeholder={'Buscar'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>}

                {selectTab == 1 && <View style={{ position: 'absolute', right: 15, top: p(172) }}>
                    <TouchableOpacity>
                        <Image source={images.layer1} style={{ width: p(65), height: p(65), marginBottom: p(5) }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.downloadRound} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                    </TouchableOpacity>
                </View>}

                {selectTab == 1 && <View style={styles.searchView}>
                    <TextInput style={styles.searchInput} placeholder={'Alarmas de la máquina'} />
                    <Image source={images.search_white} style={{ width: p(18), height: p(18), marginRight: p(20) }} />
                </View>}

                <View style={styles.tab}>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 1 ? colors.PINK : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>ALARMAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabItem, { flexDirection: 'row', borderTopColor: selectTab == 2 ? colors.PINK : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>GPS</Text>
                        <View style={{ width: p(16), height: p(16), borderRadius: p(8), backgroundColor: colors.GREEN2, marginLeft: p(12) }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 3 ? colors.PINK : colors.GREY3, backgroundColor: selectTab == 3 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 3 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>ESTADÍSTICAS</Text>
                    </TouchableOpacity>
                </View>

                {selectTab == 1 && <AlarmasDetail />}
                {selectTab == 2 && <GPS update1={() => this.setState({ modal1: true })} update2={() => this.setState({ modal2: true })} />}
                {selectTab == 3 && <Statistic />}

                {modal1 && this.renderModal1()}
                {modal2 && this.renderModal2()}

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
        height: p(310),
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
        marginTop: p(250)
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
        width: p(240),
        height: p(257),
        padding: p(22),
        backgroundColor: "white",
        paddingTop: p(10),
    },
    modalContainer: {
        flex: 1,
        height: height + 24,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: 'center'
    },
});