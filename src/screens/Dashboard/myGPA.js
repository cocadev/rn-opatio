import React from 'react';
import { StyleSheet, Text, View, Image, CheckBox, TouchableOpacity, ScrollView, Dimensions, Modal, TextInput, KeyboardAvoidingView, Picker } from 'react-native';
import WallListItem from '../../components/WallListItem'
import i from '../../common/i'
import LottieScreen from '../../components/Lottie';
import api from "../../service/api";
import Header from '../../components/Header';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import Cache from "../../utils/cache";
import { EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import UtilService from '../../utils/utils';

const width = Dimensions.get('window').width

class MyGPA extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isWaiting: false,
      accounts: null,
      hours: '',
      gpa: '',
      notification: false
    }
  }

  componentDidMount() {
    this.setState({ isWaiting: true })
    api.getMyAccount((err, res) => {
      if (err == null) {
        console.log('********************* res ************************', res.posts)
        this.setState({ accounts: res.posts })
      }
    })
    this.setState({ isWaiting: false })
  }

  showGrades(itemValue) { this.setState({ grades: itemValue }); }

  gradesResult = () => {
    this.setState({ notification: true })
    setTimeout(() => {this.setState({notification: false})}, 1000)
  }

  render() {
    const { hours, gpa, grades, credits, course, notification } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' enabled style={i.container}>
        <Header />

        <ScrollView>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
            <Image source={images.question_icon} style={{ width: 28, height: 31, marginLeft: 12 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 12 }}>My GPA</Text>
          </View>

          <View style={{ height: 1, backgroundColor: colors.GREY2, marginHorizontal: 12, marginTop: 6 }}></View>

          <View style={styles.row}>
            <Text style={styles.text}>A = 4</Text>
            <Text style={styles.text}>A- = 3.7</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>B += 3.3</Text>
            <Text style={styles.text}>B = 3</Text>
            <Text style={styles.text}>B- = 2.7</Text>

          </View>

          <View style={styles.row}>
            <Text style={styles.text}>C += 2.3</Text>
            <Text style={styles.text}>C = 2</Text>
            <Text style={styles.text}>C -= 1.7</Text>

          </View>

          <View style={styles.row}>
            <Text style={styles.text}>D += 1.3</Text>
            <Text style={styles.text}>D = 1</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>F = 0</Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
            <View style={{ flex: 1, paddingHorizontal: 6 }}>
              <Text>Current GPA</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={gpa => this.setState({ gpa })}
                value={gpa}
              />
            </View>
            <View style={{ flex: 2, paddingHorizontal: 6 }}>
              <Text>Last Semester Credit Hours</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={hours => this.setState({ hours })}
                value={hours}
              />
            </View>
          </View>

          <View style={[styles.popver, { backgroundColor: '#cce5ff' }]}>
            <Text style={{ color: '#004085', fontSize: 15 }}>Semester GPA 0</Text>
          </View>

          <View style={styles.popver}>
            <Text style={{ color: '#155c35', fontSize: 15 }}>Overall CGPA 3.00</Text>
          </View>

          <View style={{ height: 1, backgroundColor: colors.GREY3, marginHorizontal: 12, marginVertical: 12 }}></View>

          <View style={{ flexDirection: 'row', marginHorizontal: 12 ,alignItems:'center' }}>
            <View style={{ flex: 1, paddingHorizontal: 6 }}>
              <Text>Course</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={course => this.setState({ course })}
                value={course}
              />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 6 }}>
              <Text>Credits</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={credits => this.setState({ credits })}
                value={credits}
              />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 6 }}>
              <Text>Grades</Text>
              <View style={[styles.input, { padding: 0 }]}>
                <Picker
                  selectedValue={this.state.grades}
                  style={{ height: 33 }}
                  onValueChange={(itemValue, itemIndex) => this.showGrades(itemValue)}
                >
                  <Picker.Item label="-" value="-" />
                  <Picker.Item label="A" value="A" />
                  <Picker.Item label="A-" value="A-" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B" value="B" />
                  <Picker.Item label="B-" value="B-" />
                  <Picker.Item label="C+" value="C+" />
                  <Picker.Item label="C" value="C" />
                  <Picker.Item label="C-" value="C-" />
                  <Picker.Item label="D+" value="D=" />
                  <Picker.Item label="D" value="D" />
                  <Picker.Item label="F" value="F" />

                </Picker>
              </View>

            </View>
            <Ionicons name="ios-close-circle" size={26} color={colors.RED} style={{flex:0.2, paddingTop:18}}/>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 16, marginTop: 10 }}>
            <TouchableOpacity style={styles.signupBtn}>
              <Text style={{ color: '#fff' }}>Add Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupBtn}>
              <Text style={{ color: '#fff' }}>Calculate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.gradesResult} style={[styles.signupBtn, { backgroundColor: '#17a2b8' }]}>
              <Text style={{ color: '#fff' }}>Save</Text>
            </TouchableOpacity>
          </View>

          {notification &&
            <View style={[styles.popver, { marginTop: 8 }]}>
              <Text style={{ color: '#155c35', fontSize: 15 }}>Record updated successfully</Text>
            </View>
          }



        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  row: {
    paddingVertical: 2,
    paddingHorizontal:10,
    width: width / 2,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  signupBtn: {
    backgroundColor: colors.PURPLE,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginHorizontal: 3
  },
  input: {
    borderRadius: 5,
    marginVertical: 5,
    fontSize: 16,
    padding: 5,
    height: 36,
    borderColor: colors.GREY2,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: colors.SKY,
    marginHorizontal: 12
  },
  popver: {
    backgroundColor: '#d4edda',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c3e6cb',
    marginHorizontal: 16,
    padding: 12,
    marginVertical: 8
  }
});

export default MyGPA;