import * as  APIRequest from "../../../services/APIService"
import * as mConstants from '../../../config/Constants'

export function fetchAllSuccess(data) {
	return {
		type: mConstants.GET_ALL_QUESTION_SUCCESS,
		data
	};
}

export function fetchAllFailed(error) {
	return {
		type: mConstants.GET_ALL_QUESTION_FAILED,
		error
	};
}

export function fetchAllQuestion() {
    let url = mConstants.GET_ALL_QUESTION + "1"
    let param = {
        courseID:1333
	}
	return dispatch => {
		APIRequest.APIRequestPOST(url,param,data => {
			dispatch(fetchAllSuccess(data))
        },
    error =>{
		dispatch(fetchAllFailed(error))
        console.log("error",error)
    })
	};
}
