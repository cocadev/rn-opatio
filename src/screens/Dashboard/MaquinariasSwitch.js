import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'

import * as ICON from '../../components/Icons'
import * as HEADER from '../../components/Headers'
import * as CONFIG from '../../common/config'

import Maquinarias from './MaquinariasTab/Maquinarias'
import text from '../../common/text'
import Map from '../../components/Map'
import Cstyles from '../../common/c_style'


export default class MaquinariasSwitch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            calendar: false
        }
    }

    render() {
        const { calendar } = this.state;

        return (
            <View style={Cstyles.container}>

                <HEADER.NormalIcon back={colors.ORANGE} icon={<ICON.IconTrack />} />

                <ScrollView>

                    <Map region={CONFIG.region} height={p(330)}/>

                    {
                        !calendar &&
                        <ICON.IconCalendarGreen onClick={() => this.setState({ calendar: true })}/>
                    }

                    {
                        !calendar &&
                        <View style={styles.searchView}>
                            <Maquinarias hidden={true} />
                        </View>
                    }

                    {
                        calendar &&
                        <View style={[styles.searchView, { backgroundColor: colors.GREEN2, padding: p(21), alignItems: 'flex-start', flexDirection: 'column' }]}>
                            <ICON.IconBack />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: p(10) }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={text.t_30_700_ff}>{'Desde'}</Text>
                                    <ICON.IconCalendar top={p(10)} bottom={p(10)} />
                                    <Text style={text.t_15_400_60}>{'Martes 23/07'}</Text>
                                </View>

                                <View style={{ flex: 0.01, width: 2, height: p(125), backgroundColor: colors.GREY6, marginTop: p(5) }}>

                                </View>

                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={text.t_30_700_ff}>{'Desde'}</Text>
                                    <ICON.IconCalendar top={p(10)} bottom={p(10)} />
                                    <Text style={text.t_15_400_60}>{'Martes 23/07'}</Text>
                                </View>
                            </View>
                            <Text style={[text.t_16_500_ff, { textAlign: 'center', marginTop: p(22) }]}>{'Selecciona el período para el cual quieras ver la actividad de las maquinarias'}</Text>
                        </View>
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: p(260)
    }
});