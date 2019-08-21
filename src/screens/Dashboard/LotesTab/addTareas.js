import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { images } from '../../../common/images'
import { p } from '../../../common/normalize'
import { colors } from '../../../common/colors'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Actions } from 'react-native-router-flux';
import { showMessage } from "react-native-flash-message";
import Cstyles from '../../../common/c_style'
import DatePicker from '../../../components/datePicker';
import UtilService from '../../../common/utils';
import api from '../../../common/api'
import _ from 'underscore'
import * as HEADERS from '../../../components/Headers'
import * as ATOM from '../../../components/Atoms'
import * as ICON from '../../../components/Icons'
import * as BTN from '../../../components/Buttons'
import * as actions from "../../../store/lotes/actions";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as ImageManipulator from 'expo-image-manipulator'
import text from '../../../common/text';

class AddTareas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            date_from: UtilService.getDatebyTMDB(new Date()),
            date_to: UtilService.getDatebyTMDB(new Date()),
            visibleModal: false,
            image: null,
            media_id: null,
            lat: null,
            lng: null
        }
    }

    onUpdate = () => {
        const { title, description, date_from, date_to } = this.state
        this.setState({ isWaiting: true })

        api.updateTask(this.props.task_id, title, description, date_from, date_to, (err, res) => {
            this.setState({ isWaiting: false })

            if (err == null) {
                showMessage({
                    message: "Success updated task",
                    type: "success",
                    icon: "success",
                });
                if (this.props.update) {
                    this.props.update(res.success)
                    Actions.pop()
                }
            } else {
                showMessage({
                    message: "Fail update task",
                    type: "danger",
                    icon: "danger",
                });
            }
        })
    }

    dateFromCheck = (x) => {
        this.setState({ date_from: UtilService.getDatebyTMDB(x) })
    }

    dateToCheck = (x) => {
        this.setState({ date_to: UtilService.getDatebyTMDB(x) })
    }

    takePicture = async () => {

        let res = await Permissions.askAsync(Permissions.CAMERA)
        if (res.status === 'granted') {
            let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status === 'granted') {
                let image = await ImagePicker.launchCameraAsync({
                    quality: 0.6
                })

                if (!image.cancelled) {

                    const manipResult = await ImageManipulator.manipulateAsync(
                        image.uri,
                        [{ resize: { width: 768 } }],
                        { format: 'jpeg', compress: 0.6 }
                    );

                    api.uploadImage(manipResult.uri, (err, res) => {

                        if (err == null) {
                            this.setState({
                                image: res.url,
                                media_id: res.media_id

                            });
                        }
                    })
                }
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);
        this.setState({ file: result.uri })

        if (!result.cancelled) {
            api.uploadImage(result.uri, (err, res) => {
                if (err == null) {
                    this.setState({
                        image: res.url,
                        media_id: res.media_id
                    });
                }
            })
        }
    };

    fileUpload = () => {
        this.setState({ visibleModal: false })
        console.log('++++++++++++++++ media id +++++++++++++++++++++++', this.state.media_id)
        api.changeFileTask(this.state.media_id, (err, res) => {

            if (err == null) {
                showMessage({
                    message: "Success updated file",
                    type: "success",
                    icon: "success",
                });
            } else {
                showMessage({
                    message: "Fail updated file",
                    type: "danger",
                    icon: "danger",
                });
            }
        })
    }

    rendervisibleModal() {
        return (
            <Modal
                visible={this.state.visibleModal}
                transparent={true}
                onRequestClose={() => { this.setState({ visibleModal: false }) }}
            >
                <View style={styles.indicatorContainer}>
                    <View style={styles.indicator}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={this.takePicture}>
                                <Text style={{ fontSize: p(15) }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={this._pickImage}>
                                <Text style={{ fontSize: p(15) }}>Images</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.image && <Image source={{ uri: this.state.image }} style={styles.photo} />}
                        </View>
                        <View style={{ position: 'absolute', right: 5, bottom: 5 }}>
                            <TouchableOpacity onPress={() => this.setState({ visibleModal: false })}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', left: 5, bottom: 5 }}>
                            <TouchableOpacity onPress={this.fileUpload}>
                                <Text>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    add(){
        const { title, date_from, date_to, description, lat, lng, media_id  } = this.state
        this.props.actions.addTask(this.props.testLote.id, title, date_from, date_to, description, lat, lng, media_id, (err, res) => {

            if (err == null) {
                showMessage({
                    message: "Success updated file",
                    type: "success",
                    icon: "success",
                });
            } else {
                showMessage({
                    message: "Fail updated file",
                    type: "danger",
                    icon: "danger",
                });
            }
        })

    }

    render() {

        const { title, date_from, date_to, isWaiting, lat, lng, description } = this.state;

        return (
            <View style={Cstyles.container}>

                {isWaiting && <ATOM.Loading />}

                <HEADERS.GUARDAR back={colors.BLUE2} onClick={this.onUpdate} />

                <ScrollView>

                    <View style={styles.textRow}>
                        <TextInput
                            style={styles.titleInput}
                            placeholder={'Note Title'}
                            placeholderTextColor={colors.GREY4}
                            onChangeText={(title) => this.setState({ title })}
                            value={title}
                        />
                        <TouchableOpacity onPress={() => this.setState({ visibleModal: true })}>
                            <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: colors.BLUE2 }}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={'Añadir descripción'}
                            multiline={true}
                            blurOnSubmit={false}
                            onChangeText={(description) => this.setState({ description })}
                            value={description}
                        />
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Inicio'}
                        note={date_from}
                        right={
                            date_from && <DatePicker date={date_from} onClick={(x) => this.dateFromCheck(x)} />
                        }
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Vence'}
                        note={date_to}
                        right={
                            date_to && <DatePicker date={date_to} onClick={(x) => this.dateToCheck(x)} />
                        }
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconMap />}
                        title={'Ubicación y coordenadas'}
                        note={`Lat: ${lat}, Lng: ${lng}`}
                        right={
                            <TouchableOpacity 
                                onPress={(x) => Actions.checkMap({ update: (lat, lng) => this.setState({ lat, lng }) })}
                            >
                                <Text style={text.t_15_600_sky}>Edit</Text>
                            </TouchableOpacity>
                        }
                    />

                    {/* <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(12) }}>
                        <Text style={styles.text5}>{'MARCAR EN EL MAPA'}</Text>
                        <BTN.BtnNormal onClick={()=>Actions.checkMap()} title={'USAR MI UBICACIÓN'} top={p(18)} back={colors.BLUE2} />
                    </View> */}

                    {/* <ATOM.Atom1
                        icon={<ICON.IconProfile />}
                        title={'Asignado a'}
                        note={'Walter'}
                    />

                    <ATOM.Atom1
                        icon={<ICON.IconMember />}
                        title={'Responsable'}
                        note={'joaquin@optiagro.com'}
                    /> */}

                    <View style={{ alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(20) }}>
                        <BTN.BtnNormal title={'SAVE'} back={colors.BLUE2} onClick={()=>this.add()} />
                    </View>
                </ScrollView>

                {this.rendervisibleModal()}

            </View>
        );
    }
}

export default connect(
    state => ({
        testLote: state.lotes.testLote,
        testTasks: state.lotes.testTasks
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AddTareas);

const styles = StyleSheet.create({
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(37)
    },
    text5: {
        color: colors.BLUE2,
        flex: 1,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: p(16)
    },
    inputBox: {
        height: p(134),
        margin: p(30),
        textAlignVertical: 'top',
        backgroundColor: '#6FBCE5',
        borderRadius: p(5),
        fontSize: p(20),
        fontWeight: '500',
        padding: p(14),
        color: colors.GREY4
    },
    textRow: {
        backgroundColor: colors.BLUE2,
        padding: p(30),
        paddingBottom: p(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titleInput: {
        color: '#ffffff',
        fontSize: p(37),
        fontWeight: '400',
        marginVertical: p(8)
    },
    indicatorContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0,0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    indicator: {
        width: p(200),
        height: p(200),
        borderRadius: 5,
        shadowColor: "black",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        backgroundColor: "white"
    },
    photo: {
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 3,
        width: p(100),
        height: p(100)
    }
});