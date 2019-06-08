import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import i from '../../common/i'
import Header2 from '../../components/Header2';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { SERVICELISTING, REVIEWS, SWIPABLEDATA } from '../../common/staticdata';
import { LinearGradient } from 'expo';
import MaterialTabs from 'react-native-material-tabs';
import GradientButton from '../../components/GradientButton';
import AvatarTag from '../../components/AvatarTag';
import text from '../../common/text';
import Ratings from '../../components/Ratings';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../components/normalize';

const width = Dimensions.get('window').width

class WallDetail extends React.Component {

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

  _renderItem2 = ({ item }) => (
    <TouchableOpacity style={{ marginHorizontal: 5, borderRadius: 4, paddingTop: normalize(10) }}>

      <View style={{ zIndex: 1, position: 'absolute', left: normalize(20) }}>
        <TouchableOpacity style={{}} onPress={() => Actions.serviceprovider()}>
          <Image source={{ uri: item.user }} style={styles.circle} />
        </TouchableOpacity>

        <Image source={images.icon_dank} style={styles.danks} />
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 6, padding: 5, paddingTop: normalize(40), marginTop: 10, width: width / 3 - 18 }}>

        <Text style={i.smallText} numberOfLines={2}>{item.description}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={images.result} style={{ width: 20, height: 10 }} />
          <Text style={i.smallText}>$25/h</Text>
        </View>
      </View>

    </TouchableOpacity>
  )

  _renderItemReview = ({ item }) => (
    <TouchableOpacity onPress={() => Actions.serviceprovider()} style={{ margin: 12, flexDirection: 'row' }}>

      <View style={{ width: width / 6, alignItems: 'center' }}>
        <Image source={{ uri: item.profilePicture }} style={{ width: 32, height: 32, borderRadius: 16, marginBottom: 3 }} />
        <Ratings size={8} />
      </View>

      <View style={{ marginTop: 1, width: width / 1.2 }}>
        <Text style={[i.smallText, { marginRight: 20 }]}>{item.comment}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[i.smallText, { fontWeight: 'bold', color: colors.DARK }]}>{item.firstName + ' ' + item.lastName} </Text>
          <Text style={[i.smallText, { color: colors.RED }]}>| {item.orderDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  renderDetails() {
    return (
      <View style={{ backgroundColor: '#fff', padding: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
          <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
          <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 1: </Text>
          <Text style={[i.smallText, { fontSize: 8 }]}>Lorem ipsum dolor sit amet. ex vero efficiendi hones.sit a</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
          <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
          <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 2: </Text>
          <Text style={[i.smallText, { fontSize: 8 }]}>So, in this project, I will use Firebase Cloud Functions </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
          <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
          <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 3: </Text>
          <Text style={[i.smallText, { fontSize: 8 }]}>That means you can take advantage of ES6+ when writing</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
          <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
          <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 4: </Text>
          <Text style={[i.smallText, { fontSize: 8 }]}>I will use this API to manage the contact information as a</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
          <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
          <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 5: </Text>
          <Text style={[i.smallText, { fontSize: 8 }]}>Initiate Firebase Hosting</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
          <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
          <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 6: </Text>
          <Text style={[i.smallText, { fontSize: 8 }]}></Text>
        </View>
      </View>
    )
  }

  renderReviews() {
    const profile = this.props.profile
    return (
      <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}>
          <Text style={[i.normalText, { marginHorizontal: 18 }]}>RATINGS ({profile.serviceDetail.reviews.length})</Text>
          <Ratings size={14} />
          <Text style={{ marginLeft: 12 }}>4.5 STARS</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={[i.smallText, { fontSize: 9 }]}>COMMUNICATION</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Ratings size={10} />
            <Text style={i.smallText}>5 STARS</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={[i.smallText, { fontSize: 9 }]}>PROFESSIONALISM</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Ratings size={10} />
            <Text style={i.smallText}>4 STARS</Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={[i.smallText, { fontSize: 9 }]}>LIKELY TO RECOMMEND</Text>
            <MaterialCommunityIcons name="minus" size={14} color={colors.GREEN} />
            <Ratings size={10} />
            <Text style={i.smallText}>4 STARS</Text>
          </View>
        </View>
        <View style={{ backgroundColor: colors.GREY5, height: 1, marginTop: 12 }}>

        </View>
        <FlatList
          data={profile.serviceDetail.reviews}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItemReview}
          numColumns={1}
        />
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 12 }}>
          <Text style={[i.smallText, { color: colors.RED, marginRight: 12 }]}>130 more reviews</Text>
          <MaterialCommunityIcons name="arrow-right" size={14} color={colors.RED} />
        </View>
      </View>
    )
  }

  render() {

    const { selectedTab } = this.state;

    console.log('selectedTab', selectedTab)
    const profile = this.props.profile

    return (
      <View style={i.container}>
        <Header2 title={'Snow Cleaning Service'} />
        <ScrollView>

          <LinearGradient
            colors={['transparent', '#191919']}
            start={[1, 0.6]} end={[1, 1]}
            style={{ width: width, height: width / 2, zIndex: 1 }}>
          </LinearGradient>

          <Image source={{ uri: profile.serviceDetail.backgroundPicture }} style={styles.img} />

          <View style={{ zIndex: 1 }}>

            <TouchableOpacity onPress={() => Actions.serviceprovider()} style={{ position: 'absolute', left: 20, bottom: 1, }}>
              <Image source={{ uri: profile.profileDetail.profilePicture }} style={styles.user} />
            </TouchableOpacity>

            {profile.profileDetail.verified ? <Image source={images.icon_dank} style={styles.dank} /> : <View style={styles.dank} />}

            <Image source={images.icon_like} style={[styles.like, { right: width / 40 }]} />
            <Image source={images.icon_share} style={styles.like} />

            <View style={styles.notice}>
              <Text style={{ color: '#fff', fontFamily: 'Montserrat-Medium', fontSize: 11 }}>{profile.profileDetail.firstName + ' ' + profile.profileDetail.lastName}</Text>
              <Text style={{ color: '#fff', fontFamily: 'Montserrat-Medium', fontSize: 11 }}>{profile.profileDetail.languages[0]} | {profile.profileDetail.languages[1]} | {profile.profileDetail.languages[2]}</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, marginBottom: 40 }}>
            <Text style={[i.normalText, { width: width / 1.4 }]}>{profile.profileDetail.profileDescription}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7, }}>

              <View>
                <Ratings size={10} />
                <Text style={i.smallText}>S(115)</Text>
              </View>

              <View>
                <Text style={i.smallText}>PRICE</Text>
                <Text style={[i.normalText, { color: colors.RED, fontSize: 13, fontFamily: 'Montserrat-Bold' }]}>${profile.serviceDetail.price} / Hour</Text>
              </View>

            </View>

            <Text style={i.smallText}>{profile.serviceDetail.title}</Text>

          </View>

          <View style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 12, marginTop: -40, }}>
              <View style={[styles.roundBtn, { backgroundColor: '#fff' }]}>
                <Text style={i.normalText}>CONTACT SELLER</Text>
              </View>

              {this.state.order &&
                <TouchableOpacity style={styles.roundBtn} >
                  <Text style={i.normalText}>ORDER NOW</Text>
                </TouchableOpacity>
              }

              {!this.state.order &&
                <TouchableOpacity onPress={() => Actions.orderSummary()}>
                  <GradientButton vetical={normalize(10)} style={styles.roundBtn} title={'ORDER NOW'} />
                </TouchableOpacity>
              }

            </View>

            {this.state.order &&
              <Text style={{ color: colors.RED, fontSize: 10, fontFamily: 'Montserrat-MediumItalic', textAlign: 'right', marginTop: 12 }}>PLEASE CHECK AVAILABILITY</Text>
            }
            {!this.state.order &&
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'right', marginTop: 12, }}>
                <MaterialCommunityIcons name="checkbox-marked-circle" size={14} color={colors.GREEN} />
                <Text style={{ color: colors.GREEN, fontSize: 10, fontFamily: 'Montserrat-MediumItalic', marginHorizontal: 4 }}>SERVICE IS AVAILABLE</Text>
              </View>
            }


            <Text style={i.normalText}>CHECK AVAILABILITY</Text>
          </View>

          <ScrollView horizontal style={{ backgroundColor: '#fff', padding: 12 }}>
            <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center' }}>
              <View style={styles.input}>
                <Image source={images.icon_map} style={{ width: 12, height: 16 }} />
                <Text style={[i.smallText, { marginLeft: 5 }]}>35 fountain M2B1RS</Text>
                <Image source={images.icon_spot} style={{ width: 16, height: 16, marginLeft: 10 }} />

              </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.input}>
                <Image source={images.icon_calendar} style={{ width: 14, height: 15 }} />
                <Text style={[i.smallText, { marginLeft: 5 }]}>01/03/2019</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.input}>
                <Image source={images.icon_clock} style={{ width: 16, height: 16 }} />
                <Text style={[i.smallText, { marginLeft: 5 }]}>10:00 AM</Text>
              </View>
            </View>

          </ScrollView>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingBottom: 12 }}>
            <TouchableOpacity onPress={() => this.setState({ order: !this.state.order })}>
              <GradientButton title={this.state.order ? 'CHECK' : 'CHECK AGAIN'} />
            </TouchableOpacity>
          </View>

          {/* <View style={{ backgroundColor: '#fff', paddingLeft: normalize(12)}}>
            <Text style={{ color: colors.RED, fontSize: normalize(13), fontFamily: 'Montserrat-Medium', marginBottom: 5 }}>
              {'John han is not available at this date and time.\nPlease choose another date/time.'}
            </Text>
          </View> */}

          <MaterialTabs
            items={['DETAILS', 'REVIEWS']}
            selectedIndex={this.state.selectedTab}
            onChange={this.setTab}
            barColor={colors.WHITE}
            indicatorColor={colors.GREEN}
            activeTextColor={colors.DARK}
            inactiveTextColor={colors.GREY3}
          />

          {selectedTab == 0 && this.renderDetails()}
          {selectedTab == 1 && this.renderReviews()}

          <View >

            <View style={{ height: width / 4 }}></View>
            <View style={{ height: width / 5, borderBottomColor: colors.GREY4, borderBottomWidth: 2 }}></View>

            <View style={{ position: 'absolute', padding: 12, }}>
              <Text style={[i.normalText, { marginBottom: 12, marginLeft: 4 }]}>SIMILAR SERVICES</Text>
              <FlatList
                horizontal
                data={SWIPABLEDATA}
                keyExtractor={(item, i) => String(i)}
                renderItem={this._renderItem2}
                numColumns={1}
              />
            </View>

          </View>

          <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingHorizontal: 12, paddingTop: 10 }}>

            <View >
              <AvatarTag verified={profile.profileDetail.verified} userImg={profile.profileDetail.profilePicture} />
            </View>

            <View style={{ paddingTop: 6, paddingLeft: 10 }}>
              <Text style={{ color: colors.DARK, fontFamily: 'Montserrat-Medium', fontSize: 11 }}>{profile.profileDetail.firstName + ' ' + profile.profileDetail.lastName}</Text>
              <Text style={{ color: colors.DARK, fontFamily: 'Montserrat-Medium', fontSize: 11 }}>{profile.profileDetail.languages[0]} | {profile.profileDetail.languages[1]} | {profile.profileDetail.languages[2]}</Text>

            </View>

            {!this.state.order &&
              <TouchableOpacity onPress={() => Actions.orderSummary()} style={{ paddingTop: 10, paddingLeft: 10 }}>
                <GradientButton title={'ORDER NOW'} />
              </TouchableOpacity>
            }

            {
              this.state.order &&
              <TouchableOpacity style={[styles.roundBtn, { width: width/3, height: width/15, marginLeft: normalize(15)}]}>
                <Text style={i.normalText}>ORDER NOW</Text>
              </TouchableOpacity>
            }


           

          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: 18, paddingBottom: 12 }}>
            <Image source={images.result} style={{ width: 32, height: 12 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
              <Text style={text.m_8_dark2_b}>PRICE</Text>
              <Text style={[text.m_9_red, { marginLeft: 5 }]}>${profile.serviceDetail.price} / Hour</Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width,
    height: width / 2,
    position: 'absolute'
  },
  user: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    width: width / 5,
    height: width / 5,
  },
  dank: {
    width: width / 24,
    height: width / 20,
    left: width / 5,
    bottom: 5
  },
  like: {
    width: width / 8,
    height: width / 8,
    right: width / 8,
    position: 'absolute',
    bottom: -5
  },
  notice: {
    left: width / 3.4,
    position: 'absolute',
    bottom: 27
  },
  input: {
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: colors.GREY3,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 4,
    marginRight: 12
  },
  roundBtn: {
    width: width / 2.4,
    height: width / 11,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    elevation: 2,
    // borderWidth:1,
    // borderColor:colors.GREY1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: width / 6,
    height: width / 6,
    borderRadius: width / 12,
    borderColor: '#fff',
    borderWidth: 1
  },
  danks: {
    width: normalize(10),
    height: normalize(12),
    position: 'absolute',
    right: normalize(5),
    bottom: normalize(2),
  },
});

export default WallDetail;