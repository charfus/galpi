import { combineReducers } from "redux";
import user from "./user_reducer";
import post from "./post_reducer";

const rootReducer = combineReducers({
  auth: user,
  post,
});

export default rootReducer;
