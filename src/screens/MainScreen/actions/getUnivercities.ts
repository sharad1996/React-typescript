import axios from "axios";
import {
    GET_UNIVERCITIES_BEGIN,
    GET_UNIVERCITIES_SUCCESS,
    GET_UNIVERCITIES_FAILURE
} from "../constants";

const baseURL = process.env.REACT_APP_BASE_API

export const getUnivercities = () => {
    return function (dispatch: any) {
        dispatch({ type: GET_UNIVERCITIES_BEGIN });
        axios.get(`${baseURL}`)
            .then(({ data }) => {
                dispatch({
                    type: GET_UNIVERCITIES_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_UNIVERCITIES_FAILURE,
                    payload: error
                });
            });
    };
}