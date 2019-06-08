import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../components/normalize';
import i from '../../common/i'
import GradientButton from '../../components/GradientButton';
import Header from '../../components/Header2';
import text from '../../common/text';

const width = Dimensions.get('window').width

class OrderStart extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      order: false,
      showModal: false
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

  renderModal() {
    return (
      <Modal
        visible={this.state.showModal}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>

            <TouchableOpacity
              style={{ position: 'absolute', right: normalize(6), top: normalize(6) }}
              onPress={() => this.setState({ showModal: false })}>
              <Text>Close</Text>
            </TouchableOpacity>

            <Text style={[text.b_11_dark, { color: colors.SKY, marginBottom: 5, marginHorizontal: normalize(16) }]}>EXTEND TIME LINE</Text>

            <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.roundBtn}>
                <Text style={text.m_10_dark}>1 Hour</Text>
              </View>
              <View style={styles.roundBtn}>
                <Text style={text.m_10_dark}>2 Hours</Text>
              </View>
              <View style={[styles.roundBtn, { backgroundColor: colors.RED, flexDirection: 'row', justifyContent: 'space-around' }]}>
                <Text style={[text.m_10_dark, { color: '#fff', paddingLeft: normalize(7) }]}>3+ HOURS</Text>
                <MaterialCommunityIcons name="chevron-down" size={14} color={colors.WHITE} />
              </View>
            </View>

            <View style={[i.bar, { marginHorizontal: normalize(15), marginTop: normalize(20) }]}></View>

            <Text style={[text.b_11_dark, { color: colors.SKY, marginVertical: 3, marginHorizontal: normalize(16) }]}>PAYMENT</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: normalize(16), marginVertical: normalize(3) }}>
              <Text style={text.m_12_dark}>EXTRA TIME</Text>
              <Text style={text.m_12_dark}>3 HOURS</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: normalize(16), marginVertical: normalize(3) }}>
              <Text style={text.m_12_dark}>COST</Text>
              <Text style={text.m_12_dark}>$40.00</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: normalize(16), marginVertical: normalize(3) }}>
              <Text style={text.m_12_dark}>TAX</Text>
              <Text style={text.m_12_dark}>$10.00</Text>
            </View>

            <View style={styles.calculaterView}>
              <Text style={i.normalText}>TOTAL</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={i.normalText}>$50.00</Text>
                <MaterialCommunityIcons name="chevron-up" size={14} color={colors.GREEN} />
              </View>
            </View>

            <TouchableOpacity 
               onPress={() => { 
                 this.setState({ showModal: false });
                 Actions.orderreview()
               }}
               style={{ flex: 1, marginHorizontal: normalize(40), marginTop: normalize(8) }}

            >
              <GradientButton title="CONFIRM & PAY" vetical={12} radius={4} />
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    );
  }

  render() {

    return (
      <View style={i.container}>
        <Header />

        <View style={{ flexDirection: 'row', padding: normalize(14), justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={text.m_8_dark2}>ORDER STARTED</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[text.m_15_dark, { color: colors.GREEN }]}>CONTACT</Text>
            <Text style={[text.bi_10_dark, { fontSize: 12 }]}>KEVIN</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>

          <Text style={[text.m_15_dark, { textAlign: 'center', marginTop: 20, }]}>{'REMAINING TIME'}</Text>

          <Text style={[text.m_50_green, { textAlign: 'center', marginTop: 20, fontSize: 40 }]}>{'00  :  12  :  06'}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 15, marginTop: 10 }}>
            <Text style={text.m_12_dark}>HOUR</Text>
            <Text style={[text.m_12_dark, { marginLeft: width / 7, marginRight: width / 7.2 }]}>MINUTE</Text>
            <Text style={text.m_12_dark}>SECOND</Text>
          </View>


          <View style={[i.bar, { marginTop: normalize(36) }]}></View>
          {this.renderReviews()}

        </View>


        <TouchableOpacity onPress={() => this.setState({ showModal: true })} style={{ flex: 1, marginTop: normalize(30), marginHorizontal: normalize(30) }}>
          <GradientButton title="EXTEND THE ORDER DURATION " vetical={16} radius={4} />
        </TouchableOpacity>
        {this.renderModal()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: width,
    height: width / 1.1,
    borderRadius: 5,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    elevation: 3,
    paddingTop: normalize(30),

  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  roundBtn: {
    width: width / 3 - 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eeecec",
    padding: normalize(7),
    marginHorizontal: normalize(7)
  },
  calculaterView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: normalize(17),
    marginVertical: normalize(10),
    backgroundColor: '#e9f6f8',
    width: '100%'
  }
});

export default OrderStart;