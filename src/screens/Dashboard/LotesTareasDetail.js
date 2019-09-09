import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as WebBrowser from 'expo-web-browser'
import * as ATOM from '../../components/Atoms'
import * as ICON from '../../components/Icons'
import * as BTN from '../../components/Buttons'
import * as CONFIG from '../../common/config'
import * as HEADERS from '../../components/Headers'
import * as actions from "../../store/lotes/actions";
import text from '../../common/text'
import Carousel from 'react-native-banner-carousel'
import Cstyles from '../../common/c_style'
import _ from 'underscore'

const width = Math.round(Dimensions.get('window').width);

class TareasDetail extends Component {

    constructor() {
        super();
        this.state = {
            video: false,
            myTareas: null
        }
    }

    componentDidMount(){
        const task_index = _(this.props.testTasks).chain().pluck('_id').flatten().findIndex({ week: this.props.week }).value();
        const field_index = _.findIndex(this.props.testTasks[task_index].tasks, { task_id: this.props.task_id });
        const task = this.props.testTasks[task_index].tasks[field_index];
        this.setState({
            myTareas: task
        })
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: width, height: p(209) }} source={{ uri: image }} />
            </View>
        );
    }

    _viewPDF = () => {
        WebBrowser.openBrowserAsync('https://webprofesional.org/wp-content/uploads/2018/02/J.K.-Rowling-HP-7-Harry-Potter-and-the-Deathly-Hallows.pdf');
    }



    render() {

        const Lote = this.props.testLote
        const { myTareas } = this.state
        if(!myTareas){
            return false
        }

        return (
            <View style={Cstyles.container}>
                <HEADERS.Gradient
                    color={colors.BLUE2}
                    title={'EDITOR'}
                    onClick={() => Actions.tareasedit({ 
                        week: this.props.week, 
                        task_id: this.props.task_id,
                        update: (x)=>this.setState({ myTareas: x })
                    })}
                />
                <ScrollView>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        // loop
                        pageIndicatorStyle={{ backgroundColor: colors.WHITE }}
                        activePageIndicatorStyle={{ backgroundColor: colors.BLUE2 }}
                        index={0}
                        pageSize={width}
                    >
                        {/* {CONFIG.carouselList.map((image, index) => this.renderPage(image, index))} */}
                        <Image style={{ width: width, height: p(209) }} source={{ uri: myTareas.file_url }} />

                    </Carousel>

                    <Image source={images.bigCheck} style={styles.big} />

                    <View style={{ backgroundColor: colors.BLUE2, padding: p(30), paddingBottom: p(22) }}>
                        <ICON.IconTareaW bottom={p(6)} />
                        <Text style={text.t_30_700_ff}>{myTareas.title}</Text>
                        <Text numberOfLines={4} style={text.t_15_500_ff}>{myTareas.description}</Text>
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Inicio'}
                        note={myTareas.date_from}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Fecha'}
                        note={myTareas.date_to}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconMap />}
                        title={'Ubicación y coordenadas'}
                        note={`Long: ${myTareas.geo_tag.coordinates[0].toFixed(2)} - Lat: ${myTareas.geo_tag.coordinates[1].toFixed(2)}`}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconSquare />}
                        title={'En lote'}
                        note={`Lote ${Lote.name} - ${Lote.group}`}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconProfile />}
                        title={'Asignado a'}
                        note={'Walter'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconMember />}
                        title={'Responsable'}
                        note={'joaquin@optiagro.com'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconPin />}
                        title={'Archivos adjuntos'}
                        note={'1 Archivo'}
                    />

                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(24) }}>
                        <BTN.BtnNormal title={'DESCARGAR PDF'} back={colors.BLUE2} top={p(20)} onClick={this._viewPDF} />
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default connect(
    state => ({
        testLote: state.lotes.testLote,
        testTasks: state.lotes.testTasks
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(TareasDetail);

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        padding: p(30),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: p(7)
    },
    video: {
        width: p(225),
        height: p(136),
        marginBottom: p(23),
        marginRight: p(3),
        borderRadius: p(5)
    },
    big: {
        width: p(80),
        height: p(80),
        position: 'absolute',
        zIndex: 100,
        top: p(170),
        right: p(20)
    }
});