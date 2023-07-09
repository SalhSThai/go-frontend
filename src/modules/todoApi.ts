import { loginRequest } from "@/model/auth";
import axios from "../config/axios";
import { allTodoData, todoCreateData } from "@/model/todo";



export const fetchTodoApi = () =>  axios.get('/todo');
export const createTodoApi = (input :todoCreateData) =>  axios.post('/todo', input);

