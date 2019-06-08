import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import i from '../../common/i'
import Header2 from '../../components/Header2';
import GradientButton from '../../components/GradientButton';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import text from '../../common/text';
import { Actions } from 'react-native-router-flux';
import { family } from '../../common/family';
import { normalize } from '../../components/normalize';

const width = Dimensions.get('window').width

class OrderSummary extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      order: false,
      total: false
    }
  }

  renderReviews() {
    return (
      <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={images.icon_schedule} style={{ width: 13, height: 14 }} />
            <Text style={[i.smallText, { fontSize: 9 }]}>DATE</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Text style={i.smallText}>01 / 03 /2019</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={images.icon_clock} style={{ width: 14, height: 14 }} />
            <Text style={[i.smallText, { fontSize: 9 }]}>TIME</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Text style={i.smallText}>7: 00 PM TO 10:00 PM</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={images.icon_alarm} style={{ width: 13, height: 14 }} />
            <Text style={[i.smallText, { fontSize: 9 }]}>DURATION</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Text style={i.smallText}>3 HRS</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image source={images.icon_map} style={{ width: 15, height: 20 }} />
          <Text style={[i.smallText, { fontSize: 9 }]}>LOCATION</Text>
          <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
          <Text style={[i.smallText, { fontSize: 9 }]}>{'This address below will be used for this order. Please make sure the'}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[i.smallText, { fontSize: 9 }]}>{'address is accurate.'}</Text>
            <Text style={[i.smallText, { color: colors.SKY, fontSize: 9 }]}>{'Your service provider will meet you at this address.'}</Text>
          </View>
          <Text style={[i.smallText, { fontFamily: family.Bold }]}>7323 Yonge Street, Thornhill, Ontario, Canada, M2R2V9</Text>
          <TouchableOpacity onPress={() => Actions.pop()} style={{ marginTop: 12 }}>
            <GradientButton style={styles.roundBtn} title={'EDIT'} />
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  renderTotal() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, backgroundColor: '#fff' }}>
          <Text style={styles.price}>PRICE</Text>
          <Text style={styles.price}>$15.00</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <Text style={styles.price}>DURATION</Text>
          <Text style={styles.price}>2 HOURS</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <Text style={styles.price}>SUBTOTAL</Text>
          <Text style={styles.price}>$30.00</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <Text style={styles.price}>SERVICE FEE</Text>
          <Text style={styles.price}>$4.00</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <Text style={styles.price}>TAX</Text>
          <Text style={styles.price}>$2.15</Text>
        </View>
      </>
    )
  }

  render() {

    const { selectedTab } = this.state;

    console.log('selectedTab', selectedTab)

    return (
      <View style={i.container}>
        <Header2 title={'Order Summary'} />

        <View style={{ flexDirection: 'row', padding: 16 }}>
          <Image source={images.img_demo} style={{ width: width / 4, height: width / 4.5, borderRadius: 4 }} />
          <View style={{ justifyContent: 'space-between', width: width / 1.7, paddingLeft: 12 }}>
            <Text style={[text.b_11_dark,]}>Best Snow Cleaning Service lorem orem ipsum dolor sit amet.</Text>
            <View>
              <Text style={text.m_8_dark2}>SELLER</Text>
              <Text style={text.b_10_green}>Johnathan Doe</Text>
            </View>
          </View>
        </View>

        {this.renderReviews()}

        <TouchableOpacity onPress={() => this.setState({ total: !this.state.total })} style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 20, backgroundColor: '#e9f6f8' }}>
          <Text style={i.normalText}>TOTAL</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={i.normalText}>$75.00</Text>
            
            { !this.state.total && <Ionicons name="ios-arrow-down" size={14} color={colors.GREEN} style={{ marginLeft:10}}/>}
            { this.state.total && <Ionicons name="ios-arrow-up" size={14} color={colors.GREEN} style={{ marginLeft:10}}/>}

          </View>
        </TouchableOpacity>

        { this.state.total && this.renderTotal()}

        <TouchableOpacity onPress={() => Actions.payment()} style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 5, }}>
          <GradientButton title="PAY NOW" vetical={19} radius={4} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width,
    height: width / 2,
    position: 'absolute'
  },
  user: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    width: width / 5,
    height: width / 5,
    position: 'absolute',
    left: 20,
    bottom: 5
  },
  dank: {
    width: width / 24,
    height: width / 20,
    left: width / 5,
    bottom: 5
  },
  like: {
    width: width / 8,
    height: width / 8,
    right: width / 8,
    position: 'absolute',
    bottom: -5
  },
  notice: {
    left: width / 3.4,
    position: 'absolute',
    bottom: 27
  },
  input: {
    flexDirection: 'row',
    borderRadius: 20,
    width: width / 1.6,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
  },

  circle: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 16,
    position: 'absolute',
    left: 5,
    bottom: 25,
    borderColor: '#fff',
    borderWidth: 1
  },
  danks: {
    width: width / 30,
    height: width / 24,
    position: 'absolute',
    left: width / 9,
    bottom: 25,
  },

  price: {
    marginHorizontal: 12,
    fontFamily: family.Medium,
    fontSize: normalize(13)
  }
});

export default OrderSummary;