import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';
import { images } from '../../common/images';
import { LinearGradient } from 'expo';
import { colors } from '../../common/colors';

const width = Dimensions.get('window').width

const slides = [
    {
        key: 'somethun',
        title: 'WELCOME TO',
        text: 'RYTHAND',
        description: 'We are happy to connect you with\n Service Providers near you',
        image: images.intro1,
        widths: width / 1.15,
        heights: width / 1.4,

        backgroundColor: '#59b2ab',
        colors: [colors.GREEN, colors.BLUE],
    },
    {
        key: 'somethun-dos',
        title: 'FIND & BOOK',
        text: 'THE SERVICE\n YOU NEED',
        description: 'Easy pick the service you require and pay\n directly with ease through the app',
        image: images.intro2,
        backgroundColor: '#febe29',
        colors: [colors.GREEN, colors.BLUE],
        widths: width / 1.38,
        heights: width / 1.4,

    },
    {
        key: 'somethun1',
        title: 'SIT BACK &',
        text: 'RELAX',
        description: 'Have your service provider scan the QR code\n and get your service started',
        image: images.intro3,
        backgroundColor: '#22bcb5',
        colors: [colors.GREEN, colors.BLUE],
        widths: width / 1.42,
        heights: width / 1.4,

    }
];

export default class Intro extends React.Component {

    _renderItem = (props) => {
        return (
            <LinearGradient
                style={[styles.mainContent, {
                    width: props.width,
                    height: props.height,
                }]}
                colors={props.colors}
                start={{ x: 0, y: .1 }} end={{ x: .1, y: 1 }}
            >
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.text}>{props.text}</Text>
                </View>

                <Image style={{ backgroundColor: 'transparent', width: props.widths, height: props.heights }} source={props.image} />

                <Text style={styles.description}>{props.description}</Text>


            </LinearGradient>
        );
    }

    _onDone = () => {
        Actions.signin()
    }

    _renderNextButton = () => {
        return (
            <View style={styles.nextbtn}>
                <Text style={{fontSize:15, fontFamily:'Montserrat-SemiBold'}}>NEXT</Text>
            </View>
        );
    }
    _renderDoneButton = () => {
        return (
            <View style={[styles.nextbtn, {backgroundColor:colors.RED}]}>
                <Text style={{fontSize:15, fontFamily:'Montserrat-SemiBold', color:colors.WHITE}}>GET STARTED</Text>
            </View>
        );
    }

    render() {
        return (
            <AppIntroSlider
                renderItem={this._renderItem}
                slides={slides}
                onDone={this._onDone}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                bottomButton
            />
        )

    }
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: width/6,
        paddingBottom: width/3
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontFamily:'Montserrat-SemiBold',
        fontSize:36
    },
    description: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize:14,
        fontFamily:'Montserrat-Medium'
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontFamily:'Montserrat-Light',

    },
    nextbtn: {
        height: 40,
        padding:25,
        marginHorizontal: width/5,
        backgroundColor: '#fff',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2
    }
})