import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import i from '../../common/i'
import GradientButton from '../../components/GradientButton';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import text from '../../common/text';
import { Actions } from 'react-native-router-flux';
import Header2 from '../../components/Header2';

const width = Dimensions.get('window').width

class OrderStatus extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      order: false,
    }
  }

  renderReviews() {
    return (
      <View style={{ backgroundColor: '#fff', paddingBottom: 20 }}>
        <View style={{ padding: 16 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={text.b_13_sky}>ORDER DETAILS</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={text.m_10_dark2}>$ 75.00</Text>
              <Image source={images.icon_down} style={{ width: 8, height: 4, marginHorizontal: 6 }} />
            </View>
          </View>
          <Text style={i.smallText}>Best Snow Cleaning Service lorem orem ipsum dolor sit amet.</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={images.icon_schedule} style={{ width: 13, height: 14 }} />
            <Text style={[i.smallText, { fontSize: 9, marginTop: 12 }]}>DATE</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Text style={i.smallText}>01 / 03 /2019</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={images.icon_clock} style={{ width: 14, height: 14 }} />
            <Text style={[i.smallText, { fontSize: 9, marginTop: 12 }]}>TIME</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Text style={i.smallText}>7: 00 PM TO 10:00 PM</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={images.icon_alarm} style={{ width: 13, height: 14 }} />
            <Text style={[i.smallText, { fontSize: 9, marginTop: 12 }]}>DURATION</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Text style={i.smallText}>3 HRS</Text>
          </View>
        </View>
      </View>
    )
  }


  render() {

    return (
      <View style={i.container}>
        <Header2 title={'Order Status'}/>

        <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={text.m_8_dark2}>SUCCESSFULLY ORDERED !!</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[text.m_15_dark, { color: colors.GREEN }]}>CONTACT</Text>
            <Text style={[text.m_13_dark, { fontWeight: '800' }]}>KEVIN</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>

          <TouchableOpacity style={{ marginVertical: 30 }}>
            <Image source={images.icon_check2} style={{ width: width /2.8, height: width /2.8 }} />
          </TouchableOpacity>

          <Text style={[text.m_10_dark2, { textAlign: 'center', marginBottom: 20, }]}>{'YOUR ORDER IS SUCCESSFULLY PLACED.'}</Text>

          <View style={i.bar}></View>
          {this.renderReviews()}

        </View>


        <TouchableOpacity onPress={()=>Actions.wall()} style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 12, }}>
          <GradientButton title="BACK TO HOME" vetical={20} radius={4} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fbfbfb',
    padding:10,
    width: '100%',
    marginHorizontal: 12,
    marginTop: 1
  },
  header: {
    backgroundColor: '#fbfbfb',
    padding:7,
    width: '100%',
    marginHorizontal: 12,
    marginTop: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'

  }

});

export default OrderStatus;