import React from 'react';
import { Text, StyleSheet, Image, Dimensions } from 'react-native';
import { colors } from '../common/colors'
import { LinearGradient } from 'expo';

const width = Dimensions.get('window').width

export default class GradientButton extends React.Component {

  render() {
    const { title, image, active, width_tab } = this.props
    return (
      <LinearGradient
        colors={[active ? colors.GREEN : colors.WHITE, active ? colors.SKY : colors.WHITE]}
        start={[0, 1]} end={[1, 0]}
        style={{ width: width / 5, height: 54, justifyContent: 'center', alignItems: 'center', }}>
        <Image source={image} style={{ width: width_tab?width_tab:15, height: 15, marginVertical: 5 }} />
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 9,
            color: active ? colors.WHITE : colors.GREY1,
            fontFamily: 'Montserrat-Medium'
          }}>
          {title}
        </Text>
      </LinearGradient>
    )
  }
}
