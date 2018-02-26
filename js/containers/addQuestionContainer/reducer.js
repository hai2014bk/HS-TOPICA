
import type { Action } from "../../config/actionTypes"
import * as mConstant from "../../config/Constants"

const initialState = {
getInfoAdd:{
  success: false,
  isDone:false,
  data: "",
},
addQuestion:{
    success: false,
    isDone:false,
    data: "",
}
};

export function getInfoAddReducer(state:State = initialState, action:Action): State {
  if (action.type === mConstant.GET_INFO_ADD_SUCCESS) {
    return {
      ...state,
      getInfoAdd: {
     success:true,
     isDone:true,
     data : action.data
      }
    };
  }

  if (action.type === mConstant.GET_INFO_ADD_FAILED) {
    return {
      ...state,
      getInfoAdd:{
     success:false,
     isDone:true,
     data : action.error
      }
    };
  }

  return state;
}

export function addQuestionReducer(state:State = initialState, action:Action): State {
    if (action.type === mConstant.ADD_QUESTION_SUCCESS) {
      return {
        ...state,
      addQuestion:{
       success:true,
       isDone:true,
       data : action.data
      }
      };
    }
  
    if (action.type === mConstant.ADD_QUESTION_FAILED) {
      return {
        ...state,
        addQuestion: {
       success:false,
       isDone:true,
       data : action.error
        }
      };
    }
  
    return state;
  }


