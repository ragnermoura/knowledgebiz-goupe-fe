import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
    atividade: async (atividade, data, tempo, pocentagem, bloqueio, deadline, observation, name, idUser, idProjects) => {
        try {
            const response = await http.post("/atividade/cadastro", {
                activity: atividade,
                data_activities: data,
                time: tempo,
                percentage: pocentagem,
                blockage: bloqueio,
                deadline: deadline,
                observation: observation,
                nome_user: name,
                id_user: idUser,
                id_project: idProjects
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                }
            });

            return response.data;
        } catch (error) {
            console.error("An error occurred:", error);
            throw error;
        }
    },

    listatividade: () => {
        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;
        return http.get(`/atividade/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        });
    },



};