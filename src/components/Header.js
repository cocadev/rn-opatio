import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';
import Popover, { Rect, Size } from 'react-native-popover-view';
import { colors } from '../common/colors'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isVisible1: false,
      isVisible2: false,
      isVisible3: false
    }
  }

  showPopover1() {
    this.setState({ isVisible1: true });
  }

  closePopover1() {
    this.setState({ isVisible1: false });
  }

  showPopover2() {
    this.setState({ isVisible2: true });
  }

  closePopover2() {
    this.setState({ isVisible2: false });
  }

  showPopover3() {
    this.setState({ isVisible3: true });
  }

  closePopover3() {
    this.setState({ isVisible3: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.head}>Rythand</Text>
          <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => Actions.drawerOpen()}>
            <Image source={images.icon_menu} style={{ width: 20, height: 18 }} />
          </TouchableOpacity>

          {this.props.search}
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    paddingTop: 24,
    width: '100%',
    flexDirection: "row",
    backgroundColor: '#111',

  },
  head: {
    fontSize: 16,
    color: colors.GREEN,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
  },
  view: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },

});
