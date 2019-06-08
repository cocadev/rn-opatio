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

export default class OrderListItem extends React.Component {


  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('status ->', item.status)
          if (item.status === 1) {
            Actions.orderstart()
          } if (item.status === 0) {
            Actions.orderreview()
          } if (item.status === 2) {
            Actions.orderDetail()
          }
        }
        }
        style={{ marginHorizontal: 6, borderRadius: 4, backgroundColor: '#fff', marginBottom: 8, padding: 6, }}>
        <View style={{ flexDirection: 'row' }}>

          <View style={{flex:2, paddingVertical: normalize(6)}}>
            <Image source={{ uri: item.user }} style={styles.circle} />
            <Image source={images.icon_dank} style={styles.dank} />
          </View>

          <View style={{ position: 'relative', flex: 3, paddingLeft: width / 12, justifyContent: 'space-between' }}>
            <Text style={i.smallText}>{item.description}</Text>

            <View>
              <Text style={i.smallText}>{item.date}</Text>
              <Text style={i.smallText}>{item.time}</Text>
              <Text style={i.smallText}>{item.duration}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={i.smallText}>SELLER</Text>
                <Text style={[i.normalText, { color: colors.GREEN, fontSize: 10 }]}>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={i.smallText}>PRICE</Text>
                <Text style={[i.normalText, { color: colors.GREEN, fontSize: 10, marginLeft: 1 }]}>${item.rate}</Text>
              </View>
            </View>

          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, }}>
          <Text style={[text.b_8_dark2, { color: UtilService.getOrderColor(item.status) }]}>{UtilService.getOrderMessage(item.status)}</Text>
          <Text style={[text.b_8_dark2, { textAlign: 'right' }]}>{item.date}</Text>
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
    marginLeft: normalize(15),
    borderColor: '#fff',
    borderWidth: 1
  },
  dank: {
    width: normalize(12),
    height: normalize(16),
    position: 'absolute',
    right: normalize(20),
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