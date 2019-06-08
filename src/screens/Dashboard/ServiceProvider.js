import React from 'react';
import { View, FlatList, Text, Image, ScrollView } from 'react-native';
import { SERVICELISTING } from '../../common/staticdata';
import { normalize } from '../../components/normalize';
import { colors } from '../../common/colors';
import { images } from '../../common/images';
import { family } from '../../common/family';
import FavListItem from '../../components/FavListItem';
import text from '../../common/text';
import i from '../../common/i'
import Header from '../../components/Header2';
import Ratings from '../../components/Ratings'
import AvatarTag from '../../components/AvatarTag'
import GradientButton from '../../components/GradientButtonNew'
import GText from '../../components/GText'

class ServiceProvider extends React.Component {

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
    <FavListItem item={item} />
  )

  render() {

    return (
      <View style={i.container}>
        <Header title={'Service Provider Page'} />

        <ScrollView>
        <View style={{ paddingLeft: normalize(19), backgroundColor: '#fff', paddingBottom: normalize(24) }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{flex:3}}>
                 <AvatarTag title={'provider'} />
              </View>
              <View style={{flex:4}}>
                 <GradientButton title={'CONTACT SERVICE PROVIDER'} />
              </View>
          </View>

          <GText content={['VIPPO CLEANING SERVICE', normalize(14), normalize(-12)]} />

          <View style={{ flexDirection: 'row', marginTop: normalize(18)}}>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center' }}>
                 <Image source={images.icon_star2} style={{width:normalize(15), height:normalize(15), marginRight: normalize(17)}}/>
                 <GText content={['TOTAL REVIEWS', normalize(9)]} />
              </View> 
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center', marginLeft:normalize(13) }}>
                 <Ratings size={12} />
                 <View style={{marginLeft: 6}}></View>
                 <GText content={['5(115)', normalize(9)]} />
              </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: normalize(12)}}>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center' }}>
                 <Image source={images.icon_world} style={{width:normalize(16), height:normalize(16), marginRight: normalize(17)}}/>
                 <GText content={['LANGUAGE', normalize(9)]} />
              </View>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center', marginLeft:normalize(13) }}>
                 <GText content={['English | Hispanic', normalize(10),, colors.SKY]} />
              </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: normalize(12)}}>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center' }}>
                 <Image source={images.icon_oclock} style={{width:normalize(16), height:normalize(16), marginRight: normalize(17)}}/>
                 <GText content={['RESPONSE TIME & RATE', normalize(9)]} />
              </View>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center', marginLeft:normalize(13) }}>
                 <GText content={['Less than 1 hr | 100%', normalize(10),, colors.SKY]} />
              </View>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: normalize(12), alignItems:'flex-start', marginBottom: normalize( 18)}}>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center' }}>
                 <Image source={images.icon_towel} style={{width:normalize(15), height:normalize(17), marginRight: normalize(17)}}/>
                 <GText content={['VERIFIED', normalize(9),, colors.DARK]} />
              </View>
              <View style={{ flexDirection: 'row', flex:1, alignItems: 'center', marginLeft:normalize(13), paddingHorizontal: 12 }}>
                 <GText content={['Government ID. phone number profile pic, Email address', normalize(10),, colors.SKY]} />
              </View>
          </View>

          <View style={{paddingRight: normalize(12)}}>
            <GText content={['DETAILS', normalize(9)]} />
            <GText content={['Looking for a qualified and experienced web designer to help design a professional services website. The website is around 10 pages and based on the Salient Wordpress theme. Please send portfolio. All pictures, overall rough design, logo, can be provided.', normalize(9), normalize(13)]} />
            <GText content={['We are in Food & Herbal Supplement business. We are looking for: SEO: For 15 Keywords & Blog /article writing. SEO will include on-site, off-site, audit, keyword discovery, link building etc Website Maintenance & minor changes at website as well as increasing mobile download speed of website. The project is for initial trial one month, if it works well we continue the same.  We will prefer same person or company doing both SEO and website related issue, if not possible we can consider them separately. Website: https://nveda.in', normalize(9), normalize(11)]} /> 
          </View>
        </View>

        <GText content={['SERVICES PROVIDED BY SELLER', normalize(11), normalize(20),,, normalize(20)]} />

        <FlatList
          style={{ marginTop: normalize(22) }}
          data={SERVICELISTING}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItemReview}
          numColumns={1}
        />
        </ScrollView>

      </View>
    );
  }
}

export default ServiceProvider;