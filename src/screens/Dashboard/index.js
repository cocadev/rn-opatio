import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { Actions } from 'react-native-router-flux';
import { Entypo } from '@expo/vector-icons';
import { p } from '../../common/normalize';
import { NOTIFICATION } from '../../common/config';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../store/lotes/actions";
import * as ICON from '../../components/Icons';
import text from '../../common/text';
import Cache from '../../common/cache';

const { width, height } = Dimensions.get('window');

class Inbox extends React.Component {

  constructor() {
    super();
    this.state = {
      notification: false,
      isWaiting: false
    }
  }

  componentDidMount() {
    this.onfetchLoteData(0)
    this._findMe()
  }

  _findMe() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords
        Cache.LAT = latitude;
        Cache.LNG = longitude;
      },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  onfetchLoteData(skip) {

    this.setState({ isWaiting: true })
    this.props.actions.removeLotes()
    this.props.actions.getAllLotes(skip)
      .then((res) => {
        this.setState({ isWaiting: true })
        for (var i = 10; i < res; i = i + 10) {
          this.props.actions.addStepLotes(i).then(() => this.setState({ isWaiting: false }))
        }
      })
      .catch(e => { this.setState({ isWaiting: false }) })
  }

  _renderItem = ({ item }) => (
    <View style={styles.itemNotify}>
      <View style={{ width: p(8), height: p(40), backgroundColor: colors.BLUE, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}>

      </View>
      <Image source={images.news} style={{ width: p(30), height: p(25), marginLeft: p(18) }} />
      <View style={{ paddingTop: p(2), marginLeft: p(12) }}>
        <Text style={{ fontSize: p(9) }}>{item.title}</Text>
        <Text style={{ fontSize: p(9) }}>{item.content}</Text>
        <Text style={{ fontSize: p(9) }}>{item.name}</Text>
      </View>
    </View>
  )

  renderNotification() {
    return (
      <Modal
        visible={this.state.notification}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => this.setState({ notification: false })}>
              <Entypo name="chevron-right" color={colors.GREY1} size={36} />
            </TouchableOpacity>
            <FlatList
              style={{ marginTop: 12 }}
              data={NOTIFICATION}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem}
            />
          </View>
        </View>
      </Modal>
    );
  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <ICON.IconMenu top={p(21)} onClick={() => Actions.drawerOpen()} />
          <ICON.IconRing top={p(21)} onClick={() => this.setState({ notification: true })} />

        </View>

        <View style={{ alignItems: 'center' }}>
          <ICON.IconSkyLogo top={p(10)} />
        </View>

        <View style={{ alignItems: 'center', marginTop: p(25) }}>
          <Text style={text.t_14_700_00}>Bienvenido otra vez</Text>
          <Text style={[text.t_19_500_00, { marginTop: p(12) }]}>{Cache.FIRST_NAME + ' ' + Cache.LAST_NAME}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginTop: p(70) }}>

          <TouchableOpacity onPress={() => Actions.lotes()} style={styles.rectNgulo}>
            <View style={styles.box}>
              <Image source={images.location} style={styles.itemImg1} />
            </View>
            <Text style={styles.text}>Lotes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.maquinarias()} style={styles.rectNgulo}>
            <View style={[styles.box, { backgroundColor: colors.YELLOW }]}>
              <Image source={images.track} style={styles.itemImg2} />
            </View>
            <Text style={[styles.text, { color: colors.YELLOW }]}>Maquinarias</Text>
          </TouchableOpacity>

        </View>

        {this.state.notification && this.renderNotification()}

      </View>
    );
  }
}

export default connect(
  state => ({
      allLotes: state.lotes.allLotes,
  }),
  dispatch => ({
      actions: bindActionCreators(actions, dispatch)
  })
)(Inbox);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: p(15),
    // justifyContent: 'space-between',
    backgroundColor: colors.BACKGROUND
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box: {
    width: p(165),
    height: p(105),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLUE
  },
  rectNgulo: {
    marginTop: p(20),
    width: p(165),
    height: p(151),
    shadowColor: 'rgba(0, 175, 239, 0.23)',
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 7,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    elevation: 3
  },
  text: {
    color: colors.BLUE,
    fontSize: p(16),
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: p(14)
  },
  itemImg1: {
    width: p(71),
    height: p(54)
  },
  itemImg2: {
    width: p(55),
    height: p(61)
  },
  itemImg3: {
    width: p(54),
    height: p(47)
  },
  button: {
    height: p(60),
    marginTop: p(88),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: colors.YELLOW,
    marginBottom: p(10)
  },
  btnText: {
    color: colors.WHITE,
    fontSize: p(21),
    fontWeight: '700',
    lineHeight: p(21),
  },
  modal: {
    width: width / 2,
    height: height,
    backgroundColor: "white",
    paddingTop: p(10),
    borderLeftWidth: 1,
    borderColor: colors.BLACK
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "flex-end",
  },
  itemNotify: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    height: p(40),
    marginHorizontal: p(6),
    marginVertical: p(3),
    borderWidth: 1,
    borderColor: colors.GREY2,
    elevation: 1,
    borderRadius: 3
  }
});

