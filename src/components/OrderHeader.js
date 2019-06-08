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

export default class OrderHeader extends React.Component {

  render() {

    const { title } = this.props;

    return (
      <View style={{ flexDirection: 'row', padding: normalize(14), justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={ text.m_8_dark2 }>{title}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[ text.m_15_dark, { color: colors.GREEN }]}>CONTACT</Text>
          <Text style={[ text.bi_10_dark, { fontSize: 12 }]}>KEVIN</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});