import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../common/colors'
import { p } from '../common/normalize';
import { images } from '../common/images';
import { Actions } from 'react-native-router-flux';

export const IconDown = props => (<Image source={images.down} style={{ width: p(12), height: p(8) }} />)
export const IconUp = props => (<Image source={images.play} style={{ width: p(22), height: p(28) }} />)
export const IconWhiteSearch = props => (<Image source={images.search_white} style={{ width: p(17), height: p(17), marginRight: props.right }} />)
export const IconFolder = props => (<Image source={images.folder} style={{ width: p(20), height: p(16), marginRight: props.right }} />)
export const IconAddPlusGreen = props => (<Image source={images.addPlusGreen} style={{ width: p(20), height: p(20), marginRight: props.right }} />)
export const IconSwitchOnGreen = props => (<Image source={images.switch_green} style={{ width: p(42), height: p(22), marginRight: props.right, marginLeft: props.left }} />)
export const IconSwitchOffRed = props => (<Image source={images.switch_red} style={{ width: p(42), height: p(21), marginRight: props.right, marginLeft: props.left }} />)
export const IconDustbin = props => (<Image source={images.dustbin} style={{ width: p(15), height: p(20), marginRight: props.right, marginLeft: props.left }} />)

export const IconNeedle = props => (<Image source={images.needle} style={{ width: p(25), height: p(19), marginRight: props.right, marginLeft: props.left }} />)
export const IconNeedle2 = props => (<Image source={images.needle2} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left  }} />)
export const IconNeedle3 = props => (<Image source={images.needle3} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left  }} />)
export const IconActive = props => (<Image source={images.active} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left  }} />)
export const IconInActive = props => (<Image source={images.inactive} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left  }} />)

export const IconParameter = props => (<Image source={images.parameter} style={{ width: p(22), height: p(16), marginRight: props.right, marginLeft: props.left  }} />)
export const IconError = props => (<Image source={images.error} style={{ width: p(23), height: p(20), marginRight: props.right, marginLeft: props.left  }} />)
export const IconTrackGrey = props => (<Image source={images.trackGrey} style={{ width: p(23), height: p(25), marginRight: props.right, marginLeft: props.left  }} />)
export const IconGreenCheck = props => (<Image source={images.greenCheck} style={{ width: p(20), height: p(20), marginRight: props.right, marginLeft: props.left  }} />)
export const IconCircleExc = props => (<Image source={images.circleExc} style={{ width: p(20), height: p(20), marginRight: props.right, marginLeft: props.left  }} />)

export const ImgMessageBar = props => (<Image source={images.message_bar} style={{ width: p(344), height: p(36), marginRight: props.right, marginLeft: props.left  }} />)

export const IconBack = props => (
  <TouchableOpacity onPress={() => Actions.pop()}>
    <Image source={images.back} style={{ width: p(20), height: p(20), marginTop: props.top }} />
  </TouchableOpacity>)

const styles = StyleSheet.create({

});
