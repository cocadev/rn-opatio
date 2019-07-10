import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { Actions } from 'react-native-router-flux'

import api from '../../common/api'
import LottieScreen from '../../components/Lottie'
import Map from '../../components/Map'
import Cstyles from '../../common/c_style'

import * as ICON from '../../components/Icons'
import * as HEADER from '../../components/Headers'
import * as CONFIG from '../../common/config'

export default class LoteSelection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lotes: null,
            modal: true,
            isWaiting: true
        }
    }

    componentDidMount() {
        this.setState({ isWaiting: true })
        api.getAllLotes((err, res) => {
            if (err == null) {
                this.setState({ isWaiting: false, lotes: res.data })
            } else {
                this.setState({ isWaiting: false })
            }
        })
    }

    renderModal() {
        return (
            <Modal
                visible={this.state.modal}
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={Cstyles.modalContainer}>
                    <View style={Cstyles.modal}>

                        <TouchableOpacity onPress={() => this.setState({ modal: false })} style={{ alignItems: 'flex-end' }}>
                            <ICON.IconClose />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: p(12), justifyContent: 'center' }}>
                            <ICON.IconModalField1 left={p(14)} right={p(14)} />
                            <TouchableOpacity onPress={() => this.setState({ calendar: true, modal: false })}>
                                <ICON.IconModalField2 left={p(14)} right={p(14)} />
                            </TouchableOpacity>
                            <ICON.IconModalField3 left={p(14)} right={p(14)} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: p(12), justifyContent: 'center' }}>
                            <ICON.IconModalField4 left={p(14)} right={p(14)} />
                            <ICON.IconModalField5 left={p(14)} right={p(14)} />
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }

    _renderItem = ({ item }) => (
        <>
            <View style={styles.head}>
                <Text style={styles.headText}>{item.nombre}</Text>
            </View>
            {item.fields !== [] && item.fields.map(function (field, key) {
                return (
                    <TouchableOpacity key={key} style={styles.itemLote} onPress={() => Actions.lotetab({ field, description: item.nombre })}>
                        <Image source={images.dot1} style={{ width: p(30), height: p(30), marginRight: p(20) }} />
                        <Text style={{ fontSize: p(20), fontWeight: '700', color: colors.TEXT, marginTop: -5 }}>Lote{field.name}</Text>
                        <Text style={{ fontSize: p(15), flex: 1, marginLeft: p(20), color: colors.TEXT, marginTop: -5 }}>{field.ha} ha</Text>
                        <Image source={images.download} style={{ width: p(16), height: p(20) }} />
                    </TouchableOpacity>
                )
            })}
        </>
    )

    render() {
        const { isWaiting, lotes, modal } = this.state
        return (
            <View style={Cstyles.container}>
                <HEADER.NormalIcon 
                    title={'Lotes'} 
                    back={colors.BLUE} 
                    icon={<ICON.IconLocation />} 
                />
                <ScrollView>
                    <Map 
                        region={CONFIG.REGION}
                        custom={CONFIG.MAP_AUB}
                        layerModal={this.state.modal}
                    />
                    <View style={Cstyles.searchView}>
                        <TextInput style={Cstyles.searchInput} placeholder={'Campos y Lotes'} />
                        <ICON.IconWhiteSearch right={p(20)} />
                    </View>
                    {isWaiting ? <LottieScreen /> : <FlatList data={lotes} keyExtractor={(item, i) => String(i)} renderItem={this._renderItem} />}
                    { modal && this. renderModal()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: '#eeeeed',
        justifyContent: 'center',
        paddingLeft: p(25),
        height: p(50),
        borderBottomColor: '#e8e8e7',
        borderBottomWidth: 1
    },
    itemLote: {
        borderBottomColor: colors.GREY2,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: p(20),
        alignItems: 'center',
        height: p(72)
    },
    headText: {
        fontWeight: '700',
        color: '#354052',
        fontSize: p(16)
    },
});