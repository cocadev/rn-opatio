import React from "react"
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Dimensions } from "react-native"
import { colors } from "../../../common/colors"
import { p } from "../../../common/normalize"
import { Actions } from "react-native-router-flux"
import * as ICON from '../../../components/Icons'
import * as HEADER from '../../../components/Headers'
import Cstyles from '../../../common/c_style'
import text from "../../../common/text"
import { Entypo } from '@expo/vector-icons';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../store/lotes/actions";

const width = Dimensions.get('window').width

class DropDownSearchCampo extends React.Component {

  constructor() {
    super();
    this.state = {
      campos: null,
      isWaiting: false,
    }
  }

  _renderItem = ({ item, key }) => (
    <TouchableOpacity
      style={styles.row}
      key={key}
      onPress={() => {
        if (this.props.update) {
          this.props.update(item.nombre, item.campo_id);
          Actions.pop()
        }
      }}
    >
      <Text style={[text.t_12_400_2a, { color: colors.BLUE2, textAlign: 'center' }]}>{item.nombre}</Text>
    </TouchableOpacity>
  )

  render() {

    return (
      <View style={Cstyles.container}>

        <HEADER.NormalIcon
          title={'Select Campo'}
          back={colors.BLUE}
          icon={<ICON.IconLocation />}
        />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <FlatList
            style={{ width: width }}
            data={this.props.allLotes}
            keyExtractor={(item, i) => String(i)}
            numColumns={2}
            renderItem={this._renderItem}
          />
        </View>
      </View>

    )
  }
}

export default connect(
  state => ({
    allLotes: state.lotes.allLotes,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(DropDownSearchCampo);


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
    borderWidth: 2,
    borderRadius: p(6),
    margin: p(12)
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})