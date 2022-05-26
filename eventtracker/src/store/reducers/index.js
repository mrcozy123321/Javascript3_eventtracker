import { combineReducers } from "redux";
import authReducer from "./autorizeReducer";
import eventReducer from "./eventReducer"
import eventsReducer from "./eventsReducer"

export default combineReducers({
  events: eventsReducer,
  event: eventReducer,
  auth: authReducer
})