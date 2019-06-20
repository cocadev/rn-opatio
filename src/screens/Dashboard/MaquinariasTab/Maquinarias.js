import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../common/colors';
import { Tractores } from '../../../common/config';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import { Actions } from 'react-native-router-flux';
import UtilService from '../../../common/utils';
import * as ICON from '../../../components/Icons';

export default class Maquinarias extends React.Component {

    render() {
        const { hidden } = this.props;
        return (
            <View style={styles.container}>

                { !hidden && <Text style={styles.textTitle}>{'Tractores'}</Text>}

                <ScrollView>
                    {
                        Tractores.map((item, index) => {
                            return (
                                <View key={index} style={styles.view}>
                                    <View style={{ width: p(40) }}>
                                        <Image source={UtilService.getCircleColr(item.type)} style={styles.circle} />
                                        <Text style={styles.text0}>{item.title}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text1}>{'Tractor ' + item.number}</Text>
                                        <Text style={styles.text2}>{item.name}</Text>
                                    </View>
                                    <View style={styles.vertical}></View>
                                    <Text style={styles.text3}>{item.status}</Text>

                                    <TouchableOpacity onPress={()=>Actions.MaquinariasSwitch()}>
                                       <ICON.IconSwitchOff />
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                    }
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
        backgroundColor: colors.WHITE
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: p(15),
        height: p(87),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: 1,
        borderLeftColor: colors.ORANGE,
        borderLeftWidth: p(8),
        borderTopLeftRadius: p(6),
        borderBottomLeftRadius: p(6)
    },
    circle: {
        width: p(30),
        height: p(30)
    },
    vertical: {
        backgroundColor: colors.GREY7,
        width: 1,
        height: p(50)
    },
    switchButton: {
        width: p(36),
        height: p(18)
    },
    text0: {
        color: '#212121',
        fontSize: p(11),
        fontWeight: '400',
        textAlign: 'center'
    },
    text1: {
        color: '#354052',
        fontSize: p(15),
        fontWeight: '700',
    },
    text2: {
        color: '#354052',
        fontSize: p(14),
        fontWeight: '700',
    },
    text3: {
        color: '#212121',
        fontSize: p(13),
        fontWeight: '700',
    },
    textTitle: {
        marginHorizontal: p(31),
        marginVertical: p(18),
        color: '#354052',
        fontSize: p(16),
        fontWeight: '700',
    }

});
