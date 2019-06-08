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
                <Image source={images.logo} style={styles.logo}/>
                <Image source={images.intro} style={styles.intro}/>

                <Text style={styles.intro_text}>{INTRO}</Text>

                <TouchableOpacity onPress={() => Actions.signup()}>
                    <Button />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.signin()}>
                    <Text style={styles.text}>?YA TIENES CUENTA?</Text>
                </TouchableOpacity>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:24,
        backgroundColor:colors.SKY, 
        justifyContent:'center', 
        alignItems:'center'
    },
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