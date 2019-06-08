'use strict';

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity, RefreshControl, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../../components/Header2'
import * as actions from "../../store/common/actions";
import i from '../../common/i';
import { colors } from '../../common/colors';
import { family } from '../../common/family';
import { images } from '../../common/images';

const width = Dimensions.get('window').width

class Chat extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      chatdata: [],
      isRefreshing: false
    };
  }

  componentDidMount() {
    this.setState({
      chatdata: [
        { _id: 1, name: 'Karl', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Owkkwbrwa  yw bwx suN Aouwn', createOn: '01/03/19, 10:00 AM' },
        { _id: 2, name: 'Johns', content: 'It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard. It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.', photoURL: 'https://siriusproject2019.firebaseapp.com/images/me.jpg', createOn: '01/03/19, 10:00 AM' },
        { _id: 1, name: 'Karl', content: 'Hello', createOn: '01/03/19, 10:00 AM' },
        { _id: 2, name: 'Johns', content: 'How are you? What was your trip?', photoURL: 'https://siriusproject2019.firebaseapp.com/images/me.jpg', createOn: '01/03/19, 10:00 AM' },
        { _id: 1, name: 'Karl', content: 'React Native provides a suite of components for presenting lists of data. Generally, you ll want to use either FlatList or SectionList.    The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time. Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once.e FlatList component requires two props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render.      This example creates a simple FlatList of hardcoded data. Each item in the data props is rendered as a Text component. The FlatListBasics component then renders the FlatList and all Text components.', createOn: '01/03/19, 10:00 AM' },

      ]       

      })
  }

  _renderItem = ({ item }) => (
    <View style={{ flexDirection: 'column', marginHorizontal: 12, alignItems: item._id == 1 ? 'flex-end' : 'flex-start', flex: 1 }}>
      <View style={[styles.contentbox, item._id == 1 ? { borderBottomRightRadius: 0 }: { borderBottomLeftRadius: 0 }]}>
        <Text style={[styles.itemText, { paddingHorizontal: 9, paddingVertical: 7, fontSize: 9 }]}>{item.content}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop:2, alignItems: 'center'}}>
        <Image source={{ uri: item._id == 1 ? null : item.photoURL }} style={styles.avatar} />
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ paddingLeft: 5, color: '#7f8083', fontFamily: item._id !== 1 ? family.Bold: family.Italic, fontSize:12 }}>{item._id !== 1 ? item.name+ ', ' : item.createOn + ', ' }</Text>
          <Text style={{ paddingLeft: 2, color: '#7f8083', fontFamily: item._id !== 1 ? family.Italic: family.Bold, fontSize: 12 }}>{ item._id !== 1 ? item.createOn: item.name }</Text>  
        </View>
      </View>
    </View>
  );

  _ItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={i.container}>
        <Header title={'Chat'}/>
        <View style={styles.content}>
          <FlatList
            style={{ marginBottom: 1 }}
            data={this.state.chatdata}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._ItemSeparator}
          />
          <View style={{ backgroundColor: colors.GREY3, padding: 12, position: 'relative', height: 55,}}>
            <TextInput
              style={styles.message}
              onChangeText={(message) => this.setState({ message })}
              value={this.state.message}
            />
            <View style={styles.icon}>
              <Image source={images.icon_direction} style={{ width: 20, height: 20}}/>
            </View>

            <View style={[styles.icon, { right: 60}]}>
              <Image source={images.icon_pin} style={{ width: 20, height: 20}}/>
            </View>

             <View style={[styles.icon, { left: 24}]}>
              <Image source={images.icon_emoji} style={{ width: 20, height: 20}}/>
            </View>

          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Chat;

const styles = StyleSheet.create({

  headBox: {
    borderLeftColor: '#00d014',
    borderLeftWidth: 5,
    elevation: 5
  },
  itemText: {
    fontSize: 12,
    color: colors.DARK,
    fontFamily: family.Medium
  },
  icon: {
    position: 'absolute',
    bottom: 16,
    right: 22
  },
  content: {
    marginTop: 20,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    height: 40,
    borderColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    bottom: 8,
    left: 12,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 22,
    paddingLeft: 40
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11
  },
  contentbox: {
    flexDirection: 'row',
    backgroundColor: '#334d73',
    borderRadius: 7,
    padding: 6,
    marginTop: 3,
    backgroundColor: '#fff', 
    maxWidth: width/1.3, 
  },
  separator: {
    height: 12,
  }

});
