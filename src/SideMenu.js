import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from './common/colors';
import { images } from './common/images';
import { p } from './common/normalize';

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
                     <Image source={images.user} style={styles.avatar}/>
                     <Text style={[{ marginLeft:16, fontSize: p(16)}]}>Martin Garcia</Text>
                 </TouchableOpacity>
       
              </View>

              <View style={{flex:12, backgroundColor:'#fff', paddingLeft: p(20)}}>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Configuracion de cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Informacion de cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Cambiar direction de Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Cambiar contrasena</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Information de pagos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Invitar usuarios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Configuracion de reportes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={[styles.text, { fontWeight: '600'}]}>Log out</Text>
                </TouchableOpacity>
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
    avatar:{
        width:width/6,
        height:width/6,
        borderRadius:width/12
    },
    menu:{
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical: p(14), 
        borderBottomColor: colors.GREY4, 
        borderBottomWidth: 1,
    },
    text: {
        fontSize: p(14),
        marginLeft: p(22)
    }

});