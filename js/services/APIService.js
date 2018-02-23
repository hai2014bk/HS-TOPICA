import { AsyncStorage } from "react-native";
window.btoa = require("Base64").btoa;

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}
export function APIRequestPOST(url, param, successCallback, errorCallback) {
  var formData = getFormData(param);
  var user = {
    name: "mobile_app",
    password: "topica@123##"
  };
  var authen = "Basic " + btoa(user.name + ":" + user.password);
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic bW9iaWxlX2FwcDp0b3BpY2FAMTIzIyM="
    },
    body: formData
  })
    .then(response => {
      response.json().then(responseJson => {
        if (responseJson.status == 200) {
          successCallback(responseJson);
        } else {
          errorCallback(responseJson.errorMessage);
        }
      });
    })
    .catch(error => {
      console.log("error", error);
    });
}
