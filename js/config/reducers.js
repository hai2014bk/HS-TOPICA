import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "../containers/DrawBar/reducer";
import {getAllQuestionReducer} from "../containers/mainNativeSmile/popularQuestion/reducer"
import {getMyQuestionReducer} from "../containers/mainNativeSmile/myQuestion/reducer"
import {getInfoAddReducer,addQuestionReducer} from "../containers/addQuestionContainer/reducer"

export default combineReducers({
  form: formReducer,
  drawer,
  getAllQuestionReducer,
  getMyQuestionReducer,
  getInfoAddReducer,
  addQuestionReducer
});
