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
  <View style={styles.whiteBack}>
    <Text style={text.t_11_700_00}>{props.title}</Text>
  </View>
)

export const WhiteSky = props => (
  <TouchableOpacity onPress={()=>props.onClick()} style={[styles.WhiteSky, { marginTop: props.top, marginBottom: props.bottom}]} >
    <Text style={text.t_15_600_sky}>{props.title}</Text>
  </TouchableOpacity>
)

export const SkyWhite = props => (
  <TouchableOpacity onPress={()=>props.onClick()} style={[styles.WhiteSky, { marginTop: props.top, marginBottom: props.bottom, backgroundColor: colors.SKY}]} >
    <Text style={text.t_15_600_ff}>{props.title}</Text>
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
  },
  WhiteSky: {
    width: p(250),
    height: p(50),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    borderRadius: 3,
    backgroundColor: colors.WHITE,
  }
});
