import React from "react"
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native"
import { colors } from "../../../common/colors"
import { p } from "../../../common/normalize"
import { Actions } from "react-native-router-flux"
import * as ICON from '../../../components/Icons'
import * as HEADER from '../../../components/Headers'
import Cstyles from '../../../common/c_style'
import text from "../../../common/text"
import api from '../../../common/api'
import { Entypo } from '@expo/vector-icons';

const width = Dimensions.get('window').width

export default class DropDownSearchCampo extends React.Component {

  constructor() {
    super();
    this.state = {
      campos: null,
      isWaiting: false,
      skip: 0,
      count: 0,
      total: 0
    }
  }

  componentDidMount() {
    this.onfetchData(this.state.count);
  }

  onfetchData(skip) {
    console.log('***********', skip)
    this.setState({ isWaiting: true })
    api.getAllLotes(skip, (err, res) => {
      if (err == null) {
        this.setState({ isWaiting: false, campos: res.data, total: res.count })
      } else {
        this.setState({ isWaiting: false })
      }
    })
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
      <Text style={[text.t_12_400_2a, { color: colors.BLUE2}]}>{item.nombre}</Text>
    </TouchableOpacity>
  )

  onPrev() {
    this.setState({ count: this.state.count - 1 })
    this.onfetchData(this.state.count * 20)
  }

  onNext() {
    this.setState({ count: this.state.count + 1 })
    this.onfetchData(this.state.count * 20)
  }

  render() {

    const { isWaiting, campos, count, total } = this.state

    return (
      <View style={Cstyles.container}>

        <HEADER.NormalIcon
          title={'Select Campo'}
          back={colors.BLUE}
          icon={<ICON.IconLocation />}
        />

        {
          isWaiting
            ? <ActivityIndicator size={p(32)} color={colors.BLUE} style={{ marginTop: p(12) }} />
            : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: p(12), width: p(300), alignItems: 'center'}}>
              <View style={styles.center}>
                  {count !== 0 && <Entypo name={'arrow-bold-left'} size={32} color={colors.BLUE} onPress={() => { this.onPrev() }} />}
                </View>
                <View style={styles.center}>
                  <Text style={{ fontSize: p(21), color: colors.BLUE }}>{count}</Text>
                </View>
                <View style={styles.center}>
                  {((count + 1) * 20 < total) && <Entypo name={'arrow-bold-right'} size={32} color={colors.BLUE} onPress={() => { this.onNext() }} />}
                </View>
              </View>
              <FlatList
                style={{ width: width }}
                data={campos}
                keyExtractor={(item, i) => String(i)}
                renderItem={this._renderItem}
              />
            </View>
        }
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
    width: p(180),
    height: p(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.TEXT,
    borderWidth: p(3),
    borderRadius: p(6),
    margin: p(12)
  },
  center: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})