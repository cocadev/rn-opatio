import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { Entypo } from '@expo/vector-icons';
import * as HEADERS from '../../components/Headers';
import * as ATOM from '../../components/Atoms';
import * as ICON from '../../components/Icons';

export default class TareasEdit extends Component {

    state = {
        text: ''
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <HEADERS.GUARDAR />

                <View style={styles.textRow}>
                    <Text style={styles.text1}>{'Título Tarea'}</Text>
                    <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                </View>

                <TextInput
                    style={styles.inputBox}
                    placeholder={'Añadir descripción'}
                    multiline={true}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />

                <ATOM.Atom1
                    icon={<ICON.IconCalendarX />}
                    title={'Inicio'}
                    note={'15/05/19'} 
                />

                <View style={styles.item}>
                    <Image source={images.calendar} style={{ width: p(23), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Vence'}</Text>
                        <Text style={styles.text4}>{'18/05/19'}</Text>
                    </View>
                </View>

                <View style={[styles.item, { borderBottomWidth: 0 }]}>
                    <Image source={images.map} style={{ width: p(18), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Ubicación y coordenadas'}</Text>
                        <Text style={styles.text4}>{'Puedes marcar en el mapa una ubicación específica para la tarea que estas creando:'}</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: colors.WHITE, alignItems: 'center' }}>
                    <Text style={styles.text5}>{'MARCAR EN EL MAPA'}</Text>
                    <View style={[styles.vertical, { marginTop: p(18), width: p(160), height: p(40) }]}>
                        <Text style={{ color: colors.WHITE, fontWeight: '700' }}>{'USAR MI UBICACIÓN'}</Text>
                    </View>
                </View>

                <View style={[styles.item, { justifyContent: 'space-between' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={images.square} style={{ width: p(22), height: p(22), marginTop: p(7) }} />
                        <View style={{ marginLeft: p(25) }}>
                            <Text style={styles.text3}>{'En lote'}</Text>
                            <Text style={styles.text4}>{'Lote 21 - Santa Rosa'}</Text>
                        </View>
                    </View>
                    <Entypo name="chevron-down" color={colors.GREY8} size={36} />

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
                        <Text style={styles.text4}>{'0 Archivos'}</Text>
                    </View>
                    <Text style={styles.text5}>{'ADJUNTAR'}</Text>
                </View>

                <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(20) }}>
                    <View style={[styles.vertical, { width: p(160), height: p(40) }]}>
                        <Text style={{ color: colors.WHITE, fontWeight: '700' }}>{'DESCARGAR PDF'}</Text>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE2
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
    text5: {
        color: colors.BLUE2,
        flex: 1,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: p(16)
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        padding: p(30),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: p(7),
        alignItems: 'center'
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
    header: {
        backgroundColor: colors.BLUE2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        height: p(60),
        alignItems: 'center',
    },
    inputBox: {
        height: p(134),
        margin: p(30),
        textAlignVertical: 'top',
        backgroundColor: '#6FBCE5',
        borderRadius: p(5),
        fontSize: p(20),
        fontWeight: '500',
        padding: p(14),
        color: colors.GREY4
    },
    textRow: {
        backgroundColor: colors.BLUE2,
        padding: p(30),
        paddingBottom: p(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});