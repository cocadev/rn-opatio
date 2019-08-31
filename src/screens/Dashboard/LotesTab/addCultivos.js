import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { colors } from '../../../common/colors'
import { p } from '../../../common/normalize'
import { Actions } from 'react-native-router-flux';
import { showMessage } from "react-native-flash-message";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Cstyles from '../../../common/c_style'
import text from '../../../common/text'
import ValidationService from '../../../common/validation';

import * as BTN from '../../../components/Buttons'
import * as DROPDOWN from '../../../components/DropDown'
import * as HEADER from '../../../components/Headers'
import * as CONFIG from '../../../common/config'
import * as actions from "../../../store/lotes/actions";

class AddCultivos extends React.Component {

    constructor() {
        super();
        this.state = {
            year: '2019',
            summer1: 'Asignar',
            summer2: 'Asignar',
            bell: 'Campaña',
            field:'',
            campo:'',
            campo_id: null
        }
    }

    addCultivos = () => {
        const { year, summer1, summer2, campo_id } = this.state
        if (!ValidationService.addCultivos(campo_id)) {
            return false
        }
        this.props.actions.addCultivos(campo_id, year, summer1, summer2, '#FFF')
            .then((res, err) => {
                if (!err) {
                    console.log('res-> ', res)
                    showMessage({
                        message: "Success",
                        description: "Post Crop added",
                        type: "success",
                        icon: "success",
                    });

                    Actions.pop()
                }
                if (err) { console.log('err-> ', err) }

            })
    }

    render() {

        const { campo, summer1, summer2, field, year } = this.state

        return (
            <View style={Cstyles.container}>

                <HEADER.NormalIcon back={colors.GREEN2} />

                <ScrollView>
                    <View style={{ paddingBottom: p(30), backgroundColor: colors.GREEN2 }}>

                        <Text style={[text.t_32_700_ff_t30, { textAlign: 'center' }]}>{'Campaing'}</Text>

                        <DROPDOWN.Large
                            title={year}
                            onClick={() => Actions.dropdown({
                                dropdown: CONFIG.create1,
                                update: (i) => {
                                    this.setState({ year: i.name })
                                }
                            })}
                        />

                        <DROPDOWN.Large
                            title={field + '-' + campo}
                            onClick={() => Actions.checkLote({
                                dropdown: CONFIG.create1,
                                update: (field_name, field_id, lote_name) => {
                                    this.setState({ field: field_name, campo: lote_name, campo_id: field_id })
                                }
                            })}
                        />

                    </View>

                    <View style={{ paddingVertical: p(16), backgroundColor: colors.WHITE, flex: 1, alignItems: 'center' }}>

                        <Text style={text.t_19_500_00}>{'Cultivo estival'}</Text>

                        <DROPDOWN.Small
                            title={summer1}
                            onClick={() => Actions.dropdown({
                                dropdown: CONFIG.assign,
                                update: (i) => {
                                    this.setState({ summer1: i.name })
                                }
                            })}
                        />

                        <Text style={[text.t_19_500_00, { marginTop: p(16) }]}>{'Cultivo invernal'}</Text>

                        <DROPDOWN.Small
                            title={summer2}
                            onClick={() => Actions.dropdown({
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