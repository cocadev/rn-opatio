import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import MapView, { Callout, Marker, Polygon } from 'expo';

const { width, height } = Dimensions.get('window');

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      region: {
        latitude: 24.889831,
        longitude: 67.0672087,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5 * (width / height),
      },
      polygons: [
        {
          coordinates: [
            { latitude: 24.80855120296181, longitude: 67.03557014465332 },
            { latitude: 24.805493205908192, longitude: 67.04031229019165 },
            { latitude: 24.802298784481714, longitude: 67.03735113143921 },
            { latitude: 24.80459721795997, longitude: 67.03323125839233 },
          ],
          open: false,
        },
        {
          coordinates: [
            { latitude: 24.80642814294996, longitude: 67.04509735107422 },
            { latitude: 24.80284417933238, longitude: 67.04968929290771 },
            { latitude: 24.800136659859945, longitude: 67.04707145690918 },
            { latitude: 24.803759658152476, longitude: 67.0425009727478 },
          ],
          open: false,
        },
        {
          coordinates: [
            { latitude: 24.800837893597965, longitude: 67.04607367515564 },
            { latitude: 24.79905558341104, longitude: 67.04832673072815 },
            { latitude: 24.79590969472415, longitude: 67.04537630081177 },
            { latitude: 24.797769966717116, longitude: 67.04296231269836 },
          ],
          open: false,
        },
      ],
    };
  }

  toggle(polygon) {
    console.log('onPress', polygon.open);

    if (polygon.open) {
      polygon.marker.hideCallout();
    } else {
      polygon.marker.showCallout();
    }

    polygon.open = !polygon.open;
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={this.state.region}>
          {this.state.polygons.map((polygon, index) => (
            <View key={index}>
              <Polygon
                coordinates={polygon.coordinates}
                onPress={() => this.toggle(polygon)}
              />
              <Marker
                ref={ref => polygon.marker = ref}
                coordinate={polygon.coordinates[0]}>
                <Callout>
                  <Text>Hello!</Text>
                </Callout>
              </Marker>
            </View>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'stretch',
    flex: 1,
  },
  map: {
    flex: 1,
  },
};
