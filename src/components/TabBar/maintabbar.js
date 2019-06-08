import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { SimpleLineIcons, MaterialCommunityIcons,FontAwesome, Ionicons, Entypo , MaterialIcons} from '@expo/vector-icons';
import { colors } from '../../common/colors'
import { images } from '../../common/images';
import GradientTab from '../GradientTab';

class MainTabBar extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    const { index, routes } = state;
    const active = routes[index].key;
    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback onPress={() => navigate('Tab1')}>
          <View style={active === 'Tab1' ? styles.active : styles.nonactive}>
            <GradientTab active={active === 'Tab1'} image={active === 'Tab1' ? images.tab_active_grid : images.tab_grid} title={'Explore'}/>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab2')}>

          <View style={active === 'Tab2' ? styles.active : styles.nonactive}>
             <GradientTab active={active === 'Tab2'} image={active === 'Tab2' ? images.tab_active_heart : images.tab_heart} title={'Favorite'} width_tab={17}/>
          </View>
            
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab3')}>
          <View style={active === 'Tab3' ? styles.active : styles.nonactive}>
            <GradientTab active={active === 'Tab3'} image={active === 'Tab3' ? images.tab_active_msg : images.tab_message} title={'Inbox'}/>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab4')}>
          <View style={active === 'Tab4' ? styles.active : styles.nonactive}>
             <GradientTab active={active === 'Tab4'} image={active === 'Tab4' ? images.tab_ring_3 : images.tab_ring_2} title={'Notifications'} width_tab={13}/>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab5')}>
          <View style={active === 'Tab5' ? styles.active : styles.nonactive}>
             <GradientTab active={active === 'Tab5'} image={active === 'Tab5' ? images.tab_user_2 : images.tab_user} title={'Inbox'}/>
          </View>
        </TouchableWithoutFeedback>
        

      </View>
    );
  }
}

MainTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainTabBar;
