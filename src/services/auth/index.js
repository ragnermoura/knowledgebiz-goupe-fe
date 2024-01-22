import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
  login: (youEmail, youPass) => {
    http
      .post(
        "/login/",
        {
          email: youEmail,
          senha: youPass,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);

        let decode = VueJwtDecode.decode(token);
        let nivelId = decode.id_nivel;

        if (nivelId == 1) {
          window.location.href = "/report";
        } else {
          window.location.href = "/dashboard-main-developer";
        }

        localStorage.removeItem('error')

      })
      .catch((error) => {
        console.log("Tem um erro aqui ========>", error);

        if(error.response.status == 401){
          localStorage.setItem('error', 401)
        }else if(error.response.status == 500){
          localStorage.setItem('error', 500)
        }

        window.location.reload();

      });
  },

  cadastro: (firstName, lastName, password, email, position, birthday, phone, address, zipcode, country, language, level) => {
    return http.post("/usuarios/cadastro", {
      firstname: firstName,
      lastname: lastName,
      email: email,
      senha: password,
      position: position,
      birthday: birthday,
      phonenumber: phone,
      address: address,
      zipcode: zipcode,
      country: country,
      language: language,
      status: 1,
      nivel: level,
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    })
    .then((response) => {
     return response
    })
    .catch((error) => {
      console.log("Tem um error ========>", error);

    });
  },
  

  projects: (selectedProjectIds, idUser) => {
    let id_user = localStorage.getItem('id')
    http
      .post(
        "/project-user/cadastro/",

        {
          id_projects: selectedProjectIds,
          id_user: idUser,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
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

  users: () => {
    return http.get("/usuarios/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    })
  },

  dados: (position, phone, address, zipcode, country, language) => {
    let token = localStorage.getItem('token');
    let decode = VueJwtDecode.decode(token);
    let userId = decode.id_user;
    http
      .patch(
        "/usuarios/dados",
        {
          id_user: userId,
          education: position,
          phonenumber: phone,
          address: address,
          zipcode: zipcode,
          country: country,
          language: language,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {

        console.log(response)

      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

}
