import { http } from "../config";

export default {

    cadastro: async (fieldholidadyname, fielData_start, fielData_end, fielCity, selection) => {

        try {
            const response = await http.post("/holiday/cadastro", {

                holiday_name: fieldholidadyname,
                date_start: fielData_start,
                date_end: fielData_end,
                city: fielCity,
                office: selection

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

    list: () => {
        return http.get("/holiday/", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        });
    },

    deleteHoliday: (id_holiday) => {
        return http.delete(`/holiday/delete/${id_holiday}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
        })
    },

 
}