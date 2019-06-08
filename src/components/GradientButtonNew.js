import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../common/colors'
import { LinearGradient } from 'expo';
import { normalize } from './normalize';

export default class GradientButtonNew extends React.Component {

  render() {
    const {radius, vetical} = this.props
    return (
      <LinearGradient
        colors={[colors.GREEN, colors.SKY]}
        start={[0, 1]} end={[1, 0]}
        style={{ padding: normalize(8), paddingHorizontal: normalize(2), alignItems: 'center', borderRadius: radius ? radius : 20, marginHorizontal: normalize(15), paddingVertical: vetical, marginTop: normalize(-11) }}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 9,
            color: '#fff',
            fontFamily: 'Montserrat-Medium'
          }}>
          {this.props.title}
          </Text>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({

});
