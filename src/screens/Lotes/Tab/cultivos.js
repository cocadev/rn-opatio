import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../common/colors';
import Timeline from 'react-native-timeline-listview'
import { CULTIVOS } from '../../../common/config';
import { Entypo } from '@expo/vector-icons';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles';

const view = {
    width: p(232),
    height: p(33),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: p(8),
    elevation: 3,
    borderRadius: 5
}

const text = {
    color: colors.BLACK,
    fontSize: p(15),
    fontWeight: '700',
}

export default class Cultivos extends React.Component {

    render() {
        return (
            <View style={styles.containerView}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: p(12) }}>
                    <View style={styles.dropdown}>
                        <Text>{'Desde campaña'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
                    </View>
                    <View style={styles.dropdown}>
                        <Text>{'Hasta campaña'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
                    </View>
                </View>

                <ScrollView>

                    <View style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16)}}>
                        <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15) }}>Campaña 2019/2020</Text>
                        <View style={[ view, { backgroundColor: colors.YEL, marginTop: p(40) }]}>
                            <Text style={text}>Maíz</Text>
                        </View>
                        <View style={[ view, { backgroundColor: colors.YELLOW2 }]}>
                            <Text style={text}>Trigo</Text>
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: p(20), bottom: p(25) }}>
                            <Image source={images.edit} style={{ width: p(34), height: p(41) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16)}}>
                        <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15) }}>Campaña 2018/2019</Text>
                        <View style={[ view, { backgroundColor: colors.GREEN3, marginTop: p(40) }]}>
                            <Text style={text}>Maíz</Text>
                        </View>
                        <View style={[ view, { backgroundColor: colors.YELLOW2 }]}>
                            <Text style={text}>Trigo</Text>
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: p(20), bottom: p(25) }}>
                            <Image source={images.edit} style={{ width: p(34), height: p(41) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16)}}>
                        <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15) }}>Campaña 2017/2018</Text>
                        <View style={[ view, { backgroundColor: colors.GREEN3, marginTop: p(40) }]}>
                            <Text style={text}>Maíz</Text>
                        </View>
                        <View style={[ view, { backgroundColor: colors.WHITE }]}>
                            <Text style={text}>Trigo</Text>
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: p(20), bottom: p(25) }}>
                            <Image source={images.edit} style={{ width: p(34), height: p(41) }} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
        )
    }
}