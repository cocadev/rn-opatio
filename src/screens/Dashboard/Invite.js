import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import i from '../../common/i'
import Header2 from '../../components/Header2';
import GradientButton from '../../components/GradientButton';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import text from '../../common/text';

const width = Dimensions.get('window').width

class Invite extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={i.container}>
        <Header2 title={'Invite your Friend'} />

        <ImageBackground
          source={images.icon_background}
          style={{ flex: 4, alignItems: 'center', justifyContent: 'center', }}
        >

          <Text style={[text.b_18_dark, { fontWeight: '600' }]}>REFFERAL CODE</Text>

          <View>
            <Text style={{ fontSize: 35, color: colors.WHITE, marginVertical: 20, marginTop: 5, fontWeight: '600' }}>4ABS63F</Text>
          </View>

          <View style={styles.button}>
            <Text style={[text.m_10_dark_w, { color: colors.GREEN }]}>COPY CODE</Text>
          </View>

        </ImageBackground>

        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
         
          <View style={{ flexDirection: 'row' }}>
            <Text style={text.b_18_dark}>SHARE</Text>
            <Text style={text.i_17_green}> RytHand </Text>
            <Text style={text.b_18_dark}>WITH FIRANDS !</Text>
          </View>
         
          <Text style={[text.m_8_dark2, { marginVertical: 12, textAlign:'center' }]}>{'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. sed diam \nnonummy nibh eulismod tincidunt ut'}</Text>
         
          <View style={{ flexDirection: 'row', marginTop:5 }}>
            <View style={styles.box}>
              <Image source={images.icon_gmail} style={[styles.image, {height: width/18}]} />
            </View>
            <View style={styles.box}>
              <Image source={images.icon_msg} style={styles.image} />
            </View>
            <View style={styles.box}>
              <Image source={images.icon_whatsapp} style={styles.image} />
            </View>
            <View style={styles.box}>
              <Image source={images.icon_facebook} style={styles.image} />
            </View>
     
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.box}>
              <Image source={images.icon_instagram} style={styles.image} />
            </View>
            <View style={styles.box}>
              <Image source={images.icon_twitter} style={{width: width/14, height: width/16}} />
            </View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: width / 2
  },
  image: {
    width: width / 14,
    height: width / 14
  },
  box: {
    width: width / 4.5,
    height: width / 4.5,
    borderRadius: 15,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 2,
  }
});

export default Invite;