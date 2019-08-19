import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { showMessage } from "react-native-flash-message";
import Cstyles from '../../common/c_style'
import * as ATOM from '../../components/Atoms'
import * as ICON from '../../components/Icons'
import * as actions from "../../store/lotes/actions"
import _ from 'underscore'
import api from '../../common/api'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as ImageManipulator from 'expo-image-manipulator'

class LotesEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: null,
            visibleModal: false
        }
    }

    componentDidMount() {

        const note_index = _(this.props.testNotes).chain().pluck('_id').flatten().findIndex({ week: this.props.week }).value();
        const field_index = _.findIndex(this.props.testNotes[note_index].notes, { note_id: this.props.note_id });
        const note = this.props.testNotes[note_index].notes[field_index];
        this.setState({
            title: note.title,
            image: note.file_url
        })

    }

    onUpdate = () => {
        const { title } = this.state
        this.setState({ isWaiting: true })

        api.updateNote(this.props.note_id, title, (err, res) => {
            this.setState({ isWaiting: false })

            console.log(' err-> ', err)
            console.log(' res-> ', res)

            if (err == null) {
                showMessage({
                    message: "Success updated task",
                    type: "success",
                    icon: "success",
                });
                this.props.actions.updateNote(this.props.week, this.props.note_id, res.success)
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
                                image: res,
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
                        image: res,
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
                                <Text style={{ fontSize: p(15)}}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={this._pickImage}>
                                <Text style={{ fontSize: p(15)}}>Images</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            { this.state.image && <Image source={{ uri: this.state.image}} style={styles.photo} />}
                        </View>
                        <View style={{ position: 'absolute', right: 5, bottom: 5}}>
                            <TouchableOpacity onPress={() => this.setState({ visibleModal: false })}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {

        // const data = this.props.navigation.state.params.data;
        const testLote = this.props.testLote
        console.log('**** image ****', this.state.image)

        return (
            <View style={Cstyles.container}>

                {this.state.isWaiting && <ATOM.Loading />}

                <View style={styles.header}>

                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image source={images.back} style={{ width: p(20), height: p(18) }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={[styles.vertical, { backgroundColor: colors.WHITE }]}
                            onPress={this.onUpdate}
                        >
                            <Text style={{ color: colors.BLACK, fontWeight: '700', fontSize: p(15) }}>{'GUARDAR'}</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView>

                    <View style={styles.textRow}>
                        <TextInput
                            style={styles.titleInput}
                            placeholder={'Note Title'}
                            placeholderTextColor={colors.GREY4}
                            onChangeText={(title) => this.setState({ title })}
                            value={this.state.title}
                        />
                        <TouchableOpacity onPress={() => this.setState({ visibleModal: true })}>
                            <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: colors.ORANGE }}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder={'Añadir descripción'}
                            placeholderTextColor={colors.GREY4}
                            multiline={true}
                            blurOnSubmit={false}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconMap />}
                        title={'Ubicación y coordenadas'}
                        note={'Puedes marcar en el mapa una ubicación específica para la tarea que estas creando:'}
                    />

                    <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', marginBottom: p(20) }}>
                        <Text style={styles.text5}>{'MARCAR EN EL MAPA'}</Text>
                        <View style={[styles.vertical, { marginTop: p(18), width: p(160), height: p(40) }]}>
                            <Text style={{ color: colors.WHITE, fontWeight: '700', fontSize: p(15) }}>{'USAR MI UBICACIÓN'}</Text>
                        </View>
                    </View>

                    <ATOM.Atom1
                        icon={<ICON.IconSquare />}
                        title={'En lote'}
                        note={`Lote ${testLote.name} - ${testLote.group}`}

                    />

                    <ATOM.Atom1
                        icon={<ICON.IconPin />}
                        title={'Archivos adjuntos'}
                        note={'0 Archivos'}
                    />

                    <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(20) }}>
                        <TouchableOpacity>
                            <Image
                                source={images.record}
                                style={{ width: p(77), height: p(77), marginBottom: p(12) }}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.text5, { position: 'absolute', right: p(32), top: p(12) }]}>{'BORRAR'}</Text>
                        <Text style={{ color: colors.GREY8, fontWeight: '400', fontSize: p(15) }}>{'Nota de voz 1:21 '}</Text>
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
        testNotes: state.lotes.testNotes
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(LotesEdit);

const styles = StyleSheet.create({
    text5: {
        color: colors.ORANGE,
        flex: 1,
        textAlign: 'right',
        fontWeight: '700',
        fontSize: p(16)
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        padding: p(30),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: p(7),
        alignItems: 'center'
    },
    vertical: {
        backgroundColor: colors.ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
    },
    header: {
        backgroundColor: colors.ORANGE,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        height: p(60),
        alignItems: 'center',
    },
    inputBox: {
        height: p(134),
        margin: p(30),
        textAlignVertical: 'top',
        backgroundColor: '#FFB661',
        borderRadius: p(5),
        fontSize: p(20),
        fontWeight: '500',
        padding: p(14),
        color: colors.GREY4
    },
    titleInput: {
        color: '#ffffff',
        fontSize: p(37),
        fontWeight: '400',
        marginVertical: p(8)
    },
    textRow: {
        backgroundColor: colors.ORANGE,
        padding: p(30),
        paddingBottom: p(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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