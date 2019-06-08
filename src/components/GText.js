import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';
import Popover, { Rect, Size } from 'react-native-popover-view';
import { colors } from '../common/colors'
import { family } from '../common/family';

export default class GText extends React.Component {

  render() {
    const { content } = this.props
    const title = content[0]
    const fontSize = content[1]?content[1]:12
    const top = content[2]
    const color = content[3]?content[3]:colors.DARK
    const familys = content[4]?content[4]:family.Medium
    const lefts = content[5]?content[5]:0

    return (
      <Text 
        style={{ fontSize: fontSize, color: color, fontFamily: familys, marginTop: top, paddingLeft: lefts}}
      >
      {title}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
 
});
