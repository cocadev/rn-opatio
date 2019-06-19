import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';
import Geojson from 'react-native-geojson';
// import alcatraz from '../../../common/sample.json'

const alcatraz = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[-64.11647754059996, -32.57341224531695], [-64.1164775352445, -32.57341214278021], [-64.11647752495838, -32.57341203328897], [-64.11647747019703, -32.573411627694995], [-64.1164774322193, -32.573411425179096]],
      }
    }
  ]
};

export default class Test extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
        >
            <Geojson geojson={alcatraz} />

        </MapView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});