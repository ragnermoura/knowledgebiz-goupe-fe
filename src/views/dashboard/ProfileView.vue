<template>
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
            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">You /</span> Profile</h4>
            <div class="row">


            </div>
            <div class="row">
              <div class="col-md-12">
                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                  <li class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'account' }" @click="handleAccount"><i
                        class="bx bx-user me-1"></i> Account</button>
                  </li>
                  <li class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'stacks' }" @click="handleStack"><i
                        class="bx bx-code me-1"></i> My stacks</button>
                  </li>
                  <li class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'projects' }"
                      @click="handleProjects"><i class="bx bx-circle me-1"></i>
                      Projects I work on</button>
                  </li>

                  <li class="nav-item">
                    <button data-bs-toggle="modal" data-bs-target="#ChangePass"
                      :class="{ 'nav-link': true, 'active': activeButton === 'changepass' }"><i
                        class="bx bx-circle me-1"></i>
                      Changer Password</button>
                  </li>




                  <div class="modal fade" id="ChangePass" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">New Password</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3 col-md-12">
                            <label for="organization" class="form-label">New Password</label>
                            <input type="password" class="form-control" placeholder="Password" v-model="password" />
                          </div>
                          <div class="mb-3 col-md-12">
                            <label for="organization" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" placeholder="Confirm Password"
                              v-model="confirmPass" />
                            <p class="text-danger" v-if="confirmPass && !passwordsMatch"><i class="fa fa-ban"></i>
                              Passwords
                              are not the same</p>
                            <p class="text-success" v-if="confirmPass && passwordsMatch"><i class="fa fa-check"></i> The
                              passwords check</p>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" @click="handleChangePass()" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>


                </ul>


                <div class="card mb-4">
                  <div style="display: flex; justify-content: flex-end;">
                    <img src="../../../assets/img/backgrounds/banner.png" class="img-fluid" style="width: 70%;" alt="">
                  </div>
                  <div class="d-flex align-items-start align-items-sm-center gap-4" style="position: absolute;">
                    <div class="button-wrapper">
                      <div class="container" style="margin-bottom: 19px;">
                        <div class="row" style="margin-top: 30%">
                          <div class="col-4 mt-4">
                            <div v-if="avatar == null" class="preview-name">
                              <h1 class="text-center" style="margin-top: 30%;">{{ iniciais }}</h1>
                            </div>
                            <div v-if="avatar != null" class="preview">
                              <img :src="'http://localhost:3000/' + avatar" width="120" height="120" alt="">
                            </div>
                          </div>
                          <div class="col-8 mt-4">
                            <p class="text-muted mb-0"><i class="bx bx-user"></i> {{ firstname }} {{ lastname }}</p>
                            <p class="text-muted mb-0"><i class="bx bx-cake"></i> {{ birthday }}</p>
                            <p class="text-muted mb-0"><i class="bx bx-envelope"></i> {{ email }}
                            </p>

                            <button type="button" data-bs-toggle="modal" data-bs-target="#editPhoto"
                              class="btn btn-primary mt-3"
                              style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                              Change photo
                            </button>

                            <div class="modal fade" id="editPhoto" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Change Photo</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="mb-3 col-md-12">
                                      <label class="form-label" for="phoneNumber">Upload your profile photo</label>
                                      <div class="input-group input-group-merge">
                                        <span class="input-group-text"><i class="bx bx-camera"></i></span>
                                        <input type="file" @change="onFileSelected" class="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" @click="handleUploadImage()" class="btn btn-primary">Save
                                      changes</button>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <form @submit.prevent="handleAtividade()">
                    <!-- Account -->
                    <div class="card-body" v-for="(utilizador, index) in utilizadores" :key="index">


                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                      <div class="row" v-if="mainDetails">
                        <div class="mb-3 col-md-6">
                          <label for="organization" class="form-label">Position in the company</label>
                          <input type="text" class="form-control" id="organization" name="organization"
                             disabled :value="fieldPosition" />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label class="form-label" for="phoneNumber">Phone Number</label>
                          <div class="input-group input-group-merge">
                            <span class="input-group-text">PT (+351)</span>
                            <input type="text" disabled id="phoneNumber" name="phoneNumber" :value="fieldPhone"
                              class="form-control" placeholder="202 555 011" />
                          </div>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="address" class="form-label">Address</label>
                          <input type="text" disabled class="form-control" :value="filedAddress" id="address" name="address"
                             />
                        </div>

                        <div class="mb-3 col-md-6">
                          <label for="zipCode" class="form-label">Zip Code</label>
                          <input type="text" disabled class="form-control" id="zipCode" name="zipCode" :value="filedZipcode"
                             maxlength="6" />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label class="form-label" for="country">Country of origin</label>
                          <input type="text" disabled class="form-control" :value="filedCountry" id="address"
                          />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="language" class="form-label">Native Language</label>
                          <input type="text" disabled class="form-control" :value="filedLanguage" id="address"/>
                        </div>


                      </div>

                      <div v-if="stacks">
                        <form class="row" @submit.prevent="handleChangeStacks">
                          <div class="col-md-6">
                            <h6>What are your FrontEnd stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in frontendStacks"
                                  :key="index">
                                  <input class="form-check-input" v-model="selectedStacks.frontend[stack]" type="checkbox"
                                    :id="'stackCheckbox' + index" />
                                  <label class="form-check-label" :for="'stackCheckbox' + index">{{ stack }}</label>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="col-md-6">
                            <h6>What are your BackEnd stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in backendStacks"
                                  :key="index">
                                  <input class="form-check-input" v-model="selectedStacks.backend[stack]" type="checkbox"
                                    :id="'stackCheckbox' + index" />
                                  <label class="form-check-label" :for="'stackCheckbox' + index">{{ stack }}</label>
                                </div>

                              </div>
                            </div>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2">
                                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                  <label class="form-check-label" for="flexSwitchCheckChecked">Other</label>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <h6>What are your Cloud stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in cloudStacks"
                                  :key="index">
                                  <input class="form-check-input" v-model="selectedStacks.cloud[stack]" type="checkbox"
                                    :id="'stackCheckbox' + index" />
                                  <label class="form-check-label" :for="'stackCheckbox' + index">{{ stack }}</label>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="col-md-6">
                            <h6>What are your Database stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in databaseStacks"
                                  :key="index">
                                  <input class="form-check-input" v-model="selectedStacks.database[stack]" type="checkbox"
                                    :id="'stackCheckbox' + index" />
                                  <label class="form-check-label" :for="'stackCheckbox' + index">{{ stack }}</label>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="col-md-6">
                            <button type="submit" class="btn btn-primary">Save
                              my stacks</button>
                          </div>
                        </form>
                      </div>

                      <div class="row" v-if="projects">

                        <div class="col-md-6">
                          <h6>What project are you working on?</h6>
                          <div class="mb-3 row">
                            <div class="col-md-8">
                              <div class="form-check form-switch mb-2"
                                v-for="(projectSelected, index) in projectSelecteds" :key="index">
                                <input class="form-check-input" checked v-model="selectedProject" type="checkbox"
                                  :id="'stackCheckbox' + index" />
                                <label class="form-check-label" :for="'stackCheckbox' + index">{{ projectSelected
                                }}</label>
                              </div>

                            </div>
                          </div>

                        </div>



                      </div>
                    </div>
                  </form>
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
import VueJwtDecode from "vue-jwt-decode";
import apiProject from '../../services/projects/index';
import apiUpload from '../../services/upload/index';
import api from '../../services/auth/index';
import apiStack from '../../services/stack/index';
export default {
  name: 'Profile',
  data() {
    return {
      showTextAreaBlocage: false,
      showTextAreaOverdue: false,
      selectedProjects: true,

      projectSelecteds: [],

      position: '',
      phone: '',
      address: '',
      zipcode: '',
      country: '',
      language: '',
      file: '',
      password: '',
      confirmPass: '',


      mainDetails: true,
      stacks: false,
      projects: false,
      activeButton: 'account',
      allprojects: '',

      frontendStacks: ['React', 'Angular', 'Vue', 'Flutter Web', 'Laravel', 'React-Native', 'CSS', 'JavaScript', 'HTML5'],
      backendStacks: ['Node.js', 'Python', 'Java', 'Ruby', 'PHP', 'C#', 'Go', 'Scala', 'Kotlin'],
      cloudStacks: ['Azure', 'AWS (Amazon Web Services)', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean'],
      databaseStacks: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'Oracle Database', 'Redis', 'Cassandra', 'Firebase'],

      selectedStacks: {
        frontend: {},
        backend: {},
        cloud: {},
        database: {}
      },

      idUser: '',
      iniciais: '',
      avatar: '',
      firstname: '',
      lastname: '',
      birthday: '',
      email: '',

      fieldPosition: '',
      fieldPhone: '',
      filedCountry: '',
      filedAddress: '',
      filedZipcode: '',
      filedLanguage: '',


    };
  },
  components: {
    Aside,
    Navbar,
    Footer
  },
  computed: {
    passwordsMatch() {
      return this.password === this.confirmPass;
    }
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
    let user = decode.id_user

    api.userslistsUnic(user).then((resposta) => {
      const usuarios = resposta.data.response;
      const iniciais = usuarios.firstname.charAt(0) + usuarios.lastname.charAt(0);

      this.avatar = usuarios.avatar
      this.firstname = usuarios.firstname
      this.lastname = usuarios.lastname
      this.birthday = usuarios.birthday
      this.email = usuarios.email
      this.iniciais = iniciais.toUpperCase()
      this.fieldPosition = usuarios.position
      this.fieldPhone = usuarios.phonenumber
      this.filedAddress = usuarios.address
      this.filedZipcode = usuarios.zipcode
      this.filedCountry = usuarios.country
      this.filedLanguage = usuarios.language


    });

    apiStack.lists().then((resposta) => {
      // Reset selectedStacks
      this.selectedStacks = {
        frontend: {},
        backend: {},
        cloud: {},
        database: {}
      };

      // Extrai apenas os nomes das stacks para um novo array
      const userStacks = resposta.data.response.map(stackObj => stackObj.stackname);

      // Itera sobre cada categoria de stack
      Object.keys(this.selectedStacks).forEach((category) => {
        this[category + 'Stacks'].forEach((stack) => {
          // Marca o checkbox se o nome da stack estiver no array userStacks
          this.selectedStacks[category][stack] = userStacks.includes(stack);
        });
      });
    });

    apiProject.myproject().then((resposta) => {

      let res = resposta.data.response.map(projeto => projeto.projectname);

      this.projectSelecteds = res
    });


  },
  methods: {
    handleStack() {
      this.mainDetails = false
      this.stacks = true
      this.projects = false
      this.activeButton = 'stacks';
    },
    handleAccount() {
      this.mainDetails = true
      this.stacks = false
      this.projects = false
      this.activeButton = 'account';
    },
    handleProjects() {
      this.mainDetails = false
      this.stacks = false
      this.projects = true
      this.activeButton = 'projects';
    },

    onFileSelected(event) {
      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
      }
    },
    async handleUploadImage(file) {
      try {
        const formData = new FormData();
        formData.append('avatar', this.file);

        const response = await apiUpload.uploadAvatar(formData);
        location.reload();

      } catch (error) {
        console.error("Erro no upload:", error);
      }
    },
    async handleChangeStacks() {
      let selectedStackNames = [];

      for (let category in this.selectedStacks) {
        selectedStackNames.push(...Object.keys(this.selectedStacks[category]).filter(stack => this.selectedStacks[category][stack]));
      }

      const userData = {
        id_user: this.idUser,
        stackname: selectedStackNames
      };

      const res = await apiStack.cadastro(userData)

      setTimeout(() => {
        location.reload();
      }, 3000);

    },

    async handleChangePass() {
      
      let password = this.password
      let idUser = this.idUser

      await api.editPass(password, idUser)
    }

  }
}
</script>
  
<style>
.btn {
  background: #0049ff;
  color: #fff;
}

.preview-area {
  width: 20%;
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

.loadingLogo {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -35px;
  margin-top: -35px;
  width: 70px;
  height: 70px;
  border: 5px solid #69CD9B;
  border-top: 5px solid #2FDEC1;
  border-radius: 100%;
  animation: spin 500ms linear infinite;
}


@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}</style>