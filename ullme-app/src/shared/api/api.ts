import axios from "axios";

export const API_URL = 'https://neuro2.getphoto.su/';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config;
// })

// $api.interceptors.response.use((config) => {
//   return config;
// },async (error) => {
//   const originalRequest = error.config;
//   if (error.response.status == 401 && error.config && !error.config._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//           const response = await axios.get(`${API_URL}/refresh_token`, {headers: {
//             'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`
//           }})
//           localStorage.setItem('token', response.data.access_token);
//           return $api.request(originalRequest);
//       } catch (e) {
//           console.log('NOT AUTHORISED')
//       }
//   }
//   throw error;
// })

export default api;