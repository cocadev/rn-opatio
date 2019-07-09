import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../common/colors';
import { p } from '../../../common/normalize';
import text from '../../../common/text';
import * as ICON from '../../../components/Icons';
import { Actions } from 'react-native-router-flux';

export default class MachineryAlertsCreate extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.view}>
          <Text style={text.t_15_400_98}>Alertas:</Text>
          <></>
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Velocidad'}</Text>
          </View>
          <TouchableOpacity onPress={()=>Actions.MachineryAlertsCreateEdit()}>
            <ICON.IconAddPlusGreen right={p(30)}/>
          </TouchableOpacity>
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle2 right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Inactividad'}</Text>
          </View>
          <ICON.IconAddPlusGreen right={p(30)}/>
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle3 right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Horarios de trabajo'}</Text>
          </View>
          <ICON.IconAddPlusGreen right={p(30)}/>
        </View>

        <View style={styles.itemView}>
          <ICON.IconActive right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Fuera del área de trabajo'}</Text>
          </View>
          <ICON.IconAddPlusGreen right={p(30)}/>
        </View>

        <View style={styles.itemView}>
          <ICON.IconInActive right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Superficie trabajada'}</Text>
          </View>
          <ICON.IconAddPlusGreen right={p(30)}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: colors.WHITE
  },
  view: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: p(12), 
    marginHorizontal: p(61)
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: p(23),
    backgroundColor: colors.WHITE,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    height: p(72),
    borderBottomColor: colors.GREY3,
    borderBottomWidth: 2
  },
})