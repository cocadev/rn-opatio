import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../common/colors';
import { images } from '../../../common/images';
import { p } from '../../../common/normalize';
import { Actions } from 'react-native-router-flux';
import Cstyles from '../../../common/c_style';
import styles from './styles'
import UtilService from '../../../common/utils'
import * as DROPDOWN from '../../../components/DropDown';

export default class Tareas extends React.Component {

    constructor() {
        super();
        this.state = {
            isWaiting: false,
            searchKey: '',
            date_from: '2019-01-01',
            date_to: '2019-12-31',
            sort_by: 'date_to'
        }
    }



    renderItem = ({ item, index }) => {

        return (
            <View key={index} style={{ paddingHorizontal: p(15), flexDirection: 'row', backgroundColor: colors.WHITE }}>

                <View style={{ flex: 1, width: p(270) }}>

                    <View style={{ flexDirection: 'row', marginHorizontal: p(22), marginVertical: p(14) }}>
                        <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center', paddingHorizontal: p(16), fontSize: p(12) }}>{item._id.year + ": week " + item._id.week}</Text>
                        <View style={{ backgroundColor: colors.GREY5, height: 1, flex: 1, alignSelf: 'center' }} />
                    </View>

                    <FlatList
                        data={item.tasks}
                        keyExtractor={(item, i) => String(i)}
                        renderItem={({ item: x }) =>
                            <View style={{ flexDirection: 'row', backgroundColor: colors.WHITE }}>
                                <View style={{ width: 20 }}>
                                    <Text style={{ fontSize: 9 }}></Text>
                                    <Text style={{ fontSize: 9 }}></Text>
                                </View>
                                <View style={{ marginLeft: p(10) }}>
                                    <View style={[styles.timeDot, { backgroundColor: colors.SKY }]}></View>
                                    <View style={styles.dot}></View>
                                </View>

                                <TouchableOpacity
                                    style={[styles.timeView, { paddingRight: p(8), position: 'relative', width: p(270), backgroundColor: colors.SKY }]}
                                    onPress={
                                        () => Actions.tareasdetail({ task_id: x.task_id, week: item._id.week })
                                    }
                                >
                                    <Image source={images.msg} style={styles.img} />
                                    <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View>
                                            <Text style={{ color: '#fff', fontSize: p(14), marginRight: p(30) }}>{x.title}</Text>
                                            <Text style={{ color: '#fff', fontSize: p(14), marginRight: p(30) }}>{x.description}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: p(50) }}>
                                            <Text style={{ color: '#fff', fontSize: p(11) }}>{UtilService.getDate(x.created_at)}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />


                </View>

            </View>
        )
    }

    render() {

        // console.log('********* this.props.tasks *************', this.props.tasks)

        return (
            <View style={Cstyles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: p(25) }}>

                    <DROPDOWN.XSmall onClick={() => this.props.startModal()} title={'Fecha: ' + this.props.startDate} />

                    <DROPDOWN.XSmall onClick={() => this.props.endModal()} title={'Fecha: ' + this.props.endDate} />

                </View>

                {
                    this.props.tasks &&
                    <FlatList
                        data={this.props.tasks}
                        renderItem={this.renderItem}
                        keyExtractor={(item, i) => String(i)}
                    />
                }

            </View>
        )
    }
}