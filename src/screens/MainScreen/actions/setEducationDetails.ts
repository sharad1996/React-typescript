import {
    SET_EDUCATION_DETAILS,
} from "../constants";
import { IEducation } from "../types";

export const setEducationDetails = (details: IEducation) => ({
    type: SET_EDUCATION_DETAILS,
    payload: details
});
