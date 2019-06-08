import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import custom from '../../common/custom';
import { p } from '../../common/normalize';
import { INTRO } from '../../common/staticdata';
import Button from '../../components/Button';

const width = Math.round(Dimensions.get('window').width);

export default class Intro extends React.Component {

    render() {
        return (
            <View style={[custom.container, { backgroundColor:colors.SKY}]}>
                <Image source={images.logo} style={styles.logo}/>
                <Image source={images.intro} style={styles.intro}/>

                <Text style={styles.intro_text}>{INTRO}</Text>

                <Button />

                <TouchableOpacity>
                    <Text style={styles.text}>?YA TIENES CUENTA?</Text>
                </TouchableOpacity>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    logo:{
        width: p(187),
        height: p(54)
    },
    intro:{
        width: width,
        height: p(190)
    },
    intro_text:{
        color:colors.WHITE,
        fontSize: p(14),
        marginHorizontal: p(12),
        textAlign:"center"
    },
    text:{
        color:colors.WHITE,
        fontSize: p(14),
        textAlign:"center"
    }
})