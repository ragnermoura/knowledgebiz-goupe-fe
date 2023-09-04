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
                                        <a class="nav-link" href="/account-user-stacks"><i
                                                class="bx bx-code me-1"></i> Stacks</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="/account-user-connections"><i class="bx bx-link-alt me-1"></i>
                                            Connections</a>
                                    </li>
                                </ul>
                                <div class="card mb-4">
                                    <h5 class="card-header">Your connections</h5>
                                    <!-- Account -->
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-md-0 mb-4">
                      <div class="card">
                        <h5 class="card-header">Connected Accounts</h5>
                        <div class="card-body">
                          <p>Display content from your connected accounts on your site</p>
                          <!-- Connections -->
                          <div class="d-flex mb-3">
                            <div class="flex-shrink-0">
                              <img src="../../../../src/assets/img/icons/brands/google.png" alt="google" class="me-3" height="30" />
                             
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
                              <img src="../../../../src/assets/img/icons/brands/slack.png" alt="slack" class="me-3" height="30" />
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
                              <img src="../../../../src/assets/img/icons/brands/github.png" alt="github" class="me-3" height="30" />
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
                    <div class="col-md-6 col-12">
                      <div class="card">
                        <h5 class="card-header">Social Accounts</h5>
                        <div class="card-body">
                          <p>Display content from social accounts on your site</p>
                          <!-- Social Accounts -->
                          <div class="d-flex mb-3">
                            <div class="flex-shrink-0">
                              <img
                                src="../../../../src/assets/img/icons/brands/facebook.png"
                                alt="facebook"
                                class="me-3"
                                height="30"
                              />
                            </div>
                            <div class="flex-grow-1 row">
                              <div class="col-8 col-sm-7 mb-sm-0 mb-2">
                                <h6 class="mb-0">Facebook</h6>
                                <small class="text-muted">Not Connected</small>
                              </div>
                              <div class="col-4 col-sm-5 text-end">
                                <button type="button" class="btn btn-icon btn-outline-secondary">
                                  <i class="bx bx-link-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex mb-3">
                            <div class="flex-shrink-0">
                              <img
                                src="../../../../src/assets/img/icons/brands/twitter.png"
                                alt="twitter"
                                class="me-3"
                                height="30"
                              />
                            </div>
                            <div class="flex-grow-1 row">
                              <div class="col-8 col-sm-7 mb-sm-0 mb-2">
                                <h6 class="mb-0">Twitter</h6>
                                <a href="https://twitter.com/Theme_Selection" target="_blank">@ThemeSelection</a>
                              </div>
                              <div class="col-4 col-sm-5 text-end">
                                <button type="button" class="btn btn-icon btn-outline-danger">
                                  <i class="bx bx-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex mb-3">
                            <div class="flex-shrink-0">
                              <img
                                src="../../../../src/assets/img/icons/brands/instagram.png"
                                alt="instagram"
                                class="me-3"
                                height="30"
                              />
                            </div>
                            <div class="flex-grow-1 row">
                              <div class="col-8 col-sm-7 mb-sm-0 mb-2">
                                <h6 class="mb-0">instagram</h6>
                                <a href="https://www.instagram.com/themeselection/" target="_blank">@ThemeSelection</a>
                              </div>
                              <div class="col-4 col-sm-5 text-end">
                                <button type="button" class="btn btn-icon btn-outline-danger">
                                  <i class="bx bx-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
  
                          <!-- /Social Accounts -->
                        </div>
                      </div>
                    </div>
                                
                                           

                                        </div>



                                        <hr>
                                        <button type="submit" class="btn btn-primary deactivate-account">Save updates</button>

                                    </div>


                                    <!-- /Account -->
                                </div>
                                <div class="card">
                                    <h5 class="card-header">Delete Account</h5>
                                    <div class="card-body">
                                        <div class="mb-3 col-12 mb-0">
                                            <div class="alert alert-warning">
                                                <h6 class="alert-heading fw-bold mb-1">Are you sure you want to delete your
                                                    account?</h6>
                                                <p class="mb-0">Once you delete your account, there is no going back. Please
                                                    be certain.</p>
                                            </div>
                                        </div>
                                        <form id="formAccountDeactivation" onsubmit="return false">
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" type="checkbox" name="accountActivation"
                                                    id="accountActivation" />
                                                <label class="form-check-label" for="accountActivation">I confirm my account
                                                    deactivation</label>
                                            </div>
                                            <button type="submit" class="btn btn-danger deactivate-account">Deactivate
                                                Account</button>
                                        </form>
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
import Aside from '../../../components/aside/index.vue';
import Navbar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
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