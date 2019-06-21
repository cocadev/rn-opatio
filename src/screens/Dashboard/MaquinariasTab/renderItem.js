import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../common/colors'
import { p } from '../../../common/normalize';
import { images } from '../../../common/images';
import { Actions } from 'react-native-router-flux';

export default class RenderItem extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <View style={{ paddingHorizontal: p(15), backgroundColor: colors.GREY3 }}>

        <View style={{ flexDirection: 'row', marginTop: p(12) }}>

          <View style={{ width: 40, marginLeft: p(10), marginTop: p(12) }}>
            <Text style={{ fontSize: p(10) }}>{'LUN'}</Text>
            <Text style={{ fontSize: p(7) }}>{'10/03/18 12:40 hs.'}</Text>

            <Text style={{ fontSize: p(10), marginTop: p(20) }}>{'LUN'}</Text>
            <Text style={{ fontSize: p(7) }}>{'10/03/18 12:40 hs.'}</Text>

          </View>

          <Image source={images.line} style={Cstyles.line} />

          <View style={{ flexDirection: 'column' }}>
            <View style={Cstyles.view}>
              <TouchableOpacity onPress={()=>Actions.MachineSpeedAlarm()}>
                <Text style={Cstyles.text1}>{'Tractor 150'}</Text>
                <Text style={Cstyles.text2}>{'John Deere 6130J'}</Text>
              </TouchableOpacity>
              <View style={Cstyles.vertical}></View>
              <View style={{}}>
                <Text style={Cstyles.text3}>{'Cesar Cuestas'}</Text>
                <Text style={Cstyles.text2}>{'Lote 2'}</Text>
              </View>
              <Image source={images.switch_on_pink} style={Cstyles.switchButton} />
            </View>

            <View style={[Cstyles.view, { borderLeftColor: colors.GREY0 }]}>
              <View>
                <Text style={Cstyles.text1}>{'Tractor 150'}</Text>
                <Text style={Cstyles.text2}>{'John Deere 6130J'}</Text>
              </View>
              <View style={Cstyles.vertical}></View>
              <View style={{}}>
                <Text style={Cstyles.text3}>{'Cesar Cuestas'}</Text>
                <Text style={Cstyles.text2}>{'Lote 2'}</Text>
              </View>
              <Image source={images.switch_ignore} style={Cstyles.switchButton2} />
            </View>
          </View>

        </View>

        {
          item.visible &&
          <View style={{ flexDirection: 'row', marginHorizontal: p(5), marginTop: p(14) }}>
            <Text style={{ alignSelf: 'center', paddingHorizontal: p(5), fontSize: p(12) }}>Semana anterior</Text>
            <View style={{ backgroundColor: colors.GREY9, height: 1, flex: 1, alignSelf: 'center' }} />
          </View>
        }

      </View>
    )
  }
}


const Cstyles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: p(20),
    paddingRight: p(10),
    height: p(48),
    width: p(260),
    marginLeft: p(16),
    backgroundColor: colors.WHITE,
    borderBottomColor: colors.GREY3,
    borderBottomWidth: 1,
    borderLeftColor: colors.PINK,
    borderLeftWidth: p(8),
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.GREY3,
    paddingTop: p(12),
    paddingLeft: p(20)
  },
  line: {
    width: p(6),
    height: p(50),
    marginTop: p(24)
  },
  vertical: {
    backgroundColor: colors.GREY7,
    width: 1,
    height: p(35)
  },
  switchButton: {
    width: p(36),
    height: p(20)
  },
  switchButton2: {
    width: p(36),
    height: p(31)
  },
  text0: {
    color: '#212121',
    fontSize: p(11),
    fontWeight: '400',
    textAlign: 'center'
  },
  text1: {
    color: '#354052',
    fontSize: p(15),
    fontWeight: '700',
  },
  text2: {
    color: '#354052',
    fontSize: p(12),
    fontWeight: '700',
  },
  text3: {
    color: '#212121',
    fontSize: p(12),
    fontWeight: '700',
  },
  titleImg: {
    width: p(25),
    height: p(19)
  }
})