import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { MapView, Marker, Animated } from 'expo';

import Icon from '@expo/vector-icons/MaterialIcons';

import MapButton from '../../components/MapButton'
import { images } from '../../common/images';
import Header from '../../components/Header';

export default class Lotes extends Component {

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

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.setState({ mapRegion: { latitude: region.latitude, longitude: region.longitude } })
            this.map.animateToRegion(region, 2000)
        },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
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
                <View style={styles.buttonContainer}>
                    <Header />
                    <MapButton iconName={'directions-car'} mode={'driving'} />
                    <MapButton iconName={'directions-bike'} mode={'bicycling'} />
                    <MapButton iconName={'directions-walk'} mode={'walking'} />
                    <MapButton iconName={'directions-transit'} mode={'transit'} />
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginVertical: 20,
        // backgroundColor: 'transparent',
    },
});
