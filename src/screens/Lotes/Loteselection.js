import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../../components/Header';
import { CUSTOM_STYLE, COORDINATES, CENTER, REGION, MARKERS_LATITUDE_DELTA, LONGITUDE, LATITUDE, PERCENT_SPECIAL_MARKERS, NUM_MARKERS, LOTES1 } from '../../common/config'
import XMarksTheSpot from '../Map/CustomOverlayXMarksTheSpot';
import { Actions } from 'react-native-router-flux';
import { customStyles } from './customStyles'

const height = Math.round(Dimensions.get('window').height);

export default class LoteSelection extends Component {

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

    _renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemLote} onPress={()=>Actions.lotetab()}>
            <Image source={item.visible ? images.dot1 : images.dot2} style={{ width: p(30), height: p(30), marginRight: p(20) }} />
            <Text style={{ fontSize: p(20), fontWeight: '700', color: colors.TEXT, marginTop: -5 }}>Lote{item.id}</Text>
            <Text style={{ fontSize: p(15), flex: 1, marginLeft: p(20), color: colors.TEXT, marginTop: -5 }}>{item.count} ha</Text>
            <Image source={item.download? images.download: images.check} style={{ width: p(16), height: p(20) }} />
        </TouchableOpacity>
    )

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
            <ScrollView style={styles.container}>
                <MapView
                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    initialRegion={REGION}
                    customMapStyle={CUSTOM_STYLE}
                >
                    <XMarksTheSpot coordinates={COORDINATES} center={CENTER} />
                    {markers}
                </MapView>
                <Header title={'Lote 21'} color={colors.BLUE} icon={images.location}/>
                <View style={customStyles.searchView}>
                    <Image source={images.blackSearch} style={customStyles.searchIcon} />
                    <TextInput
                        style={customStyles.textinput}
                        placeholder={'Buscar'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <View style={{ position: 'absolute', right: 15, top: p(132) }}>
                    <TouchableOpacity>
                        <Image source={images.layer1} style={{ width: p(65), height: p(65), marginBottom: p(5) }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.locate1} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchInput} placeholder={'Campos y Lotes'} />
                    <Image source={images.search_white} style={{ width: p(18), height: p(18), marginRight: p(20) }} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.headText}>La Morocha</Text>
                </View>
                <FlatList
                    style={{ marginTop: 12 }}
                    data={LOTES1}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                />
                <View style={styles.head}>
                    <Text style={styles.headText}>Los Cesares</Text>
                </View>
                <FlatList
                    style={{ marginTop: 12 }}
                    data={LOTES1}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                />
                <View style={styles.head}>
                    <Text style={styles.headText}>Los Cisnes</Text>
                </View>
                <FlatList
                    style={{ marginTop: 12 }}
                    data={LOTES1}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                />
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
        marginTop: p(200),
        borderBottomColor: colors.BLUE,
        borderBottomWidth: 4
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

});