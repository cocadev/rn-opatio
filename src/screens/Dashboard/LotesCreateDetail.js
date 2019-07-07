import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../common/colors';
import { p } from '../../common/normalize';
import Cstyles from '../../common/c_style';
import text from '../../common/text';
import * as BTN from '../../components/Buttons';
import * as DROPDOWN from '../../components/DropDown';
import * as ICON from '../../components/Icons';

export default class LoteCreateDetail extends React.Component {
    render() {
        return (
            <View style={Cstyles.container}>

                <View style={{ paddingBottom: p(30), backgroundColor: colors.BLUE2 }}>
                    <ICON.IconBack top={p(22)} left={p(15)} />
                    <Text style={[text.t_32_700_ff_t30, { textAlign: 'center'}]}>{'Nombre Lote'}</Text>
                    <DROPDOWN.Large title={'Campo: '}/>
                </View>

                <View style={{ paddingTop: p(16), backgroundColor: colors.WHITE, flex: 1, alignItems: 'center' }}>
                    <Text style={text.t_19_500_00}>{'Cultivo estival'}</Text>
                    <DROPDOWN.Small title={'Sin asignar'}/>
                    <Text style={[text.t_19_500_00, { marginTop: p(16)}]}>{'Cultivo invernal'}</Text>
                    <DROPDOWN.Small title={'Sin asignar'}/>
                    <DROPDOWN.Small title={'Campaña'}/>
                    <BTN.BtnNormal title={'GUARDAR LOTE'} back={colors.BLUE2} top={p(50)} />
                </View>

            </View>
        )
    }
}
