import axios from "axios";

// const axiosInstance = axios.create({ baseURL: process.env.REACT_WEBPACK_APP_BASEURL })
const axiosInstance = axios.create({ baseURL: "http://localhost:5000/" })

axiosInstance.interceptors.request.use(
    (request) => {    //local strge store--> axiosinst--> req-->header append--->send to be---> if token is there in
        const token = localStorage.getItem("token");
        // console.log("axios token : ",token)
        request.headers["Authorization"] = token;
        return request;
    },
    (error) => {
        return error;
    }
)

export default axiosInstance;