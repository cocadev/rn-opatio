import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../common/colors';
import text from '../common/text';

export default class CardItem extends React.Component {

  render() {
    const { check } = this.props;
    return (
      <View style={{ backgroundColor: check ? '#e9f6f9' : '#eeeded', padding:16, marginTop:20, }}>
        <View style={{flexDirection:'row', justifyContent: 'space-between',  alignItems:'center'}}>
           <Text style={[text.m_13_dark, {fontSize:22}]}>4263 4263 4263 833</Text>
           {check && <Ionicons name="ios-checkmark-circle" size={24} color={colors.GREEN} style={{marginHorizontal: 6,}}/>}
        </View>
        <Text style={[text.m_13_dark, {color:colors.SKY, marginVertical:6}]}>SHIVANG POPAT</Text>
        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
           <Text style={text.m_10_dark2}>Visa card</Text>
           <Text style={text.m_10_dark2}>REMOVE</Text>
        </View>
      </View>
    )
  }
}
