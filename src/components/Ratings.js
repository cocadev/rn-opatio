import React from 'react';
import { View, Image } from 'react-native';
import { images } from '../common/images';

export default class Ratings extends React.Component {

  render() {
    const { size, margin } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={images.icon_rating} style={{ width: size, height: size, marginHorizontal: margin }} />
        <Image source={images.icon_rating} style={{ width: size, height: size, marginHorizontal: margin }} />
        <Image source={images.icon_rating} style={{ width: size, height: size, marginHorizontal: margin }} />
        <Image source={images.icon_rating} style={{ width: size, height: size, marginHorizontal: margin }} />
        <Image source={images.icon_rating} style={{ width: size, height: size, marginHorizontal: margin }} />
      </View>
    )
  }
}
