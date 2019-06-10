import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal, ToastAndroid, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { colors } from '../../common/colors';
import { images } from '../../common/images';
import * as actions from "../../store/common/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { p } from '../../common/normalize';
import Button from '../../components/Button';
import { Entypo, Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


class SignIn extends React.Component {

    state = {
        email: '',
        password: '',
        eye: false,
        isWaiting: false,
    }

    render() {

        const { email, password, eye } = this.state;

        return (
            <View style={styles.container}>

                <TouchableOpacity style={{ marginLeft: p(4) }} onPress={() => Actions.intro()}>
                    <Entypo name="chevron-left" color={colors.SKY} size={36} />
                </TouchableOpacity>

                <View>
                    <Text style={styles.text}>Ingrese a Optiagro</Text>

                    <TextInput
                        style={styles.input}
                        placeholder={'Email de trabajo:'}
                        underlineColorAndroid='transparent'
                        onChangeText={email => this.setState({ email })}
                        value={email}
                    />

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Contrasena:'}
                            underlineColorAndroid='transparent'
                            secureTextEntry={!eye}
                            onChangeText={password => this.setState({ password })}
                            value={password}
                        />
                        <TouchableOpacity onPress={() => this.setState({ eye: !eye })} style={styles.eye}>
                            {
                                eye ? <Ionicons name="ios-eye-off" color={colors.TEXT} size={26} /> : <Ionicons name="md-eye" color={colors.TEXT} size={26} />
                            }
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ alignItems: 'center', marginVertical: p(40) }}>
                    <TouchableOpacity onPress={() => Actions.drawerMenu()}>
                        <Button text={'INGRASAR'} type={'SKY'} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.forgot()}>
                        <Text style={styles.btnText}>?YA TIENES CUENTA?</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

export default connect(
    state => ({ user: state.common.user, }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(SignIn);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        justifyContent: 'space-between',
        backgroundColor: colors.WHITE
    },
    input: {
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
    text: {
        fontWeight: "700",
        color: colors.TEXT,
        fontSize: p(24),
        marginBottom: p(20),
        marginHorizontal: p(15)
    },
    btnText: {
        color: colors.SKY,
        marginVertical: p(20),
        fontSize: p(16),
        textAlign: "center"
    },
    eye: {
        position: 'absolute',
        right: p(18),
        bottom: p(8)
    }
})