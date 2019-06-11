import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { images } from '../common/images';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { MapView, Marker, Animated } from 'expo';
import Header from '../components/Header';

export default class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mapRegion: null,
            latitude: null,
            longitude: null,
            destination: null,
            mode: 'driving',
            color: '#4286f4CC'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    followUserLocation={true}
                    showsMyLocationButton={true}
                    showsPointsOfInterest={true}
                    showsCompass={true}
                    zoomEnabled={true}
                    minZoomLevel={5}
                    maxZoomLevel={20}
                    initialRegion={{
                        latitude: parseFloat(19.076090),
                        longitude: parseFloat(72.877426),
                        latitudeDelta: 0.4,
                        longitudeDelta: 0.4,
                    }}
                >
                    <MapView.Marker
                        key={1}
                        coordinate={{
                            latitude: parseFloat(19.076090),
                            longitude: parseFloat(72.877426),
                        }}
                        image={images.position}
                    >

                    </MapView.Marker>
                </MapView>
                <Header />
                <ActionButton
                    buttonColor={colors.BLUE}
                    size={80}
                    renderIcon={active => active ? (<Image source={images.add} style={{ width: p(30), height: p(30) }} /> ) : (<Image source={images.add} style={{ width: p(27), height: p(27) }} />)}>
                    >
                    <ActionButton.Item size={62} buttonColor='#EEEEED' onPress={() => console.log("notes tapped!")}>
                        <Image source={images.layer} style={{ width: p(30), height: p(30) }} />
                    </ActionButton.Item>
                    <ActionButton.Item size={62} buttonColor='#EEEEED' onPress={() => { }}>
                        <Image source={images.direction} style={{ width: p(19), height: p(50) }} />
                    </ActionButton.Item>
                    <ActionButton.Item size={62} buttonColor='#EEEEED' onPress={() => { }}>
                        <Image source={images.locate} style={{ width: p(32), height: p(32) }} />
                    </ActionButton.Item>
                    <ActionButton.Item size={62} buttonColor={colors.SKY} onPress={() => { }}>
                        <Image source={images.lotes} style={{ width: p(35), height: p(35) }} />
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});