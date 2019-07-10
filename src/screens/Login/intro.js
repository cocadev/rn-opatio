import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { colors } from '../../common/colors'
import { INTRO } from '../../common/config'

import * as ICON from '../../components/Icons'
import * as BTN from '../../components/Buttons'

import text from '../../common/text'

export default class Intro extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <ICON.ImgLogo />
                <ICON.ImgIntro />

                <View style={{ alignItems: 'center', marginTop: -50}}>
                    <Text style={[text.t_14_500_ff, { textAlign: 'center'}]}>{INTRO}</Text>

                    <BTN.WhiteSky title={'CREATE CUENTA GRATIS'} onClick={()=>Actions.signup()} top={20} bottom={20}/>

                    <TouchableOpacity style={{ marginVertical: 14 }} onPress={() => Actions.signin()}>
                        <Text style={text.t_15_600_ff}>?YA TIENES CUENTA?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: colors.SKY,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})