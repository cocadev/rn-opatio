import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { Calendar } from 'react-native-calendars'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Notes from './LotesTab/notes'
import Tareas from './LotesTab/tareas'
import Cultivos from './LotesTab/cultivos'
import text from '../../common/text'
import Map from '../../components/Map'
import DateTimePicker from 'react-native-modal-datetime-picker'
import UtilService from '../../common/utils'
import Cstyles from '../../common/c_style'
import * as HEADER from '../../components/Headers'
import * as ICON from '../../components/Icons'
import * as CONFIG from '../../common/config'
import * as actions from "../../store/lotes/actions";
import _ from 'underscore'

const { width, height } = Dimensions.get('window');
export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.04;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class LotesTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectTab: 1,
            modal: false,
            calendar: false,
            polygons: null,
            REGION: CONFIG.REGION,
            search: '',

            isDateTimePickerVisible1: false,
            isDateTimePickerVisible2: false,

            startDate_note: UtilService.getDatebylongNumber(new Date()),
            endDate_note: UtilService.getDatebylongNumber(new Date()),

            results: null
        }
    }

    _showDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: true });
    _showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });

    _hideDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: false });
    _hideDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: false });

    _handleDatePicked1 = (date) => {
        this.setState({ startDate_note: UtilService.getDatebylongNumber(date) });
        this._hideDateTimePicker1();
        this.onApiCallMoke()
    };

    _handleDatePicked2 = (date) => {
        this.setState({ endDate_note: UtilService.getDatebylongNumber(date) });
        this._hideDateTimePicker2();
        this.onApiCallMoke()
    };

    componentDidMount() {

        let campo_id = this.props.navigation.state.params.campo_id
        let field_id = this.props.navigation.state.params.field.field_id

        this.props.actions.getGisFromCampoId(campo_id, field_id);
        this.props.actions.searchNotes(field_id);
        this.props.actions.searchTasks(field_id);
        this.props.actions.searchCrops(field_id);

        console.log('OOOOOOO field_id OOOOOOO', field_id)

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

    startOpen = () => {
        this.setState({ isDateTimePickerVisible1: true });
    }

    endOpen = () => {
        this.setState({ isDateTimePickerVisible2: true });
    }

    render() {

        const { selectTab, modal, calendar, REGION, isWaiting } = this.state;
        const field = this.props.navigation.state.params.field;
        const myLote = this.props.testLote
        let loteRegion = this.props.testPolygon;

        // console.log('<>< testCrops ><>', this.props.testCrops)

        return (
            <View style={Cstyles.container}>

                { myLote && <HEADER.Complex
                    title={'Lote ' + myLote.name}
                    address={myLote.size}
                    head={myLote.group}
                    back={colors.WHITE}
                />}

                <ScrollView style={{ marginTop: p(60) }}>

                    <Map 
                        region={{
                            latitude: loteRegion ? loteRegion[0][0][1] : 0,
                            longitude: loteRegion ? loteRegion[0][0][0] : 0,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }} 
                        polygons={loteRegion && loteRegion} 
                    />

                    {
                        !calendar &&
                        <View style={Cstyles.searchView}>
                            <TextInput style={Cstyles.searchInput} placeholder={'Notas del lote'} />
                            <Image source={images.search_white} style={{ width: p(18), height: p(18), marginRight: p(20) }} />
                        </View>
                    }

                    {
                        !calendar &&
                        <View style={Cstyles.tab}>
                            <TouchableOpacity style={[Cstyles.tabItem, { borderTopColor: selectTab == 1 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                                <Text style={text.t_12_400_2a}>NOTAS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Cstyles.tabItem, { borderTopColor: selectTab == 2 ? colors.BLUE : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                                <Text style={text.t_12_400_2a}>TAREAS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Cstyles.tabItem, { borderTopColor: selectTab == 3 ? colors.GREEN2 : colors.GREY3, backgroundColor: selectTab == 3 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 3 })}>
                                <Text style={text.t_12_400_2a}>CULTIVOS</Text>
                            </TouchableOpacity>
                        </View>
                    }


                    {!calendar && selectTab == 1 && 
                        <Notes 
                            field={field} 
                            polygons={this.state.polygons} 
                            notes={this.props.testNotes} 
                            endModal={this.endOpen} 
                            startModal={this.startOpen} 
                            startDate={this.state.startDate_note} 
                            endDate={this.state.endDate_note} 
                            />
                    }
                    {!calendar && selectTab == 2 && <Tareas tasks={this.props.testTasks}/>}
                    {!calendar && selectTab == 3 && <Cultivos crops={this.props.testCrops} />}

                    {modal && this.renderModal()}

                    {
                        calendar && <View style={{ marginTop: p(240), flex: 1 }}>
                            <View style={{ height: p(63), backgroundColor: colors.BLUE2, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={text.t_30_400_ff}>{'NDVI'}</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: p(8) }}>
                                <Calendar
                                    style={styles.calendar}
                                    theme={{
                                        arrowColor: '#707070',
                                    }}
                                    onDayPress={(day) => { console.log('selected day', day) }}
                                    markingType={'custom'}
                                    markedDates={{
                                        '2019-06-05': { customStyles: CONFIG.customCalendarStyles },
                                        '2019-06-10': { customStyles: CONFIG.customCalendarStyles },
                                        '2019-06-15': { customStyles: CONFIG.customCalendarStyles },
                                        '2019-06-20': { customStyles: CONFIG.customCalendarStyles },
                                        '2019-06-25': { customStyles: CONFIG.customCalendarStyles },
                                        '2019-06-30': { customStyles: CONFIG.customCalendarStyles },
                                    }}
                                    hideArrows={false}
                                />
                            </View>
                        </View>

                    }

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible1}
                        onConfirm={this._handleDatePicked1}
                        onCancel={this._hideDateTimePicker1}
                    />

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible2}
                        onConfirm={this._handleDatePicked2}
                        onCancel={this._hideDateTimePicker2}
                    />

                </ScrollView>
            </View>
        );
    }
}

export default connect(
    state => ({
        allLotes: state.lotes.allLotes,
        testPolygon: state.lotes.testPolygon,
        testNotes: state.lotes.testNotes,
        testTasks: state.lotes.testTasks,
        testLote: state.lotes.testLote,
        testCrops: state.lotes.testCrops,       
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(LotesTab);

const styles = StyleSheet.create({
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