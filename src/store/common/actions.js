import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import { Toast } from 'antd-mobile-rn';
import {BaseUrl} from '../../config'

export function loading(i) {

  return dispatch => {
    dispatch({
      type: types.LOADING,
      data:i
    });
  }
}

export function setRegion(CountryCode, RegionName, flag, id) {

  return dispatch => {
    dispatch({
      type: types.SET_REGION,
      data: {
        countryCode: CountryCode,
        RegionName: RegionName,
        flag: flag,
        id: id
      }
    });
  }
}



export const getProfileByUser = (UserID, token) => {
  console.log('hi-------')

  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return dispatch => {
    dispatch({ type: types.LOADING });
    axios
      .get(BaseUrl + "Account/GetProfileByUser?UserID=" + UserID , { headers: headers })
      .then(function(response) {
        var data = response.data.Value;
        console.log('hi', data[0])
        dispatch({
          type: types.GET_PROFILE_BY_USER,
          data: data
        });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
        console.error(error);
      });
  };
};



export const getRegions = () => {
  return (dispatch) => {
    axios.get('http://www.meridians2.com/JGGDev/api/Region/GetRegions',
      {}).then(function (response) {

        var data = response.data.Value;

        dispatch({
          type: types.GET_REGION,
          data: data
        });

      }).catch(function (error) {
        dispatch({ type: types.FAILED });

        console.error(error)
      }) .catch(function(error) {
        dispatch({ type: types.FAILED });
        console.error(error);
      });
  }
};

export const userRegister = (Username, Password, Email, RegionID) => {

  return (dispatch) => {
    dispatch({type: types.LOADING })
    axios.post( BaseUrl + 'Account/Register', { Username, Password, Email, RegionID }).then(function (response) {
      console.log('my data', response.data)
      if (response.data.Value.User){
        Toast.success('Register Success!')
        Actions.pop()
        console.log('~~~~~ @ ~~~~~~', response.data)
        dispatch({
         type: types.POST_REGISTER,
       })
       } else {
         Toast.fail('Fail')
         dispatch({ type: types.FAILED });
        }} 
    ) .catch(function(error) {
      dispatch({ type: types.FAILED });
      console.error(error);
    });}
};

export const userLogin = (Username, Password) => {
  return (dispatch) => {
    dispatch({type: types.LOADING });
    axios.post( BaseUrl + 'Account/Login', { Username:Username, Password:Password }).then(function (response) {
        if (response.data.Success){
         Toast.success('Login Success!')
         Actions.main()
         dispatch({
          type: types.POST_LOGIN,
          userId: response.data.Value.Id,
          me:response.data.Value,
          token:response.data.APIToken.access_token
        });

        } else {
          Toast.fail('Invalid Login Attempt!')
          dispatch({
            type: types.FAILED,
          });
        }
      } 
    ) .catch(function(error) {
      dispatch({ type: types.FAILED });
      console.error(error);
    });}
};

export function removeToken() {

  return dispatch => {
    dispatch({
      type: types.REMOVE_TOKEN,
      token: null
    });
  }
}
