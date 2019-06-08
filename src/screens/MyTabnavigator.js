import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import MainTabBar from '../components/TabBar/maintabbar';
import Wall from './Dashboard/wall';
import Fav from './Dashboard/Favourite';
import Inbox from './Dashboard/Inbox';
import Profile from './Dashboard/Profile';
import Notification from './Dashboard/Notification';

const MyTabNavigator = createBottomTabNavigator(
    {
      Tab1: { screen: Wall },
      Tab2: { screen: Fav },
      Tab3: { screen: Inbox },
      Tab4: { screen: Notification },
      Tab5: { screen: Profile },
      
    },
    {
      initialRouteName: 'Tab1',
      tabBarComponent: MainTabBar,
      tabBarPosition: 'bottom',
    }
  );
  
  export default class Main extends React.Component {
    render() {
      return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View style={{ flex: 1 }}>
            <MyTabNavigator />
          </View>
        </View>
      );
    }
  }
