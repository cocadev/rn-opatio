import React from 'react';
import { View, FlatList, Text, ActivityIndicator, Image } from 'react-native';
import i from '../../common/i'
import Header from '../../components/Header';
import { SERVICELISTING } from '../../common/staticdata';
import RefreshFavListItem from '../../components/RefreshFavListItem';
import text from '../../common/text';
import LottieScreen from '../../components/Lottie'

class Favourite extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      order: true,
      dataSource: [],
      isLoading: true,
      page: 1,
      seed: 1,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=5`;
    this.setState({ loading: true });
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          dataSource: page == 1 ? response.results : [...this.state.dataSource, ...response.results],
          isLoading: false,
          refreshing: false,
        });
      })
      .catch((error) => { console.error(error); })
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  _renderItemReview = ({ item }) => (
    <FavListItem item={item} />
  )

  onRefresh = () => {
    this.setState({
      dataSource: [],
      isLoading: false,
      refreshing: true,
      seed: 1,
      page: 1
    })
    this.fetchData()
  }
  loadMore = () => {
    this.setState({
      refreshing: true,
      page: this.state.page + 1,
    })
    this.fetchData()
  }

  render() {

    const { isLoading } = this.state

    return (
      <View style={i.container}>
        <Header />

        <Text style={[text.m_8_dark2, { fontSize: 9, marginLeft: 20, marginTop: 15, marginBottom: 4 }]}>FAVORITES</Text>

        {isLoading && <LottieScreen />}
        {!isLoading &&
          <FlatList
            style={{ marginTop: 12 }}
            data={this.state.dataSource}
            keyExtractor={(item, i) => String(i)}
            numColumns={1}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (<RefreshFavListItem item={item} />)}
          />
        }

      </View>
    );
  }
}

export default Favourite;


