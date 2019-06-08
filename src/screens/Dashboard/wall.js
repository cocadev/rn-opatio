import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, Dimensions, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import WallListItem from '../../components/WallListItem'
import i from '../../common/i'
import { JOBLISTING, CATEGORIES, SERVICELISTING } from '../../common/staticdata'
import LottieScreen from '../../components/Lottie';
import Header from '../../components/Header';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import FavListItem from '../../components/FavListItem';
import { normalize } from '../../components/normalize';
import DateTimePicker from "react-native-modal-datetime-picker";
import UtilService from '../../utils/utils';
import ModalDropdown from 'react-native-modal-dropdown';
import api from '../../service/api'
import Popover, { Rect, Size } from 'react-native-popover-view';
import text from '../../common/text';

const width = Dimensions.get('window').width
const DEMO_OPTIONS_2 = [
  { "name": "ENGLISH", },
  { "name": "CHINESE", },
  { "name": "FRENCH", },
  { "name": "SPANISH", },
  { "name": "FILIPINO", },
];

const DEMO_OPTIONS_3 = [
  { "name": "1 hour", },
  { "name": "2 hours", },
  { "name": "3 hours", },
  { "name": "5 hours", },
  { "name": "8 hours", }
];

class Wall extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {

      dataSource1: [],
      dataSource2: [],
      dataSource3: [],
      dataSource4: [],

      categoryName1: '',
      categoryName2: '',
      categoryName3: '',
      categoryName4: '',

      isWaiting: true,
      search: '',
      filter: false,
      searchFlag: false,
      searchResult: false,
      searchAllow: false,

      isDateTimePickerVisible: false,
      _isDateTimePickerVisible: false,

      filterDate: 'Date',
      _filterDate: 'Time',

      isVisible: false

    }
  }


  componentDidMount() {
    api.getHomePageServices((err, res) => {
      if (err == null) {
        this.setState({
          dataSource1: res.data[0].services, categoryName1: res.data[0].categoryName,
          dataSource2: res.data[1].services, categoryName2: res.data[1].categoryName,
          dataSource3: res.data[2].services, categoryName3: res.data[2].categoryName,
          dataSource4: res.data[3].services, categoryName4: res.data[3].categoryName,
          isWaiting: false
        })
      } else {
        console.log('err &&&&&&&&', err)
        this.setState({ isWaiting: false })
      }
    })
  }

  showPopover() {
    this.setState({ isVisible: true });
  }

  closePopover() {
    this.setState({ isVisible: false });
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ filterDate: UtilService.getDateTime(date) })
    this.hideDateTimePicker();
  };

  _showDateTimePicker = () => {
    this.setState({ _isDateTimePickerVisible: true });
  };

  _hideDateTimePicker = () => {
    this.setState({ _isDateTimePickerVisible: false });
  };

  _handleDatePicked = date => {
    this.setState({ _filterDate: UtilService.getHourMinutes(date) })
    console.log('_filterDate', UtilService.getHourMinutes(date))
    this._hideDateTimePicker();
  };

  _renderItem = ({ item }) => (
    <TouchableOpacity ref={ref => this.touchable = ref} onPress={() => this.showPopover()} style={styles.cateogry}>
      <Image source={item.image} style={{ width: width / 6, height: width / 6 }} />
      <Text style={[i.smallText, { marginBottom: 6 }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  _renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={() => Actions.walldetail({ 'profile': item })} style={{ marginHorizontal: 5, borderRadius: 4, paddingTop: normalize(10) }}>

      <View style={{ zIndex: 1, position: 'absolute', left: normalize(20) }}>
        <TouchableOpacity style={{}} onPress={() => Actions.serviceprovider()}>
          <Image source={{ uri: item.profileDetail.profilePicture }} style={styles.circle} />
        </TouchableOpacity>

         {item.profileDetail.verified && <Image source={images.icon_dank} style={styles.dank} />}
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 6, padding: 5, paddingTop: normalize(40), marginTop: 10, width: width / 3 - 18 }}>

        <Text style={i.smallText} numberOfLines={2}>{item.profileDetail.profileDescription}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={images.result} style={{ width: 20, height: 10 }} />
          <Text style={i.smallText}>${item.serviceDetail.price}/h</Text>
        </View>
      </View>

    </TouchableOpacity>
  )

  _renderItem3 = ({ item }) => (
    <FavListItem item={item} />
  )

  _ItemSeparator = () => <View style={styles.separator} />;

  _dropdown_2_renderButtonText(rowData) {
    return `${rowData.name}`;
  }

  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? require('./images/check.png') : require('./images/uncheck.png');
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_2_row, { backgroundColor: evenRow ? 'lemonchiffon' : 'white' }]}>
          <Image style={styles.dropdown_2_image}
            mode='stretch'
            source={icon}
          />
          <Text style={[styles.dropdown_2_row_text, highlighted && { color: 'mediumaquamarine' }]}>
            {`${rowData.name}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  dropFilter() {
    return (
      <View horizontal style={{ flexDirection: 'row', paddingTop: 5, backgroundColor: '#fff', }}>

        <TouchableOpacity onPress={this.showDateTimePicker} style={{ paddingLeft: normalize(15), width: normalize(80) }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>DATE</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 10, fontFamily: 'Montserrat-Bold' }]}>{this.state.filterDate}</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 3 }} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._showDateTimePicker} style={{ width: normalize(110) }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>TIME</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 10, fontFamily: 'Montserrat-Bold' }]}>{this.state._filterDate}</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 3 }} />
          </View>
        </TouchableOpacity>

        <View style={{ marginRight: 15, width: normalize(60) }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>DURATION</Text>
          <View style={{ flexDirection: 'row', }}>
            <ModalDropdown ref="dropdown_2"
              style={styles.dropdown_2}
              defaultIndex={0}
              defaultValue={'1 hour'}
              textStyle={styles.dropdown_2_text}
              dropdownStyle={styles.dropdown_2_dropdown}
              options={DEMO_OPTIONS_3}
              renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
              renderRow={this._dropdown_2_renderRow.bind(this)}
            />
          </View>
        </View>

        <View style={{ marginRight: 15, width: normalize(60) }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>LANGUAGE</Text>
          <View style={{ flexDirection: 'row' }}>

            <ModalDropdown ref="dropdown_2"
              style={styles.dropdown_2}
              defaultIndex={0}
              defaultValue={'ENGLISH'}
              textStyle={styles.dropdown_2_text}
              dropdownStyle={styles.dropdown_2_dropdown}
              options={DEMO_OPTIONS_2}
              renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
              renderRow={this._dropdown_2_renderRow.bind(this)}
            />

          </View>
        </View>

      </View>
    )
  }

  inputFilter() {
    return (
      <View>
        <View style={{ backgroundColor: '#fff', padding: 12, flexDirection: 'row', paddingTop: 5 }}>

          <TouchableOpacity onPress={() => Actions.addressFilter()} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.input, { width: normalize(130) }]}>
              <Image source={images.icon_map} style={{ width: 12, height: 16 }} />
              <Text style={[i.smallText, { marginLeft: 5 }]}>35 fountain M2B1RS</Text>
              <Image source={images.icon_spot} style={{ width: 16, height: 16, marginLeft: 5 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.showDateTimePicker} style={{ flexDirection: 'row' }}>
            <View style={styles.input}>
              <Image source={images.icon_calendar} style={{ width: 14, height: 15 }} />
              <Text style={[i.smallText, { marginLeft: 5 }]}>{this.state.filterDate}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._showDateTimePicker} style={{ flexDirection: 'row' }}>
            <View style={styles.input}>
              <Image source={images.icon_clock} style={{ width: 16, height: 16 }} />
              <Text style={[i.smallText, { marginLeft: 5 }]}>{this.state._filterDate}</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingBottom: 12 }}>
          <TouchableOpacity onPress={() => this.setState({ searchResult: true })}>
            <LinearGradient
              colors={[colors.GREEN, colors.SKY]}
              start={[0, 1]} end={[1, 0]}
              style={{ padding: 7, paddingHorizontal: 22, alignItems: 'center', borderRadius: 20, marginHorizontal: 12 }}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 10,
                  color: '#fff',
                  fontFamily: 'Montserrat-Medium'
                }}>
                SEARCH
               </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ search: '', searchResult: false })} style={{ marginRight: normalize(13) }}>
            <Text style={[i.normalText, { fontSize: 11 }]}>CANCEL</Text>
          </TouchableOpacity>

          {
            this.state.filter
            && <View style={{ flexDirection: 'row', height: normalize(28) }}>
              <View style={[styles.input, { flexDirection: 'column' }]}>
                <Text style={[i.smallText, { fontSize: 9, marginTop: normalize(-3) }]}>DURATION</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ModalDropdown ref="dropdown_2"
                    style={styles.dropdown_2}
                    defaultIndex={0}
                    defaultValue={'1 hour'}
                    textStyle={styles.dropdown_2_text}
                    dropdownStyle={styles.dropdown_2_dropdown}
                    options={DEMO_OPTIONS_3}
                    renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                    renderRow={this._dropdown_2_renderRow.bind(this)}
                  />
                </View>
              </View>
            </View>
          }

          {
            this.state.filter
            && <View style={{ flexDirection: 'row', height: normalize(28) }}>
              <View style={[styles.input, { flexDirection: 'column' }]}>
                <Text style={[i.smallText, { fontSize: 9, marginTop: normalize(-3) }]}>LANGUAGE</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ModalDropdown ref="dropdown_2"
                    style={styles.dropdown_2}
                    defaultIndex={0}
                    defaultValue={'ENGLISH'}
                    textStyle={styles.dropdown_2_text}
                    dropdownStyle={styles.dropdown_2_dropdown}
                    options={DEMO_OPTIONS_2}
                    renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                    renderRow={this._dropdown_2_renderRow.bind(this)}
                  />
                </View>
              </View>
            </View>
          }

        </View>
      </View>
    )
  }

  renderView() {
    const { categoryName1, categoryName2, categoryName3, categoryName4, dataSource1, dataSource2, dataSource3, dataSource4 } = this.state;
    return (
      <View>
        <View style={{ marginBottom: 10, paddingLeft: 12, paddingTop: 12 }}>

          <FlatList
            horizontal
            data={CATEGORIES}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>{categoryName1}</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={dataSource1}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>{categoryName2}</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={dataSource2}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>{categoryName3}</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={dataSource3}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>{categoryName4}</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={dataSource4}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>
      </View>
    )
  }

  renderSearch() {
    return (
      <View>
        <View style={{ flexDirection: 'row', padding: 16, paddingTop: 22 }}>
          <Text style={i.normalText}>Search results for :</Text>
          <Text style={[i.normalText, { color: colors.GREEN }]}> {this.state.search}</Text>
        </View>
        <FlatList
          data={SERVICELISTING}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem3}
        />
      </View>
    )
  }

  render() {
    const { filter, search, searchFlag, searchResult, searchAllow } = this.state
    return (
      <View style={i.container}>

        <Header />

        {searchResult && this.dropFilter()}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: filter ? '#fafafa' : '#fff', padding: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 12, }}>
            <Image source={images.icon_big_search} style={{ width: 15, height: 15 }} />
            <TextInput
              style={{ marginLeft: 12, fontFamily: 'Montserrat-Medium', fontSize: 11, width: width / 2 }}
              placeholder="Search services"
              onChangeText={search => this.setState({ search })}
              value={search}
            />
          </View>

          {
            !this.state.searchResult
            && <TouchableOpacity onPress={() => this.setState({ filter: !this.state.filter })} style={styles.roundBtn}>
              <Image source={images.icon_twin} style={{ width: 13, height: 13 }} />
              <View >
                <Text style={{ color: colors.DARK, marginLeft: 5, fontFamily: 'Montserrat-Medium', fontSize: 11 }}>Filters</Text>
              </View>
            </TouchableOpacity>
          }

          {
            this.state.searchResult
            && <TouchableOpacity onPress={() => this.setState({ searchAllow: true })}>
              <LinearGradient
                colors={[colors.GREEN, colors.SKY]}
                start={[0, 1]} end={[1, 0]}
                style={{ padding: 7, paddingHorizontal: 22, alignItems: 'center', borderRadius: 20, marginHorizontal: 12 }}>
                <Text
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 10,
                    color: '#fff',
                    fontFamily: 'Montserrat-Medium'
                  }}>
                  SEARCH
               </Text>
              </LinearGradient>
            </TouchableOpacity>
          }

        </View>

        {(search.length !== 0 && !searchResult) && this.inputFilter()}

        <ScrollView>

          {
            this.state.isWaiting ? <LottieScreen />
              : <>
                {(!searchResult) && this.renderView()}
                {searchResult && this.renderSearch()}
              </>
          }

        </ScrollView>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />

        <DateTimePicker
          isVisible={this.state._isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='time'
        />

        <Popover
          isVisible={this.state.isVisible}
          fromView={this.touchable}
          placement={'bottom'}
          arrowStyle={{ backgroundColor: 'transparent' }}
          onClose={() => this.closePopover()}>
          <View style={{ padding: normalize(6) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={()=> this.setState({ isVisible: false })} style={styles.btn}>
                <Text> list 1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.setState({ isVisible: false })} style={styles.btn}>
                <Text> list 2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.setState({ isVisible: false })} style={styles.btn}>
                <Text> list 3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.setState({ isVisible: false })} style={styles.btn}>
                <Text> list 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Popover>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  roundBtn: {
    flexDirection: 'row',
    padding: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderColor: colors.GREEN,
    borderWidth: 1,
    borderRadius: 20,
  },
  cateogry: {
    marginHorizontal: 2,
    alignItems: 'center',
  },
  circle: {
    width: width / 6,
    height: width / 6,
    borderRadius: width / 12,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: normalize(1)
  },
  dank: {
    width: normalize(10),
    height: normalize(12),
    marginTop: normalize(-10),
    marginLeft: width / 8.7
  },
  input: {
    width: normalize(80),
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: colors.GREY3,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 4,
    marginRight: 12
  },



  dropdown_2: {
    alignSelf: 'flex-end',
    width: normalize(90),
    borderWidth: 0,
    borderRadius: 3,
  },
  dropdown_2_text: {
    color: colors.DARK,
    fontSize: 10,
    fontFamily: 'Montserrat-Bold',
  },
  dropdown_2_dropdown: {
    marginTop: -normalize(30),
    marginRight: normalize(30),
    width: normalize(80),
    height: 100,
    borderColor: 'cornflowerblue',
    borderWidth: 1,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 2,
    width: 12,
    height: 12,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 10,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },

  btn: {
    borderRadius: 4,
    width: width / 4.5,
    height: normalize(16),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Wall;