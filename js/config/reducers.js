import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "../containers/DrawBar/reducer";

export default combineReducers({
  form: formReducer,
  drawer,
});
