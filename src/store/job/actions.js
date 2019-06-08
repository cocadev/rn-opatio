import * as types from "./actionTypes";
import axios from "axios";
import { BaseUrl } from "../../config";
import _ from 'underscore'

export function stopLoading() {
  return dispatch => {
    dispatch({
      type: types.STOP_LOADING,
      data:false
    });
  };
}

export function setJobType(data) {
  return dispatch => {
    dispatch({
      type: types.SET_JOB_TYPE,
      job_type: data
    });
  };
}

//////////////
// category //
//////////////
export function setCategory(category) {
  return dispatch => {
    dispatch({
      type: types.SET_CATEGORY,
      category: category
    });
  };
}

export function setCategoryID(data) {
  return dispatch => {
    dispatch({
      type: types.SET_CATEGORY_ID,
      data:data
    });
  };
}
