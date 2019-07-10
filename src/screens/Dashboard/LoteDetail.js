import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Carousel from 'react-native-banner-carousel';
import text from '../../common/text';
import * as ICON from '../../components/Icons';
import * as CONFIG from '../../common/config';
import * as ATOM from '../../components/Atoms';
import * as HEADER from '../../components/Headers';

import Cstyles from '../../common/c_style';
import { Actions } from 'react-native-router-flux';

const width = Math.round(Dimensions.get('window').width);

export default class LoteDetail extends Component {

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
        const data = this.props.navigation.state.params.data;
        const position = this.props.navigation.state.params.position;
        const field = this.props.navigation.state.params.field

        return (
            <View style={Cstyles.container}>
                <HEADER.Gradient 
                    color={colors.ORANGE} 
                    title={'EDITOR'} 
                    data={data} 
                    onClick={()=>Actions.lotesedit({ data })}
                />
                <ScrollView>
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

                    <View style={styles.view}>
                        <Image source={images.msg} style={{ width: p(30), height: p(30) }} />
                        <Text style={text.t_32_700_ff_t8}>{data.original_title}</Text>
                        <Text numberOfLines={4} style={text.t_15_600_ff}>{data.overview}</Text>
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconMap />}
                        title={'Ubicación y coordenadas'}
                        note={'Long: ' + Math.round(position[0] * 100) / 100 + ' - Lat: ' + Math.round(position[1] * 100) / 100}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconSquare />}
                        title={'En lote'}
                        note={'Lote ' + field.name + ' - Santa Rosa'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconPin />}
                        title={'Archivos adjuntos'}
                        note={data.vote_count + ' Archivo'}
                    />

                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, paddingVertical: p(22) }}>
                        <Image source={{ uri: 'https://image.tmdb.org/t/p/w300' + data.poster_path }} style={styles.video} />
                        {
                            video ? <ICON.IconPause onClick={() => this.setState({ video: !video })} /> : <ICON.IconVideo onClick={() => this.setState({ video: !video })} />
                        }
                        <Text style={text.t_14_500_98}>{'Nota de voz 0:23 '}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.ORANGE,
        elevation: 3,
        padding: p(30),
        paddingVertical: p(30)
    },
    video: {
        width: p(225),
        height: p(225),
        marginBottom: p(23),
        marginRight: p(3),
        borderRadius: p(5)
    }
});