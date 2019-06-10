import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, TouchableHighlight, TextInput } from 'react-native';
import api from "../../service/api";
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import Cache from "../../utils/cache";
import { Actions } from 'react-native-router-flux';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { p } from '../../common/normalize';

const width = Dimensions.get('window').width

class Inbox extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.menu} onPress={() => Actions.drawerOpen()}>
            <Image source={images.menu} style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ring} onPress={() => Actions.drawerOpen()}>
            <Image source={images.ring} style={styles.ringIcon} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center'}}>
          <Image source={images.logoIcon} style={styles.logoIcon} />
        </View>

        <Text style={{ textAlign: 'center', fontSize: p(15), marginVertical: p(12)}}>Bienvenido otra vez</Text>
        <Text style={{ textAlign: 'center', fontSize: p(20), fontWeight: '700'}}>Joaquin Otero</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: p(32) }}>
          <View style={styles.rectNgulo}>
            <View style={styles.box}>
              <Image source={images.location} style={styles.itemImg1} />
            </View>
            <Text style={styles.text}>Lotes</Text>
          </View>

          <View style={styles.rectNgulo}>
            <View style={[styles.box, { backgroundColor: colors.YELLOW }]}>
              <Image source={images.track} style={styles.itemImg2} />
            </View>
            <Text style={[styles.text, { color: colors.YELLOW}]}>Maquinarias</Text>
          </View>

        </View>

        <View style={styles.rectNgulo}>
          <View style={[styles.box, { backgroundColor: colors.GREEN }]}>
            <Image source={images.chart} style={styles.itemImg3} />
          </View>
          <Text style={[styles.text, { color: colors.GREEN}]}>Reportes</Text>
        </View>

        <View style={styles.button}>
           <Text style={styles.btnText}>Extraer datos</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: p(15),
    backgroundColor: colors.BACKGROUND
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menu: {
    marginTop: p(21)
  },
  ring: {
    marginTop: p(21),
  },
  menuIcon: {
    width:p(27),
    height: p(20)
  },
  ringIcon: {
    width:p(24),
    height: p(26)
  },
  logoIcon: {
    width:p(30),
    height: p(37)
  },
  box: {
    width: p(165),
    height: p(105),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLUE
  },
  rectNgulo: {
    marginTop: p(20),
    width: p(165),
    height: p(151),
    shadowColor: 'rgba(0, 175, 239, 0.23)',
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 7,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  text: {
    color: colors.BLUE,
    fontSize: p(16),
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: p(14)
  },
  itemImg1: {
    width: p(71),
    height: p(54)
  },
  itemImg2: {
    width: p(55),
    height: p(61)
  },
  itemImg3: {
    width: p(54),
    height: p(47)
  },
  button: {
    height: p(60),
    marginTop: p(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: colors.YELLOW,
  },
  btnText: {
    color: colors.WHITE,
    fontSize: p(21),
    fontWeight: '700',
    lineHeight: p(21),
  }
});

export default Inbox;