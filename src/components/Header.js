import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Header extends React.Component {

  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={images.back} style={{ width: 20, height: 18 }} />
        </TouchableOpacity>
        <Image source={images.location} style={{ width: 26, height: 22, marginLeft: p(14) }} />
        <Text style={styles.head}>{title}</Text>          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: p(60),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flexDirection: "row",
    paddingHorizontal: p(20),
    backgroundColor: colors.BLUE,
  },
  head: {
    fontSize: p(24),
    marginLeft: p(14),
    color: colors.WHITE,
    textAlign: 'center'
  },

});
