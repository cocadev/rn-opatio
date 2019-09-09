import * as types from "./actionTypes";
import api from '../../common/api';
import { showMessage } from "react-native-flash-message";

export const getAllLotes = (query) =>
    dispatch =>
        new Promise(function (resolve, reject) {

            api.getAllLotes(query, (err, res) => {
                if (err == null) {
                    let data = res.data
                    let count = res.count;
                    dispatch({
                        type: types.GET_ALL_LOTES,
                        data: data,
                        count: count
                    });
                    resolve(count)
                } else {
                    reject(err)
                }
            })
        })

export const addStepLotes = (query) =>
    dispatch =>
        new Promise(function (resolve, reject) {

            api.getAllLotes(query, (err, res) => {

                if (err == null) {
                    let data = res.data
                    dispatch({
                        type: types.ADD_STEP_LOTES,
                        data: data,
                    });
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })

export const createCampo = (title) =>

    dispatch =>
        new Promise(function (resolve, reject) {

            api.createCampo(title, (res, err) => {
                if (err == null) {

                    console.log('***** res  ********', res)

                    let data = res.data

                    showMessage({
                        message: "Success",
                        description: "Campo created Successfully",
                        type: "success",
                        icon: "success",
                    });

                    dispatch({
                        type: types.CREATE_CAMPO,
                        data: data
                    });
                    resolve(data)
                } else {
                    console.log('***** err!!! ********', err)
                    reject(err)
                    showMessage({
                        message: "Fail",
                        description: "Campo created Fail",
                        type: "danger",
                        icon: "danger",
                    });
                }
            })
        })



export function addLote(id, name, size, group) {
    return dispatch => {
        dispatch({
            type: types.ADD_LOTE,
            mydata: {
                id, id,
                name: name,
                size: size,
                group: group
            }
        });
    }
}

export function removePolygon() {
    return dispatch => {
        dispatch({
            type: types.REMOVE_POLYGON,
        });
    }
}

export function removeLotes() {
    return dispatch => {
        dispatch({
            type: types.REMOVE_LOTES,
        });
    }
}


export function getGisFromCampoId(campo_id, field_id) {

    return dispatch => {
        api.getLotesCamposByFieldId(field_id, (err, res) => {
            if (err == null) {
                let data = res.data.polygons.coordinates
                dispatch({
                    type: types.GET_GIS_FROM_CAMPOID,
                    data: data,
                    campo_id: campo_id,
                    field_id: field_id,
                });
            } else {

            }
        })
    }
}

export function searchNotes(query, text, date_from, date_to, sort_by) {

    console.log(' search notes =>', query, text, date_from, date_to, sort_by)

    return dispatch => {
        api.searchNotes(query, text, date_from, date_to, sort_by, (err, res) => {
            if (err == null) {
                let data = res.data
                dispatch({
                    type: types.SEARCH_NOTES,
                    data: data,
                });
            } else {

            }
        })
    }
}

export function searchTasks(query, search, startDate_note, endDate_note, sort_by) {
    return dispatch => {
        api.searchTasks(query, search, startDate_note, endDate_note, sort_by, (err, res) => {
            if (err == null) {
                let data = res.data
                dispatch({
                    type: types.SEARCH_TASKS,
                    data: data,
                });
            } else {

            }
        })
    }
}

export function searchCrops(query) {
    return dispatch => {
        api.searchCrops(query, (res, err) => {

            if (err == null) {
                let data = res.data
                dispatch({
                    type: types.SEARCH_CROPS,
                    data: data,
                });
            } else {

            }
        })
    }
}

export function getTasks() {
    return dispatch => {
        dispatch({
            type: types.GET_TASKS,
        });
    }
}

export const updateTask = (week, field_id, data) => {
    return dispatch => {
        dispatch({
            type: types.UPDATE_GIS_LOTE_TASK,
            updateData: data,
            week: week,
            id: field_id
        });
    }
}

export const removeNoteTaskCrop = () => {
    return dispatch => {
        dispatch({
            type: types.REMOVE_NOTE_TASK_CROP,
        });
    }
}



export const updateNote = (week, field_id, data) => {
    return dispatch => {
        dispatch({
            type: types.UPDATE_GIS_LOTE_NOTE,
            updateData: data,
            week: week,
            id: field_id
        });
    }
}

export const addCultivos = (x, y, z, i, j) =>
    dispatch =>
        new Promise(function (resolve, reject) {
            api.addCultivos(x, parseInt(y), z, i, j, (res, err) => {
                if (err == null) {
                    let data = res.success
                    dispatch({
                        type: types.ADD_CULTIVOS,
                        data: data,
                    });
                    resolve(res.success)
                } else {
                    reject(err)
                }
            })
        }
        )

export const addTask = (task_field_id, title, date_from, date_to, description, lat, lng, media_id, assigned_to, supervised_by) =>
    dispatch =>
        new Promise(function (resolve, reject) {

            let geo_tag = {
                "type": "Point",
                "coordinates": [
                    parseFloat(lat), parseFloat(lng)
                ]
            }

            api.addTask(task_field_id, title, date_from, date_to, description, media_id, geo_tag, assigned_to, supervised_by, (res, err) => {

                console.log('res = ', res)
                console.log('err = ', err)

                if (err == null) {
                    let data = res.success
                    dispatch({
                        type: types.ADD_TASK,
                        data: data,
                    });
                    showMessage({
                        message: "Correctly created task",
                        type: "success",
                        icon: "success",
                    });
                    resolve(res.success)
                } else {
                    reject(err)
                    showMessage({
                        message: "Failed created task",
                        type: "success",
                        icon: "success",
                    });
                }
            })
        }
        )

export const addNote = (note_field_id, title, note, date, media_id) =>
    dispatch =>
        new Promise(function (resolve, reject) {



            api.addNote(note_field_id, title, note, date, media_id, (res, err) => {

                console.log('res = ', res)
                console.log('err = ', err)
                console.log('title = ', title)
                console.log('note_field_id = ', note_field_id)

                if (res && !res.errors) {
                    let data = res.success
                    dispatch({
                        type: types.ADD_NOTE,
                        data: data,
                    });
                    showMessage({
                        message: "Correctly created task",
                        type: "success",
                        icon: "success",
                    });
                    resolve(res.success)
                } else {
                    reject(err)
                    showMessage({
                        message: "Error al guardar la Nota",
                        description: "El lote no pertenece a esta empresa.",
                        type: "danger",
                        icon: "danger",
                    });
                }
            })
        }
        )

