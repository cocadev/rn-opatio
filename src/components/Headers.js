import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { p } from '../common/normalize'
import { colors } from '../common/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux'

import text from '../common/text'
import Test from '../screens/Test';

export const Gradient = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => Actions.pop()}>
      <MaterialCommunityIcons name={'arrow-left'} size={30} color={colors.WHITE} />
    </TouchableOpacity>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => { props.onClick() }}
        style={[styles.vertical, { backgroundColor: colors.BLUE2 }]}
      >
        <Text style={text.t_14_500_ff}>EDITAR</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name={'dots-vertical'} size={p(30)} color={colors.BLUE2} />
    </View>
  </View>
)

export const GUARDAR = props => (
  <View style={[styles.header, { backgroundColor: props.back }]}>
    <TouchableOpacity onPress={() => Actions.pop()}>
      <MaterialCommunityIcons name={'arrow-left'} size={p(30)} color={colors.WHITE} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { props.onClick() }} style={[styles.vertical, { backgroundColor: colors.WHITE }]}>
      <Text style={{ color: colors.BLACK, fontWeight: '700', fontSize: p(15) }}>{'GUARDAR'}</Text>
    </TouchableOpacity>
  </View>
)

export const NormalIcon = props => (
  <View style={[styles.header, { backgroundColor: props.back, justifyContent: 'flex-start' }]}>
    <TouchableOpacity onPress={() => Actions.pop()}>
      <MaterialCommunityIcons name={'arrow-left'} size={p(30)} color={colors.WHITE} />
    </TouchableOpacity>
    {props.icon}
    <Text style={text.t_21_700_ff}>{props.title}</Text>
  </View>
)

export const Complex = props => (
  <View style={[styles.container, { backgroundColor: props.back }]}>
    <TouchableOpacity onPress={() => Actions.pop()}>
      <MaterialCommunityIcons name={'arrow-left'} size={p(30)} color={props.back == colors.WHITE ? colors.DARK : colors.WHITE} />
    </TouchableOpacity>
    <View style={{ marginLeft: p(10) }}>
      <Text style={[text.t_21_700_ff, props.back == colors.WHITE ? { color: colors.DARK} : { color: colors.WHITE}]}>{props.title}</Text>
      <Text style={[text.t_15_600_ff, props.back == colors.WHITE ? { color: colors.DARK} : { color: colors.WHITE}]}>{props.address}</Text>
    </View>
    <View style={styles.line}></View>
    <Text style={[text.t_15_600_ff, props.back == colors.WHITE ? { color: colors.DARK} : { color: colors.WHITE}]}>{props.head}</Text>
    <Test />
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
    paddingHorizontal: p(12),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    elevation: 1
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
  line: {
    backgroundColor: colors.GREY6,
    width: p(3),
    height: p(32)
  },
});
