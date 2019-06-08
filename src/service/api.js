import Cache from "../utils/cache";
import * as config from "../config";
import UtilService from "../utils/utils";
import moment from 'moment'

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
      console.log('----', url)
      cb(error);
    }
  },
  async middleware(url, request, cb) {  
      this.fetchData(url, request, cb)
  },
  baseApi(sub_url, method, json_data, cb) {
    let request = ''
    if (sub_url.includes('student-dashboard')){
      request = {
        method,
        headers: {
          Accept: "application/json",
          Authorization: Cache.currentUser
            ? "bearer " + Cache.token
            : null,
        }
      };
    } else {
      request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: Cache.currentUser
            ? "bearer " + Cache.token
            : null,
        }
      };
    }
   
    if (method == "POST" || method == "PUT") {
      request["body"] = JSON.stringify(json_data);
    }else{
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

  login22222(ClientID, PhoneNumber, Password, cb) {
    Cache.PhoneNumber = PhoneNumber;
    Cache.Password = Password;
    Cache.clientID = ClientID;
    this.baseApi("/api/appLogin", "POST", { PhoneNumber, Password }, cb);
  },

  confirmOTP(PhoneNumber, OtpNumber, PushToken, cb) {
    this.baseApi(
      "/api/otpLogin",
      "POST",
      { PhoneNumber, OtpNumber, PushToken },
      (err, res) => {
        console.log('user', err, res)
        if (err == null) {
          Cache.currentUser = res;
          UtilService.saveLocalStringData("currentUser", JSON.stringify(res));
          UtilService.saveLocalStringData("client", Cache.clientID);
          cb(err, res);
          return;
        }
        cb(err, res);
      }
    );
  },

  logout() {
    UtilService.removeLocalObjectData("currentUser");
  },

  async uploadImage(uri, cb) {
    try {

      let formData = new FormData();
      formData.append('file', {
        uri,
        name: `photo.jpg`,
        type: `image/jpg`,
      });

      let response = await fetch(
        config.SERVICE_API_URL + "UpLoad/UploadProfileImage",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: "bearer " + Cache.token,
          },
          body: formData
        }
      );

      let status = response.status;
      let responseJson = await response.json();

      if (status == 200 || status == 201) {
        cb(null, responseJson.Value);
      } else {
        cb(responseJson.Message);
      }
    } catch (error) {
      cb(error);
    }
  },

  async baseUploadApi(sub_url, file){
    // console.log('baseUploadApi', file)
    if ( !Cache.hasInternetConnection ){
      return null;
    }
      let image = {
        uri: file,
        type: "image/jpeg",
        name: "file.jpeg"
      };
      try{
      let formData = new FormData();
      formData.append("file", image);
      let response = await fetch(
        config.SERVICE_API_URL + sub_url,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            "client":"c001"
          },
          body: formData
        }
      );
      let status = response.status;
      let responseJson = await response.json();
      // console.log('status',status, 'responseJson', responseJson)
      return {
        status,
        data:JSON.parse(responseJson.Result)
      }
      }catch(error){
        // console.log(error)
        return error
      }
  },

  async uploadAllData(cb){
    if ( Cache.locationHeader ){
      this.uploadLocations(async(err, res)=>{
        if ( err == null) {
          Cache.locationHeader = null
          Cache.locations = []
          await UtilService.removeLocalObjectData('locationHeader')
          await UtilService.removeLocalObjectData('locations')
        }
      })
    }
    if ( Cache.requestStack.length > 0 ){
      async.mapSeries(Cache.requestStack, async ({url, request}, cb)=>{
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
      }, async (error, results)=>{
        Cache.requestStack.splice(0, results.length)
        await UtilService.removeLocalObjectData('requests')
        if ( error != null ){
          await UtilService.saveLocalStringData('requests', JSON.stringify(Cache.requestStack))
        }
        cb(err, results)
      })
    }
  },

  getRegions() {
    this.baseApi(`/api/Region/GetRegions`, "GET", {}, '');
  },

  getDeliveries(term,Responsible, isSignOff, page, pageSize, from, to, cb) {
    this.baseApi( `/api/inventory/deliveryNotes?Responsible=${Responsible}&Query=${term}&IsSignOff=`+isSignOff
    +(page==null||pageSize==null?'':`&page=${page}&pageSize=${pageSize}`)
    +(from==null?'':`&FromDate=${from}`)
    +(to==null?'':`&ToDate=${to}`)+(isSignOff?'&SortField=CompleteTime&SortDirection=1':''), 
    "GET", {}, cb );
  },

  async postLocation(data, cb) {
    if (Cache.hasInternetConnection ){
      this.baseApi("/api/inventory/deliveryLocations", "POST", data, cb);
    }else{
      Cache.locationHeader = {
        DeliveryRouteID:data.DeliveryRouteID,
        DeliveryNoteID:data.DeliveryNoteID,
        UserID:data.UserID
      }
      await UtilService.removeLocalObjectData('locationHeader')
      await UtilService.saveLocalStringData('locationHeader', JSON.stringify(Cache.locations))
      Cache.locations.push({Long:data.Long, Lat:data.Lat, time:(new Date()).getTime()})
      await UtilService.removeLocalObjectData('locations')
      await UtilService.saveLocalStringData('locations', JSON.stringify(Cache.locations))
      cb(null)
    }
    
  },

  getAlerts(page, pageSize, cb) {
    this.baseApi(`/api/setting/events?page=${page}&pageSize=${pageSize}&SortDirection=-1`, "GET", {}, cb);
  },

  getSalesOrders(statuses,page,pageSize,term,startTime,endTime,cb) {
    this.baseApi( '/api/TransGuardHq/TransferRequestList?' 
    + 'term='+term
    + '&dateFrom=' + moment(startTime).format("YYYY-MM-DD" + ' 00:00:00')
    + '&dateTo=' + moment(endTime).format("YYYY-MM-DD" + ' 23:59:59')
    + '&statuses=' + statuses 
    + '&page=' + page 
    + '&pageSize=' + pageSize  
    , "GET", {}, cb );
  },

//=======================================================================================================================================================

  /////////////////////////
  //////// Account ////////
  /////////////////////////
  login(email, password, cb) {
    Cache.email = email;
    Cache.password = password;
    this.baseApi("loginUser", "POST", { email, password }, cb);
  },
  signup(fname, lname, country_id, college_id, email, password, gender, profile_picture, ip_address, university_id, username, cb){
    this.baseApi('registerUser', 'POST', { fname, lname, country_id, college_id, email, password, gender, profile_picture, ip_address, university_id, username }, cb)
  },

  /////////////////////////
  /////// wall ////////
  /////////////////////////
  // getWall(id, cb){ 
  //   this.baseApi('student-dashboard?user_id=' + id, 'GET', {}, cb) 
  // },

  /////////////////////////
  ///////// My Account //////////
  /////////////////////////
  getHomePageServices (cb){ 
    this.baseApi('getHomePageServices', 'GET', {}, cb) 
  },

  // createCustomer(UserID, Token, cb){
  //   this.baseApi('Payment/CreateCustomer', 'POST', { UserID, Token }, cb)
  // },
  // getCustomerByUserID (UserID, cb){ 
  //   this.baseApi('Payment/GetCustomerByUserID?UserID=' + UserID, 'GET', {}, cb) 
  // },

};
