import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../common/colors'
import { CUSTOM_STYLE } from '../../common/config'
import { images } from '../../common/images'
import { p } from '../../common/normalize'

import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class PolygonCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      editing: null,
    };
  }

  finish() {
    const { editing } = this.state;
    this.setState({
      editing: null,
    });
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

    const mapOptions = {
      scrollEnabled: true,
    };

    if (this.state.editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = e => this.onPress(e);
    }

    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          customMapStyle={CUSTOM_STYLE}
          style={styles.map}
          mapType={MapView.MAP_TYPES.HYBRID}
          initialRegion={this.state.region}
          onPress={e => this.onPress(e)}
          {...mapOptions}
        >
          {this.state.editing && <MapView.Polygon
            coordinates={this.state.editing.coordinates}
            strokeColor={colors.BLUE2}
            // fillColor="rgba(255,0,0,0.2)"
            strokeWidth={3}
          />}
          {this.state.editing && this.state.editing.coordinates.map((marker, key) => (
            <MapView.Marker
              key={key}
              coordinate={marker}
              // pinColor={colors.PURPLE}
            >
              <Image source={images.circleWhite} style={{ width: p(24), height: p(24) }} />
            </MapView.Marker>
          ))}
        </MapView>

        <View style={styles.buttonContainer}>
          {this.state.editing && (
            <TouchableOpacity
              onPress={() => this.finish()}
              style={[styles.bubble, styles.button]}
            >
              <Text>Finish</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => this.remove()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

PolygonCreator.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = PolygonCreator;
