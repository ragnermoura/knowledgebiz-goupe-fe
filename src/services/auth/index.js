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

        localStorage.removeItem("error");
      })
      .catch((error) => {
        console.log("Tem um erro aqui ========>", error);

        if (error.response.status == 401) {
          localStorage.setItem("error", 401);
        } else if (error.response.status == 500) {
          localStorage.setItem("error", 500);
        }

        window.location.reload();
      });
  },

  cadastro: (
    firstName,
    lastName,
    password,
    email,
    position,
    birthday,
    sexo,
    phone,
    address,
    zipcode,
    country,
    language,
    level
  ) => {
    return http
      .post(
        "/usuarios/cadastro",
        {
          firstname: firstName,
          lastname: lastName,
          email: email,
          senha: password,
          position: position,
          birthday: birthday,
          sexo: sexo,
          phonenumber: phone,
          address: address,
          zipcode: zipcode,
          country: country,
          language: language,
          status: 1,
          nivel: level,
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
        return response;
      })
      .catch((error) => {
        console.log("Tem um error ========>", error);
      });
  },

  projects: (selectedProjectIds, idUser) => {
    return new Promise((resolve, reject) => {
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
          resolve(response); // Resolve a Promise com a resposta
        })
        .catch((error) => {
          console.log("Error ========>", error);
          reject(error); // Rejeita a Promise com o erro
        });
    });
  },

  team: (people, position, id_project) => {
    http
      .post(
        "/project-user/cadastro/",

        {
          id_project: id_project,
          id_user: people,
          position: position,
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
    });
  },

  userslistsUnic: (user) => {
    return http.get(`/usuarios/${user}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  userslists: (user) => {
    return http.get(`/usuarios/${user}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  users: () => {
    return http.get("/usuarios/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  dados: (position, phone, address, zipcode, country, language) => {
    let token = localStorage.getItem("token");
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
        console.log(response);
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },

  editPass: (password, idUser) => {
    return http
      .patch(
        "/usuarios/edit/pass",
        {
          id_user: idUser,
          senha: password,
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
        alert("Password changed, redirecting...");
        window.location.href = "/";

        return response;
      })
      .catch((error) => {
        console.log("Tem um error ========>", error);
      });
  },

  sendemailpass: (
    email,
    name,
    youRegiao,
    youPlataforma,
    youNavegador,
    youIp
  ) => {
    console.log(
      "saiu daqui: " + email,
      name,
      youRegiao,
      youPlataforma,
      youNavegador,
      youIp
    );

    return http
      .post(
        "/usuarios/trocaemail",
        {
          nome: name,
          email: email,
          regiao: youRegiao,
          plataforma: youPlataforma,
          naveagdor: youNavegador,
          enderecoIp: youIp,
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
        return response;
      })
      .catch((error) => {
        console.log("Tem um error ========>", error);
      });
  },

  sendewelcome: (
    email,
    firstName,
    password
  ) => {

    return http
      .post(
        "/usuarios/welcome",
        {
          nome: firstName,
          email: email,
          password: password
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
        return response;
      })
      .catch((error) => {
        console.log("Tem um error ========>", error);
      });
  },
};
