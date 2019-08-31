import React from "react"
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Dimensions } from "react-native"
import { colors } from "../../../common/colors"
import { p } from "../../../common/normalize"
import { Actions } from "react-native-router-flux"
import * as ICON from '../../../components/Icons'
import * as HEADER from '../../../components/Headers'
import Cstyles from '../../../common/c_style'
import text from "../../../common/text"

const width = Dimensions.get('window').width

export default class DropDownList extends React.Component {

  _renderItem = ({ item, key }) => (
    <TouchableOpacity 
      style={styles.row} 
      key={key} 
      onPress={()=>{
        if(this.props.update){
          this.props.update(item);
          Actions.pop()
        }
      }}
    >
        <Text style={text.t_12_400_2a}>{item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    const dropdown = this.props.navigation.state.params.dropdown;
    return (
      <View style={Cstyles.container}>

        <HEADER.NormalIcon
          title={'Select one'}
          back={colors.BLUE}
          icon={<ICON.IconLocation />}
        />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >
          <FlatList
            style={{ width: width }}
            data={dropdown}
            numColumns={2}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
          />
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingVertical: 12,
      backgroundColor: colors.WHITE
  },
  row: {
    flex: 1,
    height: p(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.TEXT,
    borderWidth: 1,
    borderRadius: 6,
    margin: 12
  }
})