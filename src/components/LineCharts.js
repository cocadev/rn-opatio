import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { p } from '../common/normalize';
import { colors } from '../common/colors';

export const CHART = props => (
  <View style={styles.graphView}>
    {props.icon}
    <View style={[styles.graph, { width: p(props.count * 24) }]}></View>
    <Text style={styles.count}>{ props.count > 0 ? props.count : 'Alerta Inactiva'}</Text>
  </View>
)


const styles = StyleSheet.create({
  graph: {
    height: p(12),
    marginLeft: p(10),
    backgroundColor: colors.PINK
  },
  graphView: {
    flexDirection: 'row',
    marginHorizontal: p(10),
    alignItems: 'center',
    backgroundColor: colors.GREY3,
    marginVertical: p(10)
  },
  count: {
    color: '#606060',
    fontSize: p(14),
    fontWeight: '700',
    marginLeft: p(10)
  },
});
