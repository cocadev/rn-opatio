import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { MapView } from 'expo';

class Polygons extends React.Component {
  render() {
    return (
      <View>
        <MapView.Polygon
          coordinates={[
            {
              longitude: -32.571482,
              latitude: -64.105139,
            },
            {
              longitude: -32.573336,
              latitude: -64.094859,
            },
            {
              longitude: -32.58192,
              latitude: -64.09713,
            },
            {
              longitude: -32.579999,
              latitude: -64.107541,
            },
            {
              longitude: -32.571482,
              latitude: -64.105139,
            },
          ]}
          strokeColor={'#cc00cc'}
          strokeWidth={4}
        />
      </View>
    );
  }
}

Polygons.propTypes = {
  coordinates: PropTypes.array,
  center: PropTypes.object,
  zIndex: PropTypes.number,
};

export default Polygons;
