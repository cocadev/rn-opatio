import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text, Modal } from 'react-native'
import { images } from '../common/images'
import { p } from '../common/normalize'
import { Actions } from 'react-native-router-flux'
import { colors } from '../common/colors'
import text from '../common/text'
import MapView from 'react-native-maps'
import Polygons from './Polygons'
import Cstyles from '../common/c_style'
import * as ICON from '../components/Icons'

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Buscar',
      latitude: -33.1231585,
      longitude: -64.3493441,
      // region:props.region,
      modal: false
    }
  }

  _findMe() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords
        this.setState({
          position: {
            latitude,
            longitude,
          },
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }
        })

      },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  viewMap = () => {
    Actions.mapSearch({
      update: (location, key) => {
        this.setState({
          region: {
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          },
          text: key
        });
      }
    })
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.modal}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={Cstyles.modalContainer}>
          <View style={Cstyles.modal}>

            <TouchableOpacity onPress={() => this.setState({ modal: false })} style={{ alignItems: 'flex-end' }}>
              <ICON.IconClose />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: p(12), justifyContent: 'center' }}>
              <ICON.IconModalField1 left={p(14)} right={p(14)} />
              <TouchableOpacity onPress={() => this.setState({ calendar: true, modal: false })}>
                <ICON.IconModalField2 left={p(14)} right={p(14)} />
              </TouchableOpacity>
              <ICON.IconModalField3 left={p(14)} right={p(14)} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: p(12), justifyContent: 'center' }}>
              <ICON.IconModalField4 left={p(14)} right={p(14)} />
              <ICON.IconModalField5 left={p(14)} right={p(14)} />
            </View>

          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const { polygons, remove, disable } = this.props;
    const height = this.props.height ? this.props.height : p(240)

    return (
      <View style={styles.container}>
        <MapView
          provider="google"
          style={{ ...styles.map, height }}
          showsCompass={false}
          initialRegion={this.props.region}
          region={this.state.region}
          showsMyLocationButton={true}
          showsUserLocation={true}
          cacheEnabled={true}
          loadingEnabled={true}
          loadingIndicatorColor="#111"
          loadingBackgroundColor="#eee"
          mapType={"satellite"}
        >
          {polygons && <Polygons coordinates={polygons} />}
        </MapView>

        {
          !remove &&
          <TouchableOpacity
            onPress={this.viewMap}
            style={styles.searchView}>
            <Image source={images.blackSearch} style={styles.searchIcon} />
            <View style={styles.textinput}>
              <Text style={text.t_12_400_98}>{this.state.text}</Text>
            </View>
          </TouchableOpacity>
        }

        <View style={{ position: 'absolute', right: 15, top: disable ? p(130) : p(180) }}>
          {
            disable && 
            <TouchableOpacity 
              onPress={() => this.setState({ modal: true })} 
            >
              <ICON.IconRoundLayer />
            </TouchableOpacity>
          }
          <TouchableOpacity onPress={() => this._findMe()} >
            <ICON.IconLocate1 />
          </TouchableOpacity>
        </View>
        {this.state.modal && this.renderModal()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F5FCFF'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: p(240),
    marginBottom: 1,
    flex: 1
  },
  textinput: {
    width: p(260),
    height: p(44),
    justifyContent: 'center',
    paddingLeft: p(48),
    fontSize: p(16),
    borderColor: colors.GREY8,
    borderWidth: 1,
    borderRadius: p(25)
  },
  searchView: {
    position: 'absolute',
    left: p(60)
  },
  searchIcon: {
    top: p(32),
    left: p(22),
    width: p(20),
    height: p(19)
  }
});
