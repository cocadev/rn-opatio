import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import styles from './styles'
import { Actions } from 'react-native-router-flux';
import * as DROPDOWN from '../../../components/DropDown';
import Cstyles from '../../../common/c_style';
import api from '../../../common/api'

export default class Noteas extends React.Component {

    constructor(){
        super();
        this.state = {
            isWaiting : false,
            searchKey: '',
            date_from: '2019-01-01',
            date_to: '2019-12-31',
            sort_by: 'date_to'
        }
    }

    componentDidMount(){

        const { searchKey, date_from, date_to, sort_by } = this.state;
        this.setState({ isWaiting: true })

        console.log('_________field_id_________', this.props.field.field_id)


        api.getCamposNotas( this.props.field.field_id, searchKey, date_from, date_to, sort_by, (err, res) => {
            console.log('_________res!!!!!!!_________', res)
            console.log('_________err!!!!!!!_________', err)
            if (err == null) {
                this.setState({ isWaiting: false })
            } else {
                this.setState({ isWaiting: false })
            }
        })
    }

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

        return (
            <View style={Cstyles.container}>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: p(25) }}>

                    <DROPDOWN.XSmall onClick={() => this.props.startModal()} title={'Fecha: ' + this.props.startDate}/>

                    <DROPDOWN.XSmall onClick={() => this.props.endModal()} title={'Fecha: ' + this.props.endDate}/>

                </View>

                <FlatList
                    data={this.props.results}
                    renderItem={this.renderItem}
                    keyExtractor={(item, i) => String(i)}
                />

            </View>
        )
    }
}