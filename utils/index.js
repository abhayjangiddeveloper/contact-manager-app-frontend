import Cookies from "js-cookie";
import { USER_TOKEN } from "./constant";
import store from "../redux/store";
import {
  loginUser,
  logoutUser,
} from "../redux/slice/authenticationSlice/authenticationSlice";

//Get Error Message
export function getErrorMessage(data) {
  let returnError = [];
  if (typeof data === "string") return data;
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      let errorValue = "";
      for (const [key, value] of Object.entries(data[i])) {
        errorValue += `${key.toUpperCase()}: ${value} `;
      }
      returnError.push(errorValue + "|  ");
      errorValue = "";
    }
    return returnError;
  } else {
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const element = `${key.toUpperCase()}: ${value[i]}`;
          return element;
        }
      } else return `${key.toUpperCase()}: ${value}`;
    }
  }
}

// login user
export const makeUserLogin = (res) => {
  store.dispatch(loginUser());
  Cookies.set(USER_TOKEN, res.accessToken);
};

// logout user
export const makeUserLogout = () => {
  store.dispatch(logoutUser());
  Cookies.remove(USER_TOKEN);
};

// get image
export const getImageUrl = (path) => {
  if (path.includes("http")) {
    return path;
  } else {
    return process.env.REACT_APP_BASE_URL + path;
  }
};

// capitalize First Letter from keyword
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getCamelCaseFromKeyword = (value) => {
  let temp = value.split("_");
  let finalValue;
  for (let i = 0; i < temp.length; i++) {
    if (i === 0) {
      finalValue = capitalizeFirstLetter(temp[i]);
    } else {
      finalValue = `${finalValue} ${capitalizeFirstLetter(temp[i])}`;
    }
  }
  return finalValue;
};
