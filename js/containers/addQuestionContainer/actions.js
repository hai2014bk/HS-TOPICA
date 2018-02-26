import * as APIRequest from "../../services/APIService";
import * as mConstants from "../../config/Constants";


//Get info add action
export function fetchInfoAddSuccess(data) {
	return {
		type: mConstants.GET_INFO_ADD_SUCCESS,
		data
	};
}

export function fetchInfoAddFailed(error) {
	return {
		type: mConstants.GET_INFO_ADD_FAILED,
		error
	};
}

export function fetchInfoAdd() {
    let url = mConstants.GET_INFO_ADD
    let param = {}
	return dispatch => {
		APIRequest.APIRequestPOST(url,param,data => {
			dispatch(fetchInfoAddSuccess(data))
        },
    error =>{
		dispatch(fetchInfoAddFailed(error))
        console.log("error",error)
    })
	};
}

//Add Action
export function addQuestionSuccess(data) {
	return {
		type: mConstants.ADD_QUESTION_SUCCESS,
		data
	};
}

export function addQuestionFailed(error) {
	return {
		type: mConstants.ADD_QUESTION_SUCCESS,
		error
	};
}

export function addQuestion(param) {
    let url = mConstants.ADD_QUESTION
	return dispatch => {
		APIRequest.APIRequestPOST(url,param,data => {
			dispatch(addQuestionSuccess(data))
        },
    error =>{
		dispatch(addQuestionFailed(error))
        console.log("error",error)
    })
	};
}
