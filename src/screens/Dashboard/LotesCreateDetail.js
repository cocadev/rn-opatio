import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../common/colors'
import { p } from '../../common/normalize'
import { Actions } from 'react-native-router-flux'
import { showMessage, hideMessage } from "react-native-flash-message";
import * as ATOM from '../../components/Atoms';

import Cstyles from '../../common/c_style'
import text from '../../common/text'
import api from '../../common/api'

import * as BTN from '../../components/Buttons'
import * as DROPDOWN from '../../components/DropDown'
import * as ICON from '../../components/Icons'
import * as CONFIG from '../../common/config'

export default class LoteCreateDetail extends React.Component {

    constructor(){
        super();
        this.state = {
            campo: null,
            campo_id: null,
            summer1: 'Sin asignar',
            summer2: 'Asignar',
            bell: 'Campaña',
            isWaiting: false
        }
    }

    createGIS(){

        this.setState({ isWaiting: true})

        let array = []
        var area = this.props.area.coordinates
        for (var i=0; i < area.length; i++ ) {
            array.push([area[i].longitude, area[i].latitude])
        }

        const { campo_id } = this.state

        let name = 'Test';
        let color = '#00000';
        let polygons = {
            "type": "Polygon",
            "coordinates": [array]
          }

          console.log('MY datas', campo_id, name, color, polygons)


        api.createGIS( campo_id, name, color, polygons, (res, err) => {
            console.log('******** res ********', res)
            console.log('******** err ********', err)

            if (err == null) {
                showMessage({
                    message: "Success",
                    description: "Gis correctly saved",
                    type: "success",
                    icon: "success",
                });
                this.setState({ isWaiting: false})
                Actions.pop()
            } else {
                showMessage({
                    message: "Error",
                    description: "Bad request syntax",
                    type: "danger",
                    icon: "danger",
                });
                this.setState({ isWaiting: false})

            }
        })
    }
    
    render() {

        const { campo, summer1, summer2, bell, isWaiting } = this.state

        return (
            <View style={Cstyles.container}>

                { isWaiting && <ATOM.Loading />}

                <View style={styles.view}>

                    <ICON.IconBack 
                        top={p(22)} 
                        left={p(15)} 
                    />

                    <Text style={[text.t_32_700_ff_t30, { textAlign: 'center'}]}>{'Nombre Lote'}</Text>

                    <DROPDOWN.Large 
                        title={campo} 
                        onClick={()=>Actions.searchCampo({
                            update: (i, id) => { 
                                this.setState({ campo: i, campo_id: id })
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
                        onClick={()=>this.createGIS()}
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