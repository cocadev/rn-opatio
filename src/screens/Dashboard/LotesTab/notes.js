import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../common/colors';
import { NOTAS } from '../../../common/config';
import { Entypo } from '@expo/vector-icons';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

export default class Noteas extends React.Component {

    render() {
        return (
            <View style={styles.containerView}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: p(12) }}>
                    <View style={styles.dropdown}>
                        <Text>{'Fecha: 23/03/18'}</Text>
                        <Entypo name={'chevron-down'} size={24} color={colors.GREY4}/>
                    </View>
                    <View style={styles.dropdown}>
                        <Text>{'Fecha: 23/04/18'}</Text>
                        <Entypo name={'chevron-down'} size={24} color={colors.GREY4}/>
                    </View>
                </View>
                <ScrollView>
                    {
                        NOTAS.map((item, index) => {
                            return (
                                <View key={index} style={{ paddingHorizontal: p(15), flexDirection: 'row', backgroundColor: colors.WHITE }}>
                                    <View style={{ width: 40 }}>
                                        <Text style={{ fontSize: 9 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 9 }}>{item.time}</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <View style={styles.timeDot}></View>
                                        <View style={styles.dot}></View>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        {
                                            item.visible &&
                                            <View style={{ flexDirection: 'row', marginHorizontal: p(22), marginVertical: p(14) }}>
                                                <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
                                                <Text style={{ alignSelf: 'center', paddingHorizontal: p(16), fontSize: p(12) }}>Semana 11 del 2019</Text>
                                                <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
                                            </View>
                                        }
                                        <TouchableOpacity style={styles.timeView} onPress={()=>Actions.lotedetail()}>
                                            <Image source={images.msg} style={styles.img} />
                                            <Text style={{ color: '#fff', fontSize: p(16) }}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            );
                        })
                    }
                </ScrollView>

            </View>
        )
    }
}