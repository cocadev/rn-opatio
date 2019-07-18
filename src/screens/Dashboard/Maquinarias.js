import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { CUSTOM_STYLE, REGION } from '../../common/config'
import { Actions } from 'react-native-router-flux'
import * as ICON from '../../components/Icons'
import * as HEADER from '../../components/Headers'
import MapView from 'react-native-maps'

export default class Maquinarias extends Component {

    constructor(){
        super();
        this.state={
            region: REGION,
        }
    }

    _findMe =()=> {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords
            this.setState({
              position: {
                latitude,
                longitude,
              },
              region: {
                latitude,
                longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.001,
              }
            })
          },
          (error) => alert(JSON.stringify(error)),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    render() {
        const { region } = this.state
        return (
            <View style={styles.container}>
                <MapView
                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    region={region}
                    cacheEnabled={true}
                    mapType={"satellite"}
                    initialRegion={REGION}
                    customMapStyle={CUSTOM_STYLE}
                >
                </MapView>

                <HEADER.NormalIcon title={'Maquinarias'} icon={<ICON.IconTrack />} back={colors.ORANGE} />

                <View style={{ position: 'absolute', right: 21, bottom: p(120) }}>
                    <TouchableOpacity>
                        <Image source={images.layer1} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._findMe}>
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
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});