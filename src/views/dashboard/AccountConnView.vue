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
            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">You /</span> Connections</h4>
            <div class="row">


            </div>
            <div class="row">
              <div class="col-md-12">
                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                  <li class="nav-item">
                    <a class="nav-link" href="/account-user"><i class="bx bx-user me-1"></i>
                      Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/account-user-stacks"><i class="bx bx-code me-1"></i> Stacks</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/account-user-connections"><i class="bx bx-link-alt me-1"></i>
                      Connections</a>
                  </li>
                </ul>
                <div class="card mb-12">
                  <h5 class="card-header">Your connections</h5>
                  <!-- Account -->
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-12 mb-md-0 mb-4">
                        <div class="card">
                          <h5 class="card-header">Connected Accounts</h5>
                          <div class="card-body">
                            <p>Display content from your connected accounts on your site</p>
                            <!-- Connections -->
                            <div class="d-flex mb-3">
                              <div class="flex-shrink-0">
                                <img src="../../../../assets/img/icons/brands/google.png" alt="google" class="me-3"
                                  height="30" />

                              </div>
                              <div class="flex-grow-1 row">
                                <div class="col-9 mb-sm-0 mb-2">
                                  <h6 class="mb-0">Google</h6>
                                  <small class="text-muted">Calendar and contacts</small>
                                </div>
                                <div class="col-3 text-end">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input float-end" type="checkbox" role="switch" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex mb-3">
                              <div class="flex-shrink-0">
                                <img src="../../../../assets/img/icons/brands/slack.png" alt="slack" class="me-3"
                                  height="30" />
                              </div>
                              <div class="flex-grow-1 row">
                                <div class="col-9 mb-sm-0 mb-2">
                                  <h6 class="mb-0">Slack</h6>
                                  <small class="text-muted">Communication</small>
                                </div>
                                <div class="col-3 text-end">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input float-end" type="checkbox" role="switch" checked />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex mb-3">
                              <div class="flex-shrink-0">
                                <img src="../../../../assets/img/icons/brands/github.png" alt="github" class="me-3"
                                  height="30" />
                              </div>
                              <div class="flex-grow-1 row">
                                <div class="col-9 mb-sm-0 mb-2">
                                  <h6 class="mb-0">Github</h6>
                                  <small class="text-muted">Manage your Git repositories</small>
                                </div>
                                <div class="col-3 text-end">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input float-end" type="checkbox" role="switch" />
                                  </div>
                                </div>
                              </div>
                            </div>


                            <!-- /Connections -->
                          </div>
                        </div>
                      </div>



                    </div>



                    <hr>
                    <button type="submit" class="btn btn-primary deactivate-account">Save updates</button>

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
export default {
  name: 'Main-Account',
  data() {
    return {
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
  }
}
</script>