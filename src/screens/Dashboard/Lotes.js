import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../../components/Header';
import { CUSTOM_STYLE, COORDINATES, CENTER, REGION, MARKERS_LATITUDE_DELTA, LONGITUDE, LATITUDE, PERCENT_SPECIAL_MARKERS, NUM_MARKERS } from '../../common/config'
import XMarksTheSpot from '../Map/CustomOverlayXMarksTheSpot';
import { Actions } from 'react-native-router-flux';
import { customStyles } from './customStyles'

export default class Lotes extends Component {

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
            editing: null,
            create: false
        }
    }

    finish() {
        const { editing } = this.state;
        this.setState({
            editing: null, create: false
        });
        Actions.lotecreatedetail();
    }

    remove() {
        const { editing } = this.state;
        const array = editing.coordinates;
        this.setState({
            editing: {
                ...editing,
                coordinates: this.state.editing.coordinates.filter((_, i) => i !== parseInt(array.length - 1))
            },
        });
    }

    onPress(e) {
        const { editing } = this.state;
        if (!editing) {
            this.setState({
                editing: {
                    coordinates: [e.nativeEvent.coordinate],
                },
            });
        } else {
            this.setState({
                editing: {
                    ...editing,
                    coordinates: [
                        ...editing.coordinates,
                        e.nativeEvent.coordinate,
                    ],
                },
            });
        }
    }

    render() {

        const { create } = this.state

        const mapOptions = {
            scrollEnabled: true,
        };

        if (this.state.editing) {
            mapOptions.scrollEnabled = false;
            mapOptions.onPanDrag = e => this.onPress(e);
        }

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
                    showsCompass={true}
                    zoomEnabled={true}
                    // minZoomLevel={5}
                    // maxZoomLevel={20}
                    cacheEnabled={true}
                    initialRegion={REGION}
                    customMapStyle={CUSTOM_STYLE}
                    compassOffset={{ x: 10, y: 50 }}
                    onPress={e => this.onPress(e)}


                >
                    <XMarksTheSpot coordinates={COORDINATES} center={CENTER} />
                    {markers}

                    {this.state.editing && create && <MapView.Polygon
                        coordinates={this.state.editing.coordinates}
                        strokeColor={colors.BLUE2}
                        // fillColor="rgba(255,0,0,0.2)"
                        strokeWidth={3}
                    />}
                    {this.state.editing && create && this.state.editing.coordinates.map((marker, key) => (
                        <MapView.Marker
                            key={key}
                            coordinate={marker}
                        // pinColor={colors.PURPLE}
                        >
                            <Image source={images.circleWhite} style={{ width: p(24), height: p(24), marginTop: p(5) }} />
                        </MapView.Marker>
                    ))}
                </MapView>

                <Header title={'Lotes'} icon={images.location} color={colors.BLUE} />

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

                    { create && <TouchableOpacity onPress={() => this.finish()}>
                        <Image source={images.save} style={{ width: p(55), height: p(55), marginBottom: p(7), marginLeft: p(5) }} />
                    </TouchableOpacity>}

                    { create && <TouchableOpacity onPress={() => this.remove()}>
                        <Image source={images.undo} style={{ width: p(55), height: p(55), marginBottom: p(7), marginLeft: p(5) }} />
                    </TouchableOpacity>}

                    <TouchableOpacity>
                        <Image source={images.locate1} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.loteselection()}>
                        <Image source={images.lotes2} style={{ width: p(65), height: p(65) }} />
                    </TouchableOpacity>
                </View>

                <ActionButton
                    buttonColor={colors.BLUE}
                    size={80}
                    offsetX={12}
                    offsetY={12}
                    spacing={5}
                    renderIcon={active => active ? (<Image source={images.add} style={{ width: p(30), height: p(30) }} />) : (<Image source={images.add} style={{ width: p(27), height: p(27) }} />)}>
                    >
                    {/* <ActionButton.Item size={60} buttonColor={colors.WHITE} onPress={() => {}}>
                        <Image source={images.direction} style={{ width: p(19), height: p(50) }} />
                    </ActionButton.Item> */}
                    <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { this.setState({ create: true }) }}>
                        <Image source={images.lote} style={{ width: p(34), height: p(42) }} />
                    </ActionButton.Item>
                    <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { }}>
                        <Image source={images.nota} style={{ width: p(28), height: p(45) }} />
                    </ActionButton.Item>
                    <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { }}>
                        <Image source={images.tarea} style={{ width: p(28), height: p(48) }} />
                    </ActionButton.Item>
                    <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { }}>
                        <Image source={images.cultivo} style={{ width: p(33), height: p(46) }} />
                    </ActionButton.Item>
                </ActionButton>
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
});