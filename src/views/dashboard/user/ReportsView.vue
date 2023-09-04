<template id="Reposts">
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
                        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">You /</span> Team</h4>


                        <div class="card mt-5">
                            <h5 class="card-header">Report</h5>
                            <div class="table-responsive text-nowrap">
                                <div class="row container">
                                    <div class="mb-3 col-md-5">
                                        <label for="firstName" class="form-label">Name developer</label>
                                        <select v-model="selectedUser" id="language" class="select2 form-select">
                                            <option value="" selected disabled>Select Developerr</option>
                                            <option v-for="(user, index) in selectUsers" :value="user.firstname"
                                                :key="index">
                                                {{ user.firstname }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-check form-switch mt-4" style="margin-top: 23% !important;">
                                            <input class="form-check-input" v-model="calendar" type="checkbox"
                                                :id="'stackCheckbox'" />
                                            <label class="form-check-label" :for="'stackCheckbox'">Last 7 days</label>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-4" v-if="!calendar">
                                        <label for="selectedDate" class="form-label">Select Date</label>
                                        <input class="form-control" type="date" v-model="selectedDate" id="selectedDate"
                                            placeholder="Select a date" autofocus />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="card mt-5">
                            <h5 class="card-header">Result</h5>
                            <div class="table-responsive text-nowrap">
                                <div class="row container">
                                    <table class="table">
                                    <thead>
                                        <tr class="text-center">
                                            <th>Project</th>
                                            <th>Date</th>
                                            <th>Are you overdue?</th>
                                            <th>Which block?</th>
                                            <th>Any comments?</th>
                                            <th>Time spent</th>
                                            <th>Percents %</th>
                                            

                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr class="text-center" v-for="(project, index) in projects" :key="index">
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            

                                        </tr>

                                    </tbody>
                                </table>
                                    
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
import Aside from '../../../components/aside/index.vue';
import Navbar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import api from '../../../services/projects/index'

export default {
    name: 'Reports',
    components: {
        Aside,
        Navbar,
        Footer
    },
    data() {
        return {
            projects: [],
            calendar: false,
            selectedDate: ""
        };
    },
    mounted() {
        api.list().then((resposta) => {
            this.projects = resposta.data.response;
        });
    }

};
</script>
