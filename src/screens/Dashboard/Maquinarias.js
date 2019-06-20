import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../../components/Header';
import { CUSTOM_STYLE, COORDINATES, CENTER, REGION, MARKERS_LATITUDE_DELTA, LONGITUDE, LATITUDE, PERCENT_SPECIAL_MARKERS, NUM_MARKERS } from '../../common/config'
import XMarksTheSpot from '../Map/CustomOverlayXMarksTheSpot';
import { Actions } from 'react-native-router-flux';
import { customStyles } from './customStyles';
import * as ICON from '../../components/Icons';

export default class Maquinarias extends Component {

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
            markerInfo
        }
    }

    render() {
        const markers = this.state.markerInfo.map((markerInfo) =>
            <MapView.Marker
                coordinate={markerInfo}
                key={markerInfo.id}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={images.marker} style={{ width: p(40), height: p(40) }} />
                    <Text style={{ fontSize: p(21), fontWeight: '700', color: colors.WHITE }}> Lote {markerInfo.id}</Text>
                </View>
            </MapView.Marker>
        );
        return (
            <View style={styles.container}>
                <MapView

                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    // followUserLocation={true}
                    // showsMyLocationButton={true}
                    // showsPointsOfInterest={true}
                    // showsCompass={false}
                    zoomEnabled={true}
                    // minZoomLevel={5}
                    // maxZoomLevel={20}
                    cacheEnabled={true}
                    initialRegion={REGION}
                    customMapStyle={CUSTOM_STYLE}

                >
                    <XMarksTheSpot coordinates={COORDINATES} center={CENTER} />
                    {markers}
                </MapView>

                <Header title={'Maquinarias'} icon={images.track} color={colors.ORANGE} />

                <View style={customStyles.searchView}>
                    <Image source={images.blackSearch} style={customStyles.searchIcon} />
                    <TextInput
                        style={customStyles.textinput}
                        placeholder={'Buscar'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>

                <View style={{ position: 'absolute', right: 21, bottom: p(120) }}>
                    <TouchableOpacity>
                        <Image source={images.layer1} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.locate1} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.maquinariastab()}>
                        <Image source={images.trackRound} style={{ width: p(65), height: p(65) }} />
                    </TouchableOpacity>
                </View>

                <ICON.IconAddYellow />
                
            </View>
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
        top: p(60)
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
    textinput: {
        width: p(260),
        height: p(50),
        paddingLeft: p(48),
        fontSize: p(16),
        borderColor: colors.GREY8,
        borderWidth: 1,
        borderRadius: p(25)
    }
});