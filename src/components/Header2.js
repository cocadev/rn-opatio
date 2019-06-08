import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../common/colors'
import { normalize } from './normalize';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default class Header extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.head}>{this.props.title}</Text>
          <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => Actions.pop()}>
            <MaterialCommunityIcons name="arrow-left" color={colors.GREEN} size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    paddingTop: 24,
    width: '100%',
    flexDirection: "row",
    backgroundColor: '#111',
  },
  head: {
    fontSize: normalize(11),
    color: colors.DARK,
    marginLeft: 50,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center'
  },
  view: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: 46,
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  }
});
