import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Header2 extends React.Component {

  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={images.back_black} style={{ width: 20, height: 18 }} />
        </TouchableOpacity>

        <View style={{ marginRight: p(15)}}>
          <Text style={styles.text1}>Lote 21</Text>
          <Text style={styles.text2}>100 ha</Text>
        </View>

        <View style={styles.vertical}></View>

        <Text style={styles.head}>{'La Morocha'}</Text>     
        <Image source={images.dots} style={{ width: p(7), height: p(23), marginLeft: p(14) }} />
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: p(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: "row",
    paddingHorizontal: p(20),
    backgroundColor: colors.WHITE,
  },
  head: {
    fontSize: p(16),
    marginLeft: p(14),
    color: colors.TEXT,
    textAlign: 'center'
  },
  vertical: {
    backgroundColor: colors.TEXT,
    width: p(3),
    height: p(32)
  },
  text1: {
    fontSize: p(20),
    fontWeight: '700',
    color: colors.TEXT,
    textAlign: 'center'
  },
  text2: {
    fontSize: p(16),
    fontWeight: '700',
    marginHorizontal: p(12),
    color: colors.TEXT,
    textAlign: 'center'
  },

});
