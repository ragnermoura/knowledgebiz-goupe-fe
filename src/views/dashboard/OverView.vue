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
                            <div class="row col-12 mb-3" style="width: 100%;">
                                <div class="mt-2 col-12" style="display: flex; justify-content: flex-end;">
                                    <button type="button" class="btn  me-2" @click="handleList"><i
                                            class='bx bx-list-ul'></i> List</button>
                                    <button type="button" class="btn  me-2" @click="handleCard"><i
                                            class='bx bxs-layout'></i> Cards</button>
                                </div>

                            </div>
                            <a v-if="card" style="text-decoration: none; color: #566a7f" class="col-md-3"
                                v-for="(utilizador, index) in utilizadores" :key="index" data-bs-toggle="modal"
                                :href="`#ModalUser${utilizador.id_user}`">
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
                                    <div v-if="utilizador.avatar != null" class="preview">
                                        <img :src="'http://localhost:3000/' + utilizador.avatar" width="120" height="120"
                                            alt="">
                                    </div>
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


                                <div class="modal fade" :id="`ModalUser${utilizador.id_user}`" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                            data-bs-target="#home" type="button" role="tab"
                                                            aria-controls="home" aria-selected="true">Home</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                            data-bs-target="#profile" type="button" role="tab"
                                                            aria-controls="profile" aria-selected="false">Profile</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                            data-bs-target="#contact" type="button" role="tab"
                                                            aria-controls="contact" aria-selected="false">Contact</button>
                                                    </li>
                                                </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade show active" id="home" role="tabpanel"
                                                        aria-labelledby="home-tab">...</div>
                                                    <div class="tab-pane fade" id="profile" role="tabpanel"
                                                        aria-labelledby="profile-tab">...</div>
                                                    <div class="tab-pane fade" id="contact" role="tabpanel"
                                                        aria-labelledby="contact-tab">...</div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </a>

                            <div v-if="list">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">Projects</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(utilizador, index) in utilizadores">

                                                    <td>Mark</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>


                                            </tbody>
                                        </table>
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
            totalprojects: '',
            showTextAreaBlocage: false,
            showTextAreaOverdue: false,
            firstname: '',
            lastname: '',
            password: '',
            confirmPass: '',
            position: '',
            phone: '',
            address: '',
            email: '',
            isLoading: false,
            zipcode: '',
            country: '',
            language: '',
            birthday: '',
            level: '',
            selectedFile: null,
            previewUrl: null,
            mainDetails: true,
            finances: false,
            evaluation: false,
            vacations: false,
            stacks: false,
            projects: false,
            msg_success: false,
            msg_email_error: false,
            activeButton: 'account',
            allprojects: '',
            addressQuery: '',
            addressResults: [],
            showAddressResults: true,
            list: false,
            card: true,

            frontendStacks: ['React', 'Angular', 'Vue', 'Flutter Web', 'Laravel', 'React-Native', 'CSS', 'JavaScript', 'HTML5'],
            backendStacks: ['Node.js', 'Python', 'Java', 'Ruby', 'PHP', 'C#', 'Go', 'Scala', 'Kotlin'],
            cloudStacks: ['Azure', 'AWS (Amazon Web Services)', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean'],
            databaseStacks: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'Oracle Database', 'Redis', 'Cassandra', 'Firebase']

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

    methods: {

        selectAddress(result) {
            this.address = result.formatted;
            let zipCode = result.components.postcode || '';
            this.zipcode = zipCode;
            this.addressResults = [];
            this.showAddressResults = true;
        },
        async searchAddress() {
            if (!this.addressQuery) return;

            this.isLoading = true;
            try {
                const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
                    params: {
                        q: this.addressQuery,
                        key: '1f64d822c44341f38692b2b37ec70e64',
                        language: 'pt',
                        countrycode: 'pt',
                    },
                });
                this.addressResults = response.data.results;
            } catch (error) {
                console.error('Error fetching address:', error);
            } finally {
                this.isLoading = false;
            }
        },


        handleList() {
            this.list = true
            this.card = false
        },

        handleCard() {
            this.list = false
            this.card = true
        },

        handleAccount() {
            this.mainDetails = true
            this.stacks = false
            this.projects = false
            this.finances = false
            this.evaluation = false
            this.vacations = false
            this.activeButton = 'account';
        },
        handleStack() {
            this.mainDetails = false
            this.stacks = true
            this.projects = false
            this.activeButton = 'stacks';
        },
        handleProjects() {
            this.projects = true
            this.mainDetails = false
            this.stacks = false
            this.finances = false
            this.evaluation = false
            this.vacations = false
            this.activeButton = 'projects';
        },
        handleFinances() {
            this.finances = true
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.evaluation = false
            this.vacations = false
            this.activeButton = 'finances';
        },
        handleEvaluations() {
            this.evaluation = true
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.finances = false
            this.vacations = false
            this.activeButton = 'evaluation';
        },
        handleVacations() {
            this.vacations = true
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.finances = false
            this.evaluation = false
            this.activeButton = 'vacations';
        },
    }


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
}</style>
  
