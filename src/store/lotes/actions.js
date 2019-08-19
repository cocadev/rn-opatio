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
    console.log('** * * * * * * ** ', data)
    return dispatch => {
        dispatch({
            type: types.UPDATE_GIS_LOTE_NOTE,
            updateData: data,
            week: week,
            id: field_id
        });
    }
}


