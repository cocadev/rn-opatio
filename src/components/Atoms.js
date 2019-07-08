import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { p } from '../common/normalize';
import text from '../common/text';
import { colors } from '../common/colors';

export const Atom1 = props => (
  <View style={styles.item}>
    {props.icon}
    <View style={{ marginLeft: p(25) }}>
      <Text style={text.t_16_500_00}>{props.title}</Text>
      <Text style={text.t_16_400_98}>{props.note}</Text>
      { props.other}
    </View>
  </View>
)


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    paddingHorizontal: p(30),
    paddingVertical: p(20),
    alignItems: 'center',
    borderTopColor: colors.GREY3,
    borderTopWidth: p(7)
  },
});
