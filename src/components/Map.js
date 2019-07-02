import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { images } from '../common/images';
import { p } from '../common/normalize';
import { MapView } from 'expo';
import { customStyles } from '../screens/Dashboard/customStyles'
import Polygons from './Polygons';
import * as CONFIG from '../common/config'
import * as ICON from '../components/Icons';

export default class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  render() {
    const { polygons, region } = this.props;
    return (
      <View style={styles.container}>

        <MapView
          ref={instance => this.map = instance}
          style={styles.map}
          showsUserLocation={true}
          zoomEnabled={true}
          initialRegion={region}
          customMapStyle={CONFIG.CUSTOM_STYLE}
          cacheEnabled={true}
          zoomEnabled
          scrollingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
        >
          <Polygons coordinates={polygons} />
        </MapView>

        <View style={customStyles.searchView}>
          <Image source={images.blackSearch} style={customStyles.searchIcon} />
          <TextInput
            style={customStyles.textinput}
            placeholder={'Buscar'}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </View>

        <View style={{ position: 'absolute', right: 15, top: p(190) }}>
          <TouchableOpacity onPress={() => this.setState({ modal: true })}>
            <ICON.IconRoundLayer />
          </TouchableOpacity>
          <TouchableOpacity>
            <ICON.IconLocate1 />
          </TouchableOpacity>
        </View>

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
    height: p(300),
    marginTop: p(60)
  },
});
