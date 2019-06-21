import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../../../common/images';
import { colors } from '../../../common/colors'
import { p } from '../../../common/normalize';
import * as BTN from '../../../components/Buttons';
import * as ICON from '../../../components/Icons';

export default class GPS extends React.Component {

  render() {
    const { title, address, description } = this.props
    return (
      <View style={styles.container}>

        <View style={{ backgroundColor: colors.WHITE, margin: p(21) }}>
          <Text style={styles.text1}>{'Estado: En vivo'}</Text>
        </View>

        <View style={{ backgroundColor: colors.GREY3, padding: p(21) }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ICON.IconLocate />
              <Text style={[styles.text2, { marginLeft: p(16) }]}>{'GPS'}</Text>
            </View>
            <TouchableOpacity onPress={this.props.update3}>
              <Text style={styles.text3}>{'Código de GPS: 002BA98C'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text4}>{'Última conexión: Ahora'}</Text>
          <Text style={styles.text4}>{'Estas utilizando el GPS de optiagro para obtener información de la maquinaria.'}</Text>
          <Text style={styles.text4}>{'Puedes desvincular el GPS de está máquina, para ponerselo a otra o para remplazarlo, presionando "Quitar GPS".'}</Text>

          <TouchableOpacity onPress={this.props.update1} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <BTN.BlueWhite title={'QUITAR GPS'}/>
          </TouchableOpacity>

        </View>

        <View style={{ backgroundColor: colors.WHITE, padding: p(21) }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ICON.IconDownload right={p(15)}/>
              <Text style={[styles.text2, { marginLeft: p(16) }]}>{'Extraer datos de GPS'}</Text>
            </View>
          </View>

          <Text style={styles.text4}>{'Puedes extraer los datos del GPS de la máquina para verlos mas tarde desde donde quieras.'}</Text>

          <TouchableOpacity onPress={this.props.update2} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <BTN.BlueWhite title={'EXTRAER DATOS'}/>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  text1: {
    color: '#000000',
    fontSize: p(16),
    fontWeight: '500',
  },
  text2: {
    color: colors.GREY4,
    fontSize: p(15),
    fontWeight: '700',
  },
  text3: {
    color: colors.BLACK,
    fontSize: p(13),
    fontWeight: '700',
  },
  text4: {
    marginVertical: p(12),
    color: colors.GREY8,
    fontSize: p(17),
    lineHeight: p(20),
    fontWeight: '400',
  },
  rectNgulo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: p(16),
    width: 120,
    height: 30,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    borderRadius: 3,
    backgroundColor: '#2298d7',
  },
  btnText: {
    color: '#eeeeed',
    fontSize: p(14),
    fontWeight: '700',
  }
});
