import axios from "axios";

export const instance = axios.create({
    withCredentials: false,
    baseURL: ' https://gateway.scan-interfax.ru/api/v1/',
    headers: {
        "Content-Type": "application/json",
      },
    
  
});




