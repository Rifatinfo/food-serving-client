import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
   baseURL: 'http://localhost:5000',
});
const useAxiosSecure = () => {
   const navigate = useNavigate()
   const { logOut } = useAuth();
   // const {logOut } = useContext(AuthContext);

   axiosSecure.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access-token');
      console.log('request stop by interceptor', token);
      config.headers.authorization = `Bearer ${token}`
      return config;
   }, function (error) {
      return Promise.reject(error);
   });


   // Add a response interceptor
   axiosSecure.interceptors.response.use(function (response) {

      return response;
   }, async (error) => {
      const status = error.response.status;
      console.log('status error in the interceptor', status);
      if (status === 401 || status === 403) {
         navigate('/sign-in');
         await logOut();
      }
      return Promise.reject(error);
   });

   return axiosSecure;
};

export default useAxiosSecure;