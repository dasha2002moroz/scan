import {instance} from "./api";

 

export const authAPI = {
    
    info(token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return instance.get(`account/info`, config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res.data.eventFiltersInfo;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

    
    login(login, password) {
        return instance.post(`account/login`, {login, password})
        .catch((e) => {
            console.log("Failed login...");
            return e;
        })
    }
}