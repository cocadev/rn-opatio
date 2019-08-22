import * as types from "./actionTypes";
import api from '../../common/api';
import { showMessage } from "react-native-flash-message";

export function getAllLotes(query) {
    return dispatch => {
        api.getAllLotes(query, (err, res) => {
            if (err == null) {
                let data = res.data
                let count = res.count;
                dispatch({
                    type: types.GET_ALL_LOTES,
                    data: data,
                    count: count
                });
            } else {

            }
        })
    }
}

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

export function searchNotes(query) {
    return dispatch => {
        api.searchNotes(query, (err, res) => {
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

export function searchTasks(query) {
    return dispatch => {
        api.searchTasks(query, (err, res) => {
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

            console.log('task_field_id = ', task_field_id)
            console.log('title = ', title)
            console.log('date_from = ', date_from)
            console.log('date_to = ', date_to)
            console.log('description = ', description)
            console.log('media_id = ', media_id)
            console.log('geo_tag = ', geo_tag)

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

