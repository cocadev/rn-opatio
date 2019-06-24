import React, { PureComponent } from 'react'
import { Image, StatusBar } from 'react-native';
import { images } from './common/images';
import { KeyboardAvoidingView, Platform, Dimensions, AsyncStorage } from 'react-native'
import { Scene, Router, Drawer, Stack } from 'react-native-router-flux'
import { Font } from 'expo'
import Cache from "./common/cache"
import * as ROUTER from './common/routers';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class App extends PureComponent {

  state = {
    fontLoaded: false,
    authed: 0
  };

  async componentDidMount() {
    StatusBar.setHidden(true, 'none');
    await this._loadAssets();
    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      if (token !== null) {
        console.log('token', token);
        this.setState({ authed: 2 })
      } else {
        this.setState({ authed: 1 })
        console.log('token no', token);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  async _loadAssets() {
    await Font.loadAsync({
      // 'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'entypo': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'MaterialIcons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'material': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'Ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'material-community': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

    });
    console.log('fonts loaded!');
    this.setState({ fontLoaded: true });
  }

  render() {

    const { fontLoaded, authed } = this.state

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        { fontLoaded == true && authed > 0 ? (
          authed == 2 ? <ROUTER.MainPage /> : <ROUTER.AuthPage />
        )
          : <Image source={images.splash} style={{ width, height }} />}
      </KeyboardAvoidingView>
    );
  }
}
