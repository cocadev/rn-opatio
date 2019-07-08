import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import * as HEADERS from '../../components/Headers';
import * as ATOM from '../../components/Atoms';
import * as ICON from '../../components/Icons';
import * as BTN from '../../components/Buttons';
import Cstyles from '../../common/c_style';

export default class TareasEdit extends Component {

    state = {
        text: ''
    }

    render() {
        return (
            <View style={Cstyles.container}>

                <HEADERS.GUARDAR />

                <ScrollView>

                    <View style={styles.textRow}>
                        <Text style={styles.text1}>{'Título Tarea'}</Text>
                        <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                    </View>

                    <View style={{ backgroundColor: colors.BLUE2}}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={'Añadir descripción'}
                            multiline={true}
                            blurOnSubmit={false}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Inicio'}
                        note={'15/05/19'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Vence'}
                        note={'18/05/19'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconMap />}
                        title={'Ubicación y coordenadas'}
                        note={'Puedes marcar en el mapa una ubicación específica para la tarea que estas creando:'}
                    />

                    <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(12) }}>
                        <Text style={styles.text5}>{'MARCAR EN EL MAPA'}</Text>
                        <BTN.BtnNormal title={'USAR MI UBICACIÓN'} top={p(18)} back={colors.BLUE2} />
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconSquare />}
                        title={'En lote'}
                        note={'Lote 21 - Santa Rosa'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconProfile />}
                        title={'Asignado a'}
                        note={'Walter'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconMember />}
                        title={'Responsable'}
                        note={'joaquin@optiagro.com'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconPin />}
                        title={'Archivos adjuntos'}
                        note={'0 Archivos'}
                    />

                    <View style={{ alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(20) }}>
                        <BTN.BtnNormal title={'DESCARGAR PDF'} back={colors.BLUE2} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(37)
    },
    text5: {
        color: colors.BLUE2,
        flex: 1,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: p(16)
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