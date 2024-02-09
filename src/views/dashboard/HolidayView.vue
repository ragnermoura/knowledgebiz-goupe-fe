<template id="Main-Account">
  <div class="layout-wrapper layout-content-navbar">

    <div class="layout-container">
      <!-- Menu -->
      <Aside />


      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <Navbar />

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Holidays /</span> Public</h4>
            <div class="row">
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                  <li class="nav-item">
                  </li>
                </ul>
                <div class="card mb-4">

                  <div class="card-body">
                    <form @submit.prevent="handleNewAccount()">

                      <div class="alert alert-success" v-if="msg_success" role="alert">
                        <i class="fa fa-check"></i> Holiday successfully registered
                      </div>


                      <div class="alert alert-success" v-if="msg_success_delete" role="alert">
                        <i class="fa fa-trash"></i> Holiday successfully deleted
                      </div>



                      <div class="row" v-if="mainDetails">
                        <div class="mb-3 col-md-3">
                          <label for="organization" class="form-label">Name Holiday</label>

                          <input type="text" required class="form-control" id="organization" name="organization"
                            placeholder="Carnaval" v-model="holidadyname" />

                        </div>
                        <div class="mb-3 col-md-2">
                          <label for="organization" class="form-label">Date start</label>

                          <input type="date" required class="form-control" id="organization" name="organization" placeholder=""
                            v-model="date_start" />

                        </div>
                        <div class="mb-3 col-md-2">
                          <label for="organization" class="form-label">Date end</label>
                          <input type="date" required class="form-control" placeholder="Password" v-model="date_end" />
                        </div>

                        <div class="mb-3 col-md-3">
                          <label class="form-label" for="country">Which city?</label>
                          <select id="country" v-model="city" class="select2 form-select">

                            <option value="">Select</option>
                            <option value="National">National</option>
                            <option value="Aveiro">Aveiro</option>
                            <option value="Beja">Beja</option>
                            <option value="Braga">Braga</option>
                            <option value="Bragança">Bragança</option>
                            <option value="Castelo Branco">Castelo Branco</option>
                            <option value="Coimbra">Coimbra</option>
                            <option value="Évora">Évora</option>
                            <option value="Faro">Faro</option>
                            <option value="Guarda">Guarda</option>
                            <option value="Leiria">Leiria</option>
                            <option value="Lisboa">Lisboa</option>
                            <option value="Portalegre">Portalegre</option>
                            <option value="Porto">Porto</option>
                            <option value="Santarém">Santarém</option>
                            <option value="Setúbal">Setúbal</option>
                            <option value="Viana do Castelo">Viana do Castelo</option>
                            <option value="Vila Real">Vila Real</option>
                            <option value="Viseu">Viseu</option>

                          </select>
                        </div>

                        <div class="col-md-2 mt-4" style="margin-top: 34px !important;">
                          <div class="form-check form-switch mb-2">
                            <input v-model="selectOffice" class="form-check-input" type="checkbox" />
                            <label class="form-check-label" for="stackCheckbox">With office hours</label>
                          </div>
                        </div>

                        <div class="mt-2 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
                          <button @click="handleHoliday()" type="submit" class="btn btn-primary me-2">Create
                            holiday</button>
                        </div>

                        <hr>

                        <div class="col-12 mt-5">

                          <table class="table">
                            <thead>
                              <tr class="text-center">
                                <th scope="col"></th>
                                <th scope="col">Name Holiday</th>
                                <th scope="col">Date Start</th>
                                <th scope="col">Date End</th>
                                <th scope="col">Office?</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-center" v-for="(listholiday, index) in listholidays">
                                <th scope="row"><img src="../../../assets/img/icons/travel.png" width="50" alt=""></th>
                                <td>{{ listholiday.holiday_name }}</td>
                                <td>{{ formatDateToPT(listholiday.date_start) }}</td>
                                <td>{{ formatDateToPT(listholiday.date_end) }}</td>

                                <td v-if="listholiday.office == 1">Sim</td>
                                <td v-if="listholiday.office == 0">Não</td>


                                <td><button type="button" class="btn btn-danger"
                                    @click="handleDelete(listholiday.id_holiday)"
                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; background-color: rgb(231, 12, 12);">
                                    <i class="bx bx-trash"></i>
                                  </button></td>
                              </tr>


                            </tbody>
                          </table>

                        </div>


                      </div>
                    </form>
                  </div>
                  <!-- /Account -->
                </div>

              </div>
            </div>
          </div>
          <!-- / Content -->

          <!-- Footer -->
          <Footer />
          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
  </div>
</template>
<script>
import Aside from '../../components/aside/index.vue';
import Navbar from '../../components/navbar/index.vue';
import Footer from '../../components/footer/index.vue';
import api from '../../services/auth/index'
import apiholiday from '../../services/holiday/index';

export default {
  name: 'Main-Holiday',
  data() {
    return {
      showTextAreaBlocage: false,
      showTextAreaOverdue: false,
      isLoading: false,
      mainDetails: true,

      //Aqui está os campos
      holidadyname: '',
      date_start: '',
      date_end: '',
      city: '',
      selectOffice: false,
      //Fim dos campos

      msg_success: false,
      msg_success_delete: false,

      listholidays: []
    };
  },
  components: {
    Aside,
    Navbar,
    Footer
  },

  mounted() {
    this.fetchHolidays();
  },


  methods: {

    formatDateToPT(date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${day}-${month}-${year}`;
    },

    async handleNewAccount() {
      try {
        const response = await api.cadastro();

        if (response.status == 200 || response.status == 201 || response.status == 204 || response.status == 202) {
          this.msg_success = true;

          setTimeout(() => {
            this.msg_success = false;
            window.location.reload();
          }, 3000);

        }

      } catch (error) {
        console.log("Tem um error ========>", error);

        if (error.response.status == 409) {

          setTimeout(() => {
            this.msg_email_error = false;
          }, 3000);
        }

      }


    },

    async fetchHolidays() {
      try {
        const response = await apiholiday.list();
        this.listholidays = response.data.response;
      } catch (error) {
        console.error('Erro ao buscar feriados:', error);
      }
    },

    async handleHoliday() {

      let fieldholidadyname = this.holidadyname
      let fielData_start = this.date_start
      let fielData_end = this.date_end
      let fielCity = this.city
      let selection = this.selectOffice

      try {
        const response = await apiholiday.cadastro(fieldholidadyname, fielData_start, fielData_end, fielCity, selection)

        if (response.status == 201) {
          this.msg_success = true;

          this.holidadyname = ''
          this.date_start = ''
          this.date_end = ''
          this.city = ''
          this.selectOffice = ''

          this.fetchHolidays();

          setTimeout(() => {
            this.msg_success = false;
          }, 3000);


        } else {
          this.msg_success = false
        }



      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }



    },

    async handleDelete(id_holiday) {

      try {
        const response = await apiholiday.deleteHoliday(id_holiday)
     
        if (response.status == 200) {
          this.msg_success_delete = true;

          this.fetchHolidays();

          setTimeout(() => {
            this.msg_success_delete = false;
          }, 3000);


        } else {
          this.msg_success_delete = false
        }

      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }


    }

  }
}
</script>

<style>
.btn {
  background: #0049ff;
  color: #fff;
}

.preview-area {
  width: 20%;
}

.btncircle {
  border-radius: 500px;
  width: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  margin-top: -30px;
  margin-left: 5%;

}

input[type=file] {
  width: 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.preview {
  position: relative;
  width: 120px;
  height: 120px;
  background: #f2f2f2;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid #E0E0E0;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }

  .loadingLogo {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -35px;
    margin-top: -35px;
    width: 70px;
    height: 70px;
    border: 5px solid #69CD9B;
    border-top: 5px solid #2FDEC1;
    border-radius: 100%;
    animation: spin 500ms linear infinite;
  }

}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

#full-stars-example {

  /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
  .rating-group {
    display: inline-flex;
  }

  /* make hover effect work properly in IE */
  .rating__icon {
    pointer-events: none;
  }

  /* hide radio inputs */
  .rating__input {
    position: absolute !important;
    left: -9999px !important;
  }

  /* set icon padding and size */
  .rating__label {
    cursor: pointer;
    padding: 0 0.1em;
    font-size: 2rem;
  }

  /* set default star color */
  .rating__icon--star {
    color: orange;
  }

  /* set color of none icon when unchecked */
  .rating__icon--none {
    color: #eee;
  }

  /* if none icon is checked, make it red */
  .rating__input--none:checked+.rating__label .rating__icon--none {
    color: red;
  }

  /* if any input is checked, make its following siblings grey */
  .rating__input:checked~.rating__label .rating__icon--star {
    color: #ddd;
  }

  /* make all stars orange on rating group hover */
  .rating-group:hover .rating__label .rating__icon--star {
    color: orange;
  }

  /* make hovered input's following siblings grey on hover */
  .rating__input:hover~.rating__label .rating__icon--star {
    color: #ddd;
  }

  /* make none icon grey on rating group hover */
  .rating-group:hover .rating__input--none:not(:hover)+.rating__label .rating__icon--none {
    color: #eee;
  }

  /* make none icon red on hover */
  .rating__input--none:hover+.rating__label .rating__icon--none {
    color: red;
  }
}

#half-stars-example {

  /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
  .rating-group {
    display: inline-flex;
  }

  /* make hover effect work properly in IE */
  .rating__icon {
    pointer-events: none;
  }

  /* hide radio inputs */
  .rating__input {
    position: absolute !important;
    left: -9999px !important;
  }

  /* set icon padding and size */
  .rating__label {
    cursor: pointer;
    /* if you change the left/right padding, update the margin-right property of .rating__label--half as well. */
    padding: 0 0.1em;
    font-size: 2rem;
  }

  /* add padding and positioning to half star labels */
  .rating__label--half {
    padding-right: 0;
    margin-right: -0.6em;
    z-index: 2;
  }

  /* set default star color */
  .rating__icon--star {
    color: orange;
  }

  /* set color of none icon when unchecked */
  .rating__icon--none {
    color: #eee;
  }

  /* if none icon is checked, make it red */
  .rating__input--none:checked+.rating__label .rating__icon--none {
    color: red;
  }

  /* if any input is checked, make its following siblings grey */
  .rating__input:checked~.rating__label .rating__icon--star {
    color: #ddd;
  }

  /* make all stars orange on rating group hover */
  .rating-group:hover .rating__label .rating__icon--star,
  .rating-group:hover .rating__label--half .rating__icon--star {
    color: orange;
  }

  /* make hovered input's following siblings grey on hover */
  .rating__input:hover~.rating__label .rating__icon--star,
  .rating__input:hover~.rating__label--half .rating__icon--star {
    color: #ddd;
  }

  /* make none icon grey on rating group hover */
  .rating-group:hover .rating__input--none:not(:hover)+.rating__label .rating__icon--none {
    color: #eee;
  }

  /* make none icon red on hover */
  .rating__input--none:hover+.rating__label .rating__icon--none {
    color: red;
  }
}

#full-stars-example-two {

  /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
  .rating-group {
    display: inline-flex;
  }

  /* make hover effect work properly in IE */
  .rating__icon {
    pointer-events: none;
  }

  /* hide radio inputs */
  .rating__input {
    position: absolute !important;
    left: -9999px !important;
  }

  /* hide 'none' input from screenreaders */
  .rating__input--none {
    display: none
  }

  /* set icon padding and size */
  .rating__label {
    cursor: pointer;
    padding: 0 0.1em;
    font-size: 2rem;
  }

  /* set default star color */
  .rating__icon--star {
    color: orange;
  }

  /* if any input is checked, make its following siblings grey */
  .rating__input:checked~.rating__label .rating__icon--star {
    color: #ddd;
  }

  /* make all stars orange on rating group hover */
  .rating-group:hover .rating__label .rating__icon--star {
    color: orange;
  }

  /* make hovered input's following siblings grey on hover */
  .rating__input:hover~.rating__label .rating__icon--star {
    color: #ddd;
  }
}
</style>