import React from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import i from '../../common/i'
import Header from '../../components/Header2';
import { colors } from '../../common/colors';
import { SERVICELISTING, PASTSERVICELISTING } from '../../common/staticdata';
import MaterialTabs from 'react-native-material-tabs';
import OrderListItem from '../../components/OrderListItem';

const width = Dimensions.get('window').width

class OrderList extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      order: true
    }
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  _renderItemReview = ({ item }) => (
    <OrderListItem item={item}/>
  )

  render() {

    const { selectedTab } = this.state;

    return (
      <View style={i.container}>
        <Header title={'Order'} />

        <MaterialTabs
          items={['CURRENT', 'PAST']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab}
          barColor={colors.WHITE}
          indicatorColor={colors.GREEN}
          activeTextColor={colors.DARK}
          inactiveTextColor={colors.GREY3}
        />

        <FlatList
          style={{marginTop:12}}
          data={selectedTab==1 ? SERVICELISTING : PASTSERVICELISTING}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItemReview}
          numColumns={1}
        />

      </View>
    );
  }
}

export default OrderList;