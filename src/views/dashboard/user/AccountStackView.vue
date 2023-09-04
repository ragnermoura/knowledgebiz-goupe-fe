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
                        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">You /</span> Stacks</h4>
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
                                        <a class="nav-link active" href="/account-user-stacks"><i
                                                class="bx bx-code me-1"></i> Stacks</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/account-user-connections"><i class="bx bx-link-alt me-1"></i>
                                            Connections</a>
                                    </li>
                                </ul>
                                <div class="card mb-4">
                                    <h5 class="card-header">Your stacks</h5>
                                    <!-- Account -->
                                    <div class="card-body">
                                        <div class="row">

                                            <div class="col-md-6">
                                                <h6>What are your FrontEnd stacks?</h6>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2"
                                                            v-for="(stack, index) in frontendStacks" :key="index">
                                                            <input class="form-check-input" type="checkbox"
                                                                :id="'stackCheckbox' + index" />
                                                            <label class="form-check-label"
                                                                :for="'stackCheckbox' + index">{{ stack }}</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" />
                                                            <label class="form-check-label"
                                                                for="flexSwitchCheckChecked">Other</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h6>What are your BackEnd stacks?</h6>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2"
                                                            v-for="(stack, index) in backendStacks" :key="index">
                                                            <input class="form-check-input" type="checkbox"
                                                                :id="'stackCheckbox' + index" />
                                                            <label class="form-check-label"
                                                                :for="'stackCheckbox' + index">{{ stack }}</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" />
                                                            <label class="form-check-label"
                                                                for="flexSwitchCheckChecked">Other</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h6>What are your Cloud stacks?</h6>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2"
                                                            v-for="(stack, index) in cloudStacks" :key="index">
                                                            <input class="form-check-input" type="checkbox"
                                                                :id="'stackCheckbox' + index" />
                                                            <label class="form-check-label"
                                                                :for="'stackCheckbox' + index">{{ stack }}</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" />
                                                            <label class="form-check-label"
                                                                for="flexSwitchCheckChecked">Other</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h6>What are your Database stacks?</h6>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2"
                                                            v-for="(stack, index) in databaseStacks" :key="index">
                                                            <input class="form-check-input" type="checkbox"
                                                                :id="'stackCheckbox' + index" />
                                                            <label class="form-check-label"
                                                                :for="'stackCheckbox' + index">{{ stack }}</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <div class="col-md-8">
                                                        <div class="form-check form-switch mb-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" />
                                                            <label class="form-check-label"
                                                                for="flexSwitchCheckChecked">Other</label>
                                                        </div>

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