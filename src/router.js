import React, { PureComponent } from 'react'
import { Image, StatusBar } from 'react-native';

import SignIn from './screens/Login/signIn'
import SignUp from './screens/Login/signup'
import Forgot from './screens/Login/forgot'

import { KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { Scene, Router, Drawer } from 'react-native-router-flux'
import { Font } from 'expo'

import SideMenu from './SideMenu';
import Intro from './screens/Login/intro';
import Inbox from './screens/Dashboard/Inbox';
import Lotes from './screens/Lotes/Lotes';

import { images } from './common/images';
import Test from './screens/Map/test';
import Overlays from './screens/Map/ZIndexMarkers';
import LoteSelection from './screens/Lotes/Loteselection';
import LotesTab from './screens/Lotes/LotesTab';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class App extends PureComponent {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    StatusBar.setHidden(true, 'none');
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      // 'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'entypo': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'MaterialIcons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'material': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'Ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

    });
    console.log('fonts loaded!');
    this.setState({ fontLoaded: true });
  }
  render() {

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        {this.state.fontLoaded == true ?

          <Router>
            <Scene>

              <Scene key="intro" component={Intro} initial={false} hideNavBar />
              <Scene key="signin" component={SignIn} hideNavBar initial={false} />
              <Scene key="signup" component={SignUp} hideNavBar initial={false} />
              <Scene key="forgot" component={Forgot} initial={false} hideNavBar />

              <Drawer
                hideNavBar
                key="drawerMenu"
                initial={true}
                contentComponent={SideMenu}
                drawerWidth={width / 1.4}
                drawerPosition="left"
              >
                <Scene key="inbox" component={Inbox} initial={false} hideNavBar />

              </Drawer>

              <Scene key="lotes" component={Lotes} initial={false} hideNavBar/>
              <Scene key="loteselection" component={LoteSelection} initial={false} hideNavBar/>
              <Scene key="lotetab" component={LotesTab} initial={true} hideNavBar/>

              <Scene key="test" component={Test} initial={false} hideNavBar/>

            </Scene>
          </Router>
          : <Image source={images.splash} style={{ width, height}}/>}
      </KeyboardAvoidingView>
    );
  }
}
