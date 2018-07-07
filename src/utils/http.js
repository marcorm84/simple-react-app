import { API_HEADERS } from '../constants/config.js';

const http = {
  get: (url, include_token=true)=>{
    return fetch(url, {
      method: 'GET',
      headers: API_HEADERS,
    }).then((response)=>{
      if(response.ok){
        return response.json();
      } else {
        return Promise.reject({status: response.status});
      }
    }, (err)=>{
      return Promise.reject(err);
    })
  },
  put: (url, data = {}, include_token=true)=>{
    return fetch(url,{
      method: 'PUT',
      headers: API_HEADERS,
      body: JSON.stringify(data),
    }).then((response)=>{
      if(response.ok){
        return response.json();
      } else {
        return Promise.reject({status: response.status});
      }
    }, (err)=>{
      return Promise.reject(err);
    })
  },
  post: (url, data, include_token=true)=>{
    return fetch(url, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(data),
    }).then((response)=>{
      if(response.ok){
        return response.json();
      } else {
        return Promise.reject({status: response.status});
      }
    }, (err)=>{
      return Promise.reject(err);
    })
  },
  delete: (url, include_token=true)=>{
    return fetch(url, {
      method: 'DELETE',
      headers: API_HEADERS,
    }).then((response)=>{
      if(response.ok){
        return response.json();
      } else {
          return Promise.reject({status: response.status});
      }
    }, (err)=>{
      return Promise.reject(err);
    })
  }
};

export default http;
