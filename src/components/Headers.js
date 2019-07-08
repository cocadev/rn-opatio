import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { images } from '../common/images';
import * as ICON from '../components/Icons';
import text from '../common/text';

export const Gradient = props => (
  <View style={styles.container}>
    <ICON.IconBack />
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => { props.onClick() }}
        style={[styles.vertical, { backgroundColor: colors.BLUE2 }]}
      >
        <Text style={text.t_14_500_ff}>EDITAR</Text>
      </TouchableOpacity>
      <Image source={images.menu_blue} style={{ width: p(7), height: p(23), marginLeft: p(18), marginTop: p(6) }} />
    </View>
  </View>
)

export const GUARDAR = props => (
  <View style={[styles.header, { backgroundColor: props.back }]}>
    <ICON.IconBack />
    <View style={[styles.vertical, { backgroundColor: colors.WHITE }]}>
      <Text style={{ color: colors.BLACK, fontWeight: '700' }}>{'GUARDAR'}</Text>
    </View>
  </View>
)

export const NormalIcon = props => (
  <View style={[styles.header, { backgroundColor: props.back, justifyContent: 'flex-start' }]}>
    <ICON.IconBack />
    {props.icon}
    <Text style={text.t_21_700_ff}>{'Alarma de Velocidad'}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    height: p(60),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: "row",
    paddingHorizontal: p(20),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  vertical: {
    justifyContent: 'center',
    alignItems: 'center',
    width: p(119),
    height: p(29),
    borderRadius: p(3),
    elevation: 1,
    color: colors.ORANGE
  },
  header: {
    backgroundColor: colors.BLUE2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: p(20),
    height: p(60),
    alignItems: 'center',
  },
});
