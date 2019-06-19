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
import RenderItem from './renderItem';

export default class Statistics extends React.Component {

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

        <View style={Cstyles.itemView}>
          <Text style={Cstyles.title}>{'Estadísticas de alertas'}</Text>
          <View style={Cstyles.graphView}>
            <Image source={images.needle} style={Cstyles.titleImg} />
            <View style={Cstyles.graph}></View>
            <Text style={Cstyles.count}>10</Text>
          </View>
          <View style={Cstyles.graphView}>
            <Image source={images.needle2} style={Cstyles.titleImg2} />
            <View style={[Cstyles.graph, { width: p(120) }]}></View>
            <Text style={Cstyles.count}>5</Text>
          </View>
          <View style={Cstyles.graphView}>
            <Image source={images.needle3} style={Cstyles.titleImg3} />
            <View style={[Cstyles.graph, { width: p(144) }]}></View>
            <Text style={Cstyles.count}>6</Text>
          </View>
          <View style={Cstyles.graphView}>
            <Image source={images.inactive} style={Cstyles.titleImg2} />
            <View style={[Cstyles.graph, { width: p(0) }]}></View>
            <Text style={[Cstyles.count, { fontSize: p(11), marginLeft: p(0) }]}>Alerta Inactiva</Text>
          </View>
          <View style={Cstyles.graphView}>
            <Image source={images.active} style={Cstyles.titleImg2} />
            <View style={[Cstyles.graph, { width: p(96) }]}></View>
            <Text style={Cstyles.count}>4</Text>
          </View>
        </View>

        <Text style={[Cstyles.title, { paddingLeft: p(20), paddingTop: p(15), paddingBottom: 0}]}>{'Estadísticas productivas'}</Text>

        <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, padding: p(15) }}>
          <View style={{ flexDirection: 'row', marginLeft: p(12) }}>
            <Image source={images.needle} style={Cstyles.titleImg} />
            <Text style={[Cstyles.text1, { lineHeight: p(22) }]}>{'Velocidad'}</Text>
          </View>
          <Text style={Cstyles.text1}>{'Promedio del día de la fecha: 5 Km/h'}</Text>
          <Text style={Cstyles.text1}>{'Promedio del periodo seleccionado: 6 Km/h'}</Text>
        </View>

        <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, padding: p(15) }}>
          <View style={{ flexDirection: 'row', marginLeft: p(12) }}>
            <Image source={images.needle2} style={Cstyles.titleImg2} />
            <Text style={[Cstyles.text1, { lineHeight: p(22) }]}>{'Actividad'}</Text>
          </View>
          <Text style={Cstyles.text1}>{'Actividad del día de la fecha: 5 hs 20 min'}</Text>
          <Text style={Cstyles.text1}>{'Promedio por día del periodo seleccionado: 8 hs 35 min'}</Text>
        </View>

        <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, padding: p(15) }}>
          <View style={{ flexDirection: 'row', marginLeft: p(12) }}>
            <Image source={images.needle3} style={Cstyles.titleImg3} />
            <Text style={[Cstyles.text1, { lineHeight: p(22) }]}>{'Horarios de trabajo'}</Text>
          </View>
          <Text style={Cstyles.text1}>{'Hora de inicio del día de la fecha: 8 hs 22 min'}</Text>
          <Text style={Cstyles.text1}>{'Hora de fin del día de la fecha: 18 hs 35 min'}</Text>
          <Text style={Cstyles.text1}>{'Hora de inicio promedio del periodo seleccionado: 8 hs 02 min'}</Text>
          <Text style={Cstyles.text1}>{'Hora de fin promedio del periodo seleccionado: 19 hs 31 min'}</Text>
        </View>

        <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, padding: p(15) }}>
          <View style={{ flexDirection: 'row', marginLeft: p(12) }}>
            <Image source={images.active} style={Cstyles.titleImg3} />
            <Text style={[Cstyles.text1, { lineHeight: p(22) }]}>{'Superficie trabajada'}</Text>
          </View>
          <Text style={Cstyles.text1}>{'El dia de la fecha: 55 ha'}</Text>
          <Text style={Cstyles.text1}>{'Promedio por día del periodo seleccionado: 73 ha'}</Text>
        </View>


      </View>
    )
  }
}

const Cstyles = StyleSheet.create({
  itemView: {
    backgroundColor: colors.GREY3,
    paddingTop: p(12),
    paddingLeft: p(20)
  },
  title: {
    fontSize: p(18),
    marginLeft: p(6),
    color: '#606060',
    paddingBottom: p(12),
    fontWeight: '700'
  },
  graph: {
    width: p(240),
    height: p(12),
    marginLeft: p(10),
    backgroundColor: colors.PINK
  },
  graphView: {
    flexDirection: 'row',
    marginHorizontal: p(10),
    alignItems: 'center',
    backgroundColor: colors.GREY3,
    marginVertical: p(10)
  },
  count: {
    color: '#606060',
    fontSize: p(14),
    fontWeight: '700',
    marginLeft: p(10)
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
    width: p(24),
    height: p(24)
  },
  text1: {
    color: colors.GREY6,
    fontSize: p(14),
    fontWeight: '700',
    marginLeft: p(10),
    lineHeight: p(27)
  }
})