<template id="Project">
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner">
                <!-- Register Card -->
                <div class="card">
                    <div class="card-body">
                        <!-- Logo -->
                        <div class="app-brand justify-content-center">
                            <a href="index.html" class="app-brand-link gap-2">
                                <span class="app-brand-logo demo">
                                    <img src="../../assets/img/logo/logoKbz.png" width="300" alt="">
                                </span>
                            </a>
                        </div>
                        <!-- /Logo -->
                        <h4 class="mb-2">Adventure starts here 🚀</h4>
                        <p class="mb-4">We need to know more about you</p>

                        <form id="formAuthentication" @submit.prevent="handleProject">
                            <div class="row">

                            </div>
                            <div class="col-md-12">
                                <h6>Which projects are you selected for?</h6>
                                <div class="mb-3 mt-3 row" style="max-height: 200px; overflow: auto;">
                                    <div class="col-md-12">
                                        <div class="form-check form-switch mb-2"
                                            v-for="(project, index) in selectedProjects" :key="index">
                                            <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index"
                                                v-model="project.selected" />
                                            <label class="form-check-label" :for="'stackCheckbox' + index">{{ project.name
                                            }}</label>
                                        </div>

                                    </div>
                                </div>

                            </div>



                            <button type="submit" class="btn btn-primary d-grid w-100">Save</button>
                        </form>


                    </div>
                </div>
                <!-- Register Card -->
            </div>
        </div>
    </div>
</template>
<script>
import api from '../../services/auth/index'
export default {
    name: 'Project',
    data() {
        return {
            selectedProjects: [],
            selectedProjectsList: [],
        };
    },

    mounted() {
        api
            .list()
            .then((resposta) => {
                this.selectedProjects = resposta.data.response.map((projeto) => {
                    return {
                        id_project: projeto.id_project,
                        name: projeto.projectname,
                        selected: false
                    };
                });
            })
            .catch((err) => console.log(err));
    },

    methods: {
        async handleProject() {
            this.selectedProjectsList = this.selectedProjects.filter((project) => project.selected);

            const idUser = localStorage.getItem('id');

            for (const selectedProject of this.selectedProjectsList) {
                const selectedProjectId = selectedProject.id_project;
                await api.projects([selectedProjectId], idUser);
                
            }
        }
    }
}
</script>