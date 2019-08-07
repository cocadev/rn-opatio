import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../common/colors'
import text from '../common/text';

export const ORANGE = props => (
  <View style={styles.container}>
    <View style={styles.bubble}>
      <View style={styles.amount}>
        <Text style={text.t_12_700_ff}>{props.children}</Text>
      </View>
    </View>
    {/* <View style={styles.arrowBorder} />
    <View style={styles.arrow} /> */}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.ORANGE,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: colors.ORANGE,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});
