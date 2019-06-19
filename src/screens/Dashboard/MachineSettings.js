import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';

import GPS from './MaquinariasTab/gps';
import AlarmasDetail from './MaquinariasTab/alarmasDetail';
import { customStyles } from './customStyles'
import { Actions } from 'react-native-router-flux';

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

                <View style={styles.tab}>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 1 ? colors.GREY4 : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>ALERTAS DE LA MAQUINARIA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabItem, { flexDirection: 'row', borderTopColor: selectTab == 2 ? colors.GREY4 : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>CREAR ALERTAS</Text>
                        <View style={{ width: p(16), height: p(16), borderRadius: p(8), backgroundColor: colors.GREEN2, marginLeft: p(12) }}></View>
                    </TouchableOpacity>
                </View>

                {selectTab == 1 && <AlarmasDetail />}
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
        backgroundColor: colors.RED,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        height: p(60),
        alignItems: 'center',
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