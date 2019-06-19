import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../../common/colors';
import { p } from '../../../common/normalize';
import text from '../../../common/text';
import * as ICON from '../../../components/Icons';
import * as BTN from '../../../components/Buttons';

export default class MachineryAlerts extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.view}>
          <Text style={text.t_15_400_98}>Groups:</Text>
          <ICON.IconDown />
        </View>

        <View style={styles.itemView}>
          <ICON.IconFolder right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Siembra'}</Text>
            <Text style={text.t_15_400_72}>{'Grupo de Alertas'}</Text>
          </View>
          <ICON.IconAddPlusGreen right={p(30)}/>
          <ICON.IconSwitchOnGreen />
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle right={p(16)} left={p(36)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Velocidad'}</Text>
            <Text style={text.t_15_400_72}>{'Min: 2 km/h Max: 7 km/h'}</Text>
          </View>
          <ICON.IconDustbin />
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle2 right={p(16)} left={p(36)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Inactividad'}</Text>
            <Text style={text.t_15_400_72}>{'Tiempo: 30 min'}</Text>
          </View>
          <ICON.IconDustbin />
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle3 right={p(16)} left={p(36)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Horarios de trabajo'}</Text>
            <Text style={text.t_15_400_72}>{'Inicio: 8:30 hs Fin: 18:00 hs'}</Text>
          </View>
          <ICON.IconDustbin />
        </View>

        <View style={styles.itemView}>
          <ICON.IconFolder right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Cosecha'}</Text>
            <Text style={text.t_15_400_72}>{'Grupo de Alertas'}</Text>
          </View>
          <ICON.IconDustbin right={p(30)}/>
          <ICON.IconSwitchOffRed />
        </View>

        <View style={{ alignItems: 'center', marginTop: p(20), marginBottom: p(40)}}>
          <BTN.BlueWhite title={'CREAR GRUPO'} />
        </View>

        <View style={styles.view}>
          <Text style={text.t_15_400_98}>Alertas individuales:</Text>
          <ICON.IconDown />
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Velocidad'}</Text>
            <Text style={text.t_15_400_72}>{'Min: 2 km/h Max: 7 km/h'}</Text>
          </View>
          <ICON.IconDustbin right={p(30)}/>
          <ICON.IconSwitchOnGreen />
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle2 right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Inactividad'}</Text>
            <Text style={text.t_15_400_72}>{'Tiempo: 30 min'}</Text>
          </View>
          <ICON.IconDustbin right={p(30)}/>
          <ICON.IconSwitchOffRed />
        </View>

        <View style={styles.itemView}>
          <ICON.IconNeedle3 right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Horarios de trabajo'}</Text>
            <Text style={text.t_15_400_72}>{'Inicio: 8:30 hs Fin: 18:00 hs'}</Text>
          </View>
          <ICON.IconDustbin right={p(30)}/>
          <ICON.IconSwitchOffRed />
        </View>

        <View style={styles.itemView}>
          <ICON.IconActive right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Fuera del área de trabajo'}</Text>
            <Text style={text.t_15_400_72}>{'Área de trabajo: Lote 2'}</Text>
          </View>
          <ICON.IconDustbin right={p(30)}/>
          <ICON.IconSwitchOffRed />
        </View>

        <View style={styles.itemView}>
          <ICON.IconInActive right={p(16)}/>
          <View style={{ flex: 1}}>
            <Text style={text.t_16_700_2e}>{'Superficie trabajada'}</Text>
            <Text style={text.t_15_400_72}>{'Min: 30 h'}</Text>
          </View>
          <ICON.IconDustbin right={p(30)}/>
          <ICON.IconSwitchOffRed />
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