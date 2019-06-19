import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';

import GPS from './MaquinariasTab/gps';
import MachineryAlerts from './MaquinariasTab/alerts';
import { customStyles } from './customStyles'
import { Actions } from 'react-native-router-flux';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import text from '../../common/text';
import * as ICON from '../../components/Icons';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export default class MachineSettings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectTab: 1
        }
    }

    render() {
        const { selectTab } = this.state;

        return (
            <ScrollView style={styles.container}>

                <View style={{ backgroundColor: colors.RED }}>
                    <View style={styles.header}>
                        <ICON.IconBack top={p(5)}/>
                        <ICON.IconWhiteSearch right={p(30)}/>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: p(30), marginBottom: p(50)}}>
                        <Text style={text.t_28_700_ff}>{'Configuración Alertas'}</Text>
                        <Text style={[text.t_16_500_ff, { marginTop: p(30), textAlign: 'center'}]}>{'Puedes configurar las alertas y vigilar el \nfuncionamiento de las maquinarias \ndesde donde estés.'}</Text>
                    </View>
                </View>

                <View style={styles.tab}>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 1 ? colors.GREY4 : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                        <Text style={text.t_11_400_2a}>ALERTAS DE LA MAQUINARIA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabItem, { flexDirection: 'row', borderTopColor: selectTab == 2 ? colors.GREY4 : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                        <Text style={text.t_11_400_2a}>CREAR ALERTAS</Text>
                    </TouchableOpacity>
                </View>

                {selectTab == 1 && <MachineryAlerts />}
                {selectTab == 2 && <GPS />}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    tab: {
        flexDirection: 'row',
        backgroundColor: colors.GREY3,
        height: p(60)
    },
    tabItem: {
        flex: 1,
        borderTopColor: colors.GREY3,
        borderTopWidth: p(8),
        backgroundColor: colors.GREY3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        paddingVertical: p(20),
        height: p(60),
        alignItems: 'center',
    }
});