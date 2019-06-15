import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Header3 extends React.Component {

  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>

        <TouchableOpacity>
          <Image source={images.back} style={{ width: 20, height: 18 }} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.vertical}>
              <Text style={{ color: colors.WHITE, fontWeight: '700'}}>EDITAR</Text>
          </View> 

          <Image source={images.menu_yellow} style={{ width: p(7), height: p(23), marginLeft: p(18), marginTop: p(6) }} />
        </View>
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    height: p(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: "row",
    paddingHorizontal: p(20),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  vertical: {
    backgroundColor: colors.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    width: p(119),
    height: p(29),
    borderRadius: p(3),
    elevation:1,
    color: colors.ORANGE
  },

});
