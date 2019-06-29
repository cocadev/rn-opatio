import React, { PureComponent } from 'react'
import { Image, StatusBar } from 'react-native';
import { images } from './common/images';
import { KeyboardAvoidingView, Platform, Dimensions, AsyncStorage } from 'react-native'
import { Font } from 'expo'
import Cache from "./common/cache"
import * as ROUTER from './common/routers';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class App extends PureComponent {

  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      authed: 0
    };
  }

  async componentDidMount() {
    StatusBar.setHidden(true, 'none');
    await this._loadAssets();
    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      if (token !== null) {
        Cache.ACCESS_TOKEN = token;
        this.setState({ authed: 2 })
      } else {
        this.setState({ authed: 1 })
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

  async loggedIn(res) {
    Cache.ACCESS_TOKEN = res.success.access_token;
    Cache.COMPANY_ID = res.success.company_id;
    Cache.EMAIL = res.success.email;
    Cache.ID = res.success.id;
    try {
      await AsyncStorage.setItem('TOKEN', res.success.access_token);
      await AsyncStorage.setItem('COMPANY_ID', res.success.company_id);
      await AsyncStorage.setItem('EMAIL', res.success.email);
      await AsyncStorage.setItem('ID', res.success.id);
    } catch (error) {
      console.log('** **', error)
    }
    this.setState({ authed: 2 })
  }

  async logOut() {
    try {
      await AsyncStorage.clear();
    } catch (error) {

    }
    this.setState({ authed: 1 })
  }

  render() {

    const { fontLoaded, authed } = this.state

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        {fontLoaded == true && authed > 0 ? (
          authed == 2 ? <ROUTER.MainPage signOut={() => this.logOut()} /> : <ROUTER.AuthPage logIn={(res) => this.loggedIn(res)}/>
        )
          : <Image source={images.splash} style={{ width, height }} />}
      </KeyboardAvoidingView>
    );
  }
}
