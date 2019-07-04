import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../common/colors';
import { images } from '../common/images';
import { p } from '../common/normalize';


export default class SideMenu extends Component {

    render() {
        return (
            <View style={styles.container}>
              <View style={{flex:3, justifyContent:'center', backgroundColor:'#eaf7f8'}}>
                 <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginLeft: 25,marginTop: 15,}}>
                     <Image source={images.user} style={styles.avatar}/>
                     <Text style={{ marginLeft:16, fontSize: p(21), fontWeight: '600', color: colors.TEXT}}>Martín García</Text>
                 </TouchableOpacity>
                 <Text style={styles.textH}>Configuración de cuenta</Text>
              </View>

              <View style={{flex:12, backgroundColor:'#fff', paddingLeft: p(20)}}>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Información de cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Cambiar dirección de Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>Cambiar contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menu, { marginTop: p(15)}]} onPress={()=>this.props.update()}>
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
        width: p(51),
        height: p(50),
        borderRadius: p(10)
    },
    menu:{
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical: p(14), 
        borderBottomColor: colors.GREY4, 
        borderBottomWidth: 1,
    },
    text: {
        fontSize: p(15),
        fontWeight: '900',
        marginLeft: p(22),
        color: colors.TEXT
    },
    textH: {
        color: colors.TEXT,
        marginTop: p(12),
        fontSize: p(17),
        fontWeight: '700',
        textAlign: 'center'
    }

});