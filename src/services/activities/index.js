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

            return response;
        } catch (error) {
            console.error("An error occurred:", error);
            throw error;
        }
    },

    deleteatividade: (idAtividade) => {
        return http.delete(`/atividade/delete/${idAtividade}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },

            
        });
        
    },


    editAtividade: (idAtividade, body) => {
        return http.patch(`/atividade/edit/${idAtividade}`, body, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },

            
        });
        
    },

    listatividadefull: () => {
        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;
        return http.get(`/atividade/full/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        });
    },

    listatividadefull2: () => {
      
        return http.get("/atividade/full/", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        });
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

    listatotal: () => {
        return http.get("/atividade/total", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        });
    },

    listarmanager: (userId) => {
        return http.get(`/atividade/manager/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        });
    },


};