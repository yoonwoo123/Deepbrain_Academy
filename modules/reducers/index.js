import { combineReducers } from "redux";
import employeeReducer from "./employee";
import userReducer from "./user";

const rootReducer = combineReducers({
	employee: employeeReducer,
	user: userReducer,
});

export default rootReducer;