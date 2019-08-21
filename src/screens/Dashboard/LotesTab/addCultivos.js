import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { colors } from '../../../common/colors'
import { p } from '../../../common/normalize'
import { Actions } from 'react-native-router-flux';

import Cstyles from '../../../common/c_style'
import text from '../../../common/text'

import * as BTN from '../../../components/Buttons'
import * as DROPDOWN from '../../../components/DropDown'
import * as HEADER from '../../../components/Headers'
import * as CONFIG from '../../../common/config'
import * as actions from "../../../store/lotes/actions";
import { showMessage } from "react-native-flash-message";

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class AddCultivos extends React.Component {

    constructor(){
        super();
        this.state = {
            campo: '2019',
            summer1: 'Asignar',
            summer2: 'Asignar',
            bell: 'Campaña'
        }
    }

    addCultivos = () => {
        const { campo, summer1, summer2 } = this.state
        this.props.actions.addCultivos(this.props.testLote.id, campo, summer1, summer2, '#FFF')
         .then((res, err)=>{
             if(!err){ 
                 console.log('res-> ', res)
                 showMessage({
                    message: "Success",
                    description: "Post Crop added",
                    type: "success",
                    icon: "success",
                });

                Actions.pop()
             }
             if(err){ console.log('err-> ', err)}

         })
    }

    render() {

        const { campo, summer1, summer2 } = this.state

        return (
            <View style={Cstyles.container}>

                <HEADER.NormalIcon back={colors.GREEN2}/>

                <ScrollView>
                    <View style={{ paddingBottom: p(30), backgroundColor: colors.GREEN2 }}>

                        <Text style={[text.t_32_700_ff_t30, { textAlign: 'center' }]}>{'Campaing'}</Text>

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

                        <BTN.BtnNormal 
                            title={'GUARDAR CULTIVOS'} 
                            back={colors.GREEN2} 
                            top={p(50)} 
                            onClick={this.addCultivos}
                        />

                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default connect(
    state => ({
        allLotes: state.lotes.allLotes,
        testPolygon: state.lotes.testPolygon,
        testNotes: state.lotes.testNotes,
        testTasks: state.lotes.testTasks,
        testLote: state.lotes.testLote,
        testCrops: state.lotes.testCrops,   
        testLote: state.lotes.testLote,   

        
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AddCultivos);