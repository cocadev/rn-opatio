import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Header from '../../components/Header2';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export default class MachineNewContractor extends Component {

    constructor() {
        super();
        this.state = {
            video: false
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: width, height: p(209) }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        const { video } = this.state;
        return (
            <ScrollView style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image source={images.back} style={{ width: 20, height: 18 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.vertical, { backgroundColor: colors.WHITE }]}>
                            <Text style={{ color: colors.BLACK, fontWeight: '700' }}>{'GUARDAR'}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.headerView}>
                    <Image source={images.photoAdd} style={{ width: p(25), height: p(23) }} />
                    <Text style={styles.text1}>{'Nombre y Apellido*'}</Text>
                </View>

                <View style={{ flexDirection: 'row', padding: p(24), paddingTop: p(10) }}>
                    <Image source={images.circleExc} style={{ width: p(20), height: p(20), marginTop: p(24) }} />
                    <View style={{ marginHorizontal: p(25), flex: 1}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Tel*"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Razón social*"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Dirección"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ciudad"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Provincia"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>
                </View>


                <View style={styles.item}>
                    <Image source={images.apart} style={{ width: p(20), height: p(18), marginLeft: p(8) }} />
                    <View style={{ marginLeft: p(24) }}>
                        <Text style={styles.text3}>{'Mi empresa:'}</Text>
                        <Text style={styles.text4}>{'Sin asignar'}</Text>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    input: {
        height: 40, 
        marginVertical: p(6),
        marginTop: p(10),
        fontSize: p(17), 
        borderBottomColor: '#707070', 
        borderBottomWidth: 1 
    },
    text1: {
        marginLeft: p(20),
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(30)
    },
    text2: {
        color: colors.WHITE,
        fontWeight: '500',
        fontSize: p(17),
        marginVertical: p(14)
    },
    text3: {
        color: colors.BLACK,
        fontWeight: '500',
        fontSize: p(18)
    },
    text4: {
        color: colors.GREY8,
        fontWeight: '400',
        fontSize: p(18)
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        paddingHorizontal: p(24),
        paddingVertical: p(16),
        borderTopColor: colors.GREY0,
        borderTopWidth: 2
    },

    vertical: {
        backgroundColor: colors.BLUE2,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
    },
    header: {
        backgroundColor: colors.PURPLE2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        height: p(60),
        alignItems: 'center',
    },
    headerView: {
        alignItems: 'center',
        backgroundColor: colors.PURPLE2,
        padding: p(30),
        paddingBottom: p(106),
        flexDirection: 'row'
    }
});