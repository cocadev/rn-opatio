import React, { PureComponent } from 'react'
import { Image, StatusBar, View } from 'react-native'
import { images } from './common/images'
import { KeyboardAvoidingView, Platform, Dimensions, AsyncStorage } from 'react-native'
import * as Font from 'expo-font'
import * as ROUTER from './common/routers'
import Cache from "./common/cache"
import FlashMessage from "react-native-flash-message";

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

    console.log('Cache.COMPANY_ID', Cache.COMPANY_ID)

    StatusBar.setHidden(true, 'none');
    await this._loadAssets();
    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      const firstName = await AsyncStorage.getItem('FirstName');
      const lastName = await AsyncStorage.getItem('LastName');

      if (token !== null) {
        Cache.ACCESS_TOKEN = token;
        Cache.FIRST_NAME = firstName;
        Cache.LAST_NAME = lastName;

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
      await AsyncStorage.setItem('FirstName', res.success.first_name);
      await AsyncStorage.setItem('LastName', res.success.last_name);

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
        enabled
        style={{ flex: 1 }}>
        {fontLoaded == true && authed > 0 ? (
          authed == 2 ? <ROUTER.MainPage signOut={() => this.logOut()} /> : <ROUTER.AuthPage logIn={(res) => this.loggedIn(res)}/>
        )
          : <Image source={images.splash} style={{ width, height }} />}
          <FlashMessage position="bottom" />
      </KeyboardAvoidingView>
    );
  }
}
