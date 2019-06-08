import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Picker } from "react-native"
import { Google } from 'expo';
import { MapView } from 'expo';

const width = Dimensions.get('window').width

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      language: {latitude: 12.5937, longitude: 63.9629,}
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "933764359119-m9830q14acgumrvfjkh7uc4dn9v8qrf1.apps.googleusercontent.com",
        iosClientId: "603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>Google login for sumithariyani</Text>
          <TouchableOpacity style={{ marginVertical: 12 }}>
            <Image source={require('../../../assets/google.png')} style={{ width: width / 2, height: width / 10 }} />
          </TouchableOpacity>
    
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Java" value={{latitude: 10.5937, longitude: 68.9629,}} />
            <Picker.Item label="JavaScript" value={{latitude: 24.5937, longitude: 71.9629,}} />
          </Picker>
    
          <View style={{ height: width, width: width - 50 }}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: this.state.language.latitude,
                longitude: this.state.language.longitude,
                latitudeDelta: 0.422,
                longitudeDelta: 0.4421,
              }}
            >
    
              <MapView.Marker
                key={1}
                coordinate={{
                  latitude: parseFloat(this.state.language.latitude),
                  longitude: parseFloat(this.state.language.longitude),
                }}
                image={require('../../../assets/ninja.png')}
              >
    
              </MapView.Marker>
    
            </MapView>
          </View>
    
        </View>
          )}
      </View>
    )
  }
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />

    </View>
  )
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
  }
})