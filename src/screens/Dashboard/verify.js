import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import i from '../../common/i'
import Header2 from '../../components/Header2';
import GradientButton from '../../components/GradientButton';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import text from '../../common/text';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import CardItem from '../../components/CardItem';
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../components/normalize';
import { family } from '../../common/family';

const width = Dimensions.get('window').width

class Verify extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    success: 0,
    number: '',
    name: '',
    cvv: '',
    date: '',
    code: ''
  }

  render() {
    const { number, code, date, cvv, name, success } = this.state
    return (
      <View style={i.container}>
        <Header2 title={'Verify'} />

        <View style={{ paddingHorizontal: normalize(12) }}>

          <Text style={styles.inputText}>Card Number</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={number => this.setState({ number })}
            value={number}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{flex:2}}>
              <Text style={styles.inputText}>Full Name (as shown on the card)</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={name => this.setState({ name })}
                value={name}
              />
            </View>
            <View style={{flex:1}}>
              <Text style={[styles.inputText, { marginLeft: normalize(12)}]}>CVV Number</Text>
              <TextInput
                style={[styles.input, { marginLeft: normalize(12)}]}
                underlineColorAndroid='transparent'
                onChangeText={cvv => this.setState({ cvv })}
                value={cvv}
              />
            </View>
          </View>

           <View style={{ flexDirection: 'row' }}>
            <View style={{flex:1}}>
              <Text style={styles.inputText}>Expriy Date</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={date => this.setState({ date })}
                value={date}
              />
            </View>
            <View style={{flex:1}}>
              <Text style={[styles.inputText, { marginLeft: normalize(12)}]}>Postal/Zip Code</Text>
              <TextInput
                style={[styles.input, { marginLeft: normalize(12)}]}
                underlineColorAndroid='transparent'
                onChangeText={code => this.setState({ code })}
                value={code}
              />
            </View>
          </View>
        </View>

        { success === 1 &&
           <Text style={styles.warnText}>The card information entered was incorrect. Please double check and try again.</Text>
        }

        <TouchableOpacity onPress={() => this.setState({ success: 1})} style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 12, }}>
          <GradientButton title="VERIFY" vetical={20} radius={4} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.WHITE,
    paddingLeft: 12,
    height: normalize(32),
    marginVertical: normalize(3)
  },
  inputText: {
    fontFamily: family.Medium,
    fontSize: normalize(12),
    marginTop: normalize(12)
  },
  warnText: {
    fontFamily: family.Medium,
    color: colors.RED,
    fontSize: normalize(18),
    marginTop: normalize(12),
    marginHorizontal: normalize(12)
  }
});

export default Verify;