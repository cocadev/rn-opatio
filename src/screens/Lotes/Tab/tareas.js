import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../../common/colors';

const width = Math.round(Dimensions.get('window').width);

export default class Tareas extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
                <Text>Tareas</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
})