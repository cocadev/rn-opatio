import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { MapView } from 'expo'
import { CUSTOM_STYLE, REGION } from '../../common/config'
import { Actions } from 'react-native-router-flux'
import { customStyles } from './customStyles'
import Header from '../../components/Header'
import api from '../../common/api'
import LottieScreen from '../../components/Lottie'
import * as ICON from '../../components/Icons';

export default class LoteSelection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lotes: null,
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

    _renderItem = ({ item }) => (
        <>
            <View style={styles.head}>
                <Text style={styles.headText}>{item.nombre}</Text>
            </View>
            {item.fields !== [] && item.fields.map(function (field, key) {
                return (
                    <TouchableOpacity key={key} style={styles.itemLote} onPress={() => Actions.lotetab({ field_id: field.field_id })}>
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

        const { isWaiting, lotes } = this.state

        return (
            <ScrollView style={styles.container}>

                <MapView
                    ref={instance => this.map = instance}
                    style={styles.map}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    initialRegion={REGION}
                    customMapStyle={CUSTOM_STYLE}
                >
                </MapView>

                <Header title={'Lote 21'} color={colors.BLUE} icon={images.location} />

                <View style={customStyles.searchView}>
                    <Image source={images.blackSearch} style={customStyles.searchIcon} />
                    <TextInput
                        style={customStyles.textinput}
                        placeholder={'Buscar'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>

                <View style={{ position: 'absolute', right: 15, top: p(190) }}>
                    <ICON.IconRoundLayer />
                    <ICON.IconLocate1 top={p(5)}/>
                </View>

                <View style={styles.searchView}>
                    <TextInput style={styles.searchInput} placeholder={'Campos y Lotes'} />
                    <ICON.IconWhiteSearch right={p(20)} />
                </View>

                { isWaiting ? <LottieScreen /> : <FlatList  data={lotes} keyExtractor={(item, i) => String(i)} renderItem={this._renderItem} />}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F5FCFF'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: p(300),
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    searchView: {
        backgroundColor: colors.GREY4,
        alignItems: 'center',
        flexDirection: 'row',
        height: p(55),
        marginTop: p(240),
        borderBottomColor: colors.BLUE,
        borderBottomWidth: 4
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