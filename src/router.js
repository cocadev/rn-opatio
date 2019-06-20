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
import Inbox from './screens/Dashboard/index';
import Lotes from './screens/Dashboard/Lotes';

import { images } from './common/images';
import Test from './screens/Map/Test/index';
import Overlays from './screens/Map/ZIndexMarkers';
import LoteSelection from './screens/Dashboard/Loteselection';
import LotesTab from './screens/Dashboard/LotesTab';
import LoteDetail from './screens/Dashboard/LoteDetail';
import TareasDetail from './screens/Dashboard/LotesTareasDetail';
import TareasEdit from './screens/Dashboard/LotesTareasEdit';
import Cultivos from './screens/Dashboard/LotesTab/cultivos';
import CultivosDetail from './screens/Dashboard/LotescultivosDetail';
import LotesEdit from './screens/Dashboard/LotesEdit';

import Maquinarias from './screens/Dashboard/Maquinarias';
import MaquinariasTab from './screens/Dashboard/MaquinariasTab';

import PolygonCreator from './screens/Map/PolygonCreator';
import LoteCreateDetail from './screens/Dashboard/LotesCreateDetail';
import MachineNewContractor from './screens/Dashboard/MachineNewContractor';
import MachineTrackDetail from './screens/Dashboard/MachineTrackDetail';
import MachineSettings from './screens/Dashboard/MachineSettings';
import MachineryAlertsCreateEdit from './screens/Dashboard/MaquinariasTab/alertCreateEdit';

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
      'material-community': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

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

              <Scene key="lotes" component={Lotes} initial={true} hideNavBar/>
              <Scene key="loteselection" component={LoteSelection} initial={false} hideNavBar/>
              <Scene key="lotetab" component={LotesTab} initial={false} hideNavBar/>
              <Scene key="lotedetail" component={LoteDetail} initial={false} hideNavBar/>
              <Scene key="lotesedit" component={LotesEdit} initial={false} hideNavBar/>
              <Scene key="lotecultivosdetail" component={CultivosDetail} initial={false} hideNavBar/>
              <Scene key="lotecreatedetail" component={LoteCreateDetail} initial={false} hideNavBar/>

              <Scene key="tareasdetail" component={TareasDetail} initial={false} hideNavBar/>
              <Scene key="tareasedit" component={TareasEdit} initial={false} hideNavBar/>
              <Scene key="cultivosDetail" component={CultivosDetail} initial={false} hideNavBar/>

              <Scene key="maquinarias" component={Maquinarias} initial={false} hideNavBar/>
              <Scene key="maquinariastab" component={MaquinariasTab} initial={false} hideNavBar/>
              <Scene key="machinenewcontractor" component={MachineNewContractor} initial={false} hideNavBar/>
              <Scene key="machinetrackdetail" component={MachineTrackDetail} initial={true} hideNavBar/>
              <Scene key="machinesettings" component={MachineSettings} initial={false} hideNavBar/>
              <Scene key="MachineryAlertsCreateEdit" component={MachineryAlertsCreateEdit} initial={false} hideNavBar/>



              <Scene key="test" component={Test} initial={false} hideNavBar/>

            </Scene>
          </Router>
          : <Image source={images.splash} style={{ width, height}}/>}
      </KeyboardAvoidingView>
    );
  }
}
