import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { p } from '../common/normalize';
import text from '../common/text';
import { colors } from '../common/colors';

export const Atom1 = props => (
  <View style={styles.item}>
    {props.icon}
    <View style={{ marginLeft: p(20) }}>
      <Text style={text.t_16_500_00}>{props.title}</Text>
      <Text style={text.t_16_400_98}>{props.note}</Text>
      {props.other}
    </View>
    <View style={styles.right}>
      {props.add}
      {props.right}
    </View>
  </View>
)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    paddingLeft: p(30),
    paddingRight: p(20),
    paddingVertical: p(20),
    alignItems: 'center',
    borderTopColor: colors.GREY3,
    borderTopWidth: p(7)
  },
  right: {
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    flex: 1
  }
});
