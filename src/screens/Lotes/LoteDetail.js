import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Carousel from 'react-native-banner-carousel';
import Header from '../../components/Header3';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

const carouselList = [
    "https://www.disneyfanatic.com/wp-content/uploads/2015/02/What-Do-Your-Favorite-Disney-Characters-Say-About-You.jpg",
    "http://dslv9ilpbe7p1.cloudfront.net/q_AGGYqTPGhBMa1QKtWLcg_store_header_image",
    "https://images-na.ssl-images-amazon.com/images/I/81uUIk9PAHL._SX355_.jpg",
    "https://cdn7.wdwnt.com/wp-content/uploads/2019/03/b3cff0c9ba63adc8d8bd8a806c33f351.jpg",
    "https://i.ytimg.com/vi/CNV3WLx5Ez4/maxresdefault.jpg",
];

export default class LoteDetail extends Component {

    constructor(){
        super();
        this.state = {
            video: false
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: width, height: p(209) }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        const { video } = this.state;
        return (
            <ScrollView style={styles.container}>
                <Header color={colors.ORANGE} title={'EDITOR'}/>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    pageIndicatorStyle={{ backgroundColor: colors.WHITE }}
                    activePageIndicatorStyle={{ backgroundColor: colors.ORANGE }}
                    pageIndicatorContainerStyle={{ fontSize: 70 }}
                    index={0}
                    pageSize={width}
                >
                    {carouselList.map((image, index) => this.renderPage(image, index))}
                </Carousel>
                <View style={{ backgroundColor: colors.ORANGE, elevation: 3, padding: p(30), paddingBottom: p(10) }}>
                    <Image source={images.msg} style={{ width: p(30), height: p(30) }} />
                    <Text style={styles.text1}>{'Manchón de malezas'}</Text>
                    <Text numberOfLines={4} style={styles.text2}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod blandit fermentum. Ut consectetur, felis imperdiet luctus cursus, justo lorem maximus orci, in commodo ipsum massa sit amet ante. Aliquam sollicitudin, enim et elementum condimentum, lectus leo consectetur dolor'}</Text>
                </View>

                <View style={styles.item}>
                    <Image source={images.map} style={{ width: p(18), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Ubicación y coordenadas'}</Text>
                        <Text style={styles.text4}>{'Long: 36646 - Lat: 184750'}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <Image source={images.square} style={{ width: p(22), height: p(22), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'En lote'}</Text>
                        <Text style={styles.text4}>{'Lote 21 - Santa Rosa'}</Text>
                    </View>
                </View>

                <View style={[styles.item, { borderBottomWidth: 0 }]}>
                    <Image source={images.pin} style={{ width: p(12), height: p(22), marginTop: p(7), marginLeft: p(8) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Archivos adjuntos'}</Text>
                        <Text style={styles.text4}>{'1 Archivo'}</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(18) }}>
                    <Image source={{ uri: 'https://www.disneyfanatic.com/wp-content/uploads/2015/09/99Characters-620x330.jpg' }} style={styles.video} />
                    <TouchableOpacity onPress={()=>this.setState({video: !video})}>
                        <Image
                            source={ video ? images.pause: images.play}
                            style={{ width: p(77), height: p(77), marginBottom: p(12) }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: colors.GREY8, fontWeight: '400', fontSize: p(15) }}>{'Nota de voz 0:23 '}</Text>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE
    },
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(32)
    },
    text2: {
        color: colors.WHITE,
        fontWeight: '500',
        fontSize: p(17),
        marginVertical: p(14)
    },
    text3: {
        color: colors.BLACK,
        fontWeight: '500',
        fontSize: p(18)
    },
    text4: {
        color: colors.GREY8,
        fontWeight: '400',
        fontSize: p(18)
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        padding: p(30),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: p(7)
    },
    video: {
        width: p(225),
        height: p(136),
        marginBottom: p(23),
        marginRight: p(3),
        borderRadius: p(5)
    }
});