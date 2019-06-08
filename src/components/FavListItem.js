import * as React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import i from '../common/i';
import { colors } from '../common/colors';
import { images } from '../common/images';
import text from '../common/text';
import UtilService from '../utils/utils';
import { normalize } from './normalize';

const width = Dimensions.get("window").width;

export default class FavListItem extends React.Component {


  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={{ marginHorizontal: 12, borderRadius: 4 ,backgroundColor:'#fff', flexDirection:'row', marginBottom:8, padding:12,  }}>

      <View style={{flex:2, paddingVertical: normalize(6)}}>
        <Image source={{ uri: item.user }} style={styles.circle} />
        <Image source={images.icon_dank} style={styles.dank} />
      </View>

      <View style={{position:'relative', flex:4, paddingLeft:width/12, justifyContent:'space-between'}}>
          <Text style={i.smallText}>{item.description}</Text>

          <View>
            <View style={{flexDirection:'row'}}>
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
            </View>

            <Text style={i.smallText}>S(115)</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={[text.m_8_dark2, ]}>SELLER</Text>
              <Text style={[i.normalText, {color:colors.GREEN, fontSize:10,}]}>Johnathan Doe</Text>
            </View>
            <View style={{flex:1, marginLeft:12}}>
              <Text style={[text.m_8_dark2]}>PRICE</Text>
              <Text style={[i.normalText, {color:colors.GREEN, fontSize:10}]}>$25 / Hour</Text>
            </View>
          </View>

      </View>
    </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  roundBtn: {
    flexDirection: 'row',
    padding: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderColor: colors.GREEN,
    borderWidth: 1,
    borderRadius: 20,
  },
  cateogry: {
    marginHorizontal: 2,
    alignItems: 'center',
  },
  circle: {
    width: width / 3.6,
    height: width / 3.6,
    borderRadius: width / 7.2,
    marginLeft: normalize(5),
    borderColor: '#fff',
    borderWidth: 1
  },
  dank: {
    width: normalize(12),
    height: normalize(16),
    position: 'absolute',
    right: normalize(10),
    bottom: normalize(8),
  },
  input: {
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: colors.GREY3,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 4,
    marginRight: 12
  }
});