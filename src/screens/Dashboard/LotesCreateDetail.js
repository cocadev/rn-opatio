import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../common/colors'
import { p } from '../../common/normalize'
import { Actions } from 'react-native-router-flux'

import Cstyles from '../../common/c_style'
import text from '../../common/text'

import * as BTN from '../../components/Buttons'
import * as DROPDOWN from '../../components/DropDown'
import * as ICON from '../../components/Icons'
import * as CONFIG from '../../common/config'

export default class LoteCreateDetail extends React.Component {

    constructor(){
        super();
        this.state = {
            campo: 'Campo',
            summer1: 'Sin asignar',
            summer2: 'Asignar',
            bell: 'Campaña'
        }
    }
    render() {
        const { campo, summer1, summer2, bell } = this.state
        return (
            <View style={Cstyles.container}>

                <View style={styles.view}>

                    <ICON.IconBack 
                        top={p(22)} 
                        left={p(15)} 
                    />

                    <Text style={[text.t_32_700_ff_t30, { textAlign: 'center'}]}>{'Nombre Lote'}</Text>

                    <DROPDOWN.Large 
                        title={campo} 
                        onClick={()=>Actions.dropdown({
                            dropdown: CONFIG.create1,
                            update: (i) => { 
                                this.setState({ campo: i.name })
                            }
                        })}
                    />

                </View>

                <View style={styles.box}>

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

                    <Text style={[text.t_19_500_00, { marginTop: p(16)}]}>{'Cultivo invernal'}</Text>

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

                    <BTN.BtnNormal 
                        title={'GUARDAR LOTE'} 
                        back={colors.BLUE2} 
                        top={p(50)} 
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        paddingBottom: p(30), 
        backgroundColor: colors.BLUE2
    },
    box: {
        paddingTop: p(16), 
        backgroundColor: colors.WHITE, 
        flex: 1, 
        alignItems: 'center'
    }
})