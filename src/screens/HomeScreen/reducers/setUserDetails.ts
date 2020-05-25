import * as constants from "../constants";
import { IUsersState } from "../types";

const setUserDetailsSuccess = (state: IUsersState, action: any) => ({
    ...state,
    name: action.payload,
});

export const setUserDetailsHandlers = {
    [constants.SET_USER_DETAILS]: setUserDetailsSuccess,
};
