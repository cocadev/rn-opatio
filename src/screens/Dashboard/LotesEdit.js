import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { Actions } from 'react-native-router-flux'

import text from '../../common/text'
import Cstyles from '../../common/c_style'

import * as ATOM from '../../components/Atoms'
import * as ICON from '../../components/Icons'

export default class LotesEdit extends Component {

    state = {
        text: this.props.navigation.state.params.data.overview
    }

    render() {

        const data = this.props.navigation.state.params.data;

        return (
            <View style={Cstyles.container}>

                <View style={styles.header}>

                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image source={images.back} style={{ width: 20, height: 18 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.vertical, { backgroundColor: colors.WHITE }]}>
                            <Text style={{ color: colors.BLACK, fontWeight: '700' }}>{'GUARDAR'}</Text>
                        </View>
                    </View>

                </View>

                <ScrollView>

                    <View style={styles.textRow}>
                        <Text style={text.t_37_400_ff_t8}>{data.original_title}</Text>
                        <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                    </View>

                    <View style={{ backgroundColor: colors.ORANGE}}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={'Añadir descripción'}
                            placeholderTextColor={colors.GREY4}
                            multiline={true}
                            blurOnSubmit={false}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconMap />}
                        title={'Ubicación y coordenadas'}
                        note={'Puedes marcar en el mapa una ubicación específica para la tarea que estas creando:'}
                    />

                    <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', marginBottom: p(20) }}>
                        <Text style={styles.text5}>{'MARCAR EN EL MAPA'}</Text>
                        <View style={[styles.vertical, { marginTop: p(18), width: p(160), height: p(40) }]}>
                            <Text style={{ color: colors.WHITE, fontWeight: '700' }}>{'USAR MI UBICACIÓN'}</Text>
                        </View>
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconSquare />}
                        title={'En lote'}
                        note={'Lote 21 - Santa Rosa'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconPin />}
                        title={'Archivos adjuntos'}
                        note={'0 Archivos'}
                    />

                    <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(20) }}>
                        <TouchableOpacity>
                            <Image
                                source={images.record}
                                style={{ width: p(77), height: p(77), marginBottom: p(12) }}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.text5, { position: 'absolute', right: p(32), top: p(12) }]}>{'BORRAR'}</Text>
                        <Text style={{ color: colors.GREY8, fontWeight: '400', fontSize: p(15) }}>{'Nota de voz 1:21 '}</Text>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    text5: {
        color: colors.ORANGE,
        flex: 1,
        textAlign: 'right',
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
        backgroundColor: colors.ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
    },
    header: {
        backgroundColor: colors.ORANGE,
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
        backgroundColor: '#FFB661',
        borderRadius: p(5),
        fontSize: p(20),
        fontWeight: '500',
        padding: p(14),
        color: colors.GREY4
    },
    textRow: {
        backgroundColor: colors.ORANGE,
        padding: p(30),
        paddingBottom: p(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});