import React from "react"
import { View } from "react-native"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Actions } from "react-native-router-flux"
import { colors } from "../../../common/colors"

import * as ICON from '../../../components/Icons'
import * as HEADER from '../../../components/Headers'

import Cstyles from '../../../common/c_style'

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
      <View style={Cstyles.container}>

        <HEADER.NormalIcon 
          title={'Map Search'} 
          back={colors.BLUE} 
          icon={<ICON.IconLocation />} 
        />

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