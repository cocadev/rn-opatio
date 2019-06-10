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
import { LinearGradient } from 'expo';
import { p } from '../../common/normalize';
import Button from '../../components/Button';
import { Entypo } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


class Forgot extends React.Component {

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

                <TouchableOpacity style={{ marginLeft: p(4) }} onPress={() => Actions.intro()}>
                    <Entypo name="chevron-left" color={colors.SKY} size={36} />
                </TouchableOpacity>

                <View>
                    <Text style={styles.textH}>Recuperar contrasena</Text>
                    <Text style={styles.text}>Vamos a enviarte instrucciones para recuperar tu contrasena:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder={'Email de trabajo:'}
                        underlineColorAndroid='transparent'
                        onChangeText={email => this.setState({ email })}
                        value={email}
                    />
                </View>

                <View style={{ alignItems: 'center', marginVertical: p(40) }}>
                    <TouchableOpacity onPress={() => Actions.drawerMenu()}>
                        <Button text={'ENVIAR'} type={'SKY'} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.forgot()}>
                        <Text style={styles.btnText}>CONTACTAR A SOPORTE</Text>
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