import { loginRequest } from "@/model/auth";
import axios from "../config/axios";



export const loginApi = (input :loginRequest) =>  axios.post('/auth/login', input);
export const rememberMeApi = (token:string) => axios.post('/auth/remember',token);
