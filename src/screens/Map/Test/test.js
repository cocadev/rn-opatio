import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Button,
  Share,
} from 'react-native';
import * as FileSystem from 'expo-file-system'

export default class App extends Component {
  static navigationOptions = {
    title: 'Pdf Screen',
  };

  state = {
    pdfUrl: '',
  };

   makeDowload() {
     FileSystem.downloadAsync(
      'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
      FileSystem.documentDirectory + 'small.pdf'
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
      })
      .catch(error => {
        console.error(error);
      });

  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}
      >
        <Button          
          title="baixar"
          onPress={() => {
            this.makeDowload();
          }}/>
      </View>
    );
  }
}
