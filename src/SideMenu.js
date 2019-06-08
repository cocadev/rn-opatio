import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from './common/colors';
import { images } from './common/images';

const width = Dimensions.get('window').width

export default class SideMenu extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <View style={styles.container}>
              
              <View style={{flex:3, justifyContent:'center', backgroundColor:'#eaf7f8'}}>
                 <TouchableOpacity onPress={()=>Actions.profile()} style={{flexDirection:'row', alignItems:'center', marginLeft: 25,marginTop: 15,}}>
                     <Image source={images.img_user2} style={styles.avatar}/>
                     <Text style={[{ marginLeft:16}]}>JANE DOE</Text>
                 </TouchableOpacity>
                 <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end', marginTop: 5, right:10}}>
                     <Image source={images.icon_edit} style={{width:12, height:12, marginHorizontal:6}}/>
                     <Text>EDIT</Text>
                 </View>
              </View>

              <View style={{flex:12, backgroundColor:'#fff', paddingLeft:width/12}}>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.wall()} >
                    <Image source={images.icon_home} style={{width:15, height:15}}/>
                    <Text style={[{marginLeft:22}]}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.orderlist()}>
                    <Image source={images.icon_sheet} style={{width:15, height:15}}/>
                    <Text style={[{marginLeft:22}]}>ORDERS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.promotion()} style={styles.menu}>
                    <Image source={images.icon_gift} style={{width:15, height:15}}/>
                    <Text style={[{marginLeft:22}]}>PROMOTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.serviceprovider()} style={styles.menu}>
                    <Image source={images.icon_setting} style={{width:15, height:15}}/>
                    <Text style={[{marginLeft:22}]}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.legal()}>
                    <Image source={images.icon_doc} style={{width:14, height:16}}/>
                    <Text style={[{marginLeft:22}]}>LEGAL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.invite()} style={styles.menu}>
                    <Image source={images.icon_users} style={{width:17, height:15}}/>
                    <Text style={[{marginLeft:22}]}>INVITE YOUR FRIEND</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.signin()} style={styles.menu}>
                    <Image source={images.icon_roundback} style={{width:20, height:15}}/>
                    <Text style={[{marginLeft:20}]}>LOGOUT</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex:2, justifyContent:'center', alignItems:'center', backgroundColor:'#eaf7f8'}}>
                 <View style={styles.button}>
                     <Text>BECOME A SERVICE PROVIDER</Text>
                 </View>
              </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#111',
        paddingTop: 24,
    },
    button:{
        backgroundColor:colors.RED, 
        justifyContent:'center', 
        alignItems: 'center', 
        borderRadius:20,
        paddingVertical: 12,
        paddingHorizontal: width/10,
    },
    avatar:{
        width:width/6,
        height:width/6,
        borderRadius:width/12
    },
    menu:{
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical:width/22, 
        borderBottomColor: colors.GREY4, 
        borderBottomWidth: 1,
    }

});