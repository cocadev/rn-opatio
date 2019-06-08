import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../components/normalize';
import i from '../../common/i'
import GradientButton from '../../components/GradientButton';
import Header from '../../components/Header2';
import text from '../../common/text';
import OrderHeader from '../../components/OrderHeader';
import Ratings from '../../components/Ratings';

const width = Dimensions.get('window').width

class OrderReview extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      order: false,
      showModal: false,
      text: ''
    }
  }

  render() {

    return (
      <KeyboardAvoidingView style={i.container}>
        <Header title={'Review'}/>

        <OrderHeader title={'SUCCESSFULLY COMPLETED!!'} />

        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: normalize(16) }}>

          <View style={{ backgroundColor: '#fff', paddingBottom: 20 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop:16 }}>
                <Text style={text.b_13_sky}>ORDER DETAILS</Text>
              </View>
              <Text style={i.smallText}>Best Snow Cleaning Service lorem orem ipsum dolor sit amet.</Text>
          </View>

          <View style={i.bar} />

          <View style={{ backgroundColor: '#fff', paddingBottom: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={text.b_13_sky}>Review</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
                <Ratings size={28} margin={2} />
                <Text style={[text.m_10_dark, { marginLeft: normalize(15)}]}>COMMUNICATION</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
              <Ratings size={28} margin={2} />
                <Text style={[text.m_10_dark, { marginLeft: normalize(15)}]}>PROFESSIONALISM</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
              <Ratings size={28} margin={2} />
                <Text style={[text.m_10_dark, { marginLeft: normalize(15)}]}>LIKELY TO RECOMMEND</Text>
              </View>
          </View>

          <View style={i.bar} />

          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={4}
              placeholder="Write a comment"
              placeholderTextColor="grey"
            />
          </View>

          <TouchableOpacity style={{ width: normalize(120), marginTop: normalize(6), marginLeft: normalize(-7) }}>
            <GradientButton style={styles.roundBtn} title={'SUBMIT'} />
          </TouchableOpacity>

        </ScrollView>

        <View style={styles.downBtn}>
          <Text style={text.m_10_dark}>RAISE A COMPLAINT</Text>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  roundBtn: {
    width: width / 2.4,
    height: width / 11,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  downBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(16)
  },
  textAreaContainer: {
    borderColor: colors.GREY4,
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: normalize(110),
    justifyContent: "flex-start",
  }
});

export default OrderReview;