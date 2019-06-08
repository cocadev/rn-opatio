import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import i from '../../common/i'
import Header2 from '../../components/Header2';
import GradientButton from '../../components/GradientButton';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import text from '../../common/text';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import CardItem from '../../components/CardItem';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width

class Payment extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    checked: false
  }

  render() {
    const { checked } = this.state
    return (
      <View style={i.container}>
        <Header2 title={'Payment'} />

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 20, backgroundColor: '#e9f6f8' }}>
          <Text style={i.normalText}>TOTAL</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={i.normalText}>$75.00</Text>
            <MaterialCommunityIcons name="arrow-down" size={14} color={colors.GREEN} />
          </View>
        </View>

        <View style={{ backgroundColor: '#eeeded', padding: 20 }}>
          <Text style={text.m_12_dark}>SELECT PAYMENT METHOD</Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <View>
            <CircleCheckBox
              checked={checked}
              outerColor={colors.GREEN}
              innerColor={colors.GREEN}
              outerSize={20}
              innerSize={13}
              filterSize={17}
              onToggle={() => this.setState({ checked: !checked })}
              labelPosition={LABEL_POSITION.RIGHT}
              label="PAYPAL"
              styleLabel={{ color: checked ? colors.GREEN : colors.DARK, marginLeft: 20, }}
            />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20,}}>
            <CircleCheckBox
              checked={!checked}
              outerColor={colors.GREEN}
              innerColor={colors.GREEN}
              outerSize={20}
              innerSize={13}
              filterSize={17}
              onToggle={() => this.setState({ checked: !checked })}
              labelPosition={LABEL_POSITION.RIGHT}
              label="CREDIT CARD"
              styleLabel={{ color: !checked ? colors.GREEN : colors.DARK, marginLeft: 20 }}
            />
            <TouchableOpacity onPress={()=>Actions.verify()} style={{flexDirection:'row', alignItems:'center'}}>
               <Ionicons name="md-add" size={14} color={colors.DARK} style={{marginHorizontal: 6,}}/>
               <Text style={text.m_12_dark}>ADD NEW CARD</Text>
            </TouchableOpacity>
          </View>

          <CardItem check={true}/>
          <CardItem />

        </View>

        <TouchableOpacity onPress={()=>Actions.orderStatus()} style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 12, }}>
          <GradientButton title="CONTINUE TO PAY" vetical={20} radius={4} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Payment;