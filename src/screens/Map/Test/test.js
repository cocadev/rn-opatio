import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { SQLite } from 'expo-sqlite'
import Constants from 'expo-constants'
import axios from 'axios';

const db = SQLite.openDatabase('db.db');

class Items extends React.Component {

  constructor() {
    super();
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    this.update();
  }



  render() {
    const { done: doneHeading } = this.props;
    const { items } = this.state;
    const heading = doneHeading ? 'Completed' : 'Todo';

    if (items === null || items.length === 0) {
      return null;
    }

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>{heading}</Text>

        {items.map(({ id, done, value }) => (
          <TouchableOpacity
            key={id}
            onPress={() => this.props.onPressItem && this.props.onPressItem(id)}
            style={{
              backgroundColor: done ? '#1c9963' : '#fff',
              borderColor: '#000',
              borderWidth: 1,
              padding: 8
            }}>
            <Text style={{ color: done ? '#fff' : '#000' }}>{value}</Text>
          </TouchableOpacity>
        ))}


      </View>
    );
  }

  update() {
    db.transaction(tx => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [this.props.done ? 1 : 0],
        (_, { rows: { _array } }) => this.setState({ items: _array })
      );
    });
  }
}

export default class App extends React.Component {
  state = {
    text: null,
    results: null
  };

  componentDidMount() {
    this.getApi();

    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null, done int, value text);'
      );
    });
  }

  getApi() {
    axios.get('https://randomuser.me/api/?results=3')
      .then(response => {
        const results = response.data.results
        this.setState({ results })

        for (let i = 0; i < results.length; i++) {
          this.add(results[i].email)
        }

      })
      .catch(error => {
        console.log(error);
      });
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ borderWidth: 2, borderColor: '#666', width: '90%', borderRadius: 5, padding: 12, marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={{ uri: item.picture.thumbnail }} style={{ width: 100, height: 100 }} />
        <View style={{ alignItems: 'stretch' }}>
          <Text>{item.name.first + ' ' + item.name.last}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { results } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>SQLite Example</Text>

        {
          !results && <ActivityIndicator color={'red'} size={40}/>
        }

        {
          results &&
          <FlatList
            data={results}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => String(i)}
          />
        }


        <View style={styles.flexRow}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={() => {
              this.add(this.state.text);
              this.setState({ text: null });
            }}
            placeholder="what do you need to do?"
            style={styles.input}
            value={this.state.text}
          />
        </View>
        <ScrollView style={styles.listArea}>
          <Items
            done={false}
            ref={todo => (this.todo = todo)}
            onPressItem={id =>
              db.transaction(
                tx => {
                  tx.executeSql(`update items set done = 1 where id = ?;`, [id]);
                },
                null,
                this.update
              )}
          />
          <Items
            done={true}
            ref={done => (this.done = done)}
            onPressItem={id =>
              db.transaction(
                tx => {
                  tx.executeSql(`delete from items where id = ?;`, [id]);
                },
                null,
                this.update
              )}
          />
        </ScrollView>
      </View>
    );
  }

  add(text) {
    // is text empty?
    if (text === null || text === '') {
      return false;
    }

    db.transaction(
      tx => {
        tx.executeSql('insert into items (done, value) values (0, ?)', [text]);
        tx.executeSql('select * from items', [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      this.update
    );
  }

  update = () => {
    this.todo && this.todo.update();
    this.done && this.done.update();
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  input: {
    borderColor: '#4630eb',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8
  },
  listArea: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  },
});
