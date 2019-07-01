import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { MapView } from 'expo';

class Polygons extends React.Component {

  state = { ticket: [], myState: [] };

  componentWillMount(){
    const tempticket = [];
    for (i = 0; i < this.props.coordinates[0].length; i++) {
      tempticket.push({ longitude: this.props.coordinates[0][i][0], latitude: this.props.coordinates[0][i][1] });
    }
    this.setState({ ticket: tempticket });    
  }

  render() {
    return (
      <View>
        <MapView.Polygon
          coordinates={this.state.ticket}
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
