import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Header extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={images.back} style={{ width: 20, height: 18 }} />
        </TouchableOpacity>
        <Text style={styles.head}>Rythand</Text>          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: p(60),
    marginTop: -24,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    flexDirection: "row",
    backgroundColor: '#111',
  },
  head: {
    fontSize: 16,
    color: colors.GREEN,
    textAlign: 'center'
  },

});
