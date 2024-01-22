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
                            <div class="col-md-8">

                                <div class="card mb-4">
                                    <div class="card-body">

                                        <div v-if="success" class="alert alert-success" role="alert">
                                            Project successfully registered
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-md-6">
                                                <label for="firstName" class="form-label">Project Name</label>
                                                <input class="form-control" type="text" v-model="projectname" id="firstName"
                                                    placeholder="Ex.: Xmanai" autofocus />
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="organization" class="form-label">Manager</label>
                                                <select v-model="selectedUser" id="language" class="select2 form-select">
                                                    <option value="" selected disabled>Select Manager</option>
                                                    <option value="To be determined">To be determined</option>

                                                    <option v-for="(user, index) in selectUsers"
                                                        :value="user.firstname + ' ' + user.lastname" :key="index">
                                                        {{ user.firstname }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="mb-3 col-md-12">
                                                <label for="lastName" class="form-label">Descriptions</label>
                                                <textarea class="form-control" v-model="description" rows="3" type="text"
                                                    name="lastName" id="lastName"
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
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Client</label>
                                                <input type="text" placeholder="Name client" v-model="client"
                                                    class="form-control" id="organization" name="organization" />
                                            </div>
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Stack Fron-End</label>
                                                <input type="text" placeholder="Name client" v-model="client"
                                                    class="form-control" id="organization" name="organization" />
                                            </div>
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Stack Back-End</label>
                                                <input type="text" placeholder="Name client" v-model="client"
                                                    class="form-control" id="organization" name="organization" />
                                            </div>
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Stack Cloud</label>
                                                <input type="text" placeholder="Name client" v-model="client"
                                                    class="form-control" id="organization" name="organization" />
                                            </div>


                                        </div>


                                    </div>
                                    <!-- /Account -->
                                </div>

                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="row">

                                            <div class="col-10">
                                                <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">
                                                Team operational/</span> Project</h5>
                                            </div>
                                            <div class="col-2 mt-3" style="position:absolute; right: 0">
                                                
                                            <button @click="addInput" class="btn btn-primary me-2" style="width: 15px; height: 30px; justify-content: center; align-items: center; text-align: center"><i style="margin-left: -9px; margin-right: auto; display:block;" class="bx bx-plus"></i></button>

                                                <button @click="removeInput"
                                                class="btn btn-danger me-2" style="background-color: rgb(230, 75, 40); width: 15px; height: 30px; justify-content: center; align-items: center; text-align: center"><i style="margin-left: -9px; margin-right: auto; display:block;" class="bx bx-minus"></i></button>
                                        </div>
                                      </div>

                                      
                                        <div class="row" v-for="(input, index) in userPositions" :key="index">
                                            <!-- People Input -->
                                            <div class="mb-3 col-md-6">
                                                <label for="organization" class="form-label">People</label>
                                                <select v-model="input.user" class="select2 form-select">
                                                    <option value="" disabled>Select People</option>
                                                    <option value="To be determined">To be determined</option>
                                                    <option v-for="(user, uIndex) in selectUsers" :value="user.firstname"
                                                        :key="uIndex">
                                                        {{ user.firstname }}
                                                    </option>
                                                </select>
                                            </div>
                                            <!-- Position Input -->
                                            <div class="mb-3 col-md-6">
                                                <label for="organization" class="form-label">Position</label>
                                                <select v-model="input.position" class="select2 form-select">
                                                    <option value="" disabled>Select position</option>
                                                    <option>TechLead</option>
                                                    <option>Developer</option>
                                                </select>
                                            </div>


                                        </div>
                                        <!-- Add/Remove Buttons -->




                                    </div>
                                </div>




                            </div>

                            <div class="col-md-4">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="col-md-12">
                                            <label for="firstName" class="form-label">Project logo</label>
                                            <section>
                                                <div class="preview">
                                                </div>
                                                <div class="preview-area">
                                                    <button id="triggerUpload"
                                                        class="btn btncircle btn-primary me-2 mb-4"><i
                                                            style="margin-left: -10px;" class="bx bx-camera"></i></button>
                                                    <input type="file" id="filePicker" />
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <!-- /Account -->


                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="col-md-12">
                                            <label for="firstName" class="form-label">Members of Project</label>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="picture-manager"></div>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="tags text-center">Manager</div>
                                                        </div>
                                                    </div>
                                                    <div class="barra-vertical"></div>
                                                    <div class="picture-manager mt-2"></div>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="tags text-center">Techlead</div>
                                                        </div>
                                                    </div>
                                                    <div class="barra-vertical"></div>
                                                    <div class="barra-horizontal"></div>

                                                </div>

                                                <div class="col-md-3">
                                                    <div class="barra-vertical-min"></div>
                                                    <div class="picture-dev mt-2"></div>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="tags-dev text-center">Dev</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="barra-vertical-min"></div>
                                                    <div class="picture-dev mt-2"></div>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="tags-dev text-center">Dev</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="barra-vertical-min"></div>
                                                    <div class="picture-dev mt-2"></div>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="tags-dev text-center">Dev</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="barra-vertical-min"></div>
                                                    <div class="picture-dev mt-2"></div>
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="tags-dev text-center">Dev</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="mt-2 col-md-6">
                                                <button type="submit" @click="handleProject" class="btn btn-primary me-2"
                                                    style="width: 100%;">Save</button>
                                            </div>
                                            <div class="mt-2 col-md-6">
                                                <button type="reset" style="width: 100%;"
                                                    class="btn btn-outline-secondary">Cancel</button>
                                            </div>
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
            success: false,
            userPositions: [
                { user: '', position: '' }
            ],


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



        addInput() {
            this.userPositions.push({ user: '', position: '' });
        },
        removeInput() {
            if (this.userPositions.length > 1) {
                this.userPositions.pop();
            }
        }

    }




}
</script>
<style>
.picture-manager {
    width: 70px;
    height: 70px;
    background-color: #b0b0b0;
    border-radius: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border: 4px solid #747474;

}

.picture-dev {
    width: 70px;
    height: 70px;
    background-color: #b0b0b0;
    border-radius: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px !important;
    margin-bottom: 30px;
    display: block;
    border: 4px solid #747474;

}

.barra-vertical {
    border-left: 2px solid #747474;
    width: 1px;
    height: 30px;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.barra-vertical-min {
    border-left: 2px solid #747474;
    width: 2px;
    height: 20px;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -30px;


}

.barra-horizontal {
    border-top: 2px solid #747474;
    width: 80%;
    height: 30px;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
}



.btn {
    background: #0049ff;
    color: #fff;
}

.preview-area {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.btncircle {
    border-radius: 500px;
    width: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    margin-top: -30px;
    margin-left: 48%;


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
    margin-left: auto;
    margin-right: auto;
    display: block;

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


.tags {
    width: auto;
    height: 16px;
    background-color: #27499a;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -10px;
    margin-bottom: 1%;

    color: #FFF;
    border-radius: 6px;
    font-size: 12px;
    text-align: center;
}

.tags-dev {
    width: auto;
    height: 16px;
    background-color: #1b1b1b;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -45px;
    color: #FFF;
    border-radius: 6px;
    font-size: 12px;
    text-align: center;
}
</style>