<template id="OverView-Reports">
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

                            <div class="col-lg-4 col-md-12 col-6 mb-2">
                                <div class="card">
                                    <div class="card-body">
                                        <span class="fw-semibold d-block mb-5">Total Persons for Projects</span>
                                        <canvas id="myChart"></canvas>
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
    name: 'OverView-Reports',
    data() {
        return {

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

        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                   
                    data: [12, 19, 3, 5, 2, 3],
                
                }]
            },
            options: {
                 responsive: true,
               
            }
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
  
