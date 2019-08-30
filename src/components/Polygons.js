import React from 'react'
import PropTypes from 'prop-types'
import MapView from 'react-native-maps'
import { View } from 'react-native'
import { colors } from '../common/colors';

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
          strokeColor={colors.BLUE2}
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
