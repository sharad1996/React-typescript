import { createReducer } from "../../../core/reduxUtils";
import { setUserDetailsHandlers } from "./setUserDetails"
import { IUsersState } from "../types";

const initialState: IUsersState = {
  name: "",
};

const handlers = {
  ...setUserDetailsHandlers
};

const usersReducer = createReducer(initialState, handlers);

export default usersReducer;
