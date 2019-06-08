import React from 'react';
import { Dimensions, StyleSheet, View, Image} from 'react-native';
import { images } from '../common/images';
import { normalize } from './normalize';

const width = Dimensions.get('window').width

export default class AvatarTag extends React.Component {

  render() {
    const { title, userImg, verified } = this.props
    return (
      <View >
        {
          userImg 
          ? <Image source={{uri: userImg}} style={title?styles.providerCircle:styles.circle} />
          : <Image source={images.img_user2} style={title?styles.providerCircle:styles.circle} />
        }
        { verified && <Image source={images.icon_dank} style={title?styles.providerDank:styles.dank} />}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 16,
    borderColor: '#ddd',
    borderWidth: 1
  },
  dank: {
    width: width / 30,
    height: width / 24,
    left: width / 10,
    bottom:16
  },
  providerCircle: {
    width: normalize(78),
    height: normalize(78),
    marginTop: normalize(8),
    borderRadius: normalize(39),
    borderColor: '#ddd',
    borderWidth: 1
  },
  providerDank: {
    width: normalize(17),
    height: normalize(20),
    left: normalize(60),
    bottom:normalize(23)
  },
});
