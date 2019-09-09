import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import text from '../common/text';

export default class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            mydate: props.date
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
        console.log('**********************', date)
        this.setState({ mydate: date})
        this._hideDateTimePicker();
        this.props.onClick(date)
    };

    startOpen = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    render() {

        return (
            <View style={style.itemView}>

                <TouchableOpacity onPress={this.startOpen} >
                    <Text style={this.props.color ? text.t_15_600_orange :text.t_15_600_sky}>Editar</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    is24Hour={true}
                    mode={'date'}
                    date={ new Date(this.state.mydate)}

                />

            </View>
        );
    }
}

const style = StyleSheet.create({

})