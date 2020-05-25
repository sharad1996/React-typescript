import * as constants from "../constants";
import { IEducationState } from "../types";

const getUnivercitiesBegin = (state: IEducationState) => ({
    ...state,
    univercitiesLoading: true,
});

const getUnivercitiesSuccess = (state: IEducationState, action: any) => ({
    ...state,
    data: action.payload,
    univercitiesLoading: false,
});

const getUnivercitiesFailure = (state: IEducationState, action: any) => ({
    ...state,
    errors: action.payload,
    univercitiesLoading: true,
});

export const getUnivercitiesHandlers = {
    [constants.GET_UNIVERCITIES_BEGIN]: getUnivercitiesBegin,
    [constants.GET_UNIVERCITIES_SUCCESS]: getUnivercitiesSuccess,
    [constants.GET_UNIVERCITIES_FAILURE]: getUnivercitiesFailure,
};
