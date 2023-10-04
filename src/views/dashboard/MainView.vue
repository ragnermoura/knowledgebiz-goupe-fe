<template id="Main-Dashboard">
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
                        <div class="row">
                            <div class="col-lg-8 mb-4 order-0">
                                <div class="card">
                                    <div class="d-flex align-items-end row">
                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <h5 class="card-title text-primary">Hi, {{ name }}! 🎉</h5>
                                                <p class="mb-4">
                                                    Don't forget to mark your tasks here. Every project counts :)
                                                </p>

                                                <a href="/dashboard-main-developer" class="btn btn-sm btn-outline-primary">
                                                    Register here</a>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 text-center text-sm-left">
                                            <div class="card-body pb-0 px-0 px-md-4">
                                                <img src="../../../../assets/img/illustrations/man-with-laptop-light.png"
                                                    height="140" alt="View Badge User"
                                                    data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                    data-app-light-img="illustrations/man-with-laptop-light.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 order-1">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-6 mb-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="card-title d-flex align-items-start justify-content-between">
                                                    <div class="avatar flex-shrink-0">
                                                        <img src="../../../../assets/img/icons/unicons/chart-success.png"
                                                            alt="chart success" class="rounded" />
                                                    </div>
                                                    <div class="dropdown">
                                                        <button class="btn p-0" type="button" id="cardOpt3"
                                                            data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="cardOpt3">
                                                            <a class="dropdown-item" href="javascript:void(0);">View
                                                                More</a>
                                                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="fw-semibold d-block mb-1">Total hours</span>
                                                <h3 class="card-title mb-2">0h</h3>
                                                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>
                                                    +0%</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-6 mb-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="card-title d-flex align-items-start justify-content-between">
                                                    <div class="avatar flex-shrink-0">
                                                        <img src="../../../../assets/img/icons/unicons/wallet-info.png"
                                                            alt="Credit Card" class="rounded" />
                                                    </div>
                                                    <div class="dropdown">
                                                        <button class="btn p-0" type="button" id="cardOpt6"
                                                            data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="cardOpt6">
                                                            <a class="dropdown-item" href="javascript:void(0);">View
                                                                More</a>
                                                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>You Projects</span>
                                                <h3 class="card-title text-nowrap mb-1">{{ myproject }}</h3>
                                                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>
                                                    +0%</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">



                            <!-- Cronometro 1 -->

                            <form @submit.prevent="handleAtividade">


                                <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme mt-5"
                                    id="layout-navbar">

                                    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                            <i class="bx bx-menu bx-sm"></i>
                                        </a>

                                    </div>
                                    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                        <div class="navbar-nav align-items-center">
                                            <div class="nav-item d-flex align-items-center">
                                                <button @click="startAndShowCard" class="btn btn-default" type="button"
                                                    v-if="canAddNewCard">
                                                    <i class="menu-icon tf-icons bx bx-plus"></i>
                                                </button>
                                                <label for="" style="margin-right: 3%;"><small>Project: </small></label>
                                                <select style="width: 250px" type="text"
                                                    class="form-control border-1 shadow-none" v-model="selectedProject"
                                                    placeholder="What project are you working on now?">
                                                    <option value="" disabled>Select</option>
                                                    <option v-for="project in projects" :value="project.id_project"
                                                        :key="project.id_project">{{ project.projectname }}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="navbar-nav align-items-center">
                                            <div class="nav-item d-flex align-items-center">&nbsp;
                                                <label for=""><small>Ativity: </small></label>
                                                <input type="text" v-model="atividade2" style="margin-left: 3%;"
                                                    class="form-control border-1 shadow-none"
                                                    placeholder="Ex.: API creation" aria-label="Search..." />
                                            </div>
                                        </div>
                                        <ul class="navbar-nav flex-row align-items-center ms-auto">
                                            <li class="nav-item lh-1 me-3">
                                                <h3 class="mt-3">{{ formattedTime }}</h3>
                                            </li>
                                            <li class="nav-item lh-1 me-3">
                                                <button v-if="!isRunning && !hasStarted && selectedProject"
                                                    @click="startTimer" class="btn btn-primary" type="button">Start</button>
                                                <button v-if="isRunning" @click="pauseTimer" class="btn btn-warning"
                                                    type="button">Pause</button>
                                                <button v-else-if="hasStarted" @click="continueTimer"
                                                    class="btn btn-success" type="button">Continue</button>
                                            </li>
                                            <li class="nav-item lh-1 me-3">
                                                <button data-bs-toggle="modal" @click="stopAndToggleCard"
                                                    data-bs-target="#modalToggle" class="btn btn-danger"
                                                    type="button">Stop</button>
                                            </li>
                                            <li class="nav-item lh-1 me-3">
                                                <button class="btn btn-info" @click="restartTimer"
                                                    type="button">Restart</button>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <!-- Modal 1-->
                                <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel" tabindex="-1"
                                    style="display: none" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="modalToggleLabel">Do you want to stop your task?
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div v-if="success" class="alert alert-success" role="alert">
                                                    Your activity has been successfully recorded
                                                </div>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" v-model="showTextAreaBlocage" />
                                                            <label class="form-check-label"
                                                                for="flexSwitchCheckChecked">Some
                                                                blockage?</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row" v-if="showTextAreaBlocage">
                                                    <label for="html5-text-input" class="col-md-4 col-form-label">Which
                                                        block?</label>
                                                    <div class="col-md-8">
                                                        <textarea class="form-control" v-model="blockage"
                                                            id="html5-text-input"></textarea>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" v-model="showTextAreaOverdue" />
                                                            <label class="form-check-label" for="flexSwitchCheckChecked">Are
                                                                you
                                                                overdue?</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row" v-if="showTextAreaOverdue">
                                                    <label for="html5-text-input" class="col-md-4 col-form-label">For what
                                                        reason?</label>
                                                    <div class="col-md-8">
                                                        <textarea class="form-control" v-model="deadline"
                                                            id="html5-text-input"></textarea>

                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="mb-3 row">
                                                    <label for="html5-text-input" class="col-md-4 col-form-label">Any
                                                        comments?</label>
                                                    <div class="col-md-8">
                                                        <textarea v-model="observation" class="form-control"
                                                            id="html5-text-input"></textarea>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-primary" type="submit">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                        <div class="card mt-5">
                            <h5 class="card-header">Summary <a href="javascript:;"
                                    class="btn btn-sm btn-outline-primary">Today</a></h5>
                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr class="text-center">
                                            <th>Project</th>
                                            <th>Activities</th>
                                            <th>Date</th>
                                            <th>Time spent</th>
                                            <th>Percentage</th>

                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr class="text-center" v-for="(atividade, index) in   atididades  " :key="index">
                                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                                                atividade.tb_project.projectname }}</strong></td>
                                            <td>{{ atividade.activity }}</td>

                                            <td>{{ atividade.data_activities }}</td>
                                            <td>{{ atividade.time }}</td>
                                            <td class="text-center">{{ atividade.percentage }}%</td>

                                            <td><span class="badge bg-label-success me-1">Completed</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a data-bs-toggle="modal"
                                                            :data-bs-target="`#modalEdit${atividade.id_activities}`"
                                                            class="dropdown-item" href="javascript:void(0);"><i
                                                                class="bx bx-edit-alt me-1"></i> Edit</a>
                                                        <a class="dropdown-item"
                                                            @click="handleDelete(atividade.id_activities)"
                                                            href="javascript:void(0);"><i class="bx bx-trash me-1"></i>
                                                            Delete</a>
                                                    </div>

                                                    <div class="modal fade" :id="`modalEdit${atividade.id_activities}`"
                                                        aria-labelledby="modalToggleLabel" tabindex="-1"
                                                        style="display: none" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="modalToggleLabel">Edit your
                                                                        time
                                                                    </h5>
                                                                    <button type="button" class="btn-close"
                                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">

                                                                    <div class="row">
                                                                        <div class="mb-3 col-md-12">
                                                                            <label for="firstName"
                                                                                class="form-label">Project Name</label>
                                                                            <input class="form-control" disabled type="text"
                                                                                id="firstName"
                                                                                :value="atividade.tb_project ? atividade.tb_project.projectname : ''"
                                                                                autofocus />
                                                                        </div>
                                                                        <div class="mb-3 col-md-12">
                                                                            <label for="firstName"
                                                                                class="form-label">Activitity</label>
                                                                            <input class="form-control" disabled type="text"
                                                                                id="time" :value="atividade.activity"
                                                                                autofocus />
                                                                        </div>
                                                                        <div class="mb-3 col-md-6">
                                                                            <label for="firstName"
                                                                                class="form-label">Time</label>
                                                                            <input class="form-control" disabled type="text"
                                                                                id="time" :value="calculatedTime" />
                                                                        </div>
                                                                        <div class="mb-3 col-md-6">
                                                                            <label for="firstName"
                                                                                class="form-label">Percentage actual</label>
                                                                            <input class="form-control" disabled type="text"
                                                                                id="firstName"
                                                                                :value="atividade.percentage ? atividade.percentage : ''"
                                                                                autofocus />
                                                                        </div>
                                                                        <div class="mb-3 col-md-6">
                                                                            <label for="firstName" class="form-label">New
                                                                                Percentage</label>
                                                                            <input class="form-control" type="number"
                                                                                id="percentage" v-model="newPercentage"
                                                                                @input="updateTime" />
                                                                        </div>
                                                                        <hr>
                                                                    </div>

                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button class="btn btn-warning"
                                                                        @click="updateActivity(atividade)">
                                                                        Edit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
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
import VueJwtDecode from "vue-jwt-decode";
import api from '../../services/projects/index'
import apirest from '../../services/activities/index'


export default {
    name: 'MainDashboard',
    components: {
        Aside,
        Navbar,
        Footer
    },
    data() {
        return {
            projects: [],
            selectedProjectId: null,
            time: 0,
            isRunning: false,
            hasStarted: false,
            selectedProject: null,
            timerInterval: null,
            showTextAreaBlocage: false,
            showTextAreaOverdue: false,
            name: '',
            blockage: '',
            deadline: '',
            observation: '',
            idUser: '',
            atividade2: '',
            dateToday: '',
            porcentage: '',
            timeAll: '',
            atididades: [],
            hours: '',
            atividade: {
                time: '08:00:00',
            },
            newPercentage: 0,
            success: false,
            myproject: ''

        };
    },
    mounted() {

        let token = localStorage.getItem('token')
        let decode = VueJwtDecode.decode(token);


        if (token == null) {
            window.location.href = "/";
        } else if (token == '') {
            window.location.href = "/";
        }


        let name = decode.firstname
        let lastname = decode.lastname

        this.name = name
        this.idUser = decode.id_user

        api.listtotal().then((resposta) => {
            
             this.myproject = resposta.totalProjects;
         });

        this.fetchProjects();


        apirest.listatividade().then((resposta) => {
            
            this.atididades = resposta.data.response;
        });

       

    },
    computed: {
        formattedTime() {
            const hours = String(Math.floor(this.time / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((this.time % 3600) / 60)).padStart(2, '0');
            const seconds = String(this.time % 60).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        },

        calculatedTime() {
            const totalSecondsInDay = 8 * 3600;
            const newTimeInSeconds = (this.newPercentage / 100) * totalSecondsInDay;

            const hours = Math.floor(newTimeInSeconds / 3600);
            const minutes = Math.floor((newTimeInSeconds % 3600) / 60);
            const seconds = newTimeInSeconds % 60;

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },


    },

    methods: {
        async fetchProjects() {
            try {

                const response = await api.myproject();
                this.projects = response.data.response;

                
            } catch (error) {
                console.error('Erro ao buscar projetos:', error);
            }
        },



        startTimer() {
            this.isRunning = true;
            this.hasStarted = true;
            this.timerInterval = setInterval(() => {
                this.time++;
            }, 1000);
        },
        pauseTimer() {
            this.isRunning = false;
            clearInterval(this.timerInterval);
        },
        continueTimer() {
            this.startTimer();
        },
        startAndShowCard() {
            this.isRunning = true;
            this.hasStarted = true;
            this.showCronoOne = true;
            this.canAddNewCard = false;
            this.timerInterval = setInterval(() => {
                this.time++;
            }, 1000);
        },
        stopAndToggleCard() {
            this.isRunning = false;
            clearInterval(this.timerInterval);

            const totalSecondsInWorkDay = 8 * 3600;
            const percentage = (this.time / totalSecondsInWorkDay) * 100;

            this.dateToday = new Date().toISOString().split('T')[0];

            this.timeAll = this.formattedTime
            this.porcentage = percentage.toFixed(2)

            this.showCronoOne = !this.showCronoOne;
        },

        restartTimer() {
            clearInterval(this.timerInterval);
            this.isRunning = false;
            this.hasStarted = false;
            this.time = 0;
            this.selectedProject = null;
        },

        async handleDelete(idAtividade) {

            await apirest.deleteatividade(idAtividade)

            window.location.reload()

        },



        async handleAtividade() {

            try {
                let atividade = this.atividade2
                let data = this.dateToday
                let tempo = this.timeAll
                let pocentagem = this.porcentage
                let bloqueio = this.blockage
                let deadline = this.deadline
                let observation = this.observation
                let name = this.name
                let idUser = this.idUser
                let idProjects = this.selectedProject

                const res = await apirest.atividade(atividade, data, tempo, pocentagem, bloqueio, deadline, observation, name, idUser, idProjects)

                console.log(res.status)

                if (res.status == 201) {

                    this.success = true

                    setTimeout(window.location.reload(), 5000)

                }







                //console.log(atividade, data, tempo, pocentagem, bloqueio, deadline, observation, name, idUser, idProjects)



            } catch (error) {

            }
        },


        updateTime() {
            const totalSecondsInDay = 8 * 3600; // 8 horas em segundos
            const newTimeInSeconds = (this.newPercentage / 100) * totalSecondsInDay;

            const hours = Math.floor(newTimeInSeconds / 3600);
            const minutes = Math.floor((newTimeInSeconds % 3600) / 60);
            const seconds = newTimeInSeconds % 60;

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            this.atividade.time = formattedTime;

        },
        async updateActivity(item) {

            console.log(item?.id_activities)

            const body = {
                percentage: this.newPercentage,
                time: this.calculatedTime
            }
            

            const res = await apirest.editAtividade(item?.id_activities, body)

            if (res.status == 200) {
                location.reload()
            }
        }
    },
}

</script>

