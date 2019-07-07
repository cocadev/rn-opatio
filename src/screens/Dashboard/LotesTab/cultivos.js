import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../common/colors';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import { Actions } from 'react-native-router-flux';
import * as DROPDOWN from '../../../components/DropDown';
import Cstyles from '../../../common/c_style';
import text from '../../../common/text';

const view = {
    width: p(232),
    height: p(33),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: p(8),
    elevation: 3,
    borderRadius: 5
}

export default class Cultivos extends React.Component {

    render() {
        return (
            <View style={Cstyles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: p(25) }}>

                    <DROPDOWN.XSmall title={'Desde campaña'}/>
                    <DROPDOWN.XSmall title={'Hasta campaña'}/>
                    
                </View>

                <ScrollView>

                    <View style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16)}}>
                        <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15) }}>Campaña 2019/2020</Text>
                        <View style={[ view, { backgroundColor: colors.YEL, marginTop: p(40) }]}>
                            <Text style={text.t_14_700_00}>Maíz</Text>
                        </View>
                        <View style={[ view, { backgroundColor: colors.YELLOW2 }]}>
                            <Text style={text.t_14_700_00}>Trigo</Text>
                        </View>
                        <TouchableOpacity onPress={()=>Actions.cultivosDetail()} style={{ position: 'absolute', right: p(20), bottom: p(25) }}>
                            <Image source={images.edit} style={{ width: p(34), height: p(41) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16)}}>
                        <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15) }}>Campaña 2018/2019</Text>
                        <View style={[ view, { backgroundColor: colors.GREEN3, marginTop: p(40) }]}>
                            <Text style={text.t_14_700_00}>Maíz</Text>
                        </View>
                        <View style={[ view, { backgroundColor: colors.YELLOW2 }]}>
                            <Text style={text.t_14_700_00}>Trigo</Text>
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: p(20), bottom: p(25) }}>
                            <Image source={images.edit} style={{ width: p(34), height: p(41) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16)}}>
                        <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15) }}>Campaña 2017/2018</Text>
                        <View style={[ view, { backgroundColor: colors.GREEN3, marginTop: p(40) }]}>
                            <Text style={text.t_14_700_00}>Maíz</Text>
                        </View>
                        <View style={[ view, { backgroundColor: colors.WHITE }]}>
                            <Text style={text.t_14_700_00}>Trigo</Text>
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