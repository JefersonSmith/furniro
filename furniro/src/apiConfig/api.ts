import axios, { AxiosInstance } from "axios";
export const API: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
})