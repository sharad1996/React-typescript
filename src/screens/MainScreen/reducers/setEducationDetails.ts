import * as constants from "../constants";
import { IEducationState } from "../types";

const setEducationDetailsSuccess = (state: IEducationState, action: any) => ({
    ...state,
    data: [
        ...state.data,
        action.payload
    ],
});

export const setEducationDetailsHandlers = {
    [constants.SET_EDUCATION_DETAILS]: setEducationDetailsSuccess,
};
