import axios from "axios";
import Cookies from "js-cookie";
import { USER_TOKEN } from "../../utils/constant";

export default async (method) => {
  return new Promise((resolve, reject) => {
    callApi(method, resolve, reject);
  });
};

export async function callApi(method, resolve, reject) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };

  if (Cookies.get(USER_TOKEN)) {
    let token = Cookies.get(USER_TOKEN);
    headers.Authorization = `Bearer ${token}`;
  }

  let axiosData = {
    method: method.apiType,
    headers: headers,
    url: method.type,
  };

  if (method.apiType === "GET" || method.apiType === "DELETE") {
    axiosData.timeout = 10000;
  } else {
    if (method.isFile) {
      headers["Content-Type"] = "multipart/form-data";
      var formData = await getFormData(method.payload);
      axiosData.data = formData;
    } else {
      headers["Content-Type"] = "application/json";
      axiosData.data = JSON.stringify(method.payload);
    }
    axiosData.timeout = 20000;
  }

  try {
    let response = await axios(axiosData);
    checkResponse(response, resolve, reject);
  } catch (err) {
    let response = err.response;
    if (response) {
      checkResponse(response, resolve, reject);
    } else {
      reject(err.message ? { error: err.message } : { error: err.message });
      return;
    }
  }
}

function checkResponse(response, resolve, reject) {
  // console.log("RESPONSE STATUS >>>>> " + response.status);
  // console.log("RESPONSE >>>>> " + JSON.stringify(response.data));
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 204
  ) {
    //success
    resolve(response.data || {});
    return;
  } else if (response.status === 401) {
    // makeUserLogout();
    reject(response.data);
    return;
  } else if (response.status === 400) {
    reject(response.data);
    return;
  } else if (response.status === 500) {
    //internal server error
    reject({ err: "Something Went Wrong" });
    return;
  } else {
    reject(response);
    return;
  }
}

function getFormData(data) {
  let formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value) === true) {
      for (var i = 0; i < value.length; i++) {
        formData.append(`${key}`, value[i]);
      }
    } else {
      formData.append(`${key}`, value);
    }
  }
  return formData;
}
