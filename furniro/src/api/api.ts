import axios, { AxiosInstance } from "axios";
export const API: AxiosInstance = axios.create({
  baseURL: "https://localhost:3000",
})