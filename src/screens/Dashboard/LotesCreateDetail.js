import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { colors } from '../../common/colors'
import { p } from '../../common/normalize'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Cstyles from '../../common/c_style'
import text from '../../common/text'
import ValidationService from '../../common/validation';

import * as BTN from '../../components/Buttons'
import * as DROPDOWN from '../../components/DropDown'
import * as ICON from '../../components/Icons'
import * as ATOM from '../../components/Atoms';
import * as actions from "../../store/lotes/actions";

class LoteCreateDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            campo: null,
            campo_id: null,
            summer1: 'Sin asignar',
            summer2: 'Asignar',
            bell: 'Campaña',
            isWaiting: false,
            title: null
        }
    }

    createGIS() {

        const { title, campo_id } = this.state
        
        if (!ValidationService.createGIS(title, campo_id)){
            return false
        }

        this.setState({ isWaiting: true })

        let array = []
        var area = this.props.area.coordinates
        for (var i = 0; i < area.length; i++) {
            array.push([area[i].longitude, area[i].latitude])
        }

        let color = '#00000';
        let polygons = {
            "type": "Polygon",
            "coordinates": [array]
        }

        this.props.actions.createGIS(campo_id, title, color, polygons)
        .then((res)=>this.setState({ isWaiting: false}))
        .catch(e=>this.setState({isWaiting: false}))


       
    }

    render() {

        const { campo, title, summer2, bell, isWaiting } = this.state

        return (
            <View style={Cstyles.container}>

                {isWaiting && <ATOM.Loading />}

                <View style={styles.view}>

                    <ICON.IconBack
                        top={p(22)}
                        left={p(15)}
                    />

                    <Text style={[text.t_32_700_ff_t30, { textAlign: 'center' }]}>{'Nuevo Campo'}</Text>

                    <DROPDOWN.Large
                        title={campo}
                        onClick={() => Actions.searchCampo({
                            update: (i, id) => {
                                this.setState({ campo: i, campo_id: id })
                            }
                        })}
                    />

                </View>

                <View style={styles.box}>

                    <Text style={text.t_19_500_00}>{'Nombre'}</Text>

                    <TextInput
                        style={styles.titleInput}
                        // placeholder={'Note Title'}
                        // placeholderTextColor={colors.GREY4}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(title) => this.setState({ title })}
                        value={title}
                    />

                    {/* <Text style={[text.t_19_500_00, { marginTop: p(16)}]}>{'Cultivo invernal'}</Text> */}

                    {/* <DROPDOWN.Small 
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
                    /> */}

                    <BTN.BtnNormal
                        title={'GUARDAR CAMPO'}
                        back={colors.BLUE2}
                        onClick={() => this.createGIS()}
                        top={p(50)}
                    />
                </View>

            </View>
        )
    }
}

export default connect(
    state => ({
        testLote: state.lotes.testLote,
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(LoteCreateDetail);

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
    },
    titleInput: {
        color: 'grey',
        width: p(250),
        paddingLeft: p(16),
        fontSize: p(17),
        paddingVertical: p(5),
        marginTop: 7,
        fontWeight: '400',
        height: p(45),
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 8
    },
})