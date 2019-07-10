import React from "react"
import { View } from "react-native"
import { colors } from "../../../common/colors"

import * as ICON from '../../../components/Icons'
import * as HEADER from '../../../components/Headers'

import Cstyles from '../../../common/c_style'

export default class DropDownList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    console.log(' * - 1*',  this.props.user)

    return (
      <View style={Cstyles.container}>

        <HEADER.NormalIcon 
          title={'Map Search'} 
          back={colors.BLUE} 
          icon={<ICON.IconLocation />} 
        />

        <View style={{ flex: 1, backgroundColor: colors.GREEN3 }} >

        </View>

      </View>

    )
  }
}