<template id="All-Projects">
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
                        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">All /</span> Projects</h4>


                        <div class="card mt-5">
                            <h5 class="card-header">Projects <a href="javascript:;"
                                    class="btn btn-sm btn-outline-primary">Today</a></h5>
                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr class="text-center">
                                            <th>Project</th>
                                            <th>Manager</th>
                                            <th>Description</th>
                                            <th>Repository</th>
                                            <th>Date Start</th>
                                            <th>Date End</th>
                                            <th>Client</th>

                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr class="text-center" v-for="(project, index) in projects" :key="index">
                                            <td>{{ project.projectname }}</td>
                                            <td>{{ project.manager }}</td>
                                            <td>{{ project.descriptions }}</td>
                                            <td>{{ project.repository }}</td>
                                            <td>{{ project.data_start }}</td>
                                            <td>{{ project.data_end }}</td>
                                            <td>{{ project.client }}</td>

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
import api from '../../services/projects/index'

export default {
    name: 'All-Projects',
    components: {
        Aside,
        Navbar,
        Footer
    },
    data() {
        return {
            projects: [],
        };
    },
    mounted() {
        api.list().then((resposta) => {
            this.projects = resposta.data.response;
        });
    }

};
</script>
