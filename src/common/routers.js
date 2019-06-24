import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Scene, Router, Drawer, Stack } from 'react-native-router-flux'

import SideMenu from '../screens/SideMenu';
import Test from '../screens/Map/Test/test';

import SignIn from '../screens/Login/signIn'
import SignUp from '../screens/Login/signup'
import Forgot from '../screens/Login/forgot'

import Intro from '../screens/Login/intro';
import Inbox from '../screens/Dashboard/index';
import Lotes from '../screens/Dashboard/Lotes';
import Overlays from '../screens/Map/ZIndexMarkers';
import LoteSelection from '../screens/Dashboard/Loteselection';
import LotesTab from '../screens/Dashboard/LotesTab';
import LoteDetail from '../screens/Dashboard/LoteDetail';
import TareasDetail from '../screens/Dashboard/LotesTareasDetail';
import TareasEdit from '../screens/Dashboard/LotesTareasEdit';
import Cultivos from '../screens/Dashboard/LotesTab/cultivos';
import CultivosDetail from '../screens/Dashboard/LotescultivosDetail';
import LotesEdit from '../screens/Dashboard/LotesEdit';

import Maquinarias from '../screens/Dashboard/Maquinarias';
import MaquinariasTab from '../screens/Dashboard/MaquinariasTab';

import Callouts from '../screens/Map/Callouts';
import LoteCreateDetail from '../screens/Dashboard/LotesCreateDetail';
import MachineNewContractor from '../screens/Dashboard/MachineNewContractor';
import MachineTrackDetail from '../screens/Dashboard/MachineTrackDetail';
import MachineSettings from '../screens/Dashboard/MachineSettings';
import MachineryAlertsCreateEdit from '../screens/Dashboard/MaquinariasTab/alertCreateEdit';
import MachineNew from '../screens/Dashboard/MachineNew';
import MachineSpeedAlarm from '../screens/Dashboard/MachineSpeedAlarm';
import MaquinariasSwitch from '../screens/Dashboard/MaquinariasSwitch';
import MachinesContractorTab from '../screens/Dashboard/MachinesContractorTab';

const width = Dimensions.get('window').width

export const AuthPage = props => (
  <Router>
    <Stack key='root'>
      <Scene key="intro" component={Intro} initial={false} hideNavBar />
      <Scene key="signin" component={SignIn} initial={false} hideNavBar />
      <Scene key="signup" component={SignUp} initial={false} hideNavBar />
      <Scene key="forgot" component={Forgot} initial={false} hideNavBar />
    </Stack>
  </Router>
)

export const MainPage = props => (
  <Router>
    <Stack key='root'>

      <Drawer
        hideNavBar
        key="drawerMenu"
        initial={false}
        contentComponent={SideMenu}
        drawerWidth={width / 1.4}
        drawerPosition="left"
      >
        <Scene key="inbox" component={Inbox} initial={false} hideNavBar />

      </Drawer>

      <Scene key="lotes" component={Lotes} initial={false} hideNavBar />
      <Scene key="loteselection" component={LoteSelection} initial={false} hideNavBar />
      <Scene key="lotetab" component={LotesTab} initial={false} hideNavBar />
      <Scene key="lotedetail" component={LoteDetail} initial={false} hideNavBar />
      <Scene key="lotesedit" component={LotesEdit} initial={false} hideNavBar />
      <Scene key="lotecultivosdetail" component={CultivosDetail} initial={false} hideNavBar />
      <Scene key="lotecreatedetail" component={LoteCreateDetail} initial={false} hideNavBar />

      <Scene key="tareasdetail" component={TareasDetail} initial={false} hideNavBar />
      <Scene key="tareasedit" component={TareasEdit} initial={false} hideNavBar />
      <Scene key="cultivosDetail" component={CultivosDetail} initial={false} hideNavBar />

      <Scene key="maquinarias" component={Maquinarias} initial={false} hideNavBar />
      <Scene key="maquinariastab" component={MaquinariasTab} initial={false} hideNavBar />
      <Scene key="machinenewcontractor" component={MachineNewContractor} initial={false} hideNavBar />
      <Scene key="machinetrackdetail" component={MachineTrackDetail} initial={false} hideNavBar />
      <Scene key="machinesettings" component={MachineSettings} initial={false} hideNavBar />
      <Scene key="MachineryAlertsCreateEdit" component={MachineryAlertsCreateEdit} initial={false} hideNavBar />
      <Scene key="MachineNew" component={MachineNew} initial={false} hideNavBar />
      <Scene key="MachineSpeedAlarm" component={MachineSpeedAlarm} initial={false} hideNavBar />
      <Scene key="MaquinariasSwitch" component={MaquinariasSwitch} initial={false} hideNavBar />
      <Scene key="MachinesContractorTab" component={MachinesContractorTab} initial={false} hideNavBar />

      <Scene key="test" component={Callouts} initial={false} hideNavBar />

    </Stack>
  </Router>
)