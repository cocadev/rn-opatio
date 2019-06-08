import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import i from '../../common/i'
import Header from '../../components/Header';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import text from '../../common/text';
import { Actions } from 'react-native-router-flux';
import {family} from '../../common/family';
import { normalize } from '../../components/normalize';

const width = Dimensions.get('window').width

class Profile extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    edit: false,
    name: 'Jane Doe',
    address: '35 laurel velly, canada road, Ontario, Toronto',
    email: 'shopopat92@gmail.com',
    phone: '+1 436-454-6563'
  }

  render() {
    const { edit, name, email, phone, address } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={i.container}>
        <Header />
        <ScrollView style={{flex:1}}>
           <View style={{flex:3, backgroundColor:'#fff', justifyContent:'center', alignItems: 'center', paddingVertical: 6}}>

              <Image source={images.img_user2} style={{width: width/3.3, height: width/3.3, borderRadius:width/6.6}}/>

              <Text style={[text.m_13_dark, {marginVertical:10}]}>JANE DOE</Text>

              {!edit && <TouchableOpacity onPress={()=>this.setState({ edit: !edit })} style={styles.edits}>
                <Text style={text.m_10_dark2}>EDIT</Text>
              </TouchableOpacity>}

              {edit && <TouchableOpacity onPress={()=>this.setState({ edit: !edit })} style={[styles.edits, { backgroundColor: colors.GREEN, borderColor: colors.WHITE}]}>
                <Text style={[text.m_10_dark2, { color: colors.WHITE}]}>Save</Text>
              </TouchableOpacity>}
             
           </View>

           <View style={{flex:5, paddingLeft:width/10, margin:12 }}>

              <Text style={text.m_10_dark2}>NAME</Text>
              <TextInput
                editable={edit}
                style={ edit ? styles.einput : styles.input }
                onChangeText={(name) => this.setState({name})}
                value={name}
              />

              <Text style={[text.m_10_dark2, {marginTop:16}]}>ADDRESS</Text>
              <TextInput
                editable={edit}
                style={ edit ? styles.einput : styles.input }
                onChangeText={(address) => this.setState({address})}
                value={address}
              />

              <Text style={[text.m_10_dark2, {marginTop:16}]}>EMAIL</Text>
              <TextInput
                editable={edit}
                style={ edit ? styles.einput : styles.input }
                onChangeText={(email) => this.setState({email})}
                value={email}
              />

              <Text style={[text.m_10_dark2, {marginTop:16}]}>PHONE NUMBER</Text>
              <TextInput
                editable={edit}
                style={ edit ? styles.einput : styles.input }
                onChangeText={(phone) => this.setState({phone})}
                value={phone}
              />

              <TouchableOpacity onPress={()=>Actions.payment()} style={[styles.payment, {marginTop:16, justifyContent:'space-between', flexDirection: 'row',}]}>
                <Text style={text.m_13_dark}>Payment information</Text>
                <MaterialCommunityIcons name="chevron-right" size={18} color={colors.GREEN}/>
              </TouchableOpacity>

           </View>
           
        </ScrollView>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    edits:{
      borderColor:colors.GREY2,
      borderWidth: 1,
      justifyContent:'center',
      borderRadius:20,
      alignItems:'center',
      padding: 7,
      paddingHorizontal: 18,
    },
    payment:{
      borderBottomColor:colors.GREY3,
      borderBottomWidth:1,
      borderTopColor: colors.GREY3,
      borderTopWidth:1,
      paddingVertical:18
    },
    input: {
       height: normalize(32),
       paddingLeft: 6, 
       marginLeft: -6,
       fontFamily: family.Medium,
       fontSize: normalize(11)
    },
    einput: {
      height: normalize(32),
      paddingLeft: 6, 
      marginLeft: -6,
      fontFamily: family.Medium,
      fontSize: normalize(11),
      backgroundColor: colors.WHITE
   }
});

export default Profile;