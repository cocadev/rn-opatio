import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'

import text from '../../common/text'
import Cstyles from '../../common/c_style'

import * as ICON from '../../components/Icons'
import * as HEADERS from '../../components/Headers'

export default class MachineNewContractor extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            tel: '',
            social: '',
            ciu: '',
            prov: '',
            direction: ''
        }
    }

    render() {
        const { email, tel, social, ciu, prov, direction } = this.state
        return (
            <ScrollView style={Cstyles.container}>

                <HEADERS.GUARDAR back={colors.PURPLE2}/>

                <View style={styles.headerView}>
                    <ICON.IconCamera right={p(16)} />
                    <Text style={styles.text1}>{'Nombre y Apellido*'}</Text>
                </View>

                <View style={{ flexDirection: 'row', padding: p(24), paddingTop: p(10) }}>
                    <ICON.IconCircleExc top={p(22)} />
                    <View style={{ marginHorizontal: p(25), flex: 1}}>
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Email"
                            onChangeText={(email) => this.setState({ email })}
                            value={email}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Tel*"
                            onChangeText={(tel) => this.setState({ tel })}
                            value={tel}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Razón social*"
                            onChangeText={(social) => this.setState({ social })}
                            value={social}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Dirección"
                            onChangeText={(direction) => this.setState({ direction })}
                            value={direction}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Ciudad"
                            onChangeText={(ciu) => this.setState({ ciu })}
                            value={ciu}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Provincia"
                            onChangeText={(prov) => this.setState({ prov })}
                            value={prov}
                        />
                    </View>
                </View>


                <View style={styles.bar}>
                    <Image source={images.apart} style={{ width: p(20), height: p(18), marginLeft: p(8) }} />
                    <View style={{ marginLeft: p(24) }}>
                        <Text style={text.t_16_500_00}>{'Mi empresa:'}</Text>
                        <Text style={text.t_15_400_98}>{'Sin asignar'}</Text>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text1: {
        marginLeft: p(20),
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(30)
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        paddingHorizontal: p(24),
        paddingVertical: p(16),
        borderTopColor: colors.GREY0,
        borderTopWidth: 2
    },
    headerView: {
        alignItems: 'center',
        backgroundColor: colors.PURPLE2,
        padding: p(30),
        paddingBottom: p(106),
        flexDirection: 'row'
    }
});