import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { customStyles } from './customStyles'

import Maquinarias from './MaquinariasTab/Maquinarias'
import Alarmas from './MaquinariasTab/alarmas'
import Statistics from './MaquinariasTab/statistics'
import Map from '../../components/Map'
import text from '../../common/text'
import Cstyles from '../../common/c_style'

import * as ICON from '../../components/Icons'
import * as CONFIG from '../../common/config'
import * as HEADER from '../../components/Headers'

export default class MachinesContractorTab extends Component {

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

                {
                    selectTab == 3 &&
                    <View style={styles.statistic}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <ICON.IconBack />
                            <ICON.IconDots />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: p(30) }}>
                            <ICON.IconBigProfile right={p(22)} />
                            <View>
                                <Text style={text.t_21_500_ff}>{'Contratista'}</Text>
                                <Text style={text.t_30_700_ff}>{'Ricardo Terzo'}</Text>
                                <View style={styles.horizontal}></View>
                                <Text style={text.t_21_500_ff}>{'AgriTerzo S.R.L'}</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: p(22) }}>
                            <ICON.IconCallWhite bottom={p(8)} />
                            <Text style={text.t_14_500_ff}>{'Llamar'}</Text>
                        </View>
                    </View>
                }


                {
                    selectTab !== 3 &&
                    <HEADER.Complex title={'Ricardo Terzo'} address={'AgriTerzo S.R.L'} head={'Contratista'} />
                }

                <ScrollView>
                    {selectTab !== 3 &&
                        <Map region={CONFIG.REGION} />
                    }
                    {
                        selectTab !== 3 && <View style={customStyles.searchView}>
                            <Image source={images.blackSearch} style={customStyles.searchIcon} />
                            <TextInput
                                style={customStyles.textinput}
                                placeholder={'Buscar'}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text}
                            />
                        </View>
                    }

                    {
                        selectTab !== 3 &&
                        <View style={styles.searchView}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder={selectTab == 1 ? 'Máquinas del contratista' : (selectTab == 2 ? 'Alarms del contratista' : '')}
                            />
                            <Image source={images.search_white} style={{ width: p(18), height: p(18), marginRight: p(20) }} />
                        </View>
                    }
                    <View style={styles.tab}>
                        <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 1 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                            <Text style={{ color: colors.TEXT, fontSize: p(14) }}>MAQUINARIAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 2 ? colors.BLUE : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                            <Text style={{ color: colors.TEXT, fontSize: p(14) }}>TAREAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabItem, { borderTopColor: selectTab == 3 ? colors.GREEN2 : colors.GREY3, backgroundColor: selectTab == 3 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 3 })}>
                            <Text style={{ color: colors.TEXT, fontSize: p(14) }}>ESTADÍSTICAS</Text>
                        </TouchableOpacity>
                    </View>

                    {selectTab == 1 && <Maquinarias />}
                    {selectTab == 2 && <Alarmas />}
                    {selectTab == 3 && <Statistics />}

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
    statistic: {
        paddingTop: p(22),
        backgroundColor: colors.PURPLE2,
        height: p(280),
        paddingHorizontal: p(22)
    },
    horizontal: {
        width: p(210),
        height: p(2.5),
        backgroundColor: colors.WHITE,
        marginVertical: p(10)
    }
});