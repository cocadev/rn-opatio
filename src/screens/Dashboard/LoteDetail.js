import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Carousel from 'react-native-banner-carousel';
import Header from '../../components/Header3';
import text from '../../common/text';
import * as ICON from '../../components/Icons';
import * as CONFIG from '../../common/config';

const width = Math.round(Dimensions.get('window').width);

export default class LoteDetail extends Component {

    constructor(){
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
        const data = this.props.navigation.state.params.data;
        const position = this.props.navigation.state.params.position;
        const field = this.props.navigation.state.params.field

        return (
            <ScrollView style={styles.container}>
                <Header color={colors.ORANGE} title={'EDITOR'} data={data}/>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    pageIndicatorStyle={{ backgroundColor: colors.WHITE }}
                    activePageIndicatorStyle={{ backgroundColor: colors.ORANGE }}
                    pageIndicatorContainerStyle={{ fontSize: 70 }}
                    index={0}
                    pageSize={width}
                >
                    {CONFIG.carouselList.map((image, index) => this.renderPage(image, index))}
                </Carousel>
                <View style={{ backgroundColor: colors.ORANGE, elevation: 3, padding: p(30), paddingBottom: p(10) }}>
                    <Image source={images.msg} style={{ width: p(30), height: p(30) }} />
                    <Text style={styles.text1}>{data.original_title}</Text>
                    <Text numberOfLines={4} style={styles.text2}>{data.overview}</Text>
                </View>

                <View style={styles.item}>
                    <Image source={images.map} style={{ width: p(18), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={text.t_16_500_00}>{'Ubicación y coordenadas'}</Text>
                        <Text style={text.t_16_400_98}>{'Long: ' + Math.round( position[0] * 100 ) / 100 + ' - Lat: ' + Math.round( position[1] * 100 ) / 100}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <Image source={images.square} style={{ width: p(22), height: p(22), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={text.t_16_500_00}>{'En lote'}</Text>
                        <Text style={text.t_16_400_98}>{'Lote ' + field.name + ' - Santa Rosa'}</Text>
                    </View>
                </View>

                <View style={[styles.item, { borderBottomWidth: 0 }]}>
                    <Image source={images.pin} style={{ width: p(12), height: p(22), marginTop: p(7), marginLeft: p(8) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={text.t_16_500_00}>{'Archivos adjuntos'}</Text>
                        <Text style={text.t_16_400_98}>{ data.vote_count + ' Archivo'}</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(18) }}>
                    <Image source={{ uri: 'https://image.tmdb.org/t/p/w300' + data.poster_path }} style={styles.video} />
                    {
                        video ? <ICON.IconPause onClick={()=>this.setState({video: !video})} /> : <ICON.IconVideo onClick={()=>this.setState({video: !video})} />
                    }
                    <Text style={text.t_14_500_98}>{'Nota de voz 0:23 '}</Text>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE
    },
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(32)
    },
    text2: {
        color: colors.WHITE,
        fontWeight: '500',
        fontSize: p(17),
        marginVertical: p(14)
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        padding: p(30),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: p(7)
    },
    video: {
        width: p(225),
        height: p(225),
        marginBottom: p(23),
        marginRight: p(3),
        borderRadius: p(5)
    }
});