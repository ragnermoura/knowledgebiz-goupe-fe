<template id="Main-Calendar">
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
            <h4 class="fw-bold py-3 mb-4">
              <span class="text-muted fw-light">My planner /</span> Calendar
            </h4>
            <div class="row">
              <div class="col-lg-4 mb-4 order-0">
                <div class="nav-align-top mb-4">
                  <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
                    <li class="nav-item">
                      <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                        data-bs-target="#navs-pills-justified-home" aria-controls="navs-pills-justified-home"
                        aria-selected="true">
                        <i class="tf-icons bx bx-code"></i> Activities
                      </button>
                    </li>
                    <li class="nav-item">
                      <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                        data-bs-target="#navs-pills-justified-profile" aria-controls="navs-pills-justified-profile"
                        aria-selected="false">
                        <i class="tf-icons bx bx-sun"></i> Vacation
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">

                      <div class="alert alert-danger" v-if="msgError" role="alert">
                        ⚠️ Don't leave empty fields, please!
                      </div>

                      <div class="alert alert-info alert-dismissible fade show" hidden role="alert">
                        <strong>Heeey!</strong>
                        You have reached the maximum number of appointments for
                        that day.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-success alert-dismissible fade show" v-if="success" role="alert">
                        <strong>Everything's fine here!</strong>
                        Activity successfully registered.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="progress mb-3 mt-3" role="progressbar" aria-label="Basic example"
                        :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" :style="{ width: percentage + '%' }"></div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-4 col-form-label">You Project</label>
                        <div class="col-md-8">
                          <select type="text" class="form-control border-1 shadow-none" v-model="selectedProject"
                            placeholder="What project are you working on now?">
                            <option value="" disabled>Select</option>
                            <option v-for="project in projects" :value="project.id_project" :key="project.id_project">{{
                              project.projectname }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-4 col-form-label">
                          Activitie</label>
                        <div class="col-md-8">
                          <input required v-model="atividade" class="form-control" type="text"
                            placeholder="What was the activity?" id="html5-text-input" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div class="alert alert-warning" v-if="alertDate" role="alert">
                          ⚠️ You can't record a future activity!
                        </div>
                        <label for="html5-date-input" class="col-md-4 col-form-label">Data Activities</label>
                        <div class="col-md-8">
                          <input required class="form-control" type="date" v-model="selectedDate" @input="resetTime" />
                        </div>

                      </div>
                      <div class="mb-3 row">
                        <label for="html5-number-input" class="col-md-4 col-form-label">How long? %</label>
                        <div class="col-md-8">
                          <input required class="form-control" type="number" v-model="timeSpent" min="0" max="100"
                            @input="updateProgress" />
                        </div>
                      </div>

                      <div class="mb-3 row">
                        <div class="col-md-8">
                          <div class="form-check form-switch mb-2">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                              v-model="showTextAreaBlocage" />
                            <label class="form-check-label" for="flexSwitchCheckChecked">Some blockage?</label>
                          </div>
                        </div>
                      </div>
                      <div class="mb-3 row" v-if="showTextAreaBlocage">
                        <label for="html5-text-input" class="col-md-4 col-form-label">Which block?</label>
                        <div class="col-md-8">
                          <textarea v-model="blockage" class="form-control" id="html5-text-input"></textarea>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div class="col-md-8">
                          <div class="form-check form-switch mb-2">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                              v-model="showTextAreaOverdue" />
                            <label class="form-check-label" for="flexSwitchCheckChecked">Are you overdue?</label>
                          </div>
                        </div>
                      </div>
                      <div class="mb-3 row" v-if="showTextAreaOverdue">
                        <label for="html5-text-input" class="col-md-4 col-form-label">For what reason?</label>
                        <div class="col-md-8">
                          <textarea class="form-control" v-model="deadline" id="html5-text-input"></textarea>
                        </div>
                      </div>
                      <hr />
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-4 col-form-label">Any comments?</label>
                        <div class="col-md-8">
                          <textarea class="form-control" v-model="observation" id="html5-text-input"></textarea>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <button @click="handleAtividade()" class="btn btn-success" type="button">
                          Send
                        </button>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-4 col-form-label">Start date</label>
                        <div class="col-md-8">
                          <input class="form-control" type="date" value="Sneat" id="html5-text-input" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-4 col-form-label">End date</label>
                        <div class="col-md-8">
                          <input class="form-control" type="date" value="Sneat" id="html5-text-input" />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div class="col-md-8">
                          <div class="form-check form-switch mb-2">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <label class="form-check-label" for="flexSwitchCheckChecked">It's my birthday</label>
                          </div>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <button v-if="btnSave" class="btn btn-success" type="sumit">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 mb-4 order-0">
                <div class="card">
                  <div class="d-flex align-items-end row">
                    <div class="card-body">
                      <FullCalendar :options="calendarOptions">
                        <template v-slot:eventContent="arg">
                          <b>{{ arg.timeText }}</b>
                          <i>{{ arg.event.title }}</i>
                        </template>
                      </FullCalendar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row"></div>
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
import Aside from "../../components/aside/index.vue";
import Navbar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import VueJwtDecode from "vue-jwt-decode";
import api from "../../services/projects/index";
import apiActivities from "../../services/activities/index";
export default {
  name: "Main-Calendar",
  data() {
    return {
      projects: [],
      selectedProjectId: null,
      showTextAreaBlocage: false,
      showTextAreaOverdue: false,
      selectedDate: null,
      selectedProject: null,
      timeSpent: 0,
      maxTime: 100,
      atividade: '',
      remainingHours: '',
      dateToday: '',
      blockage: '',
      deadline: '',
      observation: '',
      name: '',
      idUser: '',
      alertDate: false,
      btnSave: true,
      occupationPercentage: 0,
      dataActivities: [],
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        events: [{
          title: "Meeting",
          start: '2023-09-04',
          description: "Vamos discutir ideias novas",
          className: "meeting-event",
          color: "#ddd",
        }],
        weekends: false,
        editable: true,
        eventStartEditable: true,
        eventDurationEditable: true,
        myproject: '',
        success: true,
        msgError: false
      },
    };
  },
  watch: {
    selectedDate(newValue) {
      const dataSelecionada = new Date(newValue);
      const dataAtual = new Date();

      if (dataSelecionada > dataAtual) {
        this.alertDate = true;
        this.selectedDate = null;
      }


    }
  },
  components: {
    Aside,
    Navbar,
    Footer,
    FullCalendar,
  },
  computed: {
    percentage() {
      return this.timeSpent < 0 ? this.occupationPercentage : Number(this.occupationPercentage) + Number((this.timeSpent / this.maxTime) * 100);
    },
  },
  mounted() {


    this.fetchProjects();

    let token = localStorage.getItem('token')
    let decode = VueJwtDecode.decode(token);

    this.idUser = decode.id_user

    api.list().then((resposta) => {
      this.projects = resposta.data.response;
    });

    apiActivities.listatividade().then(res => {
      this.dataActivities = res.data?.response/* 
        console.log(res.data?.response) */
      //this.calendarOptions?.events = []
      const events = res.data.response.map((item) => {
        return {
          title: item?.tb_project?.projectname || "",
          start: item?.data_activities,
          description: item?.activity || "",
        };
      });

      this.calendarOptions.events = events



      const defaultDate = new Date()

      const selectedDate = new Date(defaultDate);
      const selectedDateStr = selectedDate.toISOString().split("T")[0];

      // 2. Filtrar os eventos que ocorrem na data selecionada
      const eventsOnSelectedDate = res.data?.response?.filter((event) => {
        return (
          event.data_activities.split("T")[0] === selectedDateStr
        );
      });

      // 3. Calcular o total de minutos dos eventos na data selecionada
      const totalMinutes = eventsOnSelectedDate?.reduce((total, event) => {
        const [hours, minutes] = event.time?.split(":");
        return total + parseInt(hours) * 60 + parseInt(minutes);
      }, 0);

      // 4. Calcular a ocupação em porcentagem
      const occupationPercentage = (totalMinutes / (8 * 60)) * 100;

      // Arredondar a porcentagem para duas casas decimais
      this.occupationPercentage = occupationPercentage.toFixed(2);
    })
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await api.myproject();
        this.projects = response.data.response;

        console.log(response)
      } catch (error) {

      }
    },

    resetTime() {
      this.timeSpent = 0;

      const selectedDate = new Date(this.selectedDate);
      const selectedDateStr = selectedDate.toISOString().split("T")[0];

      // 2. Filtrar os eventos que ocorrem na data selecionada
      const eventsOnSelectedDate = this.dataActivities?.filter((event) => {
        return (
          event.data_activities.split("T")[0] === selectedDateStr
        );
      });

      // 3. Calcular o total de minutos dos eventos na data selecionada
      const totalMinutes = eventsOnSelectedDate?.reduce((total, event) => {
        const [hours, minutes] = event.time?.split(":");
        return total + parseInt(hours) * 60 + parseInt(minutes);
      }, 0);

      // 4. Calcular a ocupação em porcentagem
      const occupationPercentage = (totalMinutes / (8 * 60)) * 100;

      // Arredondar a porcentagem para duas casas decimais
      this.occupationPercentage = occupationPercentage.toFixed(2);

    },
    updateProgress() { },

    async handleAtividade() {



      function inteiroParaHora(inteiro) {
        // Crie um novo objeto de data
        var data = new Date(0);
        const hora = inteiro * 3600
        // Adicione o número inteiro em milissegundos
        data.setSeconds(hora);

        // Formate a data para exibir a hora
        var horas = data.getUTCHours();
        var minutos = data.getUTCMinutes();
        var segundos = data.getUTCSeconds();

        // Formate a hora no formato HH:MM:SS
        var horaFormatada = (horas < 10 ? '0' : '') + horas + ':' +
          (minutos < 10 ? '0' : '') + minutos + ':' +
          (segundos < 10 ? '0' : '') + segundos;

        return horaFormatada;


      }


      const percentage = (this.timeSpent / 100) * 8;


      let atividade = this.atividade
      let data = this.selectedDate
      let tempo = inteiroParaHora(percentage?.toFixed(2))
      let pocentagem = this.timeSpent
      let bloqueio = this.blockage
      let deadline = this.deadline
      let observation = this.observation
      let name = this.name
      let idUser = this.idUser
      let idProjects = this.selectedProject


      const dataSelecionada = new Date(data);
      const dataAtual = new Date();
     
      if (dataSelecionada <= dataAtual && idProjects != null && data != null && data != null) {
        const res = await apiActivities.atividade(atividade, data, tempo, pocentagem, bloqueio, deadline, observation, name, idUser, idProjects)
        if (res.status === 201) {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } else {
        this.msgError = true
      }
 
    }
  },
};
</script>
