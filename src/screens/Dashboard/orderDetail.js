import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import i from '../../common/i'
import GradientButton from '../../components/GradientButton';
import Header from '../../components/Header2';
import Accordion from 'react-native-collapsible/Accordion';
import text from '../../common/text';
import { normalize } from '../../components/normalize';
import { family } from '../../common/family';

const width = Dimensions.get('window').width
const SECTIONS = [
  {
    id: 0,
    title: '1. What type of dog do you have?',
    content: 'I have France brdok dogs.'
  },
  {
    id: 1,
    title: '2. What type of guy do you have?',
    content: 'Unfortunately, nothing more.'
  }
];

class OrderDetail extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      order: false,
      sent: false,
      activeSections: [],
      modal: false,
      modalCancel: false
    }
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.modal}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalView}>
          <View style={[styles.modalContent, { height: normalize(160)}]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
              <Text style={styles.cancelText}>{'CANCEL ORDER?'}</Text>

              <Text style={[{ marginTop: 12, textAlign: 'center', fontFamily: 'Montserrat-Medium', color: '#484747', fontSize: normalize(11) }]}>
                {'There will be a cancellation fee of 25% since you are\ncancelling your order within less than 24 hours of\nstart time.\n\nAre you sure you want to cancel your order?'}
              </Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#def3ed', height: normalize(40), borderBottomLeftRadius:6 }} onPress={() => this.setState({ modal: false })}>
                <Text style={[text.b_13_dark, { color: '#72bba5' }]}>NO</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => { 
                  this.setState({ modal: false, modalCancel: true });
                }} 
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#72bba5', height: normalize(40), borderBottomEndRadius: 6 }}>
                <Text style={[text.b_11_dark, { color: '#fff', textAlign: 'center' }]}>YES, CANCEL MY ORDER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  renderModalCancel() {
    return (
      <Modal
        visible={this.state.modalCancel}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalView}>
          <View style={[styles.modalContent, { height: normalize(160)}]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2, height: normalize(40) }}>
              <Text style={styles.cancelText}>{'Order Cancelled'}</Text>
              <Image source={images.icon_doublecheck}  style={{ width: normalize(30), height: normalize(30), marginTop: 12}}/>
              <Text style={{ marginTop: 12, textAlign: 'center', fontFamily: 'Montserrat-Medium', color: '#484747', fontSize: normalize(11) }}>
                {'Cancelled orders can be found on the Orders\ntab in the side menu'}
              </Text>
            </View>
            <TouchableOpacity onPress={()=> { this.setState({modalCancel: false}); Actions.wall()}} style={{ borderBottomEndRadius:6, borderBottomLeftRadius:6, backgroundColor:'#72bba5', alignItems: 'center', justifyContent: 'center', height: normalize(40) }}>
              <Text style={[text.b_13_dark, { color: '#fff' }]}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
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

        <View style={{ justifyContent: 'space-between', marginTop: normalize(12), paddingHorizontal: normalize(16) }}>
          <Text style={text.b_13_sky}>LOCATION</Text>
          <Text style={i.smallText}>7471 Yonge Street, Thornhill, Ontario, Canada, M2R2V9</Text>

        </View>

      </View>
    )
  }

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text style={text.m_12_dark}>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={text.m_12_dark}>{section.title}</Text>
        {
          section.id === this.state.activeSections[0]
            ? <MaterialCommunityIcons name="chevron-up" size={22} color={colors.DARK} style={{ paddingRight: 20, }} />
            : <MaterialCommunityIcons name="chevron-down" size={22} color={colors.DARK} style={{ paddingRight: 20, }} />
        }
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={[text.i_10_dark]}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {

    return (
      <View style={i.container}>
        <Header />

        <ScrollView>

          <View style={{ flexDirection: 'row', padding: normalize(14), justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={text.m_8_dark2}>SUCCESSFULLY ORDERED !!</Text>
            <View style={styles.contact}>
              <Text style={[text.m_13_dark, { fontFamily: family.Medium, color: colors.GREEN }]}>CONTACT</Text>
              <Text style={[text.m_13_dark, { fontFamily: family.Medium, color: colors.GREEN }]}> KEVIN</Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>

            <TouchableOpacity style={{ marginVertical: 30 }}>
              <Image source={images.icon_qrcode} style={{ width: width / 3.5, height: width / 3.5 }} />
            </TouchableOpacity>

            <Text style={[text.m_10_dark2, { textAlign: 'center' }]}>{'PLEASE HAVE YOUR SERVICE PROVIDER\n SCAN THE QR CODE TO START YOUR ORDER'}</Text>

            <TouchableOpacity style={{ width: width / 2, justifyContent: 'center', marginVertical: 10, }}>
              <GradientButton title="SEND QR CODE" vetical={15} radius={4} />
            </TouchableOpacity>

            <View style={i.bar}></View>

            <View style={{ paddingVertical: 2, width: '90%' }}>
              <Text style={[text.m_12_dark, { color: colors.SKY, fontWeight: '600' }]}>PLEASE PROVIDE THE ANSWERS TO KEVIN</Text>
            </View>

            <View style={{ width: '100%' }}>
              <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                // renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
                underlayColor={colors.WHITE}
              />
            </View>


            {!this.state.sent &&
              <TouchableOpacity onPress={() => this.setState({ sent: true })} style={{ marginTop: 12 }}>
                <GradientButton title="SEND" />
              </TouchableOpacity>
            }

            {this.state.sent &&
              <View style={styles.sentBtn}>
                <Text style={text.m_13_dark}>SENT</Text>
              </View>
            }

            <View style={i.bar}></View>

          </View>

          {this.renderReviews()}

          <TouchableOpacity style={styles.bottomBtn} onPress={()=>this.setState({ modal: true})}>
            <Text style={[text.m_13_dark, { color: '#fff' }]}>CANCEL ORDER</Text>
          </TouchableOpacity>

          {this.renderModal()}
          {this.renderModalCancel()}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fbfbfb',
    padding: 10,
    width: '100%',
    marginHorizontal: 12,
    marginTop: 1
  },
  header: {
    backgroundColor: '#fbfbfb',
    padding: 7,
    width: '100%',
    marginHorizontal: 12,
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sentBtn: {
    borderRadius: 20,
    borderColor: colors.GREY1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 12,
    paddingHorizontal: 20
  },
  contact: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: normalize(20),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(12)
  },
  bottomBtn: {
    padding: normalize(20),
    backgroundColor: '#72bba5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: { 
    flex: 1, 
    backgroundColor: "rgba(0, 0, 0,0.5)", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  modalContent: { 
    width: width-normalize(50), 
    height: width/1.6,
    borderRadius: 6, 
    shadowColor: "black", 
    justifyContent: "center", 
    shadowOffset: { 
      width: 2, 
      height: 2 
    }, 
    shadowOpacity: 0.4, 
    shadowRadius: 3,
    backgroundColor: "#fff" 
  },
  cancelText:{
    textAlign: 'center',
    marginTop: normalize(5),
    fontFamily: 'Montserrat-Bold',
    fontSize: normalize(17),
    color:'#72bba5'
  }
});

export default OrderDetail;