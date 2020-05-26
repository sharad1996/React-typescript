import * as constants from "../constants";
import { IEducationState } from "../types";

const getUniversitiesBegin = (state: IEducationState) => ({
    ...state,
});

const getUniversitiesSuccess = (state: IEducationState, action: any) => ({
    ...state,
    universities: action.payload,
});

const getUniversitiesFailure = (state: IEducationState, action: any) => ({
    ...state,
    errors: action.payload,
});

export const getUniversitiesHandlers = {
    [constants.GET_UNIVERSITIES_BEGIN]: getUniversitiesBegin,
    [constants.GET_UNIVERSITIES_SUCCESS]: getUniversitiesSuccess,
    [constants.GET_UNIVERSITIES_FAILURE]: getUniversitiesFailure,
};
