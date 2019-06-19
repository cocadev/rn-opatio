import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../common/colors'
import { p } from '../common/normalize';
import { images } from '../common/images';
import { Actions } from 'react-native-router-flux';
import text from '../common/text';

export const BlueWhite = props => (
  <TouchableOpacity style={styles.rectNgulo}>
    <Text style={text.t_12_700_ee}>{props.title}</Text>
  </TouchableOpacity>
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
});
