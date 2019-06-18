import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from "expo";
import ClusterMarker from "./ClusterMarker";
import { getCluster } from "./MapUtils";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFill
  }
});

const INITIAL_POSITION = {
  latitude: 41.924447,
  longitude: -87.687339,
  latitudeDelta: 1,
  longitudeDelta: 1
}

const COORDS = [
  { lat: 42, lon: -87 },
  { lat: 42.1, lon: -87 },
  { lat: 42.2, lon: -87 },
  { lat: 42.3, lon: -87 },
  { lat: 42.4, lon: -87 }
];

export default class App extends React.Component {
  state = {
    region: INITIAL_POSITION
  };

  renderMarker = (marker, index) => {
    const key = index + marker.geometry.coordinates[0];

    // If a cluster
    if (marker.properties) {
      return (
        <MapView.Marker
          key={key}
          coordinate={{
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0]
          }}
        >
          <ClusterMarker count={marker.properties.point_count} />
        </MapView.Marker>
      );
    }
    // If a single marker
    return (
      <MapView.Marker
        key={key}
        coordinate={{
          latitude: marker.geometry.coordinates[1],
          longitude: marker.geometry.coordinates[0]
        }}
      />
    );
  };

  render() {
    const { region } = this.state;

    const allCoords = COORDS.map(c => ({
      geometry: {
        coordinates: [c.lon, c.lat]
      }
    }));

    const cluster = getCluster(allCoords, region);

    return (
      <View style={Style.container}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={Style.map}
          loadingIndicatorColor={"#ffbbbb"}
          loadingBackgroundColor={"#ffbbbb"}
          region={region}
          onRegionChangeComplete={region => this.setState({ region })}
        >
          {cluster.markers.map((marker, index) => this.renderMarker(marker, index))}
        </MapView>
      </View>
    );
  }
}
