import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { p } from '../../common/normalize';
import { INTRO } from '../../common/config';
import Button from '../../components/Button';

const width = Math.round(Dimensions.get('window').width);

export default class Intro extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={images.logo} style={styles.logo} />
                <Image source={images.intro} style={styles.intro} />

                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.intro_text}>{INTRO}</Text>

                    <TouchableOpacity style={{ marginVertical: p(14)}} onPress={() => Actions.signup()}>
                        <Button text={'CREATE CUENTA GRATIS'} type={'white'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginVertical: p(12)}} onPress={() => Actions.signin()}>
                        <Text style={styles.text}>?YA TIENES CUENTA?</Text>
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
    logo: {
        marginTop: p(10),
        width: p(200),
        height: p(58)
    },
    intro: {
        width: width,
        height: p(220)
    },
    intro_text: {
        color: colors.WHITE,
        fontSize: p(15),
        marginHorizontal: p(12),
        textAlign: "center"
    },
    text: {
        color: colors.WHITE,
        fontSize: p(16),
        fontWeight: "600",
        textAlign: "center"
    }
})