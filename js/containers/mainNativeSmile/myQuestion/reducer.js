
import type { Action } from "../../../config/actionTypes"
import * as mConstant from "../../../config/Constants"
export type State = {
  success: boolean,
  isDone:boolean,
  data: String,
}

const initialState = {
  success: false,
  isDone:false,
  data: "",
};

export function getMyQuestionReducer(state:State = initialState, action:Action): State {
  if (action.type === mConstant.GET_MY_QUESTION_SUCCESS) {
    return {
      ...state,
     success:true,
     isDone:true,
     data : action.data
    };
  }

  if (action.type === mConstant.GET_ALL_QUESTION_FAILED) {
    return {
      ...state,
     success:true,
     isDone:true,
     data : action.error
    };
  }

  return state;
}
