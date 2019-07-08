import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { images } from '../common/images';
import { p } from '../common/normalize';
import { MapView } from 'expo';
import Polygons from './Polygons';
import * as ICON from '../components/Icons';
import { Actions } from 'react-native-router-flux';
import { colors } from '../common/colors';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Buscar',
      latitude: 0,
      longitude: 0,
    }
  }

  _findMe() {
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

  viewMap = () => {
    Actions.mapSearch({
      update: (location, key) => {
        this.setState({
          region: {
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }, 
          text: key
        });
      }
    })
  }

  render() {
    const { polygons, region } = this.props;
    const height = this.props.height ? this.props.height : p(240)
    return (
      <View style={styles.container}>

        <MapView
          // ref={instance => this.map = instance}
          provider="google"
          style={{ ...styles.map, height }}
          showsCompass={true}
          initialRegion={region}
          region={this.state.region}
          showsMyLocationButton={true}
          showsUserLocation={true}
          // customMapStyle={CONFIG.CUSTOM_STYLE}
          cacheEnabled={true}
          loadingEnabled={true}
          loadingIndicatorColor="#111"
          loadingBackgroundColor="#eee"

        >
          { polygons && <Polygons coordinates={polygons} /> }
        </MapView>

        <TouchableOpacity
          onPress={this.viewMap}
          style={styles.searchView}>
          <Image source={images.blackSearch} style={styles.searchIcon} />
          <View style={styles.textinput}>
            <Text>{this.state.text}</Text>
          </View>
        </TouchableOpacity>

        <View style={{ position: 'absolute', right: 15, top: p(130) }}>
          <TouchableOpacity onPress={() => this.setState({ modal: true })}>
            <ICON.IconRoundLayer />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._findMe()}>
            <ICON.IconLocate1 />
          </TouchableOpacity>
        </View>

      </View>
    )
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
    height: p(240),
    marginBottom: 1,
    flex: 1
  },
  textinput: {
    width: p(260),
    height: p(44),
    justifyContent: 'center',
    paddingLeft: p(48),
    fontSize: p(16),
    borderColor: colors.GREY8,
    borderWidth: 1,
    borderRadius: p(25)
  },
  searchView: {
    position: 'absolute',
    left: p(60)
  },
  searchIcon: {
    top: p(32),
    left: p(22),
    width: p(20),
    height: p(19)
  }
});
