import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import { Actions } from 'react-native-router-flux';
import Cstyles from '../../../common/c_style';
import text from '../../../common/text';
import * as DROPDOWN from '../../../components/DropDown';
import * as CONFIG from '../../../common/config'

const view = {
    width: p(232),
    height: p(33),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: p(8),
    elevation: 3,
    borderRadius: 5,
}

export default class Cultivos extends React.Component {

    constructor() {
        super();
        this.state = {
            startYear: '2019',
            endYear: '2030'
        }
    }

    renderItem = ({ item, index }) => {
        console.log('*********', item)
        return (
            <View key={index} style={{ paddingHorizontal: p(15), alignItems: 'center', marginTop: p(16) }}>
                <Text style={{ color: colors.GREY7, textAlign: 'left', position: 'absolute', left: p(15), fontSize: p(12) }}>
                     Campaña {parseInt(item.campaing / 100) + 2000}/{parseInt(item.campaing / 100) + 2001}
                </Text>
                <View style={[view, { backgroundColor: colors.YEL, marginTop: p(40) }]}>
                    <Text style={text.t_14_700_00}>{item.estival}</Text>
                </View>
                <View style={[view, { backgroundColor: colors.YELLOW2 }]}>
                    <Text style={text.t_14_700_00}>{item.invernal}</Text>
                </View>
                <TouchableOpacity onPress={() => Actions.cultivosDetail()} style={{ position: 'absolute', right: p(20), bottom: p(25) }}>
                    <Image source={images.edit} style={{ width: p(34), height: p(42) }} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        const { crops } = this.props

        return (
            <View style={[Cstyles.container, { paddingBottom: p(20) }]}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: p(12) }}>

                    {/* <DROPDOWN.XSmall 
                        title={startYear} 
                        onClick={() => Actions.dropdown({
                        dropdown: CONFIG.create1,
                        update: (i) => {
                            this.setState({ startYear: i.name })
                            this.props.onClick( startYear, endYear)
                        }
                    })} 
                    />
                    <DROPDOWN.XSmall 
                        title={endYear} 
                        onClick={() => Actions.dropdown({
                        dropdown: CONFIG.create1,
                        update: (i) => {
                            this.setState({ endYear: i.name })
                            this.props.onClick( startYear, endYear)
                        }
                    })
                    }
                     /> */}

                </View>

                {
                    crops &&
                    <FlatList
                        data={crops}
                        renderItem={this.renderItem}
                        keyExtractor={(item, i) => String(i)}
                    />
                }

            </View>
        )
    }
}