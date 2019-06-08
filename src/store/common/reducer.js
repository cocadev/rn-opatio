import * as types from "./actionTypes";

const initialState = {
  me:{},
  userId:'',
  region: {
    countryCode:'',
    RegionName:'',
    flag:'http://',
    id:''
  },
  regions:[],
  user:{},
  err:'',
  token:'',
  loading:false,

  profile:{}
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {

    case types.FAILED:
    return {
      ...state,
      type: types.FAILED,
      loading:false,
      status: action.status
    }

    case types.LOADING:
    return {
      ...state,
      type: types.LOADING,
      loading:true,
      status: action.status
    }

    case types.GET_REGION:
    return {
      ...state,
      type: types.GET_REGION,
      loading:false,
      regions: action.data,
      status: action.status
    }

    case types.SET_REGION:
      return {
        ...state,
        type: types.SET_REGION,
        region: action.data,
        status: action.status
    }

    case types.POST_REGISTER:
      return {
        ...state,
        type: types.POST_REGISTER,
        loading:false,
        status: action.status
    }

    case types.POST_LOGIN:
      return {
        ...state,
        type: types.POST_LOGIN,
        loading:false,
        token:action.token,
        userId:action.userId,
        me:action.me,
        status: action.status
    }

    case types.REMOVE_TOKEN:
    return {
      ...state,
      type: types.REMOVE_TOKEN,
      token:action.token,
      status: action.status
  }

  case types.GET_PROFILE_BY_USER:
  return {
    ...state,
    type: types.GET_PROFILE_BY_USER,
    profile: action.data,
    loading:false,
    status: action.status
  }


    default:
      return state;
  }
  
}
