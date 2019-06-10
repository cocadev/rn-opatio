import * as types from "./actionTypes";

const initialState = {
  user:{},
  loading: false
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

    default:
      return state;
  }
  
}
