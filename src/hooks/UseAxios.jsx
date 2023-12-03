import axios from "axios";

const axiosUse = axios.create({
    baseURL: "http://localhost:200",
});

const UseAxios = () => {
    return axiosUse;
};

export default UseAxios;