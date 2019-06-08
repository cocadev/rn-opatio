import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, TouchableHighlight, TextInput } from 'react-native';
import WallListItem from '../../components/WallListItem'
import i from '../../common/i'
import LottieScreen from '../../components/Lottie';
import api from "../../service/api";
import Header from '../../components/Header';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import Cache from "../../utils/cache";
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import UtilService from '../../utils/utils';
import text from '../../common/text';
import { MESSAGES } from '../../common/staticdata';
import Popover, { Rect, Size } from 'react-native-popover-view';

const width = Dimensions.get('window').width

class Notification extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    isVisible: false,
  }

  showPopover() {
    this.setState({ isVisible: true });
  }

  closePopover() {
    this.setState({ isVisible: false });
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={text.b_10_dark}>Your Order of </Text>
        <Text style={text.i_10_dark}> {"'"}{item.message}{"'"} </Text>
        <Text style={text.b_10_dark}>{UtilService.getMessage(item.status)}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, }}>

        <Text style={text.bi_10_dark}>{item.date}</Text>
        <Text style={text.m_10_dark2}>DELETE</Text>
      </View>
    </TouchableOpacity>
  )

  _ItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <View style={i.container}>
        <Header search={(<Image source={images.icon_big_search} style={styles.search} />)} />
        <View style={{ flex: 1, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center', }}>

            <Text style={text.m_13_dark}>SERVICE NOTIFICATIONS</Text>
            <View style={{ flexDirection: 'row', alignItems:'center' }}>

              <Image source={images.icon_messages} style={{ width: 20, height: 20, marginHorizontal: 6 }} />

              <TouchableOpacity
                ref={ref => this.touchable = ref}
                onPress={() => this.showPopover()}>
                <Image source={images.icon_ring} style={{ width: 16, height: 20, marginHorizontal: 6 }} />
              </TouchableOpacity>

            </View>

            <Popover
              isVisible={this.state.isVisible}
              fromView={this.touchable}
              placement={'bottom'}
              onClose={() => this.closePopover()}>
                <View style={{padding:16}}>
                   <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Image source={images.tab_ring} style={{ width: 20, height: 20, marginHorizontal: 10 }} />
                      <Image source={images.icon_ring2} style={{ width: 28, height: 20, marginHorizontal: 10 }} />
                      <Image source={images.icon_ring3} style={{ width: 32, height: 20, marginHorizontal: 10 }} />
                      <Image source={images.icon_unring} style={{ width: 27, height: 27, marginHorizontal: 10 }} />
                   </View>
                   <View style={{flexDirection:'row', marginTop: 10, marginLeft: 12, alignItems:'center'}}>
                      <Image source={images.icon_square} style={{ width: 16, height: 16 }} />
                      <Text style={[text. m_15_dark , {marginHorizontal:7}]}>Text Messages</Text>
                      <Image source={images.icon_messages} style={{ width: 16, height: 16, marginTop:2 }} />
                   </View>
                </View>
            </Popover>

          </View>

          <FlatList
            style={{ backgroundColor: '#fff' }}
            data={MESSAGES}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
            numColumns={1}
          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderBottomColor: colors.GREY3,
    borderBottomWidth: 1,
    paddingVertical: 18,
    marginHorizontal: 18,
    backgroundColor: '#fff'
  },
  search: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 20
  }
});

export default Notification;