import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../../components/Header';
import { CUSTOM_STYLE, COORDINATES, CENTER, REGION, MARKERS_LATITUDE_DELTA, LONGITUDE, LATITUDE, PERCENT_SPECIAL_MARKERS, NUM_MARKERS, LOTES1, INTRO } from '../../common/config'
import XMarksTheSpot from '../Map/CustomOverlayXMarksTheSpot';

import Maquinarias from './MaquinariasTab/Maquinarias';
import Alarmas from './MaquinariasTab/alarmas';
import Contratistas from './MaquinariasTab/contratistas';
import { customStyles } from './customStyles'
import * as ICON from '../../components/Icons';
import text from '../../common/text';

const height = Math.round(Dimensions.get('window').height);

export default class MaquinariasSwitch extends Component {

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
            calendar: false
        }
    }

    render() {
        const { calendar } = this.state;
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

                <Header title={'Maquinarias'} icon={images.track} color={colors.ORANGE} />

                <View style={customStyles.searchView}>
                    <Image source={images.blackSearch} style={customStyles.searchIcon} />
                    <TextInput
                        style={customStyles.textinput}
                        placeholder={'Buscar'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <View style={styles.dateView}>
                        <Text style={text.t_18_700_ff}>{'Mar 23/07  -  Vier 26/07'}</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', right: 15, top: p(260) }}>

                    <TouchableOpacity>
                        <ICON.IconRoundLayer bottom={p(4)} left={p(10)} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ICON.IconLocate1 bottom={p(4)} left={p(10)} />
                    </TouchableOpacity>

                    {
                        !calendar &&
                        <TouchableOpacity style={{ zIndex: 1 }} onPress={() => this.setState({ calendar: true })}>
                            <ICON.IconCalendarGreen bottom={p(4)} />
                        </TouchableOpacity>
                    }

                </View>

                {
                    !calendar &&
                    <View style={styles.searchView}>
                        <Maquinarias hidden={true} />
                    </View>
                }

                {
                    calendar &&
                    <View style={[styles.searchView, { backgroundColor: colors.GREEN2, padding: p(21), alignItems: 'flex-start', flexDirection: 'column' }]}>
                        <ICON.IconBack />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: p(10)}}>
                            <View style={{ flex:1, alignItems: 'center'}}>
                                <Text style={text.t_30_700_ff}>{'Desde'}</Text>
                                <ICON.IconCalendar top={p(10)} bottom={p(10)}/>
                                <Text style={text.t_15_400_60}>{'Martes 23/07'}</Text>
                            </View>

                            <View style={{ flex:0.01, width: 2, height: p(125), backgroundColor: colors.GREY6, marginTop: p(5) }}>

                            </View>

                            <View style={{ flex:1,alignItems: 'center'}}>
                                <Text style={text.t_30_700_ff}>{'Desde'}</Text>
                                <ICON.IconCalendar top={p(10)} bottom={p(10)}/>
                                <Text style={text.t_15_400_60}>{'Martes 23/07'}</Text>
                            </View>
                        </View>
                        <Text style={[text.t_16_500_ff, { textAlign: 'center', marginTop: p(22)}]}>{'Selecciona el período para el cual quieras ver la actividad de las maquinarias'}</Text>
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
        backgroundColor: colors.GREEN2
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: p(400),
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
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: p(340)
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
    dateView: {
        width: p(238),
        height: p(36),
        backgroundColor: colors.GREEN2,
        borderRadius: 5,
        margin: p(12),
        justifyContent: 'center',
        alignItems: 'center'
    }
});