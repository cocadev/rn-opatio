import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../common/colors';
import Timeline from 'react-native-timeline-listview'
import { TAREAS, TAREAS3, TAREAS2 } from '../../../common/config';
import { Entypo } from '@expo/vector-icons';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles'
import { Actions } from 'react-native-router-flux';
import  RenderItem  from './renderItem';

export default class AlarmasDetail extends React.Component {

  render() {
    return (
      <View style={styles.containerView}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: p(12) }}>
          <View style={styles.dropdown}>
            <Text>{'Fecha: 23/03/18'}</Text>
            <Entypo name={'chevron-down'} size={24} color={colors.GREY4} />
          </View>
          <View style={styles.dropdown}>
            <Text>{'Fecha: 23/04/18'}</Text>
            <Entypo name={'chevron-down'} size={24} color={colors.GREY4} />
          </View>
        </View>

        <ScrollView>
          <View style={Cstyles.itemView}>
            <Image source={images.needle} style={Cstyles.titleImg} />
            <Text style={{ fontSize: p(16), marginLeft: p(12) }}>{'Velocidad'}</Text>
          </View>
          {
            TAREAS.map((item, index) => {
              return (
                <RenderItem key={index} item={item}/>
              );
            })
          }
          <View style={Cstyles.itemView}>
            <Image source={images.needle2} style={Cstyles.titleImg2} />
            <Text style={{ fontSize: p(16), marginLeft: p(12) }}>{'Velocidad'}</Text>
          </View>
          {
            TAREAS2.map((item, index) => {
              return (
                <RenderItem key={index} item={item}/>
              );
            })
          }
          <View style={Cstyles.itemView}>
            <Image source={images.needle3} style={Cstyles.titleImg3} />
            <Text style={{ fontSize: p(16), marginLeft: p(12) }}>{'Velocidad'}</Text>
          </View>
          {
            TAREAS3.map((item, index) => {
              return (
                <RenderItem key={index} item={item}/>
              );
            })
          }
        </ScrollView>

      </View>
    )
  }
}

const Cstyles = StyleSheet.create({
  itemView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: colors.GREY3, 
    paddingTop: p(12), 
    paddingLeft: p(20)
  },
  titleImg: {
    width: p(25),
    height: p(19)
  },
  titleImg2: {
    width: p(25),
    height: p(24)
  },
  titleImg3: {
    width: p(25),
    height: p(24)
  }
})