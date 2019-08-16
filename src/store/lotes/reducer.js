import * as types from "./actionTypes";
import _ from 'underscore'

const initialState = {
  allLotes: [],
  allLotesCount: 0,

  testLote: null,

  testPolygon: null,
  testNotes: null,
  testTasks: null,
  testCultivos: null

};

export default function job(state = initialState, action = {}) {

  switch (action.type) {

    case types.GET_ALL_LOTES:
    return {
      ...state,
      type: types.GET_ALL_LOTES,
      allLotes: action.data,
      allLotesCount: action.count,
      status: action.status
    }

    case types.ADD_LOTE:

      return {
        ...state,
        type: types.ADD_LOTE,
        testLote: action.mydata,
        status: action.status
      }

    case types.GET_GIS_FROM_CAMPOID:

      let newLotes = state.allLotes;
      var compo_index = _.findIndex(state.allLotes, { campo_id: action.campo_id });
      var field_index = _.findIndex(newLotes[compo_index].fields, { field_id: action.field_id });

      newLotes[compo_index].fields[field_index].polygon = action.data;

      // console.log('newLotesnewLotesnewLotes=== ====>', newLotes)

      return {
        ...state,
        type: types.GET_GIS_FROM_CAMPOID,
        allLotes: newLotes,
        testPolygon: action.data,
        status: action.status
      }

    case types.SEARCH_NOTES:

      return {
        ...state,
        type: types.SEARCH_NOTES,
        testNotes: action.data,
        status: action.status
      }

    case types.SEARCH_TASKS:

      return {
        ...state,
        type: types.SEARCH_TASKS,
        testTasks: action.data,
        status: action.status
      }

    default:
      return state;
  }
}
