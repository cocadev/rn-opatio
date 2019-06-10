import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Button extends React.Component {

  render() {
    const {text, type} = this.props;
    return (
      <View style={[styles.button, { backgroundColor: type=='SKY' ? colors.SKY : colors.WHITE }]}>
        <Text style={[styles.text, { color: type=='SKY'? colors.WHITE: colors.SKY}]}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    button:{
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 4,
      width: p(250),
      height: p(50)
    },
    text: {
      fontWeight:"600",
      fontSize: p(16),
    
    }
});
