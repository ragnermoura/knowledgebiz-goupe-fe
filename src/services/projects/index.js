import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {


    project: async (projectname, manager, description, repository, dateStart, dateEnd, client) => {
        try {
            const response = await http.post("/projeto/cadastro", {
                projectname: projectname,
                descriptions: description,
                repository: repository,
                data_start: dateStart,
                data_end: dateEnd,
                manager: manager,
                client: client
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
    

    listtotal: () => {
        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;
        return http.get(`/project-user/total/${userId}`, {
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