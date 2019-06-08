import * as React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get("window").width;

export default class GoClubListItem extends React.Component {

  imagerender(){
    return(
      <Image source={{uri:this.props.item.postImage}} style={{width:width/1.5, height:width/2.3}}/>
    )
  }
 
  render() {
    const { item } = this.props;
    return (
        <TouchableOpacity style={{backgroundColor:'#fff', margin:15, marginBottom:0, borderRadius:6, elevation:5, borderColor:'#9fa4da', justifyContent:'center', alignItems: 'center',padding: 7,}}>
            <View style={{flexDirection:'row' ,backgroundColor:'#f6f7ff', width:'100%', padding:3, alignItems:'center'}}>
                <Image source={{uri:item.user_image}} style={{width:40, height:40, borderRadius:20}}/>
                <View style={{marginLeft:5}}>
                    <Text style={{fontWeight:'bold', color:'#4964bf', fontSize:19}}>{item.user_name}</Text>
                    <Text>{item.groupname}</Text>
                </View>
            </View>
            <Text style={{fontSize:20, marginVertical:7}}>{item.comment}</Text>
            
            {item.postImage !== '' && this.imagerender()}
            <Text style={{color:'#98a9da', marginTop:6}}>{item.post_like} Likes | {item.post_comment} Comments</Text>

            <View style={{justifyContent:'flex-end', width:'100%'}}>
              <Text style={{textAlign:'right', color: '#f58a6a', fontSize: 12,}}></Text>
            </View>
            
        </TouchableOpacity>
    )
  }
}