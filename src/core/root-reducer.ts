import { combineReducers } from "redux";
import educationReducer from "../screens/MainScreen/reducers";
import usersReducers from "../screens/HomeScreen/reducers";
import { IEducationState } from "../screens/MainScreen/types";
import { IUsersState } from "../screens/HomeScreen/types";

export default combineReducers({
   educations: educationReducer,
   users: usersReducers
});

export interface IRootState {
   readonly educations: IEducationState
   readonly users: IUsersState
}
