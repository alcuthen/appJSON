import axios from "axios";

const api = axios.create({
    baseURL: "https://raw.githubusercontent.com/alcuthen/"

});

export default api;
