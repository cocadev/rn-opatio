import React from "react"
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native"
import { MapView } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { images } from "../../../common/images";

const width = Dimensions.get('window').width

export default class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      location: { lat: 19.076090, lng: 72.877426, },
    }
  }

  render() {

    // console.log(' * - 1*', this.props.user)
    console.log(' * - 1*',  this.props.user)

    return (
      <View style={styles.container}>

        <Text style={styles.header}>{'We need your location to update you on \nthe latest blood groups needed'}</Text>

        <View style={{marginHorizontal:20, flex:1, width:'86%'}}>
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            fetchDetails={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              this.setState({ location: details.geometry.location })
            }}

            query={{
              key: 'AIzaSyB1I2oX-x9KEe-qqmW5ZmiB5WzgOuqQc4c',
              language: 'en', // language of the results
              // types: '(cities)', // default: 'geocode'
            }}

            styles={{
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              textInput: {
                width: '100%',
              },
              textInputContainer: {
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd'
              },
            }}
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.


            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}


            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

            predefinedPlacesAlwaysVisible={true}
          />
        </View>

        <View style={{ height: width / 1.5, width: width - 50, paddingTop:12 }}>

          <MapView
            style={{ flex: 1 }}
            onRegionChangeComplete={this.reloadEntities}
            initialRegion={{
              latitude: this.state.location.lat,
              longitude: this.state.location.lng,
              latitudeDelta: 0.4,
              longitudeDelta: 0.4,
            }}
            region={{
              latitude: this.state.location.lat,
              longitude: this.state.location.lng,
              latitudeDelta: 0.4,
              longitudeDelta: 0.4,
            }}
            showsUserLocation={true}
            showsCompass={false}
            loadingEnabled={true}
          >

            <MapView.Marker
              key={1}
              coordinate={{
                latitude: parseFloat(this.state.location.lat),
                longitude: parseFloat(this.state.location.lng),
              }}
              image={images.locationPink}
            >

            </MapView.Marker>

          </MapView>
        </View>

        <View style={{ width: '100%' }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Set Home Location</Text>
          </TouchableOpacity>
        </View>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: width / 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 18,
    marginVertical: 15,
  },
  image: {
    marginTop: 15,
    width: 60,
    height: 60,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 30
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 30,
    margin: width / 10,
    padding: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 16,
    color: 'blue'
  },
  input: {
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 36,
    paddingVertical: 5,
    width: '100%',
  }
})