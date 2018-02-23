import * as APIRequest from "../../../services/APIService";
import * as mConstants from "../../../config/Constants";

export function fetchAllQuestionSuccess(data) {
  return {
    type: "FETCH_ALL_QUESTION_SUCCESS",
    data
  };
}

export function fetchAllQuestionFailed(error) {
  return {
    type: "FETCH_ALL_QUESTION_FAILED",
    error
  };
}

export function fetchAllQuestion() {
  let url = mConstants.GET_ALL_QUESTION + "1";
  let param = {
    courseID: 1333
  };
  return dispatch => {
    APIRequest.APIRequestPOST(
      url,
      param,
      data => {
        dispatch(fetchAllQuestionSuccess(data));
        console.log("data", data);
      },
      error => {
        dispatch(fetchAllQuestionFailed(error));
        console.log("error", error);
      }
    );
  };
}
