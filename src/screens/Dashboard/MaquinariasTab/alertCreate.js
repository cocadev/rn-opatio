import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../common/colors';
import { p } from '../../../common/normalize';
import text from '../../../common/text';
import * as ICON from '../../../components/Icons';
import { Actions } from 'react-native-router-flux';
import * as ATOM from '../../../components/Atoms';

export default class MachineryAlertsCreate extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.view}>
          <Text style={text.t_15_400_98}>Alertas:</Text>
          <></>
        </View>

        <ATOM.Atom1
          icon={<ICON.IconNeedle left={-p(4)} />}
          title={'Velocidad'}
          add={<ICON.IconAddPlusGreen right={p(25)} onClick={()=>Actions.MachineryAlertsCreateEdit({ title: 'Velocidad', icon: <ICON.IconNeedle/> })} />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle2 left={-p(4)} />}
          title={'Inactividad'}
          add={<ICON.IconAddPlusGreen right={p(25)} onClick={()=>Actions.MachineryAlertsCreateEdit({ title: 'Inactividad', icon: <ICON.IconNeedle2/>})} />}
        />

        <ATOM.Atom1
          icon={<ICON.IconNeedle3 left={-p(4)} />}
          title={'Horarios de trabajo'}
          add={<ICON.IconAddPlusGreen right={p(25)} onClick={()=>Actions.MachineryAlertsCreateEdit({ title: 'Horarios de trabajo', icon: <ICON.IconNeedle3/>})} />}
        />

        <ATOM.Atom1
          icon={<ICON.IconActive left={-p(4)} />}
          title={'Fuera del área de trabajo'}
          add={<ICON.IconAddPlusGreen right={p(25)} onClick={()=>Actions.MachineryAlertsCreateEdit({ title: 'Fuera del área de trabajo', icon: <ICON.IconActive/>})} />}
        />

        <ATOM.Atom1
          icon={<ICON.IconInActive left={-p(4)} />}
          title={'Superficie trabajada'}
          add={<ICON.IconAddPlusGreen right={p(25)} onClick={()=>Actions.MachineryAlertsCreateEdit({ title: 'Superficie trabajada', icon: <ICON.IconInActive/>})} />}
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
})