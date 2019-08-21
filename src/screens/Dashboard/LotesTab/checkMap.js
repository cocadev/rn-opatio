import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE, Callout, } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons'
import { p } from '../../../common/normalize';

var { width, height } = Dimensions.get('window')

export default class CheckMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        longitude: -0.1277583,
        latitude: 51.5073509,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      persons: [],
      error: '',
      loading: false

    };
    this.goToMap = this.goToMap.bind(this)
  }

  goToMap(lat, lng) {
    this.setState({
      initialPosition: {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
    })
  }

  onMapPress(e) {
    this.setState({
      initialPosition: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
    })
  }

  render() {

    const { initialPosition } = this.state

    return (
      <View style={styles.container}>

        <MapView
          provider="google"
          mapType={"satellite"}
          style={styles.mapcontainer}
          ref={ref => { this.map = ref; }}
          showsCompass={false}
          zoomEnabled={true}
          region={initialPosition}
          onPress={(e) => this.onMapPress(e)}
        >

          {initialPosition.latitude && initialPosition.longitude &&
            <MapView.Marker
              coordinate={{ "latitude": initialPosition.latitude, "longitude": initialPosition.longitude }}
            >
              <Image source={require('../../../../assets/images/maker-flag.png')} style={{ width: p(24), height: p(24) }} />

            </MapView.Marker>}

        </MapView>

        <Callout style={{ top: p(20), left: p(12), alignSelf: 'flex-end' }}>
          <TouchableOpacity style={{ elevation: 5, padding: p(9), backgroundColor: '#fff', borderRadius: 5 }} onPress={() => Actions.pop()}>
            <MaterialIcons name="arrow-back" color={'grey'} size={p(13)} />
          </TouchableOpacity>
        </Callout>

        <Callout style={{ bottom: p(20), alignSelf: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={() => this.uploadLocation()}>
            <Text style={{ color: '#fff', fontSize: p(12) }}>Select this Location</Text>
          </TouchableOpacity>
        </Callout>

      </View>
    );
  }

  uploadLocation = () => {
    if (this.props.update) {
      this.props.update(this.state.initialPosition.latitude.toFixed(2), this.state.initialPosition.longitude.toFixed(2))
      Actions.pop();
    }
  }

}

const styles = StyleSheet.create({
  btn: {
    fontSize: p(17),
    width: p(130),
    height: p(30),
    backgroundColor: '#ff5a5f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: p(6)
  },
  btnText: {
    fontSize: p(17),
    color: '#fff'
  },

  // on the style sheet
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    width: "80%",
    marginTop: "10%",
    marginLeft: "15%"

  },

  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: p(2)
  },
  mapcontainer: {
    width: width,
    height: height,
  },

})