import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { colors } from '../../common/colors'
import { p } from '../../common/normalize'

import Cstyles from '../../common/c_style'
import text from '../../common/text'

import * as BTN from '../../components/Buttons'
import * as DROPDOWN from '../../components/DropDown'
import * as HEADER from '../../components/Headers'

export default class CultivosDetail extends React.Component {
    render() {
        return (
            <View style={Cstyles.container}>
                <HEADER.NormalIcon back={colors.GREEN2}/>
                <ScrollView>
                    <View style={{ paddingBottom: p(30), backgroundColor: colors.GREEN2 }}>
                        <Text style={[text.t_32_700_ff_t30, { textAlign: 'center' }]}>{'Agregar cultivos'}</Text>
                        <DROPDOWN.Large title={'Campo'} />
                        <DROPDOWN.Large title={'Lote'} />
                    </View>

                    <View style={{ paddingVertical: p(16), backgroundColor: colors.WHITE, flex: 1, alignItems: 'center' }}>
                        <Text style={text.t_19_500_00}>{'Cultivo estival'}</Text>
                        <DROPDOWN.Small title={'Sin asignar'} />
                        <Text style={[text.t_19_500_00, { marginTop: p(16) }]}>{'Cultivo invernal'}</Text>
                        <DROPDOWN.Small title={'Sin asignar'} />
                        <DROPDOWN.Small title={'Campaña'} />
                        <BTN.BtnNormal title={'GUARDAR CULTIVOS'} back={colors.GREEN2} top={p(50)} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}