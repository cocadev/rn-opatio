import React from 'react'
import { Dimensions } from 'react-native'
import { Scene, Router, Drawer, Stack } from 'react-native-router-flux'
import SideMenu from '../screens/SideMenu'
import SignIn from '../screens/Login/signIn'
import SignUp from '../screens/Login/signup'
import Forgot from '../screens/Login/forgot'
import Intro from '../screens/Login/intro'
import Inbox from '../screens/Dashboard/index'
import Lotes from '../screens/Dashboard/Lotes'
import LoteSelection from '../screens/Dashboard/Loteselection'
import LotesTab from '../screens/Dashboard/LotesTab'
import LoteDetail from '../screens/Dashboard/LoteDetail'
import TareasDetail from '../screens/Dashboard/LotesTareasDetail'
import TareasEdit from '../screens/Dashboard/LotesTareasEdit'
import CultivosDetail from '../screens/Dashboard/LotescultivosDetail'
import LotesEdit from '../screens/Dashboard/LotesEdit'
import Maquinarias from '../screens/Dashboard/Maquinarias'
import MaquinariasTab from '../screens/Dashboard/MaquinariasTab'
import LoteCreateDetail from '../screens/Dashboard/LotesCreateDetail'
import MachineNewContractor from '../screens/Dashboard/MachineNewContractor'
import MachineTrackDetail from '../screens/Dashboard/MachineTrackDetail'
import MachineSettings from '../screens/Dashboard/MachineSettings'
import MachineryAlertsCreateEdit from '../screens/Dashboard/MaquinariasTab/alertCreateEdit'
import MachineNew from '../screens/Dashboard/MachineNew'
import MachineSpeedAlarm from '../screens/Dashboard/MachineSpeedAlarm'
import MaquinariasSwitch from '../screens/Dashboard/MaquinariasSwitch'
import MachinesContractorTab from '../screens/Dashboard/MachinesContractorTab'
import ToDoList from '../screens/ToDoList'
import MapSearch from '../screens/Dashboard/Other/mapSearch'
import Test from '../screens/Map/AnimatedViews'
import DropDownList from '../screens/Dashboard/Other/dropDownList'

const width = Dimensions.get('window').width
const AUTH = [
  // { key: 'mapSearch',                 component: MapSearch},

  // { key: 'test',  component: Test},
  { key: 'intro',  component: Intro},
  { key: 'signup', component: SignUp},
  { key: 'forgot', component: Forgot},

]

const MAIN = [
  { key: 'lotes',                     component: Lotes},
  { key: 'loteselection',             component: LoteSelection},
  { key: 'lotetab',                   component: LotesTab},
  { key: 'lotedetail',                component: LoteDetail},
  { key: 'lotesedit',                 component: LotesEdit},
  { key: 'lotedetail',                component: LoteDetail},
  { key: 'lotecultivosdetail',        component: CultivosDetail},
  { key: 'lotecreatedetail',          component: LoteCreateDetail},
  { key: 'tareasdetail',              component: TareasDetail},
  { key: 'tareasedit',                component: TareasEdit},
  { key: 'cultivosDetail',            component: CultivosDetail},
  { key: 'maquinarias',               component: Maquinarias},
  { key: 'maquinariastab',            component: MaquinariasTab},
  { key: 'machinenewcontractor',      component: MachineNewContractor},
  { key: 'machinetrackdetail',        component: MachineTrackDetail},
  { key: 'machinesettings',           component: MachineSettings},
  { key: 'MachineryAlertsCreateEdit', component: MachineryAlertsCreateEdit},
  { key: 'MachineNew',                component: MachineNew},
  { key: 'MachineSpeedAlarm',         component: MachineSpeedAlarm},
  { key: 'MaquinariasSwitch',         component: MaquinariasSwitch},
  { key: 'MachinesContractorTab',     component: MachinesContractorTab},
  { key: 'test',                      component: Test},
  { key: 'mapSearch',                 component: MapSearch},
  { key: 'dropdown',                  component: DropDownList},
]

export const AuthPage = props => (
  <Router>
    <Stack key='root'>
     { AUTH.map(a => (<Scene key={a.key} component={a.component} hideNavBar />))}
     <Scene key="signin" component={SignIn} update={(res)=>props.logIn(res)} hideNavBar />
    </Stack>
  </Router>
)

export const MainPage = props => {

  return(
  <Router>
    <Stack key='root'>
      <Drawer
        hideNavBar
        key="drawerMenu"
        contentComponent={() => (<SideMenu update={()=>props.signOut()}/>)}
        drawerWidth={width / 1.4}
        drawerPosition="left"
      >
        <Scene key="inbox" component={Inbox} initial={false} hideNavBar />
      </Drawer>
      { MAIN.map(a => (
        <Scene 
          key={a.key} 
          component={a.component} 
          initial={a.key == 'mapSearch' ? false : false} 
          hideNavBar 
        />))}
    </Stack>
  </Router>)
}