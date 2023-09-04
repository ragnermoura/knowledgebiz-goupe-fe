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
                    <a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i> Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/account-user-stacks"><i class="bx bx-code me-1"></i> Stacks</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/account-user-connections"><i class="bx bx-link-alt me-1"></i>
                      Connections</a>
                  </li>
                </ul>
                <div class="card mb-4">
                  <h5 class="card-header">Profile Details</h5>
                  <!-- Account -->
                  <div class="card-body">
                    <div class="d-flex align-items-start align-items-sm-center gap-4">
                      <img
                        :src="previewUrl"
                          alt="user-avatar"
                          class="d-block rounded"
                          height="100"
                          width="100"
                          id="uploadedAvatar"
                        />
                        <div class="button-wrapper">
                          <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                            <span class="d-none d-sm-block">Upload new photo</span>
                            <i class="bx bx-upload d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              @change="handleFileChange"
                              accept="image/png, image/jpeg"
                            />
                          </label>
                        <button type="button" class="btn btn-outline-secondary account-image-reset mb-4">
                          <i class="bx bx-reset d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Reset</span>
                        </button>

                        <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                  </div>
                  <hr class="my-0" />
                  <div class="card-body">
                    <form id="formAccountSettings" @submit.prevent="handleProject">
                      <div class="row">



                        <div class="mb-3 col-md-6">
                          <label for="organization" class="form-label">Position in the company</label>
                          <input type="text" class="form-control" id="organization" name="organization"
                            placeholder="Senior Developer" v-model="position" />
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
                          <label for="language" class="form-label">Language</label>
                          <select id="language" v-model="language" class="select2 form-select">
                            <option value="">Select Language</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="pt">Portuguese</option>
                          </select>
                        </div>


                      </div>
                      <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Save changes</button>
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
import Aside from '../../../components/aside/index.vue';
import Navbar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import apiUpload from '../../../services/upload/index'

import api from '../../../services/auth/index'
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
      selectedFile: null,
            previewUrl: null, // Arquivo selecionado pelo usuári

    };
  },
  components: {
    Aside,
    Navbar,
    Footer
  },
  method: {
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

      if(res.status == 201){
        window.location.reload()
      }

    },
    async handleProject() {

        
      if(this.selectedFile){
        if (!this.selectedFile) {
        alert("Selecione um arquivo de imagem antes de enviar.");
        return;
      }
      const formData = new FormData();
      formData.append("avatar", this.selectedFile);

      const res = await apiUpload.uploadAvatar(formData)

      }

      let position = this.position
      let phone = this.phone
      let address = this.address
      let zipcode = this.zipcode
      let country = this.country
      let language = this.language

      await api.dados(position, phone, address, zipcode, country, language)

  
    }

  }
}
</script>