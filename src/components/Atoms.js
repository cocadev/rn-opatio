import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { p } from '../common/normalize';
import text from '../common/text';
import { colors } from '../common/colors';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

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

export const Loading = () => (
  <View style={{
    backgroundColor: '#555',
    opacity: 0.9,
    position: 'absolute',
    height,
    width,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {/* <ActivityIndicator size={p(50)} color={colors.GREEN} /> */}
    <LottieView
      loop
      source={require('../common/reload.json')}
      autoPlay
    />
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
