import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../../common/colors';

const width = Math.round(Dimensions.get('window').width);

export default class Noteas extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
                <Text>NOteas</Text>
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