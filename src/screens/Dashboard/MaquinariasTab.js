import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
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
import { Ionicons } from '@expo/vector-icons';
import text from '../../common/text';

export default class MaquinariasTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectTab: 1,
            search: ''
        }
    }

    render() {
        const { selectTab, search } = this.state;

        return (
            <View style={Cstyles.container}>

                <Header title={'Maquinarias'} icon={images.track} color={colors.ORANGE} />

                <ScrollView>
                    <Map region={CONFIG.region} />

                    <View style={Cstyles.searchView}>
                        <TextInput
                            style={Cstyles.searchInput}
                            placeholder={
                                selectTab !== 1 ? (
                                    selectTab == 2 ?
                                        'Todas las Alarmas' :
                                        'Todas las Contratistas') :
                                    'Todas las Maquinarias'
                            }
                            onChangeText={(search) => this.setState({ search })}
                        />
                        <TouchableOpacity>
                            <Ionicons
                                style={{ width: p(40) }}
                                name="ios-search"
                                color={colors.WHITE}
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={Cstyles.tab}>
                        <TouchableOpacity style={[Cstyles.tabItem, { borderTopColor: selectTab == 1 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 1 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 1 })}>
                            <Text style={text.t_12_400_2a}>MAQUINARIAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Cstyles.tabItem, { borderTopColor: selectTab == 2 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 2 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 2 })}>
                            <Text style={text.t_12_400_2a}>ALARMAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Cstyles.tabItem, { borderTopColor: selectTab == 3 ? colors.ORANGE : colors.GREY3, backgroundColor: selectTab == 3 ? colors.WHITE : colors.GREY3 }]} onPress={() => this.setState({ selectTab: 3 })}>
                            <Text style={text.t_12_400_2a}>CONTRATISTAS</Text>
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
