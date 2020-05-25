import * as constants from "../constants";
import { IEducationState } from "../types";

const getUnivercitiesBegin = (state: IEducationState) => ({
    ...state,
});

const getUnivercitiesSuccess = (state: IEducationState, action: any) => ({
    ...state,
    universities: action.payload,
});

const getUnivercitiesFailure = (state: IEducationState, action: any) => ({
    ...state,
    errors: action.payload,
});

export const getUnivercitiesHandlers = {
    [constants.GET_UNIVERCITIES_BEGIN]: getUnivercitiesBegin,
    [constants.GET_UNIVERCITIES_SUCCESS]: getUnivercitiesSuccess,
    [constants.GET_UNIVERCITIES_FAILURE]: getUnivercitiesFailure,
};
