import * as types from "./actionTypes";
import _ from 'underscore'

const initialState = {
  allLotes: [],
  allLotesCount: 0,

  testLote: null,

  testPolygon: null,
  testNotes: null,
  testTasks: null,
  testCrops: null

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

    case types.ADD_STEP_LOTES:

      var lotes = state.allLotes

      _.filter(action.data, (u) => {
        console.log('* ~~~~~~~ creating ~~~~~~~ *', u)
        return lotes.push(u)
      })

      return {
        ...state,
        type: types.ADD_STEP_LOTES,
        allLotes: lotes,
        status: action.status
      }

    case types.CREATE_CAMPO:

      return {
        ...state,
        type: types.CREATE_CAMPO,
        status: action.status
      }


    case types.CREATE_GIS:

      let campo_id = action.data.campo_id
      let field = {
        "field_id": action.data.field_id,
        "ha": 100,
        "name": action.data.name,
      }

      let newLote = state.allLotes;
      var compo_index = _.findIndex(newLote, { campo_id: campo_id });
      newLote[compo_index].fields.push(field)

      return {
        ...state,
        type: types.CREATE_GIS,
        allLotes: newLote,
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

    case types.REMOVE_POLYGON:
      return {
        ...state,
        type: types.REMOVE_POLYGON,
        testPolygon: null,
        status: action.status
      }

    case types.REMOVE_LOTES:
      return {
        ...state,
        type: types.REMOVE_LOTES,
        allLotes: null,
        status: action.status
      }

    case types.SEARCH_NOTES:

      return {
        ...state,
        type: types.SEARCH_NOTES,
        testNotes: action.data,
        status: action.status
      }

    case types.REMOVE_NOTE_TASK_CROP:

      return {
        ...state,
        type: types.REMOVE_NOTE_TASK_CROP,
        testNotes: null,
        testTasks: null,
        testCrops: null,
        status: action.status
      }

    case types.ADD_NOTE:

      return {
        ...state,
        type: types.ADD_NOTE,
        // testNotes: action.data,
        status: action.status
      }

    case types.SEARCH_TASKS:

      return {
        ...state,
        type: types.SEARCH_TASKS,
        testTasks: action.data,
        status: action.status
      }

    case types.SEARCH_CROPS:

      // console.log( '^^^ My Test Crops ^^^', action.data)
      let sorted = _.sortBy(action.data, function(o) { return o.campaing; })

      return {
        ...state,
        type: types.SEARCH_CROPS,
        testCrops: sorted.reverse(),
        status: action.status
      }

    case types.GET_TASKS:

      return {
        ...state,
        type: types.GET_TASKS,
        testTasks: state.testTasks,
        status: action.status
      }

    case types.ADD_TASK:

      // let newTasks2 = state.testTasks;
      // newTasks2.push(action.data);

      return {
        ...state,
        type: types.ADD_TASK,
        // testTasks: newTasks2,
        status: action.status
      }

    case types.UPDATE_GIS_LOTE_TASK:

      let newTasks = state.testTasks;
      var task_index = _(state.testTasks).chain().pluck('_id').flatten().findIndex({ week: action.week }).value();
      var field_index = _.findIndex(newTasks[task_index].tasks, { task_id: action.id });

      newTasks[task_index].tasks[field_index] = action.updateData;

      return {
        ...state,
        type: types.UPDATE_GIS_LOTE_TASK,
        testTasks: newTasks,
        status: action.status
      }

    case types.UPDATE_GIS_LOTE_NOTE:

      let newNotes = state.testNotes;
      var note_index = _(state.testNotes).chain().pluck('_id').flatten().findIndex({ week: action.week }).value();
      var field_index = _.findIndex(newNotes[note_index].notes, { note_id: action.id });

      newNotes[note_index].notes[field_index] = action.updateData;

      return {
        ...state,
        type: types.UPDATE_GIS_LOTE_NOTE,
        testNotes: newNotes,
        status: action.status
      }

    default:
      return state;
  }
}
