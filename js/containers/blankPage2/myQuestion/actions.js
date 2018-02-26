import * as APIRequest from "../../../services/APIService";
import * as mConstants from "../../../config/Constants";

export function fetchMyQuestionSuccess(data) {
	return {
		type: mConstants.GET_MY_QUESTION_SUCCESS,
		data
	};
}

export function fetchMyQuestionFailed(error) {
	return {
		type: mConstants.GET_MY_QUESTION_FAILED,
		error
	};
}

export function fetchMyQuestion() {
    let url = mConstants.GET_MY_QUESTION + "1"
    let param = {
        courseID:1333,
        userID:20173
	}
	return dispatch => {
		APIRequest.APIRequestPOST(url,param,data => {
			dispatch(fetchMyQuestionSuccess(data))
        },
    error =>{
		dispatch(fetchMyQuestionFailed(error))
        console.log("error",error)
    })
	};
}
