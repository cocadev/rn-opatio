import Cache from "./cache";
import * as config from "./config";
// import UtilService from "./utils/utils";

module.exports = {
  async fetchData(url, request, cb) {
    try {
      let response = await fetch(url, request);
      let responseJson = await response.json()

      if (response.status == 200) {
        cb(null, responseJson);
      } else {
        cb(responseJson);
      }
    } catch (error) {
      // console.log('----', url)
      cb(error);
    }
  },
  async middleware(url, request, cb) {
    this.fetchData(url, request, cb)
  },
  baseApi(sub_url, method, json_data, cb) {
    let request = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: Cache.ACCESS_TOKEN
          ? "Bearer " + Cache.ACCESS_TOKEN
          : null,
        "Accept": "*/*",
      }
    };
    if (method == "POST" || method == "PUT") {
      request["body"] = JSON.stringify(json_data);
    } else {
      // sub_url += '&t='+(new Date()).getTime()
    }

    this.middleware(config.SERVICE_API_URL + sub_url, request, cb);
  },

  async init(cb) {
    //check if current user exists or not
    let user = await UtilService.getLocalStringData("currentUser");
    Cache.clientID = await UtilService.getLocalStringData("client");
    if (user == null) {
      cb("err");
    } else {
      Cache.currentUser = JSON.parse(user);

      let locationHeader = await UtilService.getLocalStringData('locationHeader')
      let locations = await UtilService.getLocalStringData('locations')

      Cache.locationHeader = JSON.parse(locationHeader)
      Cache.locations = JSON.parse(locations)
      cb(null);
    }
  },

  // login(ClientID, PhoneNumber, Password, cb) {
  //   Cache.PhoneNumber = PhoneNumber;
  //   Cache.Password = Password;
  //   Cache.clientID = ClientID;
  //   this.baseApi("/api/appLogin", "POST", { PhoneNumber, Password }, cb);
  // },

  logout() {
    UtilService.removeLocalObjectData("currentUser");
  },

  async uploadImage(uri, type, cb) {
    try {

      let formData = new FormData();
      formData.append('file', {
        uri,
        name: `photo.jpeg`,
        type: `image/jpeg`,
      });
      formData.append('type', type);

      let response = await fetch(
        config.SERVICE_API_URL + "media",
        {
          method: "POST",
          headers: {
            // Accept: "application/json",
            // "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjUxNDM3MzEsIm5iZiI6MTU2NTE0MzczMSwianRpIjoiMzRjOTg3MTYtZWNiMC00OWY2LWIzMmEtMTU2ZGM3MmE2MWMzIiwiZXhwIjoxNTk2Njc5NzMxLCJpZGVudGl0eSI6eyJpZCI6IjMzIiwiY29tcGFueV9pZCI6IjY3NDE1YTZjLWU4NDItMTFlOC05Yjk0LTEyYWQ2OWZlNGZmMCIsImVtYWlsIjoiZGVtb0BvcHRpYWdyby5jb20ifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.xLOg-55dltQAUxdDywmrU9d2l4L3z_QqS4PyIklWbvM",
          },
          body: formData
        }
      );


      let status = response.status;
      let responseJson = await response.json();

      if (status == 200 || status == 201) {
        cb(null, responseJson.success);
      } else {
        cb(responseJson.message);
      }
    } catch (error) {
      cb(error);
    }
  },

  // async uploadImage(file, cb) {
  //   // console.log('uploadImage',file)
  //   if ( !Cache.hasInternetConnection ){
  //     cb(null, '')
  //     return;
  //   }
  //   try {
  //     // let image = {
  //     //   uri: file,
  //     //   type: "image/jpeg",
  //     //   name: "file.jpeg"
  //     // };

  //     let formData = new FormData();
  //     formData.append("file", file);
  //     console.log(file)
  //     // console.log('uploadImage',file)
  //     let response = await fetch(
  //       config.SERVICE_API_URL + "/api/common/files/upload",
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "multipart/form-data",
  //           Authorization: "bearer " + Cache.currentUser["token"],
  //           client: Cache.clientID
  //         },
  //         body: formData
  //       }
  //     );
  //     let status = response.status;

  //     let responseJson = await response.json();
  //     if (status == 200 || status == 201) {
  //       cb(null, responseJson);
  //     } else {
  //       cb(responseJson.message);
  //     }
  //   } catch (error) {
  //     cb(error);
  //   }
  // },

  async baseUploadApi(sub_url, file) {
    // console.log('baseUploadApi', file)
    if (!Cache.hasInternetConnection) {
      return null;
    }
    let image = {
      uri: file,
      type: "image/jpeg",
      name: "file.jpeg"
    };
    try {
      let formData = new FormData();
      formData.append("file", image);
      let response = await fetch(
        config.SERVICE_API_URL + sub_url,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            "client": "c001"
          },
          body: formData
        }
      );
      let status = response.status;
      let responseJson = await response.json();
      // console.log('status',status, 'responseJson', responseJson)
      return {
        status,
        data: JSON.parse(responseJson.Result)
      }
    } catch (error) {
      // console.log(error)
      return error
    }
  },

  async uploadAllData(cb) {
    if (Cache.locationHeader) {
      this.uploadLocations(async (err, res) => {
        if (err == null) {
          Cache.locationHeader = null
          Cache.locations = []
          await UtilService.removeLocalObjectData('locationHeader')
          await UtilService.removeLocalObjectData('locations')
        }
      })
    }
    if (Cache.requestStack.length > 0) {
      async.mapSeries(Cache.requestStack, async ({ url, request }, cb) => {
        try {
          let response = await fetch(url, request);
          let responseJson = await response.json();
          if (response.status == 200) {
            cb(null, responseJson);
          } else {
            cb(responseJson);
          }
        } catch (error) {
          cb(error);
        }
      }, async (error, results) => {
        Cache.requestStack.splice(0, results.length)
        await UtilService.removeLocalObjectData('requests')
        if (error != null) {
          await UtilService.saveLocalStringData('requests', JSON.stringify(Cache.requestStack))
        }
        cb(err, results)
      })
    }
  },









  /////////////////////////
  /////////////////////////
  /////////////////////////
  /////////////////////////
  addJob(job_name, job_details, job_task, job_type, job_start, job_end, estimated_cost, rate, cb) {
    this.baseApi('addjob', 'POST', { job_name, job_details, job_task, job_ads_type: job_type, start_time: job_start, end_time: job_end, request_vacancy: estimated_cost, rate }, cb)
  },

  //////////////////////////////
  //////////////////////////////
  auth(email, password, cb) {
    this.baseApi('auth', 'POST', { email, password }, cb)
  },





  /////////////////////////////// Create Campo ///////////////////////////

  createCampo(nombre, cb) {
    this.baseApi(`campos`, 'POST', { nombre }, cb)
  },

  ////////////////////////////// Lotes //////////////////////
  getAllLotes(skip, cb) {
    this.baseApi(`campos?skip=${skip}&limit=10`, 'GET', {}, cb)
  },

  getLotesCamposByFieldId(field_id, cb) {
    this.baseApi('campos/gis/' + field_id, 'GET', {}, cb)
  },

  ///////////////////////////// GIS //////////////////////////
  createGIS(campo_id, name, color, polygons, cb) {
    this.baseApi('campos/' + campo_id + '/gis', 'POST', { name, color, polygons }, cb)
  },


  ///////////////////////////// Note //////////////////////////

  searchNotes(field_id, text, date_from, date_to, sort_by, cb) {
    this.baseApi(`campos/gis/${field_id}/notes/search`, 'POST', { text, date_from, date_to, sort_by }, cb)
  },

  updateNote(field_id, title, cb) {
    this.baseApi(`campos/gis/notes/${field_id}`, 'PUT', { title }, cb)
  },

  addNote(note_field_id, title, note, date, media_id, cb) {
    media_id && this.baseApi(`campos/gis/${note_field_id}/notes`, 'POST', { title, date, media_id, note, timeoffset: 3 }, cb)
    !media_id && this.baseApi(`campos/gis/${note_field_id}/notes`, 'POST', { title, date, note, timeoffset: 3 }, cb)
  },

  ///////////////////////////// Task //////////////////////////

  searchTasks(field_id, text, date_from, date_to, sort_by, cb) {
    this.baseApi(`campos/gis/${field_id}/tasks/search`, 'POST', { text, date_from, date_to, sort_by }, cb)
  },

  getOneTask(field_id, cb) {
    this.baseApi(`campos/gis/tasks/${field_id}`, 'GET', {}, cb)
  },

  updateTask(field_id, title, description, date_from, date_to, cb) {
    this.baseApi(`campos/gis/tasks/${field_id}`, 'PUT', { title, description, date_from, date_to }, cb)
  },

  changeFileTask(media_id, cb) {
    this.baseApi(`campos/gis/tasks/${media_id}`, 'PUT', { media_id }, cb)
  },

  addTask(task_field_id, title, date_from, date_to, description, media_id, geo_tag, assigned_to, supervised_by, cb) {
    media_id && this.baseApi(`campos/gis/${task_field_id}/tasks`, 'POST', { title, date_from, date_to, description, media_id, geo_tag, assigned_to, supervised_by }, cb)
    !media_id && this.baseApi(`campos/gis/${task_field_id}/tasks`, 'POST', { title, date_from, date_to, description, geo_tag, assigned_to, supervised_by }, cb)

  },

  getCamposNotas(field_id, text, date_from, date_to, sort_by, cb) {
    this.baseApi(`campos/gis/${field_id}/tasks/search`, 'POST', { text, date_from, date_to, sort_by }, cb)
  },

  ///////////////////////////// Crops //////////////////////////

  searchCrops(note_field_id, cb) {
    this.baseApi(`campos/gis/${note_field_id}/crops/search`, 'POST', {}, cb)
  },

  addCultivos(note_field_id, campaing, estival, invernal, color, cb) {
    this.baseApi(`campos/gis/${note_field_id}/crops`, 'POST', { campaing, estival, invernal, color }, cb)
  },


  //////////////////////////////////////////////////////////////////////




}