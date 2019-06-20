import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../../components/Header2';
import { CUSTOM_STYLE, COORDINATES, CENTER, REGION, MARKERS_LATITUDE_DELTA, LONGITUDE, LATITUDE, PERCENT_SPECIAL_MARKERS, NUM_MARKERS, LOTES1, INTRO } from '../../common/config'
import XMarksTheSpot from '../Map/CustomOverlayXMarksTheSpot';

import { customStyles } from './customStyles'
import * as ICON from '../../components/Icons';
import text from '../../common/text';

const height = Math.round(Dimensions.get('window').height);

export default class LotesTab extends Component {

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
        }
    }


    render() {
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

                <MapView
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
                </MapView>

                <View style={styles.header}>
                    <ICON.IconBack />
                    <ICON.IconExcWhite left={p(12)} right={p(12)} />
                    <Text style={text.t_21_700_ff}>{'Alarma de Velocidad'}</Text>
                </View>

                <View style={{ position: 'absolute', right: 15, top: p(75) }}>
                    <ICON.IconRoundLayer />
                </View>
                <View style={styles.searchView}>
                    <Text style={text.t_15_500_ff}>{'Fecha: 10/03/2018        Hora: 15:35 hs'}</Text>
                    <View style={styles.borderView}>
                        <Text style={text.t_15_400_ff}>{'Supera los 7 Km/h establecidos como máximo de velocidad. \n\nVelocidad promedio de infracción: 10 Km/h \nTiempo de infracción: 12 min\n\nDistancia de infracción: 82 m\n'}</Text>
                    </View>
                </View>
                <View style={styles.itemView}>
                    <ICON.IconCall bottom={p(15)}/>
                    <Text style={text.t_14_500_RED}>{'Llamar Contratista'}</Text>
                </View>

                <View style={styles.itemView2}>
                    <ICON.IconProfile right={p(24)}/>
                    <View>
                        <Text style={text.t_16_500_00}>{'Contratista:'}</Text>
                        <Text style={text.t_15_400_98}>{'Llamar Contratista'}</Text>
                    </View>
                </View>     

                <View style={styles.itemView2}>
                    <ICON.IconTrackGrey right={p(24)}/>
                    <View>
                        <Text style={text.t_16_500_00}>{'Maquinaria:'}</Text>
                        <Text style={text.t_15_400_98}>{'Tractor 150   John Deere 6130J'}</Text>
                    </View>
                </View>  

                <View style={[styles.itemView2, { borderBottomWidth: 0}]}>
                    <ICON.IconNeedle right={p(24)}/>
                    <View>
                        <Text style={text.t_16_500_00}>{'Alerta:'}</Text>
                        <Text style={text.t_15_400_98}>{'Velocidad'}</Text>
                    </View>
                </View>  

                <View style={[styles.itemView2, { alignItems: 'flex-start' }]}>
                    <ICON.IconParameter left={p(2)} right={p(24)} top={p(6)}/>
                    <View>
                        <Text style={text.t_16_500_00}>{'Parámetros:'}</Text>
                        <Text style={text.t_15_700_RED}>{'Velocidad Máxima:              7 Km/h'}</Text>
                        <Text style={text.t_15_700_RED}>{'Velocidad Mínima:               2 Km/h'}</Text>
                        <Text style={text.t_15_700_RED}>{'Margen de tiempo:              10 min'}</Text>
                    </View>
                </View> 


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
    },
    searchView: {
        backgroundColor: colors.RED,
        alignItems: 'center',
        flex: 1,
        marginTop: p(235),
        paddingHorizontal: p(33),
        paddingVertical: p(15)
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: p(17),
        paddingVertical: p(15),
        flexDirection: 'row',
        height: p(64),
        backgroundColor: colors.RED
    },
    borderView: {
        marginTop: p(10),
        paddingVertical: p(8),
        borderTopColor: colors.WHITE,
        borderBottomColor: colors.WHITE,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    itemView:{
        height: p(100),
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomColor: colors.GREY3,
        borderBottomWidth:2,
        backgroundColor: colors.WHITE
    },
    itemView2: {
        paddingHorizontal: p(24),
        paddingVertical: p(18),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: colors.GREY3,
        borderBottomWidth:2,
        backgroundColor: colors.WHITE
    }


});