import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../common/colors';
import Timeline from 'react-native-timeline-listview'
import { CULTIVOS } from '../../../common/config';
import { Entypo } from '@expo/vector-icons';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles';

const view = {
    width: p(232),
    height: p(33),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: p(12),
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    borderRadius: 5,
    backgroundColor: colors.YEL,
}

const text = {
    color: colors.BLACK,
    fontSize: p(15),
    fontWeight: '700',
}

export default class Cultivos extends React.Component {

  render() {
    return (
      <View style={styles.containerView}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: p(12) }}>
          <View style={styles.dropdown}>
            <Text>{'Desde campaña'}</Text>
            <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
          </View>
          <View style={styles.dropdown}>
            <Text>{'Hasta campaña'}</Text>
            <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
          </View>
        </View>

        <ScrollView>
          {
            CULTIVOS.map((item, index) => {
              return (
                <View key={index} style={{ paddingHorizontal: p(15), alignItems: 'center' }}>
                   <Text>Campaña {item.time}</Text>
                   <View style={view}>
                       <Text style={text}>Maíz</Text>
                   </View>
                   <View style={view}>
                       <Text style={text}>Maíz</Text>
                   </View>
                </View>
              );
            })
          }
        </ScrollView>

      </View>
    )
  }
}