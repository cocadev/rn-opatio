import React, { PureComponent } from 'react'
import SignIn from './screens/Login/signIn'
import SignUp from './screens/Login/signup'
import Forgot from './screens/Login/forgot'

import { KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { Scene, Router, Drawer } from 'react-native-router-flux'
import { Font } from 'expo'

import SideMenu from './SideMenu';
import Wall from './screens/Dashboard/wall';
import Intro from './screens/Login/intro';
import Google from './screens/Login/google';

import WallDetail from './screens/Dashboard/wallDetail';
import Profile from './screens/Dashboard/Profile';
import Notification from './screens/Dashboard/Notification';
import Inbox from './screens/Dashboard/Inbox';
import Payment from './screens/Dashboard/payment';
import Invite from './screens/Dashboard/Invite';
import Promotion from './screens/Dashboard/promotion';
import OrderSummary from './screens/Dashboard/orderSummary';
import OrderDetail from './screens/Dashboard/orderDetail';
import OrderStatus from './screens/Dashboard/orderStatus';
import OrderList from './screens/Dashboard/orderList';
import OrderStart from './screens/Dashboard/orderStart';
import MyTabNavigator from './screens/MyTabnavigator';
import Legal from './screens/Dashboard/Legal';
import OrderReview from './screens/Dashboard/orderReview';
import Favourite from './screens/Dashboard/Favourite';
import ServiceProvider from './screens/Dashboard/ServiceProvider';
import PrivateChat from './screens/Dashboard/privateChat';
import Verify from './screens/Dashboard/verify';
import addressFilter from './screens/Dashboard/addressFilter';



const width = Dimensions.get('window').width

export default class App extends PureComponent {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      // 'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      // 'Montserrat-BlackItalic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
      // 'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      // 'Montserrat-BoldItalic': require('../assets/fonts/Montserrat-BoldItalic.ttf'),
      // 'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
      // 'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
      // 'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
      // 'Montserrat-ExtraLightItalic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
      // 'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      // 'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      // 'Montserrat-LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
      // 'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      // 'Montserrat-MediumItalic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
      // 'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      // 'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      // 'Montserrat-SemiBoldItalic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
      // 'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      // 'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
      // 'Montserrat-ThinItalic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

      // 'ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      // 'material-community': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'entypo': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      // 'FontAwesome': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      // 'material': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      // 'simple-line-icons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'MaterialIcons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

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
              <Scene key="intro" component={Intro} initial={true} hideNavBar />
              <Scene key="signin" component={SignIn} hideNavBar initial={true} />
              <Scene key="signup" component={SignUp} hideNavBar initial={false} />
              <Scene key="forgot" component={Forgot} initial={false} hideNavBar />
              <Scene key="google" component={Google} initial={false} hideNavBar />

              <Drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={width / 1.2}
                drawerPosition="left"
              >

                <Scene key="wall" component={MyTabNavigator} hideNavBar />
                <Scene key="profile" component={Profile} initial={false} hideNavBar />
                <Scene key="notification" component={Notification} initial={false} hideNavBar />
                <Scene key="inbox" component={Inbox} initial={false} hideNavBar />

              </Drawer>

              <Scene key="walldetail" component={WallDetail} initial={false} hideNavBar />
              <Scene key="orderSummary" component={OrderSummary} initial={false} hideNavBar />
              <Scene key="payment" component={Payment} initial={false} hideNavBar />
              <Scene key="verify" component={Verify} initial={false} hideNavBar />
              <Scene key="orderStatus" component={OrderStatus} initial={false} hideNavBar />
              <Scene key="invite" component={Invite} initial={false} hideNavBar />
              <Scene key="promotion" component={Promotion} initial={false} hideNavBar />
              <Scene key="legal" component={Legal} initial={false} hideNavBar />
              <Scene key="serviceprovider" component={ServiceProvider} initial={false} hideNavBar />
              <Scene key="orderlist" component={OrderList} initial={false} hideNavBar />
              <Scene key="privateChat" component={PrivateChat} initial={false} hideNavBar />
              <Scene key="orderDetail" component={OrderDetail} initial={false} hideNavBar />
              <Scene key="orderstart" component={OrderStart} initial={false} hideNavBar />
              <Scene key="orderreview" component={OrderReview} initial={false} hideNavBar />
              <Scene key="addressFilter" component={addressFilter} initial={false} hideNavBar />

            </Scene>
          </Router>
          : null}
      </KeyboardAvoidingView>
    );
  }
}
