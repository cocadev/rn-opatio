import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import i from '../../common/i'
import Header2 from '../../components/Header2';
import GradientButton from '../../components/GradientButton';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import text from '../../common/text';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width

class Promotion extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[i.container, {backgroundColor:'#00b49e'}]}>
        <Header2 title={'Promotions'} />


        <ImageBackground
          source={images.icon_smallgift}
          style={{ width: width/0.5, height: width/0.6, marginLeft:-width/2, marginTop:-width/1.3, zIndex:-1 }}
          resizeMode='cover' 
        >
        </ImageBackground>

       
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginTop: -width/4 }}>

          <View>
            <Text style={[text.b_18_dark, { fontWeight: '600', textAlign:'center' }]}>PROMO CODE</Text>

            <Text style={{ fontSize: 35, color: colors.WHITE, marginVertical: 20, marginTop: 5, fontWeight: '600' }}>4ABS63F</Text>
          </View>

          <Text style={[text.m_8_dark2, { marginVertical: 5, textAlign:'center', color:'#fff' }]}>{'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. sed diam \nnonummy nibh eulismod tincidunt ut'}</Text>
          <Text style={[text.m_8_dark2, { marginVertical: 5, textAlign:'center', color:'#fff' }]}>{'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. sed diam \nnonummy nibh eulismod tincidunt ut'}</Text>
          <Text style={[text.m_8_dark2, { marginVertical: 5, textAlign:'center', color:'#fff' }]}>{'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. sed diam \nnonummy nibh eulismod tincidunt ut'}</Text>

          <View style={[styles.button, { marginVertical:12}]}>
            <Text style={[text.m_10_dark_w, { color: colors.GREEN }]}>COPY CODE</Text>
          </View>

          <TouchableOpacity onPress={()=>Actions.invite()}>
             <Text style={[text.b_10_dark, { fontWeight: '600', color:'#fff', marginTop:7 }]}>INVITE FRIENDS</Text>
          </TouchableOpacity>

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

export default Promotion;