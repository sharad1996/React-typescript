import {
    SET_USER_DETAILS,
} from "../constants";

export const setUserDetails = (name: string) => ({
    type: SET_USER_DETAILS,
    payload: name
});
