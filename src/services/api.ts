import axios from "axios";

export const api = axios.create({
    baseURL: "https://motors-deploy-render.onrender.com",
    timeout: 7000
})