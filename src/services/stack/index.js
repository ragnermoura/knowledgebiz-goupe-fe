import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
    cadastro: async (userData) => {
        try {
            const response = await http.post("/stacks/cadastro", {
               userData
            
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                }
            });
    
            console.log(response.data);
    
            return response.data;
        } catch (error) {
            console.error("An error occurred:", error);
            throw error; 
        }
    },

    lists: () => {
        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;

        return http.get(`/stacks/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        })
    },
}