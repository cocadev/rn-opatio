import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
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
import { Entypo } from '@expo/vector-icons';

export default class LoteSelection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lotes: null,
            isWaiting: true,
            skip: 0,
        }
    }

    componentDidMount() {
        this.onfetchData(0);
    }

    onfetchData(skip){
        this.setState({ isWaiting: true })
        api.getAllLotes( skip, (err, res) => {
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
                    <View key={key} style={styles.itemLote}>
                        <Image source={images.dot1} style={{ width: p(30), height: p(30), marginRight: p(20) }} />
                        <TouchableOpacity style={styles.touchPan} onPress={() => Actions.lotetab({ field, description: item.nombre })}>
                            <Text style={{ fontSize: p(20), flex: 1, fontWeight: '700', color: colors.TEXT, marginTop: -5 }}>{field.name}</Text>
                            <Text style={{ fontSize: p(15), color: colors.TEXT, marginLeft: p(20) }}>{field.ha.toFixed(2)} ha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.downBtn} onPress={() => {
                            console.log('*** downBtn ***')
                            
                              
                        }}>
                            <Image source={images.download} style={{ width: p(16), height: p(20) }} />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </>
    )

    onPrev() {
        console.log('**************88')
        // this.setState({ skip: 0})
        this.onfetchData(0)
    }

    onNext() {
        // this.setState({ skip: 20})
        this.onfetchData(20)
    }

    render() {
        const { isWaiting, lotes } = this.state
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
                    />
                    <View style={Cstyles.searchView}>
                        <TextInput
                            style={Cstyles.searchInput}
                            placeholder={'Campos y Lotes'}
                        />
                        <ICON.IconWhiteSearch right={p(20)} />
                    </View>
                    
                    {
                        isWaiting 
                        ? <LottieScreen /> 
                        : 
                          <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: p(12)}}>
                               <Entypo name={'arrow-bold-left'} size={32} color={colors.BLUE} onPress={()=>{ this.onPrev()}}/>
                               <Entypo name={'arrow-bold-right'} size={32} color={colors.BLUE} onPress={()=>{ this.onNext()}}/>
                            </View>
                            <FlatList 
                              data={lotes} 
                              keyExtractor={(item, i) => String(i)} 
                              renderItem={this._renderItem} 
                            />
                          </View>
                    }

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
        paddingLeft: p(20),
        alignItems: 'center',
        height: p(72)
    },
    headText: {
        fontWeight: '700',
        color: '#354052',
        fontSize: p(16)
    },
    downBtn: {
        width: p(60),
        height: p(60),
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchPan: {
        flex: 1,
        height: p(40),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});