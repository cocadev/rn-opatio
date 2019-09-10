import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { colors } from '../../common/colors'
import { INTRO } from '../../common/config'
import * as ICON from '../../components/Icons'
import * as BTN from '../../components/Buttons'
import text from '../../common/text'
import { p } from '../../common/normalize';
import { images } from '../../common/images'
// import SvgUri from "expo-svg-uri";

export default class Intro extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Image source={images.mylogo} style={{ width: p(180), height: p(51), marginTop: p(40) }} />

                <ICON.ImgIntro />
                <View style={{ alignItems: 'center', marginTop: p(-40) }}>
                    <Text style={[text.t_14_500_ff, { textAlign: 'center', marginHorizontal: p(10) }]}>{INTRO}</Text>
                    <BTN.WhiteSky title={'CREAR CUENTA GRATIS'} onClick={() => Actions.signup()} top={p(20)} bottom={p(20)} />
                    <TouchableOpacity style={{ marginBottom: p(40) }} onPress={() => Actions.signin()}>
                        <Text style={text.t_15_600_ff}>¿YA TIENES UNA CUENTA?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: p(32),
        backgroundColor: colors.SKY,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})