import axios from "axios";
export const http = axios.create({
    baseURL: 'https://internal-report-api.azurewebsites.net'
    // baseURL: 'http://localhost:3000'°
    
})