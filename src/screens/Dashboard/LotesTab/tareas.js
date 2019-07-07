import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { TAREAS } from '../../../common/config';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles'
import { Actions } from 'react-native-router-flux';
import Cstyles from '../../../common/c_style';
import * as DROPDOWN from '../../../components/DropDown';

export default class Tareas extends React.Component {

  renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ paddingHorizontal: p(15), flexDirection: 'row', backgroundColor: colors.WHITE }}>
        <View style={{ width: 40 }}>
          <Text style={{ fontSize: 9 }}>{item.name}</Text>
          <Text style={{ fontSize: 9 }}>{item.time}</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={[styles.timeDot, {
            backgroundColor: item.type == 0 ? colors.SKY : (item.type == 1 ? colors.GREY4 : colors.PURPLE)
          }]}></View>
          <View style={styles.dot}></View>
        </View>

        <View style={{ flex: 1 }}>
          {
            item.visible &&
            <View style={{ flexDirection: 'row', marginHorizontal: p(22), marginVertical: p(14) }}>
              <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
              <Text style={{ alignSelf: 'center', paddingHorizontal: p(16), fontSize: p(12) }}>Semana 11 del 2019</Text>
              <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
            </View>
          }
          <TouchableOpacity onPress={() => Actions.tareasdetail()}
            style={[styles.timeView, {
              backgroundColor: item.type == 0 ? colors.SKY : (item.type == 1 ? colors.WHITE : colors.PURPLE),
              borderColor: item.type == 1 ? colors.GREY6 : null,
              borderWidth: item.type == 1 ? 2 : null,
            }]}>
            <Image source={item.type == 1 ? images.tareaG : images.tareaW} style={styles.img} />
            <View>
              <Text style={{ color: item.type == 1 ? colors.GREY4 : colors.WHITE, fontSize: p(16) }}>{item.title}</Text>
              <Text style={{ color: item.type == 1 ? colors.GREY4 : colors.WHITE, fontSize: p(13) }}>{item.description}</Text>
            </View>
            <Text style={{ flex: 1, textAlign: 'right', color: item.type == 1 ? colors.GREY4 : colors.WHITE, fontSize: p(11) }}>{item.published}</Text>

          </TouchableOpacity>
        </View>

      </View>
    )
  }

  render() {
    return (
      <View style={Cstyles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: p(25) }}>
          <DROPDOWN.XSmall title={'Fecha: 23/03/18'} />
          <DROPDOWN.XSmall title={'Fecha: 23/04/18'} />
        </View>

        <View style={{ alignItems: 'center', marginBottom: p(20) }}>
          <DROPDOWN.XSmall title={'Ordenar por'} />
        </View>

        <FlatList
          data={TAREAS}
          renderItem={this.renderItem}
          keyExtractor={(item, i) => String(i)}
        />

      </View>
    )
  }
}