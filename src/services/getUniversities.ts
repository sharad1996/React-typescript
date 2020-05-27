import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API

export const getUniversities = async (value: string) => {
    const response = await axios.get(`${baseURL}/search?name=${value}`);
    return response.data;
}