import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

export default class MapButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mapRegion: null,
            latitude: null,
            longitude: null,
            destination: null,
            mode: 'driving',
            color: '#4286f4CC'
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.setState({ mode: this.props.mode, destination: this.state.destination })}>
                <Icon name={this.props.iconName} size={24} style={[styles.bubble, styles.button]} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    button: {
        marginTop: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    }
});
