import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { images } from '../../../common/images'
import { p } from '../../../common/normalize'
import { colors } from '../../../common/colors'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Cstyles from '../../../common/c_style'
import * as ICON from '../../../components/Icons'
import * as HEADER from '../../../components/Headers'
import * as actions from "../../../store/lotes/actions";

class CheckLote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lotes: null,
            isWaiting: false,
            skip: 0,
        }
    }

    _onGoTo = (x, y) => {
        if(this.props.update){
            this.props.update(x.name, x.field_id, y.nombre);
            Actions.pop()
        }
    }

    _renderItem = ({ item: x }) => {
        return (
            <>
                <View style={styles.head}>
                    <Text style={styles.headText}>{x.nombre}</Text>
                </View>

                <FlatList
                    data={x.fields}
                    keyExtractor={(x, i) => String(i)}
                    renderItem={({ item: field, key }) => {
                        return (
                            <View key={key} style={styles.itemLote}>
                                <Image source={images.dot1} style={{ width: p(30), height: p(30), marginRight: p(20) }} />
                                <TouchableOpacity
                                    style={styles.touchPan}
                                    onPress={() => this._onGoTo(field, x)}
                                >
                                    <Text style={{ fontSize: p(20), flex: 1, fontWeight: '700', color: colors.TEXT, marginTop: -5 }}>{field.name}</Text>
                                    <Text style={{ fontSize: p(15), color: colors.TEXT, marginLeft: p(20) }}>{field.ha.toFixed(2)} ha</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.downBtn}>
                                    <Image source={images.download} style={{ width: p(16), height: p(20) }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    extraData={this.state}
                />
            </>
        )
    }

    render() {
        const { allLotes } = this.props
        return (
            <View style={Cstyles.container}>
                <HEADER.NormalIcon
                    title={'Lotes'}
                    back={colors.BLUE}
                    icon={<ICON.IconLocation />}
                />
                <FlatList
                    data={allLotes}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                    extraData={this.state}
                />
            </View>
        );
    }
}

export default connect(
    state => ({
        allLotes: state.lotes.allLotes,
        allLotesCount: state.lotes.allLotesCount,
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(CheckLote);



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