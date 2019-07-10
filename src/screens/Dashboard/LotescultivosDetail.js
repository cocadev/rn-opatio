import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { colors } from '../../common/colors'
import { p } from '../../common/normalize'
import { Actions } from 'react-native-router-flux';

import Cstyles from '../../common/c_style'
import text from '../../common/text'

import * as BTN from '../../components/Buttons'
import * as DROPDOWN from '../../components/DropDown'
import * as HEADER from '../../components/Headers'
import * as CONFIG from '../../common/config'

export default class CultivosDetail extends React.Component {

    constructor(){
        super();
        this.state = {
            campo: 'Campo',
            lote: 'Lote',
            summer1: 'Asignar',
            summer2: 'Asignar',
            bell: 'Campaña'
        }
    }

    render() {

        const { campo, lote, summer1, summer2, bell } = this.state

        return (
            <View style={Cstyles.container}>

                <HEADER.NormalIcon back={colors.GREEN2}/>

                <ScrollView>
                    <View style={{ paddingBottom: p(30), backgroundColor: colors.GREEN2 }}>

                        <Text style={[text.t_32_700_ff_t30, { textAlign: 'center' }]}>{'Agregar cultivos'}</Text>

                        <DROPDOWN.Large 
                            title={campo} 
                            onClick={()=>Actions.dropdown({
                                dropdown: CONFIG.create1,
                                update: (i) => { 
                                    this.setState({ campo: i.name })
                                }
                            })}
                        />

                        <DROPDOWN.Large 
                            title={lote} 
                            onClick={()=>Actions.dropdown({
                                dropdown: CONFIG.create1,
                                update: (i) => { 
                                    this.setState({ lote: i.name })
                                }
                            })}
                        />

                    </View>

                    <View style={{ paddingVertical: p(16), backgroundColor: colors.WHITE, flex: 1, alignItems: 'center' }}>

                        <Text style={text.t_19_500_00}>{'Cultivo estival'}</Text>

                        <DROPDOWN.Small 
                            title={summer1} 
                            onClick={()=>Actions.dropdown({
                                dropdown: CONFIG.assign,
                                update: (i) => { 
                                    this.setState({ summer1: i.name })
                                }
                            })}
                        />

                        <Text style={[text.t_19_500_00, { marginTop: p(16) }]}>{'Cultivo invernal'}</Text>

                        <DROPDOWN.Small 
                            title={summer2} 
                            onClick={()=>Actions.dropdown({
                                dropdown: CONFIG.assign,
                                update: (i) => { 
                                    this.setState({ summer2: i.name })
                                }
                            })}
                        />

                        <DROPDOWN.Small 
                            title={bell} 
                            onClick={()=>Actions.dropdown({
                                dropdown: CONFIG.bell,
                                update: (i) => { 
                                    this.setState({ bell: i.name })
                                }
                            })}
                        />

                        <BTN.BtnNormal title={'GUARDAR CULTIVOS'} back={colors.GREEN2} top={p(50)} />

                    </View>
                </ScrollView>
            </View>
        )
    }
}