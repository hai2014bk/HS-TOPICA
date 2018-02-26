import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "../containers/DrawBar/reducer";
import {getAllQuestionReducer} from "../containers/blankPage2/popularQuestion/reducer"
import {getMyQuestionReducer} from "../containers/blankPage2/myQuestion/reducer"


export default combineReducers({
  form: formReducer,
  drawer,
  getAllQuestionReducer,
  getMyQuestionReducer
});
