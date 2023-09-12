<template id="Project-cad">
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
                        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">New /</span> Project</h4>
                        <div class="row">


                        </div>
                        <div class="row">
                            <div class="col-md-12">

                                <div class="card mb-4">
                                    <h5 class="card-header">Project Details</h5>
                                    <!-- Account -->
                                    <div class="card-body">

                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body">
                                        <form id="formAccountSettings" @submit.prevent="handleProject">
                                            <div v-if="success" class="alert alert-success" role="alert">
                                                Project successfully registered
                                            </div>
                                            <div class="row">
                                                <div class="mb-3 col-md-6">
                                                    <label for="firstName" class="form-label">Project Name</label>
                                                    <input class="form-control" type="text" v-model="projectname"
                                                        id="firstName" placeholder="Ex.: Xmanai" autofocus />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="organization" class="form-label">Manager</label>
                                                    <select v-model="selectedUser" id="language"
                                                        class="select2 form-select">
                                                        <option value="" selected disabled>Select Manager</option>
                                                        <option value="To be determined" >To be determined</option>

                                                        <option v-for="(user, index) in selectUsers" :value="user.firstname"
                                                            :key="index">
                                                            {{ user.firstname }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="mb-3 col-md-12">
                                                    <label for="lastName" class="form-label">Descriptions</label>
                                                    <textarea class="form-control" v-model="description" rows="3"
                                                        type="text" name="lastName" id="lastName"
                                                        placeholder="Description of project"></textarea>

                                                </div>

                                                <div class="mb-3 col-md-12">
                                                    <label class="form-label" for="phoneNumber">Repository</label>
                                                    <div class="input-group input-group-merge">
                                                        <span class="input-group-text"></span>
                                                        <input type="text" v-model="repository" class="form-control"
                                                            placeholder="https://..." />
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="address" class="form-label">Date Start</label>
                                                    <input type="date" v-model="dateStart" class="form-control" id="address"
                                                        name="address" placeholder="Address" />
                                                </div>

                                                <div class="mb-3 col-md-6">
                                                    <label for="zipCode" class="form-label">Date End</label>
                                                    <input type="date" v-model="dateEnd" class="form-control" id="zipCode"
                                                        name="zipCode" placeholder="231465" maxlength="6" />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="organization" class="form-label">Client</label>
                                                    <input type="text" placeholder="Name client" v-model="client"
                                                        class="form-control" id="organization" name="organization" />
                                                </div>



                                            </div>
                                            <div class="mt-2">
                                                <button type="submit" class="btn btn-primary me-2">Save</button>
                                                <button type="reset" class="btn btn-outline-secondary">Cancel</button>
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
import apip from '../../services/projects/index'
export default {
    name: 'Project-cad',
    data() {
        return {
            showTextAreaBlocage: false,
            showTextAreaOverdue: false,
            selectUsers: [],
            selectedUser: null,
            projectname: '',
            description: '',
            repository: '',
            dateStart: '',
            dateEnd: '',
            client: '',
            success: false
        };
    },
    components: {
        Aside,
        Navbar,
        Footer
    },

    mounted() {
        api.users().then((resposta) => {
            this.selectUsers = resposta.data.response;
        });


    },
    methods: {

        async handleProject() {

        
                let projectname = this.projectname
                let manager = this.selectedUser
                let description = this.description
                let repository = this.repository
                let dateStart = this.dateStart
                let dateEnd = this.dateEnd
                let client = this.client

                const res = await apip.project(
                    projectname,
                    manager,
                    description,
                    repository,
                    dateStart,
                    dateEnd,
                    client
                );

                this.success = true

                setTimeout(() => {
                    location.reload();
                }, 3000);

            },
        }
    



}
</script>