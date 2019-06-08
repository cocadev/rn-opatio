import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, TouchableHighlight, TextInput } from 'react-native';
import api from "../../service/api";
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import Cache from "../../utils/cache";
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width

class Inbox extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => Actions.drawerOpen()}>
          <Image source={images.icon_menu} style={{ width: 20, height: 18 }} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: colors.SKY
  }
});

export default Inbox;