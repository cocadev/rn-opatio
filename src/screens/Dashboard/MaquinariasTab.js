import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,  ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Header from '../../components/Header';

import Maquinarias from './MaquinariasTab/Maquinarias';
import Alarmas from './MaquinariasTab/alarmas';
import Contratistas from './MaquinariasTab/contratistas';
import * as CONFIG from '../../common/config';
import Map from '../../components/Map';
import Cstyles from '../../common/c_style';

export default class MaquinariasTab extends Component {

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

                <Header title={'Maquinarias'} icon={images.track} color={colors.ORANGE} />

                <ScrollView>
                <Map region={CONFIG.region} />

                <View style={styles.searchView}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={
                            selectTab !== 1 ? (selectTab == 2 ? 'Todas las Alarmas' : 'Todas las Contratistas') : 'Todas las Maquinarias'
                        }
                    />
                    <Image source={images.search_white} style={{ width: p(18), height: p(18), marginRight: p(20) }} />
                </View>

                <View style={styles.tab}>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 1 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>MAQUINARIAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 2 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>ALARMAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 3 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 3 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 3 })}>
                        <Text style={{ color: colors.TEXT, fontSize: p(14) }}>CONTRATISTAS</Text>
                    </TouchableOpacity>
                </View>

                {selectTab == 1 && <Maquinarias />}
                {selectTab == 2 && <Alarmas />}
                {selectTab == 3 && <Contratistas />}

            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    searchView: {
        backgroundColor: colors.GREY4,
        alignItems: 'center',
        flexDirection: 'row',
        height: p(55),
        marginTop: p(240)
    },
    searchInput: {
        flex: 1,
        marginHorizontal: p(26),
        paddingHorizontal: p(12),
        backgroundColor: colors.GREY5,
        borderRadius: p(12),
        fontSize: p(21),
        height: p(36),
        color: colors.GREY4,
        fontWeight: '700'
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

});