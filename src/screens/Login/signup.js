import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal, ToastAndroid, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { colors } from '../../common/colors';
import { images } from '../../common/images';
import * as actions from "../../store/common/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import LottieScreen from '../../components/Lottie';
import api from "../../service/api";
import Cache from "../../utils/cache";
import i from '../../common/i'
import { LinearGradient } from 'expo';
import { p } from '../../common/normalize';
import Button from '../../components/Button';
import { Entypo } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


class SignUp extends React.Component {

    state = {
        email: '',
        password: '',
        isWaiting: false,
    }

    onSignIn = () => {
        if (!this.state.email) {
            ToastAndroid.show('Email is empty', ToastAndroid.SHORT);
            return false
        }
        if (!this.state.password) {
            ToastAndroid.show('Password is empty', ToastAndroid.SHORT);
            return false
        }
        this.setState({ isWaiting: true })
        setTimeout(() => { this.setState({ isWaiting: false }) }, 10000);
        api.login(this.state.email, this.state.password, (err, res) => {
            // console.log('********************* res ************************', res)
            // console.log('********************* err ************************', err)

            if (err == null) {
                Cache.currentUser = res.user
                // console.log('********************* currentUser ************************', Cache.currentUser)
                this.setState({ isWaiting: false })
                if (!res.message) {
                    Actions.drawerMenu()
                } else {
                    ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
                }
            } else {
                ToastAndroid.show('Wrong User', ToastAndroid.SHORT);
            }

            this.setState({ isWaiting: false })
        })
    };

    renderIndicator() {
        return (
            <Modal
                visible={this.state.isWaiting}
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={i.indicatorContainer}>
                    <View style={i.indicator}>
                        <LottieScreen />
                    </View>
                </View>
            </Modal>
        );
    }

    render() {

        const { email, password } = this.state;

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => Actions.intro()}>
                    <Entypo name="chevron-left" color={colors.SKY} size={30} />
                </TouchableOpacity>

                <Text style={styles.text}>Ingrese a Optiagro</Text>

                <TextInput
                    style={styles.input}
                    placeholder={'Email de trabajo:'}
                    underlineColorAndroid='transparent'
                    onChangeText={email => this.setState({ email })}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder={'Contrasena:'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={password}
                />

                <Button />

                <TouchableOpacity>
                    <Text style={styles.btnText}>?YA TIENES CUENTA?</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

export default connect(
    state => ({ user: state.common.user, }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(SignUp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
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
        color: colors.BLACK,
        fontSize: p(19),
        marginHorizontal: p(15)
    },
    btnText: {
        color: colors.BLACK,
        fontSize: p(14),
        textAlign: "center"
    }
})