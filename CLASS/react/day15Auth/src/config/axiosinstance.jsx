import axios from "axios";

export const axiosInstance = axios.create(
    {
        baseURL : "https://fakestoreapi.com/"
    }
)


// axiosInstance.interceptors.request.use(
// 	() => { 
// 	},
// 	() => {
// 	},
// )

axiosInstance.interceptors.response.use(
(response) => {
    console.log("interceptors", response)
    return response
},
(error) => {
    console.log("errror", error)
}

)