import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../common/colors'
import { LinearGradient } from 'expo';

export default class GradientButton extends React.Component {

  render() {
    const {radius, vetical} = this.props
    return (
      <LinearGradient
        colors={[colors.GREEN, colors.SKY]}
        start={[0, 1]} end={[1, 0]}
        style={{ padding: 7, paddingHorizontal: 22, alignItems: 'center', borderRadius: radius ? radius : 20, marginHorizontal: 12, paddingVertical: vetical, }}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 12,
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
