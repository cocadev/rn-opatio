import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { images } from '../common/images';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Header4 extends React.Component {

  render() {
    const { title, address, description } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Image source={images.back} style={{ width: 20, height: 18 }} />
        </TouchableOpacity>

        <View style={{ marginRight: p(15) }}>
          <Text style={styles.text1}>{title}</Text>
          <Text style={styles.text2}>{address}</Text>
        </View>

        <View style={styles.vertical}></View>

        <Text style={styles.head}>{'Contratista'}</Text>
        <Image source={images.dots_white} style={{ width: p(7), height: p(23), marginLeft: p(14) }} />

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
    paddingHorizontal: p(20),
    backgroundColor: colors.PURPLE2,
  },
  head: {
    fontSize: p(16),
    marginLeft: p(14),
    color: colors.WHITE,
    textAlign: 'center'
  },
  vertical: {
    backgroundColor: colors.GREY6,
    width: p(3),
    height: p(32)
  },
  text1: {
    fontSize: p(20),
    fontWeight: '700',
    color: colors.WHITE,
    textAlign: 'center'
  },
  text2: {
    fontSize: p(16),
    fontWeight: '700',
    marginHorizontal: p(12),
    color: colors.WHITE,
    textAlign: 'center'
  },
});
