import axios, { type AxiosInstance } from "axios";

export const api = ( url:string ) : AxiosInstance =>{
    return axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000
    });
}
