<template id="Main-Account">
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
              <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">You /</span> Account</h4>
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
  
                  </ul>
                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="10"
                    aria-valuemax="100">
                    <div class="progress-bar w-10"></div>
                  </div>
  
                  <div class="card mb-4">
                    <h5 class="card-header">Profile Details</h5>
  
  
                    <img src="../../../assets/img/backgrounds/banner.png" style="position: absolute; margin-left: 37.9%;"
                      class="imf-fluid" alt="" srcset="">
  
                    <form @submit.prevent="handleAccount()">
                      <!-- Account -->
                      <div class="card-body">
  
                        <div class="d-flex align-items-start align-items-sm-center gap-4">
                          <div class="button-wrapper">
  
                            <div class="container" style="margin-bottom: 19px;">
                              <div class="row">
                                <div class="col-4">
                                  <section>
                                    <div class="preview">
                                    </div>
                                    <div class="preview-area">
                                      <button id="triggerUpload" class="btn btncircle btn-primary me-2 mb-4"><i
                                          style="margin-left: -10px;" class="bx bx-camera"></i></button>
                                      <input type="file" id="filePicker" />
                                    </div>
                                  </section>
                                </div>
                                <div class="col-6 mt-5">
                                  <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                              </div>
                            </div>
  
                          </div>
                        </div>
                      </div>
                      <hr class="my-0" />
                      <div class="card-body">
                        <div class="row" v-if="mainDetails">
                          <div class="mb-3 col-md-3">
                            <label for="organization" class="form-label">Position in the company</label>
                            <input type="text" class="form-control" id="organization" name="organization"
                              placeholder="Senior Developer" v-model="position" />
                          </div>
                          <div class="mb-3 col-md-3">
                            <label for="organization" class="form-label">Birthday</label>
                            <input type="date" class="form-control" id="organization" name="birthday" v-model="birthday" />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label class="form-label" for="phoneNumber">Phone Number</label>
                            <div class="input-group input-group-merge">
                              <span class="input-group-text">PT (+351)</span>
                              <input type="text" id="phoneNumber" name="phoneNumber" v-model="phone" class="form-control"
                                placeholder="202 555 011" />
                            </div>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" v-model="address" id="address" name="address"
                              placeholder="Address" />
                          </div>
  
                          <div class="mb-3 col-md-6">
                            <label for="zipCode" class="form-label">Zip Code</label>
                            <input type="text" class="form-control" id="zipCode" name="zipCode" v-model="zipcode"
                              placeholder="231465" maxlength="6" />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label class="form-label" for="country">Country of origin</label>
                            <select id="country" v-model="country" class="select2 form-select">
                              <option value="">Select</option>
                              <option value="Australia">Australia</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Canada">Canada</option>
                              <option value="China">China</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea, Republic of</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Russia">Russian Federation</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">United Arab Emirates</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="United States">United States</option>
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="language" class="form-label">Native Language</label>
                            <select id="language" v-model="language" class="select2 form-select">
                              <option value="">Select Language</option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="pt">Portuguese</option>
                            </select>
                          </div>
  
  
                        </div>
  
                        <div class="row" v-if="stacks">
  
                          <div class="col-md-6">
                            <h6>What are your FrontEnd stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in frontendStacks"
                                  :key="index">
                                  <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index" />
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
                            <h6>What are your BackEnd stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in backendStacks"
                                  :key="index">
                                  <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index" />
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
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in cloudStacks" :key="index">
                                  <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index" />
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
                            <h6>What are your Database stacks?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(stack, index) in databaseStacks"
                                  :key="index">
                                  <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index" />
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
  
  
                        </div>
  
                        <div class="row" v-if="projects">
  
                          <div class="col-md-6">
                            <h6>What project are you working on?</h6>
                            <div class="mb-3 row">
                              <div class="col-md-8">
                                <div class="form-check form-switch mb-2" v-for="(all, index) in allprojects"
                                  :key="index">
                                  <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index" />
                                  <label class="form-check-label" :for="'stackCheckbox' + index">{{ all.projectname }}</label>
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
                    
  
  
                        </div>
  
  
  
  
  
                        <div class="mt-2">
                          <button type="submit" class="btn btn-primary me-2">Save changes</button>
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
  import apiUpload from '../../services/upload/index'
  import apiProject from '../../services/projects/index'
  import api from '../../services/auth/index'
  export default {
    name: 'Main-Account',
    data() {
      return {
        showTextAreaBlocage: false,
        showTextAreaOverdue: false,
        position: '',
        phone: '',
        address: '',
        zipcode: '',
        country: '',
        language: '',
        birthday: '',
        selectedFile: null,
        previewUrl: null,
        mainDetails: true,
        stacks: false,
        projects: false,
        activeButton: 'account',
        allprojects: '',
  
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
              this.allprojects = resposta.data.response;
          });
  
  
      var triggerUpload = document.getElementById('triggerUpload'),
        upInput = document.getElementById('filePicker'),
        preview = document.querySelector('.preview');
  
      //force triggering the file upload here...
      triggerUpload.onclick = function () {
        upInput.click();
      };
  
  
      upInput.onchange = function (e) {
  
        var uploaded = this.value,
          ext = uploaded.substring(uploaded.lastIndexOf('.') + 1),
          ext = ext.toLowerCase(),
          fileName = uploaded.substring(uploaded.lastIndexOf("\\") + 1),
          accepted = ["jpg", "png", "gif", "jpeg"];
  
        /*
          ::Add in blank img tag and spinner
          ::Use FileReader to read the img data
          ::Set the image source to the FileReader data
        */
        function showPreview() {
          preview.innerHTML = "<div class='loadingLogo'></div>";
          preview.innerHTML += '<img id="img-preview" />';
          var reader = new FileReader();
          reader.onload = function () {
            var img = document.getElementById('img-preview');
            img.src = reader.result;
          };
          reader.readAsDataURL(e.target.files[0]);
          preview.removeChild(document.querySelector('.loadingLogo'));
          document.querySelector('.fileName').innerHTML = fileName + "<b> Uploaded!</b>";
        };
  
        //only do if supported image file
        if (new RegExp(accepted.join("|")).test(ext)) {
          showPreview();
        } else {
          preview.innerHTML = "";
          document.querySelector('.fileName').innerHTML = "Hey! Upload an image file, not a <b>." + ext + "</b> file!";
        }
  
      }
  
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
      handleFileChange(event) {
        // Quando o usuário seleciona um arquivo, armazene-o na variável selectedFile
        const file = event.target.files[0];
        console.log('mudamos')
        if (file) {
          // Cria um objeto FileReader
          const reader = new FileReader();
  
          // Configura um evento de carga para a leitura do arquivo
          reader.onload = () => {
            // Quando a leitura for concluída, a URL da imagem será definida
            this.previewUrl = reader.result;
          };
  
          // Lê o arquivo como uma URL de dados
          reader.readAsDataURL(file);
  
          // Armazena o arquivo selecionado na variável selectedFile
          this.selectedFile = file;
        } else {
          this.previewUrl = null;
          this.selectedFile = null;
        }
      },
      async uploadImage() {
        if (!this.selectedFile) {
          alert("Selecione um arquivo de imagem antes de enviar.");
          return;
        }
        const formData = new FormData();
        formData.append("avatar", this.selectedFile);
  
        const res = await apiUpload.uploadAvatar(formData)
  
        if (res.status == 201) {
          window.location.reload()
        }
  
      },
      async handleAccount() {
        let position = this.position
        let birthday = this.birthday
        let phone = this.phone
        let address = this.address
        let zipcode = this.zipcode
        let country = this.country
        let language = this.language
  
        await api.dados(position, birthday, phone, address, zipcode, country, language)
  
  
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
  
  .btncircle {
    border-radius: 500px;
    width: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    margin-top: -30px;
    margin-left: 5%;
  
  }
  
  input[type=file] {
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  
  .preview {
    position: relative;
    width: 120px;
    height: 120px;
    background: #f2f2f2;
    border-radius: 100%;
    overflow: hidden;
    border: 3px solid #E0E0E0;
  
    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
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
  
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  }
  </style>