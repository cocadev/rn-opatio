import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { colors } from '../common/colors'
import { p } from '../common/normalize';
import { images } from '../common/images';
import { Actions } from 'react-native-router-flux';
const width = Math.round(Dimensions.get('window').width);

export const IconDown = props => (<Image source={images.down} style={{ width: p(12), height: p(8) }} />)
export const IconDownWhite = props => (<Image source={images.down_white} style={{ width: p(12), height: p(8) }} />)

export const IconUp = props => (<Image source={images.play} style={{ width: p(22), height: p(28) }} />)
export const IconWhiteSearch = props => (<Image source={images.search_white} style={{ width: p(17), height: p(17), marginRight: props.right }} />)
export const IconFolder = props => (<Image source={images.folder} style={{ width: p(20), height: p(16), marginRight: props.right }} />)
export const IconAddPlusGreen = props => (<Image source={images.addPlusGreen} style={{ width: p(20), height: p(20), marginRight: props.right }} />)
export const IconSwitchOnGreen = props => (<Image source={images.switch_green} style={{ width: p(42), height: p(22), marginRight: props.right, marginLeft: props.left }} />)
export const IconSwitchOffRed = props => (<Image source={images.switch_red} style={{ width: p(42), height: p(21), marginRight: props.right, marginLeft: props.left }} />)
export const IconDustbin = props => (<Image source={images.dustbin} style={{ width: p(15), height: p(20), marginRight: props.right, marginLeft: props.left }} />)

export const IconNeedle = props => (<Image source={images.needle} style={{ width: p(25), height: p(19), marginRight: props.right, marginLeft: props.left }} />)
export const IconNeedle2 = props => (<Image source={images.needle2} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left }} />)
export const IconNeedle3 = props => (<Image source={images.needle3} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left }} />)
export const IconActive = props => (<Image source={images.active} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left }} />)
export const IconInActive = props => (<Image source={images.inactive} style={{ width: p(25), height: p(25), marginRight: props.right, marginLeft: props.left }} />)

export const IconParameter = props => (<Image source={images.parameter} style={{ width: p(22), height: p(16), marginRight: props.right, marginLeft: props.left, marginTop: props.top }} />)
export const IconError = props => (<Image source={images.error} style={{ width: p(23), height: p(20), marginRight: props.right, marginLeft: props.left }} />)
export const IconTrackGrey = props => (<Image source={images.trackGrey} style={{ width: p(23), height: p(25), marginRight: props.right, marginLeft: props.left }} />)
export const IconGreenCheck = props => (<Image source={images.greenCheck} style={{ width: p(20), height: p(20), marginRight: props.right, marginLeft: props.left }} />)
export const IconCircleExc = props => (<Image source={images.circleExc} style={{ width: p(20), height: p(20), marginRight: props.right, marginLeft: props.left, marginTop: props.top }} />)
export const IconLocate = props => (<Image source={images.locate} style={{ width: p(28), height: p(28), marginRight: props.right, marginLeft: props.left }} />)
export const IconLocate1 = props => (<Image source={images.locate1} style={{ width: p(52), height: p(52), marginRight: props.right, marginBottom: props.bottom, marginLeft: props.left }} />)

export const IconDownload = props => (<Image source={images.download} style={{ width: p(21), height: p(26), marginRight: props.right, marginLeft: props.left }} />)
export const IconCamera = props => (<Image source={images.photoAdd} style={{ width: p(23), height: p(21), marginRight: props.right, marginLeft: props.left }} />)
export const IconProfile = props => (<Image source={images.profile} style={{ width: p(20), height: p(20), marginRight: props.right, marginLeft: props.left }} />)
export const IconExcWhite = props => (<Image source={images.excWhite} style={{ width: p(22), height: p(26), marginRight: props.right, marginLeft: props.left }} />)
export const IconCall = props => (<Image source={images.call} style={{ width: p(25), height: p(24), marginBottom: props.bottom, marginLeft: props.left }} />)
export const IconCallWhite = props => (<Image source={images.call_white} style={{ width: p(28), height: p(28), marginBottom: props.bottom, marginLeft: props.left }} />)

export const IconSwitchOn = props => (<Image source={images.switch_on} style={{ width: p(37), height: p(19), marginBottom: props.bottom, marginLeft: props.left }} />)
export const IconSwitchOff = props => (<Image source={images.switch_off} style={{ width: p(37), height: p(19), marginBottom: props.bottom, marginLeft: props.left }} />)
export const IconCalendarGreen = props => (<Image source={images.calendar_green} style={{ width: p(66), height: p(67), marginBottom: props.bottom, marginRight: props.right, marginLeft: props.left }} />)
export const IconCalendar = props => (<Image source={images.calendar} style={{ width: p(44), height: p(50), marginTop: props.top, marginBottom: props.bottom, marginRight: props.right, marginLeft: props.left }} />)
export const IconDots = props => (<Image source={images.dots_white} style={{ width: p(6), height: p(21), marginRight: props.right, marginLeft: props.left }} />)
export const IconClose = props => (<Image source={images.close} style={{ width: p(15), height: p(14), marginRight: props.right, marginLeft: props.left }} />)
export const IconTrackLocation = props => (<Image source={images.trackLocation} style={{ width: p(29), height: p(38), marginRight: props.right, marginLeft: props.left, marginTop: props.top, }} />)
export const IconSkyLogo = props => (<Image source={images.logoIcon} style={{ width: p(33), height: p(40), marginRight: props.right, marginLeft: props.left, marginTop: props.top, }} />)

export const IconModalField1 = props => (<Image source={images.map_field1} style={{ width: p(58), height: p(58), marginRight: props.right, marginLeft: props.left }} />)
export const IconModalField2 = props => (<Image source={images.map_field2} style={{ width: p(58), height: p(58), marginRight: props.right, marginLeft: props.left }} />)
export const IconModalField3 = props => (<Image source={images.map_field3} style={{ width: p(58), height: p(58), marginRight: props.right, marginLeft: props.left }} />)
export const IconModalField4 = props => (<Image source={images.map_field4} style={{ width: p(58), height: p(58), marginRight: props.right, marginLeft: props.left }} />)
export const IconModalField5 = props => (<Image source={images.map_field5} style={{ width: p(58), height: p(58), marginRight: props.right, marginLeft: props.left }} />)


export const IconRoundLayer = props => (<Image source={images.layer1} style={{ width: p(52), height: p(52), marginRight: props.right, marginLeft: props.left, marginBottom: props.bottom }} />)
export const IconRoundCall = props => (<Image source={images.call_round} style={{ width: p(52), height: p(52), marginRight: props.right, marginLeft: props.left, marginBottom: props.bottom }} />)
export const IconBigProfile = props => (<Image source={images.profile_big} style={{ width: p(66), height: p(66), marginRight: props.right, marginLeft: props.left, marginBottom: props.bottom }} />)


export const IconAddYellow = props => (
  <TouchableOpacity onPress={() => Actions.MachineNew()} style={{ position: 'absolute', bottom: p(12), right: p(15) }}>
    <Image source={images.addYellow} style={{ width: p(77), height: p(77) }} />
  </TouchableOpacity>);

export const ImgMessageBar = props => (<Image source={images.message_bar} style={{ width: p(344), height: p(36), marginRight: props.right, marginLeft: props.left }} />)
export const ImgCallOut = props => (<Image source={images.callout} style={{ width: p(145), height: p(126), marginRight: props.right, marginLeft: props.left }} />)

export const ImgLogo = props => (<Image source={images.logo} style={{ width: p(202), height: p(58), marginRight: props.right, marginLeft: props.left }} />)
export const ImgIntro = props => (<Image source={images.intro} style={{ width: width, height: p(220), marginRight: props.right, marginLeft: props.left }} />)


export const IconSquare = props => (<Image source={images.square} style={{ width: p(22), height: p(22), marginTop: p(7) }} />)
export const IconPin = props => (<Image source={images.pin} style={{ width: p(12), height: p(22), marginTop: p(7), marginLeft: p(8) }} />)
export const IconMap = props => (<Image source={images.map} style={{ width: p(18), height: p(25), marginTop: p(7) }} />)





export const IconBack = props => (
  <TouchableOpacity onPress={() => Actions.pop()}>
    <Image source={images.back} style={{ width: p(20), height: p(20), marginTop: props.top }} />
  </TouchableOpacity>)

export const IconMenu = props => (
  <TouchableOpacity onPress={()=>props.onClick()}>
    <Image
      source={images.menu}
      style={{
        width: p(27),
        height: p(20),
        marginTop: props.top,
      }} />
  </TouchableOpacity>
)

export const IconRing = props => (
  <TouchableOpacity onPress={()=>props.onClick()}>
    <Image
      source={images.ring}
      style={{
        width: p(26),
        height: p(28),
        marginTop: props.top,
      }} />
  </TouchableOpacity>
)

export const IconVideo = props => (
  <TouchableOpacity onPress={()=>props.onClick()}>
    <Image
      source={images.play}
      style={{
        width: p(77),
        height: p(77),
        marginBottom: p(12),
      }} />
  </TouchableOpacity>
)

export const IconPause = props => (
  <TouchableOpacity onPress={()=>props.onClick()}>
    <Image
      source={images.pause}
      style={{
        width: p(77),
        height: p(77),
        marginBottom: p(12),
      }} />
  </TouchableOpacity>
)