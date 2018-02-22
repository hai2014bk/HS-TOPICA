import * as  APIRequest from "../../../services/APIService"
import * as mConstants from '../../../config/Constants'

export function fetchCategorySuccess(data) {
	return {
		type: "FETCH_CATEGORY_SUCCESS",
		data
	};
}

export function fetchCategoryFailed(error) {
	return {
		type: "FETCH_CATEGORY_FAILED",
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
            console.log(data)
        },
    error =>{
        console.log("error",error)
    })
	};
}
