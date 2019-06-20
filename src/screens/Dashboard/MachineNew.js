import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';

import { Actions } from 'react-native-router-flux';
import text from '../../common/text';
import * as ICON from '../../components/Icons';
import * as BTN from '../../components/Buttons';

export default class MachineNew extends Component {

    constructor(){
        super();
        this.state={
            brand: '',
            model: '',
            width: '',
            code: '',
        }
    }

    render() {
        const { brand, model, width, code } = this.state;
        return (
            <ScrollView style={styles.container}>

                <View style={{ backgroundColor: colors.ORANGE }}>
                    <View style={styles.header}>
                        <ICON.IconBack top={p(5)} />
                        <TouchableOpacity onPress={()=>Actions.maquinariastab()}>
                            <BTN.WhiteDark title={'GUARDAR'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginVertical: p(50) }}>
                        <ICON.IconCamera right={p(16)} />
                        <Text style={text.t_30_700_ff}>{'Nombre Maquinaria*'}</Text>
                    </View>
                    <View style={styles.dropdown}>
                        <Text style={text.t_16_500_ff}>{'Tipo: '}</Text>
                        <ICON.IconDownWhite />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: p(24), paddingTop: p(10) }}>
                    <ICON.IconCircleExc top={p(22)} />
                    <View style={{ marginHorizontal: p(25), flex: 1 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Marca*"
                            onChangeText={(brand) => this.setState({ brand })}
                            value={brand}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Modelo*"
                            onChangeText={(model) => this.setState({ model })}
                            value={model}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ancho de labor (metros)*"
                            onChangeText={(width) => this.setState({ width })}
                            value={width}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Código de GPS"
                            onChangeText={(code) => this.setState({ code })}
                            value={code}
                        />
                    </View>
                </View>

                <View style={styles.bar}>
                    <ICON.IconProfile left={p(5)} right={p(23)} />
                    <View style={{ flex: 1 }}>
                        <Text style={text.t_16_500_00}>{'Contratista:'}</Text>
                        <Text style={text.t_15_400_98}>{'Sin asignar:'}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>Actions.machinenewcontractor()}>
                        <BTN.BlueWhite title={'NUEVO CONTRATISTA'} />
                    </TouchableOpacity>
                </View>



            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        paddingVertical: p(20),
        height: p(60),
        alignItems: 'center',
    },
    dropdown: {
        marginHorizontal: p(60),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: p(35),
        borderColor: colors.WHITE,
        borderWidth: 1,
        paddingVertical: p(14),
        paddingHorizontal: p(20)
    },
    input: {
        height: 40,
        marginVertical: p(6),
        marginTop: p(10),
        fontSize: p(17),
        borderBottomColor: '#707070',
        borderBottomWidth: 1
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: p(24),
        paddingVertical: p(17),
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 1.5,
        borderTopColor: '#d0d0d0',
        borderTopWidth: 1.5
    }
});