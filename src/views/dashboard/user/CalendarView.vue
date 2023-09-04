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
                        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">My planner /</span> Calendar</h4>
                        <div class="row">
                            <div class="col-lg-4 mb-4 order-0">
                                <div class="nav-align-top mb-4">
                                    <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
                                        <li class="nav-item">
                                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-justified-home"
                                                aria-controls="navs-pills-justified-home" aria-selected="true">
                                                <i class="tf-icons bx bx-code"></i> Activities

                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                                data-bs-target="#navs-pills-justified-profile"
                                                aria-controls="navs-pills-justified-profile" aria-selected="false">
                                                <i class="tf-icons bx bx-sun"></i> Vacation
                                            </button>
                                        </li>

                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="navs-pills-justified-home"
                                            role="tabpanel">
                                            <div class="alert alert-info alert-dismissible fade show" role="alert">
                                                <strong>Heeey!</strong>
                                                You have reached the maximum number of appointments for that day.
                                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="progress mb-3 mt-3" role="progressbar" aria-label="Basic example"
                                                :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" :style="{ width: percentage + '%' }"></div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">You
                                                    Project</label>
                                                <div class="col-md-8">
                                                    <select type="text" class="form-control border-1 shadow-none"
                                                        v-model="selectedProject"
                                                        placeholder="What project are you working on now?">
                                                        <option value="" disabled>Select</option>
                                                        <option v-for="project in projects" :value="project.id_project"
                                                            :key="project.id_project">{{ project.projectname }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">
                                                    Activitie</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="text"
                                                        placeholder="What was the activity?" id="html5-text-input" />

                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="html5-date-input" class="col-md-4 col-form-label">Data
                                                    Activities</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="date" v-model="selectedDate"
                                                        @input="resetTime" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="html5-number-input" class="col-md-4 col-form-label">How
                                                    long?</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="number" v-model="timeSpent" min="0"
                                                        max="100" @input="updateProgress" />
                                                </div>
                                            </div>


                                            <div class="mb-3 row">
                                                <div class="col-md-8">
                                                    <div class="form-check form-switch mb-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="flexSwitchCheckChecked" v-model="showTextAreaBlocage" />
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">Some
                                                            blockage?</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="mb-3 row" v-if="showTextAreaBlocage">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">Which
                                                    block?</label>
                                                <div class="col-md-8">
                                                    <textarea class="form-control" id="html5-text-input"></textarea>

                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <div class="col-md-8">
                                                    <div class="form-check form-switch mb-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="flexSwitchCheckChecked" v-model="showTextAreaOverdue" />
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">Are you
                                                            overdue?</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="mb-3 row" v-if="showTextAreaOverdue">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">For what
                                                    reason?</label>
                                                <div class="col-md-8">
                                                    <textarea class="form-control" id="html5-text-input"></textarea>

                                                </div>
                                            </div>
                                            <hr>
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">Any
                                                    comments?</label>
                                                <div class="col-md-8">
                                                    <textarea class="form-control" id="html5-text-input"></textarea>

                                                </div>
                                            </div>
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-success" type="button">
                                                    <Script></Script>Send
                                                </button>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">Start
                                                    date</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="date" value="Sneat"
                                                        id="html5-text-input" />

                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="html5-text-input" class="col-md-4 col-form-label">End
                                                    date</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="date" value="Sneat"
                                                        id="html5-text-input" />

                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <div class="col-md-8">
                                                    <div class="form-check form-switch mb-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="flexSwitchCheckChecked" />
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">It's my
                                                            birthday</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-success" type="button">
                                                    <Script></Script>Send
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
                                            <FullCalendar :options='calendarOptions'>
                                                <template v-slot:eventContent='arg'>
                                                    <b>{{ arg.timeText }}</b>
                                                    <i>{{ arg.event.title }}</i>
                                                </template>
                                            </FullCalendar>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">

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
import Aside from '../../../components/aside/index.vue';
import Navbar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import api from '../../../services/projects/index'
export default {
    name: 'Main-Calendar',
    data() {
        return {
            projects: [],
            showTextAreaBlocage: false,
            showTextAreaOverdue: false,
            selectedDate: "",
            timeSpent: 0,
            maxTime: 480,
            calendarOptions: {
                plugins: [dayGridPlugin],
                initialView: 'dayGridMonth',

                weekends: false,
                events: [
                    { title: 'Meeting', start: new Date(), description: 'Vamos discutir ideias novas', className: 'meeting-event', color: '#ddd' }
                ],
                editable: true,
                eventStartEditable: true,
                eventDurationEditable: true
            }
        };
    },
    components: {
        Aside,
        Navbar,
        Footer,
        FullCalendar
    },
    computed: {
        percentage() {
            return (this.timeSpent / this.maxTime) * 100;
        }
    },
    mounted() {
        api.list().then((resposta) => {
            this.projects = resposta.data.response;
        });
    },
    methods: {
        resetTime() {
            this.timeSpent = 0;
        },
        updateProgress() { }
    }
}
</script>