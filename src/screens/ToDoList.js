import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { Component } from 'react';
import { MapView } from 'expo'

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
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
  
  componentDidMount() {
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
      (error) => alert('Error: Are location services on?'),
      { enableHighAccuracy: true }
    );
    this.watchID = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const { lat, long } = coords
        this.setState({
          position: {
            lat,
            long
          }
        })
      });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    const { height: windowHeight } = Dimensions.get('window');
    const varTop = windowHeight - 125;
    const hitSlop = {
      top: 15,
      bottom: 15,
      left: 15,
      right: 15,
    }
    bbStyle = function (vheight) {
      return {
        position: 'absolute',
        top: vheight,
        left: 10,
        right: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
      }
    }
    return (
      <View style={styles.container}>
        <View style={bbStyle(varTop)}>
          <TouchableOpacity
            hitSlop={hitSlop}
            activeOpacity={0.7}
            style={styles.mapButton}
            onPress={() => this._findMe()}
          >
            <Text style={{ fontWeight: 'bold', color: 'black', }}>
              Find Me
              </Text>
          </TouchableOpacity>
        </View>
        <MapView
          style={styles.map}
          region={this.state.region}
          showsUserLocation={true}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  text: {
    color: 'white',
  },
  map: {
    flex: 1,
    zIndex: -1,
  },
  mapButton: {
    width: 75,
    height: 75,
    borderRadius: 85 / 2,
    backgroundColor: 'rgba(252, 253, 253, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.12,
    opacity: .6,
    zIndex: 10,
  }
})
