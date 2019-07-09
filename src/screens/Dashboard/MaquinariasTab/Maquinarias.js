import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { Tractores } from '../../../common/config';
import { p } from '../../../common/normalize';
import { Actions } from 'react-native-router-flux';
import UtilService from '../../../common/utils';
import * as ICON from '../../../components/Icons';
import text from '../../../common/text';

export default class Maquinarias extends React.Component {

    _renderItem = ({ item, index }) => (
        <View key={index} style={styles.view}>
            <View style={{ width: p(40) }}>
                <Image source={UtilService.getCircleColr(item.type)} style={styles.circle} />
                <Text style={text.t_11_500_21}>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={() => Actions.machinetrackdetail()}>
                <Text style={text.t_14_700_00}>{'Tractor ' + item.number}</Text>
                <Text style={text.t_11_700_00}>{item.name}</Text>
            </TouchableOpacity>
            <View style={styles.vertical}></View>
            <Text style={text.t_13_700_21}>{item.status}</Text>
            <TouchableOpacity onPress={() => Actions.MaquinariasSwitch()}>
                <ICON.IconSwitchOff />
            </TouchableOpacity>
        </View>
    );

    render() {
        const { hidden } = this.props;
        return (
            <View style={styles.container}>

                {!hidden && <Text style={text.t_15_700_35}>{'Tractores'}</Text>}

                <FlatList
                    style={{ marginTop: 12 }}
                    data={Tractores}
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
});
