import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import { Actions } from 'react-native-router-flux';
import Cstyles from '../../common/c_style';
import text from '../../common/text';
import * as ICON from '../../components/Icons';
import * as BTN from '../../components/Buttons';
import * as HEADERS from '../../components/Headers';
import * as DROPDOWN from '../../components/DropDown';

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
            <View style={Cstyles.container}>

                <HEADERS.GUARDAR back={colors.ORANGE}/>

                <View style={{ backgroundColor: colors.ORANGE, paddingBottom: p(20) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginVertical: p(50) }}>
                        <ICON.IconCamera right={p(16)} />
                        <Text style={text.t_30_700_ff}>{'Nombre Maquinaria*'}</Text>
                    </View>
                    <DROPDOWN.Large title={'Tipo:'}/>
                </View>

                <View style={{ flexDirection: 'row', padding: p(24), paddingTop: p(10) }}>
                    <ICON.IconCircleExc top={p(22)} />
                    <View style={{ marginHorizontal: p(25), flex: 1 }}>
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Marca*"
                            onChangeText={(brand) => this.setState({ brand })}
                            value={brand}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Modelo*"
                            onChangeText={(model) => this.setState({ model })}
                            value={model}
                        />
                        <TextInput
                            style={Cstyles.input}
                            placeholder="Ancho de labor (metros)*"
                            onChangeText={(width) => this.setState({ width })}
                            value={width}
                        />
                        <TextInput
                            style={Cstyles.input}
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
                    <BTN.BtnSmall title={'NUEVO CONTRATISTA'} back={colors.BLUE2} onClick={()=>Actions.machinenewcontractor()}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
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