import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
    uploadAvatar: async (body) => {

        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;
        try {
            const response = await http.patch(`/usuarios/upload-user-image/${userId}`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
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
    getAvatar: async (body) => {

        let token = localStorage.getItem('token');
        let decode = VueJwtDecode.decode(token);
        let userId = decode.id_user;
        try {
            const response = await http.get(`/usuarios/getImage/${userId}`,{
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
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




};