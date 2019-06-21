import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { p } from '../../../common/normalize';

const customStyles = {
  container: {
    borderColor: '#1982e5',
    borderWidth: 2,
    borderRadius: 0
  }
}

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>

        <Calendar
          style={styles.calendar}
          theme={{
            arrowColor: '#707070',
          }}
          onDayPress={(day) => {console.log('selected day', day)}}
          markingType={'custom'}
          markedDates={{
            '2019-06-01': { customStyles },
            '2019-06-05': { customStyles },
            '2019-06-06': { customStyles },
            '2019-06-12': { customStyles },
            '2019-06-22': { customStyles },
            '2019-06-28': { customStyles },
          }}
          hideArrows={false}
        />
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calendar:{
    width: p(270),
    borderRadius:5,
    borderWidth: 2,
    borderColor: '#707070'
  }
});