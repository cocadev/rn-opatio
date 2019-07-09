import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'

import Map from '../../components/Map'
import text from '../../common/text'
import Cstyles from '../../common/c_style'

import * as ICON from '../../components/Icons'
import * as ATOM from '../../components/Atoms'
import * as HEADER from '../../components/Headers'
import * as CONFIG from '../../common/config'

export default class LotesTab extends Component {

    render() {

        return (
            <View style={Cstyles.container}>

                <HEADER.NormalIcon back={colors.RED} icon={<ICON.IconExcWhite />}/>

                <ScrollView>

                    <Map region={CONFIG.region}/>

                    <View style={styles.searchView}>
                        <Text style={text.t_15_500_ff}>{'Fecha: 10/03/2018        Hora: 15:35 hs'}</Text>
                        <View style={styles.borderView}>
                            <Text style={text.t_15_400_ff}>{'Supera los 7 Km/h establecidos como máximo de velocidad. \n\nVelocidad promedio de infracción: 10 Km/h \nTiempo de infracción: 12 min\n\nDistancia de infracción: 82 m\n'}</Text>
                        </View>
                    </View>

                    <View style={styles.itemView}>
                        <ICON.IconCall bottom={p(15)} />
                        <Text style={text.t_14_500_RED}>{'Llamar Contratista'}</Text>
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconPin />}
                        title={'Contratista:'}
                        note={'Llamar Contratista'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconTrackGrey />}
                        title={'Maquinaria:'}
                        note={'Tractor 150   John Deere 6130J'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconNeedle />}
                        title={'Alerta:'}
                        note={'Velocidad'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconParameter />}
                        title={'Parámetros:'}
                        other={
                            <View>
                                <Text style={text.t_15_700_RED}>{'Velocidad Máxima:              7 Km/h'}</Text>
                                <Text style={text.t_15_700_RED}>{'Velocidad Mínima:               2 Km/h'}</Text>
                                <Text style={text.t_15_700_RED}>{'Margen de tiempo:              10 min'}</Text>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: colors.RED,
        alignItems: 'center',
        flex: 1,
        marginTop: p(235),
        paddingHorizontal: p(33),
        paddingVertical: p(15)
    },
    borderView: {
        marginTop: p(10),
        paddingVertical: p(8),
        borderTopColor: colors.WHITE,
        borderBottomColor: colors.WHITE,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    itemView: {
        height: p(100),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.GREY3,
        borderBottomWidth: 2,
        backgroundColor: colors.WHITE
    },
});