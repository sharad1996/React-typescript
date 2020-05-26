import axios from "axios";
import {
    GET_UNIVERSITIES_BEGIN,
    GET_UNIVERSITIES_SUCCESS,
    GET_UNIVERSITIES_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API

export const getUniversities = (value: string) => {
    return function (dispatch: any): any {
        dispatch({ type: GET_UNIVERSITIES_BEGIN });
        axios.get(`${baseURL}/search?name=${value}`)
            .then(({ data }) => {
                dispatch({
                    type: GET_UNIVERSITIES_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_UNIVERSITIES_FAILURE,
                    payload: error
                });
            });
    };
}