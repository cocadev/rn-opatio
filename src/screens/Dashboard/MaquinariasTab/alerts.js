import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../common/colors';
import { p } from '../../../common/normalize';
import text from '../../../common/text';
import * as ICON from '../../../components/Icons';
import * as BTN from '../../../components/Buttons';
import * as ATOM from '../../../components/Atoms';

export default class MachineryAlerts extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.view}>
          <Text style={text.t_15_400_98}>Groups:</Text>
          <ICON.IconDown />
        </View>

        <ATOM.Atom1
          icon={<ICON.IconFolder left={-p(10)} />}
          title={'Siembra'}
          note={'Grupo de Alertas'}
          add={<ICON.IconAddPlusGreen right={p(25)} />}
          right={<ICON.IconSwitchOnGreen />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle left={p(25)} />}
          title={'Velocidad'}
          note={'Min: 2 km/h Max: 7 km/h'}
          right={<ICON.IconDustbin />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle2 left={p(25)} />}
          title={'Inactividad'}
          note={'Tiempo: 30 min'}
          right={<ICON.IconDustbin />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle3 left={p(25)} />}
          title={'Horarios de trabajo'}
          note={'Inicio: 8:30 hs Fin: 18:00 hs'}
          right={<ICON.IconDustbin />}
        />

        <ATOM.Atom1
          icon={<ICON.IconFolder left={-p(10)} />}
          title={'Cosecha'}
          note={'Grupo de Alertas'}
          add={<ICON.IconDustbin right={p(25)} />}
          right={<ICON.IconSwitchOffRed />}
        />

        <View style={{ alignItems: 'center', marginVertical: p(40) }}>
          <BTN.BtnSmall title={'CREAR GRUPO'} back={colors.BLUE2} text={colors.WHITE} />
        </View>

        <View style={styles.view}>
          <Text style={text.t_15_400_98}>Alertas individuales:</Text>
          <ICON.IconDown />
        </View>

        <ATOM.Atom1
          icon={<ICON.IconNeedle left={-p(10)} />}
          title={'Velocidad'}
          note={'Min: 2 km/h Max: 7 km/h'}
          add={<ICON.IconDustbin right={p(25)} />}
          right={<ICON.IconSwitchOnGreen />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle2 left={-p(10)} />}
          title={'Inactividad'}
          note={'Tiempo: 30 min'}
          add={<ICON.IconDustbin right={p(25)} />}
          right={<ICON.IconSwitchOffRed />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle3 left={-p(10)} />}
          title={'Horarios de trabajo'}
          note={'Inicio: 8:30 hs Fin: 18:00 hs'}
          add={<ICON.IconDustbin right={p(25)} />}
          right={<ICON.IconSwitchOffRed />}
        />

        <ATOM.Atom1
          icon={<ICON.IconActive left={-p(10)} />}
          title={'Fuera del área de trabajo'}
          note={'Área de trabajo: Lote 2'}
          add={<ICON.IconDustbin right={p(25)} />}
          right={<ICON.IconSwitchOffRed />}
        />

        <ATOM.Atom1
          icon={<ICON.IconInActive left={-p(10)} />}
          title={'Superficie trabajada'}
          note={'Min: 30 h'}
          add={<ICON.IconDustbin right={p(25)} />}
          right={<ICON.IconSwitchOffRed />}
        />

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