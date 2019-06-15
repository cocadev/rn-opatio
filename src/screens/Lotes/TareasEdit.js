import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Carousel from 'react-native-banner-carousel';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export default class TareasEdit extends Component {

    constructor() {
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

                <View style={{ backgroundColor: colors.BLUE2, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: p(20), height: p(60), alignItems: 'center', }}>

                    <TouchableOpacity>
                        <Image source={images.back} style={{ width: 20, height: 18 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.vertical, { backgroundColor: colors.WHITE }]}>
                            <Text style={{ color: colors.BLACK, fontWeight: '700' }}>{'GUARDAR'}</Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: colors.BLUE2, padding: p(30), paddingBottom: p(10), flexDirection: 'row' }}>
                    <Text style={styles.text1}>{'Título Tarea'}</Text>
                    <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                </View>

                <View style={styles.item}>
                    <Image source={images.calendar} style={{ width: p(23), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Inicio'}</Text>
                        <Text style={styles.text4}>{'15/05/19'}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <Image source={images.calendar} style={{ width: p(23), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Vence'}</Text>
                        <Text style={styles.text4}>{'18/05/19'}</Text>
                    </View>
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

                <View style={styles.item}>
                    <Image source={images.profile} style={{ width: p(24), height: p(24), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Asignado a'}</Text>
                        <Text style={styles.text4}>{'Walter'}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <Image source={images.members} style={{ width: p(25), height: p(22), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Responsable'}</Text>
                        <Text style={styles.text4}>{'joaquin@optiagro.com'}</Text>
                    </View>
                </View>

                <View style={[styles.item, { borderBottomWidth: 0 }]}>
                    <Image source={images.pin} style={{ width: p(12), height: p(22), marginTop: p(7), marginLeft: p(8) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Archivos adjuntos'}</Text>
                        <Text style={styles.text4}>{'1 Archivo'}</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(24) }}>
                    <Image source={{ uri: 'https://www.disneyfanatic.com/wp-content/uploads/2015/09/99Characters-620x330.jpg' }} style={styles.video} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.vertical}>
                            <Text style={{ color: colors.WHITE, fontWeight: '700' }}>{'DESCARGAR PDF'}</Text>
                        </View>
                    </View>
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
        fontSize: p(37)
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
    },
    vertical: {
        backgroundColor: colors.BLUE2,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
    },
});