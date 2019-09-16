import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { images } from '../../../common/images'
import { p } from '../../../common/normalize'
import { colors } from '../../../common/colors'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Actions } from 'react-native-router-flux';
import Cstyles from '../../../common/c_style'
import DatePicker from '../../../components/datePicker';
import UtilService from '../../../common/utils';
import api from '../../../common/api'
import text from '../../../common/text';
import ValidationService from '../../../common/validation';
import * as HEADERS from '../../../components/Headers'
import * as ATOM from '../../../components/Atoms'
import * as ICON from '../../../components/Icons'
import * as actions from "../../../store/lotes/actions";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as ImageManipulator from 'expo-image-manipulator'
import _ from 'underscore'
import { EvilIcons } from '@expo/vector-icons';


class AddNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            date: UtilService.getDatebyTMDB(new Date()),
            visibleModal: false,
            image: null,
            image_media: [],
            image_urls: [],
            media_id: null,
            note: '',
            campo: '',
            field: '',
            campo_id: null
        }
    }

    dateCheck = (x) => {
        this.setState({ date: UtilService.getDatebyTMDB(x) })
    }

    takePicture = async () => {

        this.setState({ visibleModal: false })

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

                    api.uploadImage(manipResult.uri, 'notes', (err, res) => {

                        var joined_media = this.state.image_media.concat(res.media_id);
                        var joined_urls = this.state.image_urls.concat(res.url);

                        if (err == null) {
                            this.setState({
                                image: res.url,
                                media_id: res.media_id,
                                image_media: joined_media,
                                image_urls: joined_urls
                            });
                        }
                    })
                }
            }
        }
    }

    _pickImage = async () => {

        this.setState({ visibleModal: false })

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);
        this.setState({ file: result.uri })

        if (!result.cancelled) {
            api.uploadImage(result.uri, 'notes', (err, res) => {

                var joined_media = this.state.image_media.concat(res.media_id);
                var joined_urls = this.state.image_urls.concat(res.url);

                if (err == null) {
                    this.setState({
                        image: res.url,
                        media_id: res.media_id,
                        image_media: joined_media,
                        image_urls: joined_urls
                    });
                }
            })
        }
    };

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
                        <View style={{ position: 'absolute', right: 5, bottom: 5 }}>
                            <TouchableOpacity onPress={() => this.setState({ visibleModal: false })}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    onUpdate = () => {
        const { title, date, image_media, note, campo_id } = this.state

        if (!ValidationService.addNote(title, note, date, image_media, campo_id)) {
            return false
        }

        this.props.actions.addNote(campo_id, title, note, date, image_media)
            .then((res => {
                Actions.pop()
            }))
            .catch(e => console.log('** e **', e))
    }

    render() {

        const { title, date, isWaiting, note, image, field, campo, image_media, image_urls } = this.state;
        const enlote = field + '-' + campo

        return (
            <View style={Cstyles.container}>

                {isWaiting && <ATOM.Loading />}

                <HEADERS.GUARDAR back={colors.ORANGE} onClick={this.onUpdate} />

                <ScrollView>

                    <View style={styles.textRow}>
                        <TextInput
                            style={styles.titleInput}
                            placeholder={'Título Nota'}
                            onChangeText={(title) => this.setState({ title })}
                            value={title}
                        />
                        <TouchableOpacity onPress={() => this.setState({ visibleModal: true })}>
                            <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal style={{ backgroundColor: colors.ORANGE, flexDirection: 'row' }}>
                        {image_urls && 
                          image_urls.map((item, index) => 
                          <View key={index} style={{ position: 'relative', backgroundColor: 'transparent' }}>
                            <TouchableOpacity 
                                style={styles.close}
                                onPress={()=> {
                                    this.setState({
                                        image_urls: image_urls.filter((_, i) => i !== index),
                                        image_media: image_media.filter((_, i) => i !== index)
                                    });
                                }}
                            >
                               <EvilIcons name={'close-o'} size={p(25)} color={colors.ORANGE} />
                            </TouchableOpacity>
                            <View style={{ zIndex: -12}}>
                             <Image source={{ uri: item }} style={styles.img} />
                            </View>
                          </View> )}
                    </ScrollView>

                    <ATOM.Atom1
                        icon={<ICON.IconSquare />}
                        title={'En lote'}
                        note={field && campo && enlote}
                        right={
                            <TouchableOpacity
                                onPress={() => Actions.checkLote({
                                    update: (field_name, field_id, lote_name) => {
                                        this.setState({ field: field_name, campo: lote_name, campo_id: field_id })
                                    }
                                })}
                            >
                                <Text style={text.t_15_600_orange}>Editar</Text>
                            </TouchableOpacity>
                        }
                    />

                    <View style={styles.item}>
                        <ICON.IconMember />
                        <View style={{ marginLeft: p(20) }}>
                            <Text style={text.t_16_500_00}>{'Nota'}</Text>
                            <TextInput
                                style={styles.itemInput}
                                onChangeText={(note) => this.setState({ note })}
                                value={note}
                            />
                        </View>
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconCalendarX />}
                        title={'Fecha'}
                        note={date}
                        right={
                            date && <DatePicker date={date} onClick={(x) => this.dateCheck(x)} color={colors.ORANGE} />
                        }
                    />


                    {/* <View style={{ alignItems: 'center', backgroundColor: colors.WHITE, paddingBottom: p(20) }}>
                        <BTN.BtnNormal title={'SAVE'} back={colors.BLUE2} onClick={()=>this.add()} />
                    </View> */}
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
)(AddNotes);

const styles = StyleSheet.create({
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(37)
    },
    text5: {
        color: colors.ORANGE,
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
        backgroundColor: colors.ORANGE,
        padding: p(30),
        paddingBottom: p(20),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titleInput: {
        color: '#ffffff',
        width: p(260),
        paddingLeft: p(8),
        fontSize: p(30),
        fontWeight: '400',
        marginVertical: p(8),
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5
    },
    itemInput: {
        fontSize: p(16),
        fontWeight: '400',
        marginVertical: p(2),
        borderColor: 'grey',
        width: p(220),
        paddingLeft: p(4),
        borderWidth: 1,
        borderRadius: 5
    },
    indicatorContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0,0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    indicator: {
        width: p(140),
        height: p(100),
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
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        paddingLeft: p(30),
        paddingRight: p(20),
        paddingVertical: p(20),
        alignItems: 'center',
        borderTopColor: colors.GREY3,
        borderTopWidth: p(7)
    },
    img: {
        marginBottom: p(20),
        alignSelf: 'center',
        width: p(120),
        height: p(120),
        borderRadius: p(20),
        marginHorizontal: p(12),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        zIndex: 0
    },
    close: {
        position: 'absolute',
        // backgroundColor: 'red',
        right: p(12),
        top: p(3),
        zIndex: 1,
    }
});