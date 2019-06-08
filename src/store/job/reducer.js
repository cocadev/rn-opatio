import * as types from "./actionTypes";
import _ from 'underscore'


const initialState = {

  /////////////
  // loading //
  /////////////
  loading:false,

  //////////////
  // category //
  //////////////
  categories:[],
  category:{},
  

  //////////////
  //  search  //
  //////////////
  searchCategoryID:[],
  searchQuery:'',
  searchArea:[],
  searchTags:[],
  searchHistory:[], 


  
  job:{},
  allservices:[],
  alljobs:[],
  searchjobs:[],

  chat: [],
  offer: 0,
  situation:null,
  job_type:'job',

  briefcase:[],
  chatinfo:{},

  job_history:{
    status:0,
    create_offer:0,
  },
  offer_json:{},
  matched_offer:{},
  matched_offer_id:'',
  loading:false,

  ////////////////////////
  //  Get Job, Service  //
  ////////////////////////
  getJobsByUser:[],
  getServicesByUser:[],


  //////////////////////////////////////////////
  //  Favourite Job, Service, User -> favuser //
  //////////////////////////////////////////////
  getFavoriteJobsByUser:[],
  getFavoriteServicesByUser:[],
  getFavoriteUsersByUser:[],
  favuser:{},

  //////////////////////
  //  SearchLocation  //
  //////////////////////
  location:null,
  locations:[],
  uploadimage:'',
};

export default function job(state = initialState, action = {}) {
  switch (action.type) {

    //Loading...

    case types.FAILED:
    return {
      ...state,
      type: types.LOADING,
      loading:false,
    }

    case types.LOADING:
    return {
      ...state,
      type: types.LOADING,
      loading:true,
    }

    case types.SUCCESS:
    return {
      ...state,
      type: types.SUCCESS,
      loading:false,
    }

    case types.STOP_LOADING:
    return {
      ...state,
      type: types.STOP_LOADING,
      loading:false,
    }

    case types.GET_ALL_JOB_CATEGORIES:
    return {
      ...state,
      type: types.GET_ALL_JOB_CATEGORIES,
      categories: action.data,
      loading:false,
      status: action.status
    }

    case types.GET_ALL_SERVICES_SEARCH:
    case types.GET_ALL_JOB_SEARCH:
    return {
      ...state,
      type: types.GET_ALL_JOB_SEARCH,
      searchjobs: action.data,
      status: action.status,
      loading:false,
    }

    case types.POST_SEARCH_APPOINTMENTS:
    return {
      ...state,
      type: types.POST_SEARCH_APPOINTMENTS,
      searchjobs: action.data,
      status: action.status,
      loading:false,
    }

    case types.SET_QUERY:
    return {
      ...state,
      type: types.SET_QUERY,
      searchQuery: action.data,
      status: action.status,
    }

    case types.REMOVE_CATEGORY_ID:
    return {
      ...state,
      type: types.REMOVE_CATEGORY_ID,
      searchHistory: [],
      status: action.status,
    }

    case types.SET_SEARCH_HISTORY:
     state.searchHistory.push(action.searchHistory)
      evens = _.filter(state.searchHistory, (u)=>{
        return u != undefined
      })
     return {
       ...state,
       type: types.SET_SEARCH_HISTORY,
       searchHistory: evens,
       status: action.status,
       loading:false,
     }

    //////////////////
    //// Category //// 
    //////////////////

    case types.SET_CATEGORY:
    return {
      ...state,
      type: types.SET_CATEGORY,
      category: action.category,
      status: action.status,
      loading:false,
    }

    case types.SEARCH_CATEGORY_ID:

      var mapping = _.find(state.searchCategoryID, (u)=>{
        return u == action.searchCategoryID 
      })

      var evens=[]
      if(mapping){
        evens = _.filter(state.searchCategoryID, (u)=>{
          return u != action.searchCategoryID 
        })
        return {
          ...state,
          type: types.SEARCH_CATEGORY_ID,
          searchCategoryID: evens,
          status: action.status
      }

      } else {
        state.searchCategoryID.push(action.searchCategoryID)
        evens = _.filter(state.searchCategoryID, (u)=>{
          return u != undefined
        })
        return {
          ...state,
          type: types.SEARCH_CATEGORY_ID,
          searchCategoryID: evens,
          status: action.status
      }}

    case types.GET_ALL_JOBS:
    return {
      ...state,
      type: types.GET_ALL_JOBS,
      loading:false,
      alljobs: action.data,
      status: action.status
    }

    case types.GET_ALL_SERVICES:
    return {
      ...state,
      type: types.GET_ALL_SERVICES,
      loading:false,
      allservices: action.data,
      status: action.status
    }

    case types.SET_JOB:
    return {
      ...state,
      type: types.SET_JOB,
      job: action.data,
      status: action.status,
    }

    case types.SET_JOB_BY_ID:
    return {
      ...state,
      type: types.SET_JOB_BY_ID,
      job: action.data,
      status: action.status,
    }

    case types.CREATE_JOB:
    return {
      ...state,
      type: types.CREATE_JOB,
      status: action.status,
      loading:false,
    }

    case types.SET_JOB_TYPE:
    return {
      ...state,
      type: types.SET_JOB_TYPE,
      job_type: action.job_type,
      status: action.status
    }

    case types.CANCEL_OFFER:
    return {
      ...state,
      type: types.CANCEL_OFFER,
      loading:false,
      matched_offer:null,
      status: action.status
    }
    
    case types.CREATE_OFFER:
    return {
      ...state,
      type: types.CREATE_OFFER,
      loading:false,
      matched_offer:action.mapping,
      status: action.status
    }

    case types.EDIT_OFFER:
    return {
      ...state,
      type: types.EDIT_OFFER,
      loading:false,
      matched_offer:action.mapping,
      status: action.status
    }

    case types.GET_OFFER_JOB_BY_ID:
    return {
      ...state,
      type: types.GET_OFFER_JOB_BY_ID,
      matched_offer:action.data,
      status: action.status,
      loading:false,
    }

    case types.SET_JOB_HISTORY:
    return {
      ...state,
      type: types.SET_JOB_HISTORY,
      job_history:action.job_history,
      status: action.status
    }

    case types.GET_JOBS_BY_USER:
    return {
      ...state,
      type: types.GET_JOBS_BY_USER,
      getJobsByUser: action.data,
      status: action.status,
      loading:false,
    }

    case types.GET_SERVICES_BY_USER:
    return {
      ...state,
      type: types.GET_SERVICES_BY_USER,
      getServicesByUser: action.data,
      status: action.status,
      loading:false,
    }

    ///////////////////////////////////
    //Favourite job and service, user//
    ///////////////////////////////////

    case types.GET_FAVORITE_JOBS_BY_USER:
    return {
      ...state,
      type: types.GET_FAVORITE_JOBS_BY_USER,
      getFavoriteJobsByUser: action.data,
      status: action.status,
      loading:false,
    }

    case types.GET_FAVORITE_SERVICES_BY_USER:
    return {
      ...state,
      type: types.GET_FAVORITE_SERVICES_BY_USER,
      getFavoriteServicesByUser: action.data,
      status: action.status,
      loading:false,
    }

    case types.GET_FAVORITE_USERS_BY_USER:
    return {
      ...state,
      type: types.GET_FAVORITE_USERS_BY_USER,
      getFavoriteUsersByUser: action.data,
      status: action.status,
      loading:false,
    }

    case types.FAV_USER:
    return {
      ...state,
      type: types.FAV_USER,
      favuser: action.data,
      status: action.status,
    }

    ////////////
    //location//
    ////////////
    case types.GET_LOCATION:
    return {
      ...state,
      type: types.GET_LOCATION,
      locations: action.data,
      loading:false,
      status: action.status
    }

    case types.SET_LOCATION:
    return {
      ...state,
      type: types.SET_LOCATION,
      location: action.data,
      status: action.status
    }

    ////////////
    // image  //
    ////////////
    case types.UPLOAD_IMAGE:
    return {
      ...state,
      type: types.UPLOAD_IMAGE,
      uploadimage: action.data,
      loading:false,
      status: action.status
    }

     case types.SET_CHAT:
     state.chat.push(action.chat)

      return {
        ...state,
        type: types.SET_CHAT,
        chat: state.chat,
        status: action.status,
        loading:false,
      }

      case types.EMPTY_CHAT:
      return {
        ...state,
        type: types.EMPTY_CHAT,
        chat: [],
        status: action.status
      }

      case types.SET_CATEGORY_ID:
      return {
        ...state,
        type: types.SET_CATEGORY_ID,
        searchCategoryID: action.data,
        status: action.status
      }

    //Briefcase
    case types.GET_OFFERS_BY_USER:

    // var mapping = _.find(state.mappings, (u)=>{
    //   return u.UserID == action.data.UserID
    // })

    return {
      ...state,
      type: types.GET_ALL_SERVICES,
      briefcase: action.data,
      status: action.status,
      loading:false,
    }

    //chat 

    case types.SET_CHAT_INFO:

      return {
        ...state,
        type: types.SET_CHAT_INFO,
        chatinfo: action.chatinfo,
        status: action.status
      }











    case types.SET_CHAT:

      state.chat.push(action.chat)

      return {
        ...state,
        type: types.SET_CHAT,
        chat: state.chat,
        status: action.status
      }

    case types.SET_OFFER:

      return {
        ...state,
        type: types.SET_OFFER,
        offer: action.offer,
        status: action.status
      }

    case types.SET_SITUATION:

      console.log('my reducer', action.situation)
      
      return {
        ...state,
        type: types.SET_SITUATION,
        situation: action.situation,
        status: action.status
      }

    default:
      return state;
  }
}
