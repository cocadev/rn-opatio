import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { MapView, Marker, Animated } from 'expo';
import { colors } from '../../common/colors';
import { images } from '../../common/images';

class XMarksTheSpot extends React.Component {
  render() {
    return (
      <View>
        <MapView.Polygon
          coordinates={this.props.coordinates}
          strokeColor={colors.BLUE}
          strokeWidth={4}
        />
        <MapView.Polyline
          coordinates={[this.props.coordinates[0], this.props.coordinates[2]]}
        />
        <MapView.Polyline
          coordinates={[this.props.coordinates[1], this.props.coordinates[3]]}
        />
        <MapView.Marker
          coordinate={this.props.center}
          image={images.position}
        />
      </View>
    );
  }
}

XMarksTheSpot.propTypes = {
  coordinates: PropTypes.array,
  center: PropTypes.object,
  zIndex: PropTypes.number,
};

export default XMarksTheSpot;
