import * as types from "./actionTypes";
import axios from "axios";
import { BaseUrl } from "../../config";
import { Toast, Modal } from "antd-mobile-rn";
import { Actions } from "react-native-router-flux";
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

export function removeCategoryID() {
  return dispatch => {
    dispatch({
      type: types.REMOVE_CATEGORY_ID,
    });
  };
}

export function searchCategoryID(id) {
  return dispatch => {
    dispatch({
      type: types.SEARCH_CATEGORY_ID,
      searchCategoryID: id
    });
  };
}

export function setSearchHistory(data) {
  return dispatch => {
    dispatch({
      type: types.SET_SEARCH_HISTORY,
      searchHistory: data
    });
  };
}

// export const getAllJobCategories = () => {
//   return dispatch => {
//     dispatch({ type: types.LOADING });
//     axios
//       .get(BaseUrl + "Category/GetAllCategories", {})
//       .then(function(response) {
//         var data = response.data.Value;
//         dispatch({
//           type: types.GET_ALL_JOB_CATEGORIES,
//           data: data
//         });
//       })
//       .catch(function(error) {
//         console.error(error);
//       });
//   };
// };

export const getJobsByCategory = (token, CategoryID) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  return dispatch => {
    axios
      .get(
        BaseUrl +
          "Appointment/GetJobsByCategory?CategoryID=" +
          CategoryID +
          "&PageIndex=0",
        { headers: headers }
      )
      .then(function(response) {

        var data = response.data.Value;

        dispatch({
          type: types.GET_ALL_JOB_SEARCH,
          data: data
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
};

export const getServicesByCategory = (token, CategoryID) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  return dispatch => {
    axios
      .get(
        BaseUrl +
          "Appointment/GetServicesByCategory?CategoryID=" +
          CategoryID +
          "&PageIndex=0",
        { headers: headers }
      )
      .then(function(response) {

        var data = response.data.Value;

        dispatch({
          type: types.GET_ALL_SERVICES_SEARCH,
          data: data
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
};

/////////////////
// Search Jobs //
/////////////////
export const getAllJobs = (token, count) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return dispatch => {
    dispatch({ type: types.LOADING });
    axios
      .get(BaseUrl + "Appointment/GetAllJobs?PageIndex=0&PageSize=" + count , { headers: headers })
      .then(function(response) {
        var data = response.data.Value;
        dispatch({
          type: types.GET_ALL_JOBS,
          data: data
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
};

export const getAllServices = (token, count) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  return dispatch => {
    dispatch({ type: types.LOADING });
    axios
      .get(BaseUrl + "Appointment/GetAllServices?PageIndex=0&PageSize=" + count, { headers: headers })
      .then(function(response) {
        var data = response.data.Value;
        dispatch({
          type: types.GET_ALL_SERVICES,
          data: data
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
};

export const SearchAppointments = (data, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .post(BaseUrl + "Appointment/SearchAppointments", { PageIndex: 0, CategoryIDs: data.CategoryIDs, IsJob:data.IsJob, PageSize:100, Query:data.Query }, { headers: headers })
      .then(function(response) {
        var data = response.data.Value;
        dispatch({ type: types.POST_SEARCH_APPOINTMENTS, data: data });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export function setjob(data) {
  return dispatch => {
    dispatch({
      type: types.SET_JOB,
      data: data
    });
  };
}

export const setJobById = (Job_ID, token) => {
  console.log('hi Job_ID -->', Job_ID)

  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  return dispatch => {
    axios
      .get(
        BaseUrl +
          "Appointment/GetJobByID?ID=" +
           Job_ID,
          { headers: headers }
      )
      .then(function(response) {
        // console.log('hi responses -->', response)
        if(response.data.Success){
          dispatch({
            type: types.SET_JOB_BY_ID,
            data: response.data.Value
          });
        } else {
          dispatch({
            type: types.FAILED,
          });
        } 
      })
      .catch(function(error) {
        console.error(error);
        dispatch({
          type: types.FAILED,
        });
      });
  };
};

export function setQuery(data) {
  return dispatch => {
    dispatch({
      type: types.SET_QUERY,
      data: data
    });
  };
}



export const createJob = ( CategoryID, UserID, token, Title, Amount, Description, Tags, IsUrgent, Attachments ) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return dispatch => {
    axios
      .post(
        BaseUrl + "Appointment/CreateJob",
        { CategoryID, UserID, Title, Amount, Description, Tags, IsUrgent, Attachments },
        { headers: headers }
      )
      .then(function(response) {
        if (response.data.Success) {
          dispatch({
            type: types.CREATE_JOB
          });
          Modal.alert(
            "Job Posted!",
            "Job reference no: " + response.data.Value,
            [{ text: "Congratulations", onPress: () => Actions.pop("postjob") }]
          );
        } else {
          Toast.fail(" Sorry, your Job is rejected.");
          dispatch({
            type: types.FAILED
          });
        }
      });
  };
};

export const createService = ( CategoryID, UserID, token, Title, Amount, Description, Tags, IsUrgent, Attachments ) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return dispatch => {
    axios
      .post(
        BaseUrl + "Appointment/CreateService",
        { CategoryID, UserID, Title, Amount, Description, Tags, IsUrgent, Attachments },
        { headers: headers }
      )
      .then(function(response) {
        if (response.data.Success) {
          dispatch({
            type: types.CREATE_JOB
          });
          Modal.alert(
            "Service Posted!",
            "Service reference no: " + response.data.Value,
            [{ text: "Congratulations", onPress: () => Actions.pop("postjob") }]
          );
        } else {
          Toast.fail(" Sorry, your Service is rejected.");
          dispatch({
            type: types.FAILED
          });
        }
      });
  };
};

export const createOffer = (JobID, UserID, Amount, CurrencyCode, token) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return dispatch => {
    axios.post(
        BaseUrl + "Contract/CreateOffer",
        { JobID, UserID, Amount, CurrencyCode, token },
        { headers: headers }
      )
      .then(function(response) {
        if (response.data.Success) {
          Toast.success("Congratulations, your offer is created.");
          axios.get( BaseUrl + "Appointment/GetJobByID?ID=" + JobID, { headers: headers }
          ) .then(function(response) {
            if(response.data.Success){ 
              var mapping = _.find(response.data.Value.Offer, (u)=>{
                return u.UserID == UserID 
              })
              dispatch({
                type: types.CREATE_OFFER,
                data: response.data.Value,
                mapping:mapping
              });
            }})
        } else {
          Toast.fail(response.data.Message);
          dispatch({
            type: types.FAILED
          });
        }
      })
      .catch(function(error) {
        console.error(error);
        dispatch({
          type: types.FAILED,
        });
      });
  };
};

export const editOffer = (ID, UserID, Amount, CurrencyCode, token, Job_ID) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };
  return dispatch => {
    axios.post(
        BaseUrl + "Contract/EditOffer",
        { ID, UserID, Amount, CurrencyCode, token },
        { headers: headers }
      )
      .then(function(response) {

        if (response.data.Success) {
          Toast.success("Congratulations, your offer is updated.");
          axios.get( BaseUrl + "Appointment/GetJobByID?ID=" + Job_ID, { headers: headers }
          ) .then(function(response) {
            if(response.data.Success){ 
              var mapping = _.find(response.data.Value.Offer, (u)=>{
                return u.UserID == UserID 
              })
              dispatch({
                type: types.EDIT_OFFER,
                data: response.data.Value,
                mapping:mapping
              });
            }})
        } else {
          Toast.fail(response.data.Message);
          dispatch({
            type: types.FAILED
          });
        }
      })
      .catch(function(error) {
        console.error(error);
        dispatch({
          type: types.FAILED,
        });
      });
  };
};

export const getOffersByUser = (token, UserID) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  return dispatch => {
    axios .get(
        BaseUrl +
          "Contract/GetOffersByUser?UserID=" +
          UserID,
        { headers: headers }
      )
      .then(function(response) {

        var mapping = _.filter(response.data.Value, (u)=>{
          return u.JobUserID == UserID 
        })

        dispatch({
          type: types.GET_OFFERS_BY_USER,
          data: mapping
        });
      })
      .catch(function(error) {
        console.error(error);
        dispatch({
          type: types.FAILED,
        });
      });
  };
};

export const cancelOffer = (OfferID, UserID, token) => {
  var headers = { "Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios.get( BaseUrl + "Contract/CancelOffer?OfferID=" +  OfferID + "&UserID=" +  UserID, { headers: headers })
      .then(function(response) {
        if(response.data.Success){
          Toast.success('Cancel Offer Successfully')
          dispatch({ type: types.CANCEL_OFFER });
        } else {
          Toast.fail('Cancel Offer Rejected!')
          dispatch({ type: types.FAILED })}
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export const getJobByID = (Job_ID, UserID, token) => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  };

  return dispatch => {
    axios
      .get(
        BaseUrl +
          "Appointment/GetJobByID?ID=" +
          Job_ID,
        { headers: headers }
      )
      .then(function(response) {

        if(response.data.Success){
        
          var mapping = _.find(response.data.Value.Offer, (u)=>{
            return u.UserID == UserID 
          })

          dispatch({
            type: types.GET_OFFER_JOB_BY_ID,
            data: mapping
          });
        } else {
          dispatch({
            type: types.FAILED,
          });
        } 
      })
      .catch(function(error) {
        console.error(error);
        dispatch({
          type: types.FAILED,
        });
      });
  };
};

export function setJobHistory(data) {
  return dispatch => {
    dispatch({ 
      type: types.SET_JOB_HISTORY,
      job_history:data
    });
  };
}

export function setChatInfo(chatinfo) {

  return dispatch => {
    dispatch({ 
      type: types.SET_CHAT_INFO,
      chatinfo:chatinfo
    });
  };
}

export const GetJobsByUser = (UserID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .get(BaseUrl + "Appointment/GetJobsByUser?UserID=" + UserID, { headers: headers })
      .then(function(response) {
        var data = response.data.Value;
        dispatch({ type: types.GET_JOBS_BY_USER, data: data });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export const DeleteJob = (ID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .post(BaseUrl + "Appointment/DeleteJob", {ID},  { headers: headers })
      .then(function(response) {
        Toast.success("Congratulations, your offer is deleted.");
        Actions.pop('viewjob')

        var data = response.data.Value;
        dispatch({ type: types.DELETE_JOB, data: data });
      })
      .catch(function(error) {
        Toast.fail("This Job is deleted yet.");
        dispatch({ type: types.FAILED });
      });
  };
};

///////////////////////
// GetServicesByUser //
///////////////////////
export const GetServicesByUser = (UserID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .get(BaseUrl + "Appointment/GetServicesByUser?UserID=" + UserID, { headers: headers })
      .then(function(response) {
        var data = response.data.Value;

        dispatch({ type: types.GET_SERVICES_BY_USER, data: data });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export const DeleteService = (ID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .post(BaseUrl + "Appointment/DeleteJob", {ID},  { headers: headers })
      .then(function(response) {
        Toast.success("Congratulations, your Service is deleted.");
        Actions.pop('viewjob')
        Actions.pop('servicelisting')
        var data = response.data.Value;
        dispatch({ type: types.DELETE_SERVICE, data: data });
      })
      .catch(function(error) {
        Toast.fail("This Service is deleted yet.");
        dispatch({ type: types.FAILED });
      });
  };
};

//////////////////////////////////////////////////
// Favorite Create, Job, Service, User, FavUser //
//////////////////////////////////////////////////
export const CreateFavorite = (data, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .post(BaseUrl + "Appointment/CreateFavorite", {Flag:data.flag, IsJob:data.IsJob, JobID:data.JobID, UserID:data.UserID }, { headers: headers })
      .then(function(response) {
        Toast.success("Congratulations! Success");
        var data = response.data.Value;
        dispatch({ type: types.CREATE_FAVORITE, data: data });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export const GetFavoriteJobsByUser = (UserID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .get(BaseUrl + "Appointment/GetFavoriteJobsByUser?UserID=" + UserID, { headers: headers })
      .then(function(response) {
        dispatch({ type: types.GET_FAVORITE_JOBS_BY_USER, data: response.data.Value });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export const GetFavoriteServicesByUser = (UserID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .get(BaseUrl + "Appointment/GetFavoriteServicesByUser?UserID=" + UserID, { headers: headers })
      .then(function(response) {
        dispatch({ type: types.GET_FAVORITE_SERVICES_BY_USER, data: response.data.Value });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export const GetFavoriteUsersByUser = (UserID, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .get(BaseUrl + "User/GetFavoriteUsersByUser?UserID=" + UserID, { headers: headers })
      .then(function(response) {
        dispatch({ type: types.GET_FAVORITE_USERS_BY_USER, data: response.data.Value });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

export function FavUser(User) {
  return dispatch => {
    dispatch({ 
      type: types.FAV_USER,
      data:User
    });
  };
}

export const CreateFavoriteUser = ( UserID1, UserID2, token) => {
  var headers = {"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    axios .post(BaseUrl + "User/CreateFavorite", {Flag:true, UserID1:UserID1, UserID2:UserID2 }, { headers: headers })
      .then(function(response) {
        Toast.success("Congratulations, you favourited this User.");
        var data = response.data.Value;
        dispatch({ type: types.CREATE_FAVORITE_USER, data: data });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED });
      });
  };
};

//////////////
// Location //
//////////////
export const SearchLocation = (Text) => {
  return dispatch => {
    dispatch({
      type: types.LOADING,
      loading: true
    });
    axios.get(BaseUrl + "Location/SearchLocation?Text=" + Text, {})
         .then(function(response) {
          var data = response.data.Value;
          dispatch({
            type: types.GET_LOCATION,
            loading:false,
            data: data
          });
      })
      .catch(function(error) {
        dispatch({ type: types.FAILED,loading:false });
        console.error(error);
      });
  };
};

export function setLocation(data) {
  return dispatch => {
    dispatch({
      type: types.SET_LOCATION,
      data: data
    });
  };
}

//////////////////
// Image Upload //
//////////////////
export const uploadImage = (file,uri, token) => {

  let formData = new FormData();
  formData.append('file', {
    uri,
    name: `photo.jpg`,
    type: `image/jpg`,
  });
 
  var headers = {Accept: 'application/json',"Content-Type": "multipart/form-data", Authorization: "Bearer " + token };
  return dispatch => { dispatch({ type: types.LOADING });

    axios .post(BaseUrl + "UpLoad/UploadProfileImage", formData, { headers: headers })
      .then(function(response) {
        var data = response.data;
        dispatch({ type: types.UPLOAD_IMAGE, data:response.data.Value });
      })
      .catch(function(error) {
        console.log(error)
        dispatch({ type: types.FAILED });
      });
  };
};

export const editprofile = (data, token) => { 
  var headers = {Accept: 'application/json',"Content-Type": "application/json", Authorization: "Bearer " + token };
  return dispatch => {
    dispatch({ type: types.LOADING });
    axios .post(BaseUrl + "User/EditProfile", data, { headers: headers })
      .then(function(response) {
        Toast.info('Congratulations! Update Success')
        console.log('response ===>', response.data)

        Actions.pop('');
        Actions.pop('');

        dispatch({ type: types.SUCCESS });
      })
      .catch(function(error) {
        console.log(error)
        dispatch({ type: types.FAILED });
      });
  };
};

export function emptyChat() {
  return dispatch => {
    dispatch({ type: types.EMPTY_CHAT });
  };
}

export function setChat(chat) {
  return dispatch => {
    dispatch({ type: types.SET_CHAT, chat });
  };
}

export function setOffer(offer) {
  return dispatch => {
    dispatch({ type: types.SET_OFFER, offer });
  };
}

export function setSituation(situation) {
  return dispatch => {
    dispatch({ type: types.SET_SITUATION, situation });
  };
}