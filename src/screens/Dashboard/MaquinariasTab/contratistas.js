import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { contratistas } from '../../../common/config';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import { Actions } from 'react-native-router-flux';
import text from '../../../common/text';

export default class Contratistas extends React.Component {

    _renderItem = ({ item, index }) => (
        <View key={index} style={styles.view}>
            <Image source={images.user} style={styles.circle} />
            <TouchableOpacity onPress={() => Actions.MachinesContractorTab()} style={{ width: p(190), marginLeft: p(3) }}>
                <Text style={text.t_16_700_2e}>{item.name}</Text>
                <Text style={text.t_15_400_72}>{item.address}</Text>
            </TouchableOpacity>
            <View style={styles.count}>
                <Text style={text.t_12_700_ee}>{item.count}</Text>
            </View>
            <View style={{ marginTop: p(6) }}>
                <View style={{ flexDirection: 'row', marginLeft: p(18) }}>
                    <Image source={item.switch ? images.mapPositionGrey : images.mapPositionYellow} style={styles.position} />
                    <Text style={styles.text5}>{'Ver en\nel mapa'}</Text>
                </View>
                <Text style={styles.text4}>{item.count + ' Máquinas'}</Text>
            </View>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>

                <View style={{ alignItems: 'center', marginTop: p(8) }}>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.machinenewcontractor()}>
                        <Text style={styles.headText}>{'NUEVO CONTRATISTA'}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={{ marginTop: 12 }}
                    data={contratistas}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                />

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
        borderTopColor: colors.GREY3,
        borderTopWidth: 1,
    },
    circle: {
        width: p(38),
        height: p(38)
    },
    position: {
        width: p(22),
        height: p(21)
    },
    vertical: {
        backgroundColor: colors.GREY7,
        width: 1,
        height: p(50)
    },
    text0: {
        color: '#212121',
        fontSize: p(11),
        fontWeight: '400',
        textAlign: 'center'
    },
    text4: {
        marginTop: p(8),
        color: colors.GREY7,
        fontSize: p(15),
        fontWeight: '400',
    },
    text5: {
        marginLeft: p(8),
        color: colors.GREY8,
        fontSize: p(9),
        fontWeight: '700',
    },
    count: {
        width: p(26),
        height: p(26),
        borderRadius: p(13),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.PURPLE
    },
    button: {
        width: p(178),
        height: p(30),
        marginBottom: p(18),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 6,
        borderRadius: 3,
        backgroundColor: '#2298d7',
    },
    headText: {
        color: colors.GREY3,
        fontSize: p(13),
        fontWeight: '700',
    }
});
