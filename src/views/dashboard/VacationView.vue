<template id="Main-Vacation">
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
                            <span class="text-muted fw-light">My Vacation /</span> Calendar
                        </h4>
                        <div class="row">
                            <div class="col-lg-4 mb-4 order-0">
                                <div class="nav-align-top mb-4">
                                    <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
                                        <li hidden class="nav-item">
                                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-justified-home"
                                                aria-controls="navs-pills-justified-home" aria-selected="true">
                                                <i class="tf-icons bx bx-code"></i> Activities
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-justified-profile"
                                                aria-controls="navs-pills-justified-profile" aria-selected="false">
                                                <i class="tf-icons bx bx-sun"></i> Vacation
                                            </button>
                                        </li>
                                    </ul>
                                    <div class="tab-content">

                                        <div class="alert alert-danger" v-if="msgDate" role="alert">
                                            ⚠️ This date has already been chosen... Try another
                                        </div>

                                        <div class="alert alert-danger" v-if="msgbirthday" role="alert">
                                            ⚠️ You can't have two birthdays.
                                        </div>

                                        <div class="alert alert-success" v-if="msgSuccess" role="alert">
                                            ✅ Vacation booked, wait for confirmation
                                        </div>


                                        <div class="tab-pane fade show active" id="navs-pills-justified-profile"
                                            role="tabpanel">
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">Start
                                                    date</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="date" v-model="dateStart"
                                                        id="html5-text-input" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">End
                                                    date</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="date" v-model="dateEnd"
                                                        id="html5-text-input" />
                                                </div>
                                            </div>

                                            <div class="mb-3 row">
                                                <div class="col-md-8">
                                                    <div class="form-check form-switch mb-2">
                                                        <input class="form-check-input" v-model="birthday" type="checkbox"
                                                            id="flexSwitchCheckChecked" />
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">It's my
                                                            birthday</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-grid gap-2">
                                                <button @click="handleVacation()" class="btn btn-success" type="sumit">
                                                    Send
                                                </button>
                                            </div>

                                            <hr>

                                            <div style="overflow: auto; max-height: 250px;">

                                                <div v-for="vacation in minhasvacations" :key="vacation.id_vacation"
                                                    class="card mb-3" style="max-width: 540px; height: 170px;">
                                                    <div class="row">

                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                <p class="card-text"><strong><i class="bx bx-calendar"></i>
                                                                        Start:</strong> {{ vacation.date_start }}</p>
                                                                <p class="card-text"><strong><i class="bx bx-calendar"></i>
                                                                        End:</strong> {{ vacation.date_end }}</p>

                                                                <div class="row">
                                                                    <div class="col-6">
                                                                        <p v-if="vacation.birthday == 'Sim'"
                                                                            class="card-text text-success">🎉 It's your
                                                                            birthday</p>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <p v-if="vacation.status == 2" class="card-text">
                                                                            <small class="text-warning">Awaiting
                                                                                approval</small>
                                                                        </p>
                                                                        <p v-if="vacation.status == 1" class="card-text">
                                                                            <small class="text-success">Approved</small></p>
                                                                    </div>

                                                                </div>


                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="margin-left: -20px; margin-top: 10px;">
                                                            <button @click="handleDeleteVacation(vacation.id_vacation)"
                                                                class="btn btn-danger" type="sumit">
                                                                <i class="bx bx-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
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
import apiVacation from "../../services/vacation/index";

export default {
    name: "Main-Vacation",
    data() {
        return {
            dateStart: '',
            dateEnd: '',

            minhasvacations: [],

            birthday: false,
            birthdaySelect: '',

            name: '',
            idUser: '',
            color: '',

            msgDate: false,
            msgbirthday: false,
            msgSuccess: false,

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

            },
            success: true,
            msgError: false,
        };
    },

    components: {
        Aside,
        Navbar,
        Footer,
        FullCalendar,
    },


    mounted() {

        let token = localStorage.getItem('token')
        let decode = VueJwtDecode.decode(token);


        if (token == null) {
            window.location.href = "/";
        } else if (token == '') {
            window.location.href = "/";
        }

        this.idUser = decode.id_user
        this.color = decode.color
        let youcolor = this.color

        apiVacation.myvacations().then((resposta) => {
            let res = resposta.data.response
            this.minhasvacations = res;

            const events = resposta.data.response.map((item) => {
                return {
                    title: "🎉 Vacations" || "",
                    start: item?.date_start,
                    end: item?.date_end || "",
                    color: youcolor || "",
                    description: item?.activity || "",
                };

                
            });
            this.calendarOptions.events = events
        })

    },
    methods: {

        async handleVacation() {

            let dataStart = this.dateStart
            let dataEnd = this.dateEnd
            let birthday;
            let iduser = this.idUser;

            if (this.birthday == true) {
                birthday = 'Sim';
            } else {
                birthday = 'Não';
            }

            try {
                const response = await apiVacation.cadastro(dataStart, dataEnd, birthday, iduser);



                setTimeout(() => {
                    window.location.reload();
                }, 1000);

                if (response.status == 200 || response.status == 201 || response.status == 204 || response.status == 202) {

                    this.msgSuccess = true;
                    setTimeout(() => {
                        this.msgSuccess = false;
                        window.location.reload();
                    }, 3000);

                }
            }

            catch (error) {
                console.log("Tem um error ========>", error);

                if (error.response.status == 409) {
                    this.msgDate = true;

                    setTimeout(() => {
                        this.msgDate = false;
                    }, 3000);
                } else if (error.response.status == 400) {
                    this.msgbirthday = true;
                    setTimeout(() => {
                        this.msgbirthday = false;
                    }, 3000);
                }

            }
        },

        async handleDeleteVacation(id_vacation) {

            try {
                const response = await apiVacation.deletevacations(id_vacation);


                setTimeout(() => {
                    window.location.reload();
                }, 1000);


            }

            catch (error) {
                console.log("Tem um error ========>", error);
            }

        }
    },
};
</script>
  