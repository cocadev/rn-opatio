import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { colors } from '../../common/colors';
import { normalize } from '../../components/normalize';
import { SERVICELISTING, LEGAL } from '../../common/staticdata';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import i from '../../common/i'
import Header from '../../components/Header2';
import FavListItem from '../../components/FavListItem';
import text from '../../common/text';
import Accordion from 'react-native-collapsible/Accordion';

class Legal extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      order: true,
      activeSections: []

    }
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  _renderItemReview = ({ item }) => (
    <FavListItem item={item} />
  )

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={[text.m_10_dark, { marginVertical: 7, color: colors.SKY, fontSize: 10 }]}>{section.title}</Text>
        {
          section.id === this.state.activeSections[0] 
          ? <MaterialCommunityIcons name="chevron-up" size={22} color={colors.DARK} style={{paddingRight: 2,}} />
          : <MaterialCommunityIcons name="chevron-down" size={22} color={colors.DARK} style={{paddingRight: 2,}} />
        }
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={[text.m_8_dark2]}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {

    return (
      <View style={i.container}>
        <Header title={'Legal'} />

        

        <View style={{backgroundColor:'#fff', flex:1}}>
          <Accordion
            sections={LEGAL}
            activeSections={this.state.activeSections}
            // renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            underlayColor={colors.WHITE}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingBottom:2,
    width: '100%',
    paddingHorizontal: 12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  content: {
    backgroundColor: '#fff',
    paddingBottom:12,
    width: '100%',
    paddingHorizontal: 12,
  },
})

export default Legal;