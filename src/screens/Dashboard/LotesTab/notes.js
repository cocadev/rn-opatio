import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { Entypo } from '@expo/vector-icons';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

export default class Noteas extends React.Component {

    renderItem = ({ item, index }) => {

        const NOTAS = this.props.results;
        const polygons = this.props.polygons;
        const field = this.props.field;

        var condition = !null;
        if (index > 0) {
            condition = item.release_date !== NOTAS[index - 1].release_date
        }

        return (
            <View key={index} style={{ paddingHorizontal: p(15), flexDirection: 'row', backgroundColor: colors.WHITE }}>
                <View style={{ width: 40 }}>
                    <Text style={{ fontSize: 9 }}>{item.original_language}</Text>
                    <Text style={{ fontSize: 9 }}>{item.release_date.substring(2)}</Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={styles.timeDot}></View>
                    <View style={styles.dot}></View>
                </View>

                <View style={{ flex: 1, width: p(270) }}>
                    {
                        condition &&
                        <View style={{ flexDirection: 'row', marginHorizontal: p(22), marginVertical: p(14) }}>
                            <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center', paddingHorizontal: p(16), fontSize: p(12) }}>{item.release_date}</Text>
                            <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
                        </View>
                    }
                    <TouchableOpacity style={[styles.timeView, { paddingRight: p(12), position: 'relative' }]} onPress={() => Actions.lotedetail({ data: item, position: polygons[0][0], field: field })}>
                        <Image source={images.msg} style={styles.img} />
                        <Text style={{ color: '#fff', fontSize: p(16), marginRight: p(30) }}>{item.title}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    render() {
        const NOTAS = this.props.results

        return (
            <View style={styles.containerView}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: p(12) }}>
                    <TouchableOpacity onPress={() => this.props.startModal()} style={styles.dropdown}>
                        <Text>{'Fecha: ' + this.props.startDate}</Text>
                        <Entypo name={'chevron-down'} size={24} color={colors.GREY4} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.endModal()} style={styles.dropdown}>
                        <Text>{'Fecha: ' + this.props.endDate}</Text>
                        <Entypo name={'chevron-down'} size={24} color={colors.GREY4} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={styles.container}
                    data={NOTAS}
                    renderItem={this.renderItem}
                    keyExtractor={(item, i) => String(i)}
                />

            </View>
        )
    }
}