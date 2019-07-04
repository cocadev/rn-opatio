import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class MainTabBar extends Component {
    render() {
        const { navigate, state } = this.props.navigation;
        const { index, routes } = state;
        const active = routes[index].key;
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={() => navigate('Tab1')}>
                    <View style={active === 'Tab1' ? styles.active1 : styles.nonactive}>
                        <Text>NOTAS</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('Tab2')}>
                    <View style={active === 'Tab2' ? styles.active2 : styles.nonactive}>
                        <Text>TAREAS</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('Tab3')}>
                    <View style={active === 'Tab3' ? styles.active3 : styles.nonactive}>
                        <Text>CULTIVOS</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

MainTabBar.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default MainTabBar;
