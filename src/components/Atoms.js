import React from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { p } from '../common/normalize';
import text from '../common/text';
import { colors } from '../common/colors';
import LottieView from 'lottie-react-native';

export const Atom1 = props => (
  <View style={styles.item}>
    {props.icon}
    <View style={{ marginLeft: p(20) }}>
      <Text style={text.t_16_500_00}>{props.title}</Text>
      <Text style={text.t_16_400_98}>{props.note}</Text>
      {props.other}
    </View>
    <View style={styles.right}>
      {props.add}
      {props.right}
    </View>
  </View>
)

export const Loading = (props) => (
  <Modal
    visible={props.visible}
    transparent={true}
    onRequestClose={() => { }}
  >
    <View style={styles.indicatorContainer}>
      <View style={styles.indicator}>
        {/* <LottieView
          loop
          source={require('../common/reload.json')}
          autoPlay
        /> */}
        <Image source={require('../../assets/images/loading.gif')} style={{width: p(50), height: p(50)}} />

      </View>
    </View>
  </Modal>
)


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    paddingLeft: p(30),
    paddingRight: p(20),
    paddingVertical: p(20),
    alignItems: 'center',
    borderTopColor: colors.GREY3,
    borderTopWidth: p(7)
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },
  indicatorContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center"
  },
  indicator: {
    width: p(80),
    height: p(80),
    borderRadius: 5,
    shadowColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: "#20409A"
  },
});
