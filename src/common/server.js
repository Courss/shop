import axios from 'axios'

let http = axios.create({
    baseURL: 'http://localhost:3007/',
    withCredentials: false, //设置跨域，不需要设置为false即可
    transformRequest: [function (data) {
      let newData = '';
      for (let k in data) {
        if (data.hasOwnProperty(k) === true) {
          newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
        }
      }
      return newData;
    }]
  });

   http.interceptors.request.use(config=>{
     if(localStorage.getItem("token")){
      const token=localStorage.getItem("token").replace(/\"/g, "") 
      if(token){
       config.headers["Authorization"]="Bearer "+token
     }
     }
     
     if(config.method==='post'){
       config.headers['Content-Type']='application/x-www-form-urlencoded;charset=utf-8'
     }
     return config
   });
  
  function apiAxios(method, url, params) {
    return new Promise((resolve,reject)=>{
      http({
      method: method,
      url: url,
      data: method === 'POST'? params : null,
      params: method === 'GET'? params : null,
    }).then(res => {
      resolve(res);
    }).catch(function (err) {
     console.log(err);
    })
    })
  }
  
  export default {
    get: function (url, params) {
      return apiAxios('GET', url, params)
    },
    post: function (url, params) {
      return apiAxios('POST', url, params)
    },
  }