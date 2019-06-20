import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../common/colors'
import { p } from '../common/normalize';
import { images } from '../common/images';
import { Actions } from 'react-native-router-flux';
import text from '../common/text';

export const BlueWhite = props => (
  <View style={styles.rectNgulo}>
    <Text style={text.t_12_700_ee}>{props.title}</Text>
  </View>
)

export const WhiteDark = props => (
  <TouchableOpacity style={styles.whiteBack}>
    <Text style={text.t_11_700_00}>{props.title}</Text>
  </TouchableOpacity>
)

export const AcceptCancel = props => (
  <View style={[styles.rectNgulo, { width: p(86)}]} >
    <Text style={text.t_12_700_ee}>{props.title}</Text>
  </View>
)


const styles = StyleSheet.create({
  rectNgulo: {
    width: p(142),
    height: p(30),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    borderRadius: 3,
    backgroundColor: '#2298d7',
  },
  whiteBack: {
    width: p(119),
    height: p(29),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    borderRadius: 3,
    backgroundColor: '#eeeeed',
  }
});
