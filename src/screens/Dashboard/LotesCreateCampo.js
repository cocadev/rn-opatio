import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { colors } from '../../common/colors'
import { p } from '../../common/normalize'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Cstyles from '../../common/c_style'
import text from '../../common/text'

import * as BTN from '../../components/Buttons'
import * as ICON from '../../components/Icons'
import * as ATOM from '../../components/Atoms';
import * as actions from "../../store/lotes/actions";
import { Actions } from 'react-native-router-flux';

class LoteCreateCampo extends React.Component {

    constructor() {
        super();
        this.state = {
            isWaiting: false,
            title: 'hi'
        }
    }

    createCampo = () => {
        this.setState({ isWaiting: true })
        this.props.actions.createCampo(this.state.title)
            .then(() => {
                this.setState({ isWaiting: false })
                Actions.pop()
            })
            .catch(e => {
                this.setState({ isWaiting: false })
            })
    }


    render() {

        const { title, isWaiting } = this.state

        return (
            <View style={Cstyles.container}>

                {isWaiting && <ATOM.Loading />}

                <View style={styles.view}>

                    <ICON.IconBack
                        top={p(22)}
                        left={p(15)}
                    />

                    <Text style={[text.t_32_700_ff_t30, { textAlign: 'center' }]}>{'Nombre Campo'}</Text>

                </View>

                <View style={styles.box}>

                    <Text style={text.t_19_500_00}>{'Name'}</Text>

                    <TextInput
                        style={styles.titleInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(title) => this.setState({ title })}
                        value={title}
                    />

                    <BTN.BtnNormal
                        title={'GUARDAR LOTE'}
                        back={colors.BLUE2}
                        onClick={() => this.createCampo()}
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
)(LoteCreateCampo);

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