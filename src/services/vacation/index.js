import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
    cadastro: async (dataStart, dataEnd, birthday, iduser) => {
        try {
            const response = await http.post("/vacation/cadastro", {
                date_start: dataStart,
                date_end: dataEnd,
                status: 2,
                birthday: birthday,
                id_user: iduser,
                
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                }
            });
    
            console.log(response.data); // Certifique-se de que a resposta é apropriada
    
            return response.data;
        } catch (error) {
            console.error("An error occurred:", error);
            throw error; // Re-throw para lidar com o erro onde você chama a função project
        }
    },
    

    myvacations: () => {
        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;
        return http.get(`/vacation/user/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        })
    },

  
    list: () => {
        return http.get("/projeto/", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        })
    },



};