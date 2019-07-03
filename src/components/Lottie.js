import React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;
const window = Dimensions.get('window');

import LOADING from "../common/loading.json";

export default class LottieScreen extends React.Component {
  state = {
    animation: null,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = () => {
    this.setState({ animation: LOADING }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    flex:1,
    marginTop: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height:120,
  },
});
