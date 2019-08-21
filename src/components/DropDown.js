import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { Entypo } from '@expo/vector-icons';
import text from '../common/text';

export const Large = props => (
  <TouchableOpacity style={styles.dropdown} onPress={()=>props.onClick()}>
    <Text style={text.t_19_500_ff}>{props.title}</Text>
    <Entypo name={'chevron-down'} size={p(25)} color={colors.WHITE} />
  </TouchableOpacity>
)

export const Small = props => (
  <TouchableOpacity style={styles.dropdown2} onPress={()=>props.onClick()}>
    <Text style={text.t_19_500_00}>{props.title}</Text>
    <Entypo name={'chevron-down'} size={p(25)} color={colors.GREY4} />
  </TouchableOpacity>
)

export const XSmall = props => (
  <TouchableOpacity onPress={()=>props.onClick()} style={styles.dropdown3}>
    <Text style={{ fontSize: p(12)}}>{props.title}</Text>
    <Entypo name={'chevron-down'} size={p(24)} color={colors.GREY4} />
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  dropdown: {
    height: p(50),
    paddingHorizontal: p(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: p(5),
    alignItems: 'center',
    marginHorizontal: p(60),
    marginVertical: p(10)
  },
  dropdown2: {
    height: p(40),
    width: p(170),
    paddingHorizontal: p(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.GREY6,
    borderWidth: 1,
    borderRadius: p(5),
    marginVertical: p(12),
    alignItems: 'center',
    marginHorizontal: p(55)
  },
  dropdown3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: p(12),
    color: '#707070',
    borderWidth: 1,
    borderColor: '#626262',
    borderRadius: p(5),
    width: p(146),
    height: p(32),
    marginHorizontal: p(10)
}
});
