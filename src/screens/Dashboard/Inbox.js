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

        <TouchableOpacity style={styles.menu} onPress={() => Actions.drawerOpen()}>
          <Entypo name="menu" color={colors.GREY2} size={40} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: colors.WHITE
  },
  menu: {
    marginLeft: p(20),
    marginTop: p(40)
  }
});

export default Inbox;