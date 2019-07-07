import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Carousel from 'react-native-banner-carousel';
import * as ATOM from '../../components/Atoms';
import * as ICON from '../../components/Icons';
import * as BTN from '../../components/Buttons';
import * as CONFIG from '../../common/config';
import * as HEADERS from '../../components/Headers';

import text from '../../common/text';
import { Actions } from 'react-native-router-flux';

const width = Math.round(Dimensions.get('window').width);

export default class TareasDetail extends Component {

    constructor() {
        super();
        this.state = {
            video: false
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: width, height: p(209) }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <HEADERS.Gradient color={colors.BLUE2} title={'EDITOR'} onClick={()=>Actions.tareasedit()}/>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    // loop
                    pageIndicatorStyle={{ backgroundColor: colors.WHITE }}
                    activePageIndicatorStyle={{ backgroundColor: colors.BLUE2 }}
                    index={0}
                    pageSize={width}
                >
                    { CONFIG.carouselList.map((image, index) => this.renderPage(image, index))}
                </Carousel>

                <Image source={images.bigCheck} style={styles.big} />

                <View style={{ backgroundColor: colors.BLUE2, padding: p(30), paddingBottom: p(22) }}>
                    <ICON.IconTareaW bottom={p(6)}/>
                    <Text style={text.t_30_700_ff}>{'Pulverizar'}</Text>
                    <Text numberOfLines={4} style={text.t_15_500_ff}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod blandit fermentum. Ut consectetur, felis imperdiet luctus cursus, justo lorem maximus orci, in commodo ipsum massa sit amet ante. Aliquam sollicitudin, enim et elementum condimentum, lectus leo consectetur dolor'}</Text>
                </View>

                <ATOM.Atom1
                    icon={<ICON.IconCalendarX />}
                    title={'Inicio'}
                    note={'15/05/19'}
                />

                <ATOM.Atom1
                    icon={<ICON.IconCalendarX />}
                    title={'Vence'}
                    note={'18/05/19'}
                />

                <ATOM.Atom1
                    icon={<ICON.IconMap />}
                    title={'Ubicación y coordenadas'}
                    note={'Long: 36646 - Lat: 184750'}
                />

                <ATOM.Atom1
                    icon={<ICON.IconSquare />}
                    title={'En lote'}
                    note={'Lote 21 - Santa Rosa'}
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
                    <Image source={{ uri: 'https://www.disneyfanatic.com/wp-content/uploads/2015/09/99Characters-620x330.jpg' }} style={styles.video} />
                    <BTN.BtnNormal title={'DESCARGAR PDF'} back={colors.BLUE2} top={p(20)} />
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE
    },
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(32)
    },
    text2: {
        color: colors.WHITE,
        fontWeight: '500',
        fontSize: p(17),
        marginVertical: p(14)
    },
    text3: {
        color: colors.BLACK,
        fontWeight: '500',
        fontSize: p(18)
    },
    text4: {
        color: colors.GREY8,
        fontWeight: '400',
        fontSize: p(18)
    },
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
    vertical: {
        backgroundColor: colors.BLUE2,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
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