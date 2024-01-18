<template id="OverView">
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
                        <h4 class="fw-bold py-3 mb-2"><span class="text-muted fw-light">You /</span> Team</h4>
                        <div class="row">


                        </div>
                        <div class="row">

                            <div class="col-lg-6 col-md-12 col-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <span class="fw-semibold d-block mb-1">Total Team</span>
                                        <h3 class="card-title mb-2">0{{ totalTeam }}</h3>
                                        <small class="text-success fw-semibold"><i class="bx bx-code"></i>
                                            Team Developers</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <span class="fw-semibold d-block mb-1">Total Projets</span>
                                        <h3 class="card-title mb-2">{{ totalprojects }}</h3>
                                        <small class="text-danger fw-semibold"><i class="bx bx-flag"></i>
                                            Projects UE & Intern</small>
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <div class="col-md-3" v-for="(utilizador, index) in utilizadores" :key="index">
                                <div class="card mb-4">
                                    <div class="row">
                                        <div class="tags-status"><i class='bx bxs-sun'></i> Férias</div>
                                        <div class="tags-status-work"><i class='bx bxs-sun'></i> A Trabalhar</div>
                                    </div>
                                    <img src="../../../assets/img/backgrounds/bannerUser.png"
                                        style="border-top-right-radius: 10px; border-top-left-radius: 10px;" alt=""
                                        srcset="">
                                    <div class="container">
                                    </div>
                                    <div v-if="utilizador.avatar == null" class="preview-name">
                                        <h1 class="text-center" style="margin-top: 30%;">{{ utilizador.iniciais }}</h1>
                                    </div>
                                    <div v-if="utilizador.avatar != null" class="preview"></div>
                                    <p class="text-center mt-2"><i class='bx bx-user'></i>{{ utilizador.firstname }} {{
                                        utilizador.lastname }}</p>
                                    <p v-if="utilizador.id_nivel == 1" class="text-center"
                                        style="margin-top: -15px; font-weight: 200;"><i class='bx bx-briefcase-alt-2'></i>
                                        Manager</p>
                                    <p v-if="utilizador.id_nivel == 2" class="text-center"
                                        style="margin-top: -15px; font-weight: 200;"><i class='bx bx-briefcase-alt-2'></i>
                                        Developer</p>
                                    <p class="text-center" style="margin-top: -15px; font-weight: 200;"><i
                                            class='bx bx-envelope'></i> {{ utilizador.email }}</p>
                                    <div class="container">
                                        <div class="row">
                                            <div class="tags">#Singular-Routes</div>
                                            <div class="tags">#Digiprime</div>
                                            <div class="tags">#FMC</div>
                                            <div class="tags">#Reunião</div>
                                        </div>
                                    </div>

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
import apiUpload from '../../services/upload/index'
import apiProject from '../../services/projects/index'
import api from '../../services/auth/index'
export default {
    name: 'OverView',
    data() {
        return {
            utilizadores: '',
            totalTeam: '',
            totalprojects: ''

        };
    },
    components: {
        Aside,
        Navbar,
        Footer
    },
    mounted() {

        apiProject.list().then((resposta) => {
            this.totalprojects = resposta.data.response.length;
        });

        apiProject.list().then((resposta) => {
            this.allprojects = resposta.data.response;
        });

        api.users().then((resposta) => {

            const totalUsuarios = resposta.data.response.length;
            this.utilizadores = resposta.data.response.map(usuario => {

                const iniciais = usuario.firstname.charAt(0) + usuario.lastname.charAt(0);

                return {
                    ...usuario,
                    iniciais: iniciais.toUpperCase()
                };
            });
            this.totalTeam = totalUsuarios;
        });
    },


}
</script>

<style>
.tags-status {
    position: absolute;
    width: auto;
    background-color: #ff6726;
    right: 0;
    margin-top: 2%;
    color: #FFF;
}

.tags-status-work {
    position: absolute;
    width: auto;
    background-color: #17ec82;
    right: 0;
    margin-top: 2%;
    color: #FFF;
}

.preview-name {
    position: relative;
    width: 120px;
    height: 120px;
    background: #dbdbdb;
    justify-content: center !important;
    align-items: center !important;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -30px;
    border-radius: 100%;
    overflow: hidden;
    border: 3px solid #c9c9c9;

}

.preview {
    position: relative;
    width: 120px;
    height: 120px;
    background: #f2f2f2;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -30px;
    border-radius: 100%;
    overflow: hidden;
    border: 3px solid #E0E0E0;
}

.tags {
    width: auto;
    height: 16px;
    background-color: #3baacf;
    margin: 5px;
    color: #FFF;
    border-radius: 6px;
    font-size: 12px;
    text-align: center;
}
</style>
  
