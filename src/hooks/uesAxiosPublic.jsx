import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'http://localhost:5000'
})

const uesAxiosPublic = () => {
    return axiosPublic;
};

export default uesAxiosPublic;