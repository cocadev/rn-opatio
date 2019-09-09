import * as React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../common/colors';
import { Entypo } from '@expo/vector-icons';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { p } from '../../common/normalize';
import * as BTN from '../../components/Buttons';
import * as actions from "../../store/common/actions";

class Forgot extends React.Component {

    state = {
        email: '',
        password: '',
        isWaiting: false,
    }

    render() {

        const { email, password } = this.state;

        return (
            <View style={styles.container}>

                <TouchableOpacity style={{ marginLeft: p(4) }} onPress={() => Actions.intro()}>
                    <Entypo name="chevron-left" color={colors.SKY} size={36} />
                </TouchableOpacity>

                <View>
                    <Text style={styles.textH}>Recuperar Contraseña</Text>
                    <Text style={styles.text}>Vamos a enviarte instrucciones para recuperar tu Contraseña:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder={'Email de trabajo:'}
                        underlineColorAndroid='transparent'
                        autoCapitalize = 'none'
                        onChangeText={email => this.setState({ email })}
                        value={email}
                    />
                </View>

                <View style={{ alignItems: 'center', marginVertical: p(40) }}>

           

                    <BTN.SkyWhite title={'ENVIAR'} onClick={()=>console.log('waiting api ...')} top={20} bottom={20}/>

                </View>
            </View>

        )
    }
}

export default connect(
    state => ({ user: state.common.user, }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(Forgot);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        justifyContent: 'space-between',
        backgroundColor: colors.WHITE
    },
    input: {
        marginTop: p(25),
        marginHorizontal: p(15),
        borderRadius: 5,
        marginVertical: 3,
        fontSize: p(15),
        paddingTop: 12,
        paddingLeft: 7,
        height: 55,
        color: '#4c4c4c',
        borderBottomWidth: 1,
        borderBottomColor: colors.GREY1
    },
    textH: {
        color: colors.TEXT,
        fontSize: p(23),
        fontWeight: '700',
        marginHorizontal: p(15)
    },
    text: {
        color: colors.TEXT,
        fontSize: p(16),
        marginTop: p(20),
        marginHorizontal: p(15)
    },
    btnText: {
        color: colors.SKY,
        marginVertical: p(20),
        fontSize: p(16),
        textAlign: "center"
    }
})