<template id="Logs">
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



                        </div>
                        <div class="row">

                        </div>
                        <div class="card mt-5">
                            <h5 class="card-header">Summary <a href="javascript:;"
                                    class="btn btn-sm btn-outline-primary">Today</a></h5>
                            <div class="table-responsive text-nowrap">
                                <div class="row container mb-4">
                                    <div class="mb-3 col-md-8">
                                        <label for="organization" class="form-label">Search by the name of the project or
                                            activity</label>
                                        <input type="text" class="form-control" id="organization" name="organization"
                                            placeholder="Senior Developer" v-model="searchQuery"
                                            @input="searchActivities" />
                                    </div>
                                    <div class="mb-3 col-md-4">
                                        <label for="organization" class="form-label">Search by date</label>
                                        <input type="date" class="form-control" id="organization" name="organization"
                                            placeholder="Senior Developer" v-model="searchDate" @input="searchActivities" />
                                    </div>

                                </div>

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
                                        <tr class="text-center" v-for="(atividade, index) in filteredActivities"
                                            :key="index">
                                            <td>
                                                <i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>{{ atividade.tb_project.projectname }}</strong>
                                            </td>
                                            <td>{{ atividade.activity }}</td>
                                            <td>{{ atividade.data_activities }}</td>
                                            <td>{{ atividade.time }}</td>
                                            <td class="text-center">{{ atividade.percentage }}%</td>
                                            <td>
                                                <span class="badge bg-label-success me-1">Completed</span>
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a data-bs-toggle="modal"
                                                            :data-bs-target="`#modalEdit${atividade.id_activities}`"
                                                            class="dropdown-item" href="javascript:void(0);">
                                                            <i class="bx bx-edit-alt me-1"></i> Edit
                                                        </a>
                                                        <a class="dropdown-item"
                                                            @click="handleDelete(atividade.id_activities)"
                                                            href="javascript:void(0);">
                                                            <i class="bx bx-trash me-1"></i> Delete
                                                        </a>
                                                    </div>
                                                    <div class="modal fade" :id="`modalEdit${atividade.id_activities}`"
                                                        aria-labelledby="modalToggleLabel" tabindex="-1"
                                                        style="display: none" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="modalToggleLabel">Edit your
                                                                        time</h5>
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
                                                                                class="form-label">Activity</label>
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
                                                                        <hr />
                                                                    </div>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button class="btn btn-warning"
                                                                        type="submit">Edit</button>
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
import Aside from '../../../components/aside/index.vue';
import Navbar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import VueJwtDecode from "vue-jwt-decode";
import api from '../../../services/projects/index'
import apirest from '../../../services/activities/index'



export default {
    name: 'MainDashboard',
    components: {
        Aside,
        Navbar,
        Footer
    },
    data() {
        return {
            atividades: [],
            filteredActivities: [], 
            searchQuery: '',
            searchDate: '',
        };
    },
    mounted() {

        let token = localStorage.getItem('token')
        let decode = VueJwtDecode.decode(token);

        let name = decode.firstname
        let lastname = decode.lastname

        this.name = name
        this.idUser = decode.id_user


        api.list().then((resposta) => {
            this.projects = resposta.data.response;
        });

        apirest.listatividadefull().then((resposta) => {
            this.atividades = resposta.data.response;
        });






    },


    methods: {

        searchActivities() {
            const filteredActivities = this.atividades.filter(atividade => {
                const includesQuery = atividade.tb_project.projectname.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesDate = this.searchDate ? atividade.data_activities === this.searchDate : true;
                return includesQuery && matchesDate;
            });

            this.filteredActivities = filteredActivities;
        },

    },
}

</script>

