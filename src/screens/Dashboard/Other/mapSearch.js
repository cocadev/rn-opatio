import React from "react"
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { images } from "../../../common/images";
import { Actions } from "react-native-router-flux";
import Header from '../../../components/Header';
import { colors } from "../../../common/colors";

const width = Dimensions.get('window').width

export default class MapSearch extends React.Component {

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

    console.log(' * - 1*',  this.props.user)

    return (
      <View style={styles.container}>
        <Header title={'Map Search'} color={colors.BLUE} icon={images.location} />

        <View style={{marginHorizontal:20, flex:1, width:'86%'}}>
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            fetchDetails={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              if(this.props.update){
                this.props.update(details.geometry.location, details.name)
                Actions.pop();
              }
            }}

            query={{
              key: 'AIzaSyB1I2oX-x9KEe-qqmW5ZmiB5WzgOuqQc4c',
              language: 'en', // language of the results
              types: 'address', // default: 'geocode'
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

      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 36,
    paddingVertical: 5,
    width: '100%',
  }
})