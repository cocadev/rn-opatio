import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import MachineryAlertsCreate from './MaquinariasTab/alertCreate'
import MachineryAlerts from './MaquinariasTab/alerts'
import text from '../../common/text'
import Cstyles from '../../common/c_style'
import * as ICON from '../../components/Icons'

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
            <View style={Cstyles.container}>

                <View style={styles.header}>
                    <ICON.IconBack top={p(5)} />
                    <ICON.IconWhiteSearch right={p(30)} />
                </View>

                <ScrollView>

                    <View style={{ backgroundColor: colors.RED }}>
                        <View style={{ alignItems: 'center', marginTop: p(30), marginBottom: p(50) }}>
                            <Text style={text.t_28_700_ff}>{'Configuración Alertas'}</Text>
                            <Text style={[text.t_16_500_ff, { marginTop: p(30), textAlign: 'center' }]}>{'Puedes configurar las alertas y vigilar el \nfuncionamiento de las maquinarias \ndesde donde estés.'}</Text>
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

                    { selectTab == 1 && <MachineryAlerts />}
                    { selectTab == 2 && <MachineryAlertsCreate />}

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        backgroundColor: colors.RED,
        alignItems: 'center',
    }
});