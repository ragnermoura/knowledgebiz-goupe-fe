<template id="Details">
    <div class="layout-wrapper layout-content-navbar">

        <div class="layout-container">
            <!-- Menu -->
            <Aside />


            <!-- Layout container -->
            <div class="layout-page">
                <!-- Navbar -->

                <Navbar />

                <!-- / Navbar -->

                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <!-- Content -->

                    <div class="container-xxl flex-grow-1 container-p-y">
                        <h4 class="fw-bold py-3 mb-4"><a href="/you-overview" class="text-muted fw-light">You /</a> Account
                        </h4>
                        <div class="row">




                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'account' }"
                                            @click="handleAccount"><i class="bx bx-user me-1"></i>Account</button>
                                    </li>

                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'projects' }"
                                            @click="handleProjects"><i class="bx bx-circle me-1"></i>
                                            Projects</button>
                                    </li>

                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'stacks' }"
                                            @click="handleStack"><i class="bx bx-code me-1"></i>
                                            Stacks</button>
                                    </li>

                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'finances' }"
                                            @click="handleFinances"><i class="bx bx-dollar me-1"></i>
                                            Finances</button>
                                    </li>
                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'evaluation' }"
                                            @click="handleEvaluations"><i class="bx bx-star me-1"></i>
                                            Evaluation</button>
                                    </li>
                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'deliveries' }"
                                            @click="handleDeliveries"><i class="bx bx-timer me-1"></i>

                                            Deliveries</button>
                                    </li>
                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'orders' }"
                                            @click="handleOrders"><i class="bx bx-bell me-1"></i> Single
                                            Orders</button>
                                    </li>

                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'vacations' }"
                                            @click="handleVacations"><i class="bx bx-calendar me-1"></i>
                                            Vacations</button>
                                    </li>

                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'equipaments' }"
                                            @click="handleEquipament"><i class="bx bx-laptop me-1"></i>
                                            Borrowed equipment</button>
                                    </li>

                                    <li class="nav-item">
                                        <button :class="{ 'nav-link': true, 'active': activeButton === 'results' }"
                                            @click="handleResults"><i class='bx bx-pie-chart-alt-2'></i>
                                            Results</button>
                                    </li>

                                </ul>


                                <div class="card mb-4">





                                    <!-- Account -->

                                    <div class="card-body">
                                        <form @submit.prevent="handleNewAccount()">

                                            <div class="alert alert-success" v-if="msg_success" role="alert">
                                                <i class="fa fa-check"></i> User successfully edited
                                            </div>

                                            <div class="alert alert-danger" v-if="msg_email_error" role="alert">
                                                <i class="fa fa-ban"></i> Oops... someone already uses this email... better
                                                choose another one or go to your user list.
                                            </div>

                                            <div class="row" v-if="mainDetails">

                                                <div class="mb-3 col-md-12">

                                                    <div v-if="avatar == null" class="preview-name">
                                                        <h1 class="text-center" style="margin-top: 2%;">{{ iniciais }}</h1>
                                                    </div>

                                                    <div v-if="avatar != null" class="preview">
                                                        <img :src="'http://localhost:3000/' + avatar" width="120"
                                                            height="120" alt="">
                                                    </div>
                                                </div>






                                                <div class="mb-3 col-md-6">
                                                    <label for="organization" class="form-label">First Name</label>
                                                    <input type="text" class="form-control" id="organization"
                                                        name="organization" placeholder="António" v-model="firstname" />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="organization" class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" id="organization"
                                                        name="organization" placeholder="Moreira" v-model="lastname" />
                                                </div>

                                                <div class="mb-3 col-md-4">
                                                    <label for="organization" class="form-label">E-mail</label>
                                                    <input type="text" class="form-control" id="organization"
                                                        name="organization" placeholder="name@knowledgebiz.pt"
                                                        v-model="email" />
                                                </div>
                                                <div class="mb-3 col-md-4">
                                                    <label for="organization" class="form-label">Position in the
                                                        company</label>
                                                    <input type="text" class="form-control" id="organization"
                                                        name="organization" placeholder="Senior Developer"
                                                        v-model="position" />
                                                </div>
                                                <div class="mb-3 col-md-4">
                                                    <label for="organization" class="form-label">Birthday</label>
                                                    <input type="text" class="form-control" id="organization"
                                                        name="birthday" v-model="birthday" />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label class="form-label" for="phoneNumber">Phone Number</label>
                                                    <div class="input-group input-group-merge">
                                                        <span class="input-group-text">PT (+351)</span>
                                                        <input type="text" id="phoneNumber" name="phoneNumber"
                                                            v-model="phone" class="form-control"
                                                            placeholder="202 555 011" />
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="address" class="form-label">Address</label>
                                                    <input type="text" class="form-control" v-model="addressQuery"
                                                        @input="searchAddress" placeholder="Digite o endereço">
                                                    <ul v-if="addressResults.length && showAddressResults" class="mt-3">
                                                        <li v-for="(result, index) in addressResults" :key="index"
                                                            @click="selectAddress(result)">
                                                            {{ result.formatted }}
                                                        </li>
                                                    </ul>
                                                    <div v-if="isLoading">Carregando...</div>
                                                </div>


                                                <div class="mb-3 col-md-6">
                                                    <label for="zipCode" class="form-label">Zip Code</label>
                                                    <input type="text" class="form-control" id="zipCode" name="zipCode"
                                                        v-model="zipcode" placeholder="231465" maxlength="8" />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label class="form-label" for="country">Country of origin</label>
                                                    <input type="text" class="form-control" id="zipCode" name="zipCode"
                                                        v-model="country" />
                                                </div>
                                                <div class="mb-3 col-md-6">
                                                    <label for="language" class="form-label">Native Language</label>
                                                    <input type="text" class="form-control" id="language" name="language"
                                                        v-model="language" />
                                                </div>


                                            </div>
                                        </form>

                                        <div v-if="stacks">
                                            <form class="row" @submit.prevent="handleChangeStacks">
                                                <div class="col-md-6">
                                                    <h6>What are your FrontEnd stacks?</h6>
                                                    <div class="mb-3 row">
                                                        <div class="col-md-8">
                                                            <div class="form-check form-switch mb-2"
                                                                v-for="(stack, index) in frontendStacks" :key="index">
                                                                <input class="form-check-input"
                                                                    v-model="selectedStacks.frontend[stack]" type="checkbox"
                                                                    :id="'stackCheckbox' + index" />
                                                                <label class="form-check-label"
                                                                    :for="'stackCheckbox' + index">{{ stack }}</label>
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
                                                                <input class="form-check-input"
                                                                    v-model="selectedStacks.backend[stack]" type="checkbox"
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
                                                                <input class="form-check-input"
                                                                    v-model="selectedStacks.cloud[stack]" type="checkbox"
                                                                    :id="'stackCheckbox' + index" />
                                                                <label class="form-check-label"
                                                                    :for="'stackCheckbox' + index">{{ stack }}</label>
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
                                                                <input class="form-check-input"
                                                                    v-model="selectedStacks.database[stack]" type="checkbox"
                                                                    :id="'stackCheckbox' + index" />
                                                                <label class="form-check-label"
                                                                    :for="'stackCheckbox' + index">{{ stack }}</label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                              
                                            </form>
                                        </div>

                                        <div class="row" v-if="projects">

                                            <form @submit.prevent="handleProject()">

                                                <div v-if="msgeditProject" class="alert alert-success" role="alert">
                                                    <i class="fa fa-check"></i> Projects Edited!
                                                </div>

                                                <div class="col-md-6">
                                                    <h6>What project are you working on?</h6>
                                                    <div class="mb-3 row">
                                                        <div class="col-md-8">
                                                            <div class="form-check form-switch mb-2"
                                                                v-for="(all, index) in allprojects" :key="index">
                                                                <input class="form-check-input" type="checkbox"
                                                                    :id="'stackCheckbox' + index" v-model="all.selected" />
                                                                <label class="form-check-label"
                                                                    :for="'stackCheckbox' + index">{{ all.projectname
                                                                    }}</label>
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

                                                <div class="mt-2">
                                                    <button type="submit" class="btn btn-primary me-2">Save</button>
                                                </div>
                                            </form>


                                        </div>
                                        <div class="row" v-if="finances">

                                            <div class="mb-3 col-md-2">
                                                <h6><small>Gross salary</small></h6>
                                                <h1><strong>0,00 €</strong></h1>
                                            </div>
                                            <div class="mb-3 col-md-2">
                                                <h6><small>Net Salary</small></h6>
                                                <h1><strong>0,00 €</strong></h1>
                                            </div>
                                            <div class="mb-3 col-md-8">
                                                <h6><small>Social Security</small></h6>
                                                <h1 class="text-primary"><strong>13%</strong></h1>
                                            </div>


                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">hourly rate</label>
                                                <input type="text" class="form-control" id="organization"
                                                    name="organization" placeholder="0,00" v-model="hourly_rate" />
                                            </div>
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Basic salary</label>
                                                <input type="text" class="form-control" id="organization"
                                                    name="organization" placeholder="0,00" v-model="basic_salary" />
                                            </div>
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Food subsidy</label>
                                                <input type="text" class="form-control" placeholder="0,00"
                                                    v-model="password" />
                                            </div>
                                            <div class="mb-3 col-md-3">
                                                <label for="organization" class="form-label">Transport vouchers</label>
                                                <input type="text" class="form-control" placeholder="0,00"
                                                    v-model="confirmPass" />
                                            </div>
                                            <div class="mb-3 col-md-12">
                                                <label for="organization" class="form-label">Observations</label>
                                                <textarea type="text" class="form-control" rows="3"
                                                    v-model="confirmPass"></textarea>
                                            </div>

                                            <div class="mt-2">
                                                <button type="submit" class="btn btn-primary me-2">Save</button>
                                            </div>





                                        </div>
                                        <div class="row" v-if="evaluation">
                                            <div class="mb-3 col-md-4">
                                                <label for="organization" class="form-label">Attendance</label>

                                                <div id="full-stars-example">
                                                    <div id="full-stars-example-two">
                                                        <div class="rating-group">
                                                            <input disabled checked
                                                                class="rating__input rating__input--none" name="rating3"
                                                                id="rating3-none" value="0" type="radio">
                                                            <label aria-label="1 star" class="rating__label"
                                                                for="rating3-1"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-1"
                                                                value="1" type="radio">
                                                            <label aria-label="2 stars" class="rating__label"
                                                                for="rating3-2"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-2"
                                                                value="2" type="radio">
                                                            <label aria-label="3 stars" class="rating__label"
                                                                for="rating3-3"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-3"
                                                                value="3" type="radio">
                                                            <label aria-label="4 stars" class="rating__label"
                                                                for="rating3-4"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-4"
                                                                value="4" type="radio">
                                                            <label aria-label="5 stars" class="rating__label"
                                                                for="rating3-5"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-5"
                                                                value="5" type="radio">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3 col-md-4">
                                                <label for="organization" class="form-label">Meeting delivery
                                                    deadlines</label>

                                                <div id="full-stars-example">
                                                    <div id="full-stars-example-two">
                                                        <div class="rating-group">
                                                            <input disabled checked
                                                                class="rating__input rating__input--none" name="rating3"
                                                                id="rating3-none" value="0" type="radio">
                                                            <label aria-label="1 star" class="rating__label"
                                                                for="rating3-1"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-1"
                                                                value="1" type="radio">
                                                            <label aria-label="2 stars" class="rating__label"
                                                                for="rating3-2"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-2"
                                                                value="2" type="radio">
                                                            <label aria-label="3 stars" class="rating__label"
                                                                for="rating3-3"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-3"
                                                                value="3" type="radio">
                                                            <label aria-label="4 stars" class="rating__label"
                                                                for="rating3-4"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-4"
                                                                value="4" type="radio">
                                                            <label aria-label="5 stars" class="rating__label"
                                                                for="rating3-5"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-5"
                                                                value="5" type="radio">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3 col-md-4">
                                                <label for="organization" class="form-label">Teamwork</label>

                                                <div id="full-stars-example">
                                                    <div id="full-stars-example-two">
                                                        <div class="rating-group">
                                                            <input disabled checked
                                                                class="rating__input rating__input--none" name="rating3"
                                                                id="rating3-none" value="0" type="radio">
                                                            <label aria-label="1 star" class="rating__label"
                                                                for="rating3-1"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-1"
                                                                value="1" type="radio">
                                                            <label aria-label="2 stars" class="rating__label"
                                                                for="rating3-2"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-2"
                                                                value="2" type="radio">
                                                            <label aria-label="3 stars" class="rating__label"
                                                                for="rating3-3"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-3"
                                                                value="3" type="radio">
                                                            <label aria-label="4 stars" class="rating__label"
                                                                for="rating3-4"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-4"
                                                                value="4" type="radio">
                                                            <label aria-label="5 stars" class="rating__label"
                                                                for="rating3-5"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-5"
                                                                value="5" type="radio">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3 col-md-4">
                                                <label for="organization" class="form-label">Practical application of
                                                    knowledge</label>

                                                <div id="full-stars-example">
                                                    <div id="full-stars-example-two">
                                                        <div class="rating-group">
                                                            <input disabled checked
                                                                class="rating__input rating__input--none" name="rating3"
                                                                id="rating3-none" value="0" type="radio">
                                                            <label aria-label="1 star" class="rating__label"
                                                                for="rating3-1"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-1"
                                                                value="1" type="radio">
                                                            <label aria-label="2 stars" class="rating__label"
                                                                for="rating3-2"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-2"
                                                                value="2" type="radio">
                                                            <label aria-label="3 stars" class="rating__label"
                                                                for="rating3-3"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-3"
                                                                value="3" type="radio">
                                                            <label aria-label="4 stars" class="rating__label"
                                                                for="rating3-4"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-4"
                                                                value="4" type="radio">
                                                            <label aria-label="5 stars" class="rating__label"
                                                                for="rating3-5"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-5"
                                                                value="5" type="radio">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3 col-md-4">
                                                <label for="organization" class="form-label">Knowledge of and compliance
                                                    with internal
                                                    regulations</label>

                                                <div id="full-stars-example">
                                                    <div id="full-stars-example-two">
                                                        <div class="rating-group">
                                                            <input disabled checked
                                                                class="rating__input rating__input--none" name="rating3"
                                                                id="rating3-none" value="0" type="radio">
                                                            <label aria-label="1 star" class="rating__label"
                                                                for="rating3-1"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-1"
                                                                value="1" type="radio">
                                                            <label aria-label="2 stars" class="rating__label"
                                                                for="rating3-2"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-2"
                                                                value="2" type="radio">
                                                            <label aria-label="3 stars" class="rating__label"
                                                                for="rating3-3"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-3"
                                                                value="3" type="radio">
                                                            <label aria-label="4 stars" class="rating__label"
                                                                for="rating3-4"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-4"
                                                                value="4" type="radio">
                                                            <label aria-label="5 stars" class="rating__label"
                                                                for="rating3-5"><i
                                                                    class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-5"
                                                                value="5" type="radio">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3 col-md-12">
                                                <label for="organization" class="form-label">Observations</label>
                                                <textarea type="text" class="form-control" rows="3"
                                                    v-model="confirmPass"></textarea>
                                            </div>

                                            <div class="mt-2">
                                                <button type="submit" class="btn btn-primary me-2">Save</button>
                                            </div>


                                        </div>
                                        <div class="row" v-if="vacations">
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">

                                                        <div class="mb-3 col-md-5">

                                                            <div v-if="avatar == null" class="preview-name">
                                                                <h1 class="text-center" style="margin-top: 2%;">{{ iniciais
                                                                }}</h1>
                                                            </div>

                                                            <div v-if="avatar != null" class="preview">
                                                                <img :src="'http://localhost:3000/' + avatar" width="120"
                                                                    height="120" alt="">
                                                            </div>
                                                        </div>

                                                        <hr>

                                                        <div style="overflow: auto; max-height: 250px;">

                                                            <div v-for="vacation in minhasvacations"
                                                                :key="vacation.id_vacation" class="card mb-3"
                                                                style="max-width: 540px; height: 170px;">
                                                                <div class="row">

                                                                    <div class="col-md-9">
                                                                        <div class="card-body">
                                                                            <p class="card-text"><strong><i
                                                                                        class="bx bx-calendar"></i>
                                                                                    Start:</strong> {{ vacation.date_start
                                                                                    }}</p>
                                                                            <p class="card-text"><strong><i
                                                                                        class="bx bx-calendar"></i>
                                                                                    End:</strong> {{ vacation.date_end }}
                                                                            </p>

                                                                            <div class="row">
                                                                                <div class="col-6">
                                                                                    <p v-if="vacation.birthday == 'Sim'"
                                                                                        class="card-text text-success">🎉
                                                                                        It's your
                                                                                        birthday</p>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <p v-if="vacation.status == 2"
                                                                                        class="card-text">
                                                                                        <small class="text-warning">Awaiting
                                                                                            approval</small>
                                                                                    </p>
                                                                                    <p v-if="vacation.status == 1"
                                                                                        class="card-text">
                                                                                        <small
                                                                                            class="text-success">Approved</small>
                                                                                    </p>
                                                                                </div>

                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2"
                                                                        style="margin-left: -20px; margin-top: 10px;">
                                                                        <button v-if="vacation.status == 1" hidden
                                                                            @click="handleCheckVacation(vacation.id_vacation)"
                                                                            class="btn btn-success" type="sumit">
                                                                            <i class="bx bx-check"></i>
                                                                        </button>
                                                                        <button v-if="vacation.status == 2"
                                                                            @click="handleCheckVacation(vacation.id_vacation)"
                                                                            class="btn btn-success" type="sumit">
                                                                            <i class="bx bx-check"></i>
                                                                        </button>
                                                                        <button v-if="vacation.status == 1" hidden
                                                                            @click="handleBanVacation(vacation.id_vacation)"
                                                                            class="btn btn-danger mt-2" type="sumit">
                                                                            <i class='bx bx-message-square-x'></i>
                                                                        </button>
                                                                        <button v-if="vacation.status == 2"
                                                                            @click="handleBanVacation(vacation.id_vacation)"
                                                                            class="btn btn-danger mt-2" type="sumit">
                                                                            <i class='bx bx-message-square-x'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>




                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-8">
                                                <div class="card">
                                                    <div class="card-body">

                                                        <FullCalendar :options="calendarOptions">
                                                            <template v-slot:eventContent="arg">
                                                                <b>{{ arg.timeText }}</b>
                                                                <i>{{ arg.event.title }}</i>
                                                            </template>
                                                        </FullCalendar>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row" v-if="deliveries">

                                            <div class="col-md-12 row">
                                                <div class="col-2">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="text-center"><i class="bx bx-timer me-1"></i> Monday
                                                            </h5>
                                                            <hr>





                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-2">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="text-center"><i class="bx bx-timer me-1"></i> Tuesday
                                                            </h5>
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-2">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="text-center"><i class="bx bx-timer me-1"></i>
                                                                Wednesday</h5>
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-2">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="text-center"><i class="bx bx-timer me-1"></i>
                                                                Thursday</h5>
                                                            <hr>


                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-2">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="text-center"><i class="bx bx-timer me-1"></i> Friday
                                                            </h5>
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-2">
                                                    <img style="border-top-right-radius: 190px; border-bottom-left-radius: 190px;"
                                                        src="../../../../assets/img/backgrounds/bannerL.png"
                                                        class="img-fluid" alt="" srcset="">
                                                </div>

                                            </div>

                                        </div>

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
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import apiProject from '../../services/projects/index'
import apiVacation from '../../services/vacation/index'
import api from '../../services/auth/index';
import apiStack from '../../services/stack/index';

import axios from 'axios';
export default {
    name: 'Details',
    data() {
        return {

            selectedProjects: [],
            selectedProjectsList: [],

            msgeditProject: false,

            selectedStacks: {
                frontend: {},
                backend: {},
                cloud: {},
                database: {}
            },

            showTextAreaBlocage: false,
            showTextAreaOverdue: false,
            firstname: '',
            lastname: '',
            avatar: '',
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
            idUser: '',
            utilizadores: '',
            iniciais: '',
            deliveries: false,
            orders: false,
            orders: false,
            equipaments: false,
            results: false,
            usercolor: '',
            calendarOptions: {
                plugins: [dayGridPlugin],
                initialView: "dayGridMonth",
                events: [{
                    title: "Meeting",
                    start: '2023-09-04',
                    description: "Vamos discutir ideias novas",
                    className: "meeting-event",
                    color: "#ddd",
                }],
                weekends: false,
                editable: true,
                eventStartEditable: true,
                eventDurationEditable: true,
                myproject: '',
                success: true,
                msgError: false,
                myproject: ''
            },

            frontendStacks: ['React', 'Angular', 'Vue', 'Flutter Web', 'Laravel', 'React-Native', 'CSS', 'JavaScript', 'HTML5'],
            backendStacks: ['Node.js', 'Python', 'Java', 'Ruby', 'PHP', 'C#', 'Go', 'Scala', 'Kotlin'],
            cloudStacks: ['Azure', 'AWS (Amazon Web Services)', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean'],
            databaseStacks: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'Oracle Database', 'Redis', 'Cassandra', 'Firebase']


        };
    },
    components: {
        Aside,
        Navbar,
        Footer,
        FullCalendar
    },
    mounted() {

        const params = new URLSearchParams(window.location.search);
        const idDoUsuario = params.get('id');

        this.idUser = idDoUsuario

        apiProject.list().then((resposta) => {
            this.allprojects = resposta.data.response;

            this.fetchProjects()
        });

        api.userslists(idDoUsuario).then((resposta) => {

            const iniciais = resposta.data.response.firstname.charAt(0) + resposta.data.response.lastname.charAt(0);
            this.iniciais = iniciais.toUpperCase()

            this.firstname = resposta.data.response.firstname
            this.lastname = resposta.data.response.lastname
            this.avatar = resposta.data.response.avatar
            this.email = resposta.data.response.email
            this.position = resposta.data.response.position
            this.birthday = resposta.data.response.birthday
            this.phone = resposta.data.response.phonenumber
            this.addressQuery = resposta.data.response.address
            this.zipcode = resposta.data.response.zipcode
            this.country = resposta.data.response.country
            this.language = resposta.data.response.language
            this.level = resposta.data.response.level
            this.usercolor = resposta.data.response.color

        });

        apiVacation.vacationsuser(idDoUsuario).then((resposta) => {
            let res = resposta.data.response
            this.minhasvacations = res;

            const events = resposta.data.response.map((item) => {
                return {
                    title: "🎉 Vacations" || "",
                    start: item?.date_start,
                    end: item?.date_end || "",
                    color: this.usercolor || "",
                    description: item?.activity || "",
                };

            });
            this.calendarOptions.events = events
        });

        apiStack.listsStack(idDoUsuario).then((resposta) => {

            this.selectedStacks = {
                frontend: {},
                backend: {},
                cloud: {},
                database: {}
            };

            const userStacks = resposta.data.response.map(stackObj => stackObj.stackname);
            Object.keys(this.selectedStacks).forEach((category) => {
                this[category + 'Stacks'].forEach((stack) => {
                    this.selectedStacks[category][stack] = userStacks.includes(stack);
                });
            });
        });


    },

    computed: {
        passwordsMatch() {
            return this.password === this.confirmPass;
        }
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
        async fetchProjects() {
            try {
                let user = this.idUser;
                const response = await api.myprojectG(user);
                const selectedProjects = response.data.response;

                this.allprojects.forEach(project => {
                    project.selected = selectedProjects.some(selectedProject => selectedProject.id_project === project.id_project);
                });

            } catch (error) {
                console.error("Erro ao buscar projetos selecionados:", error);
            }
        },
        async handleProject() {
            this.selectedProjectsList = this.allprojects.filter((project) => project.selected);
            const idUser = this.idUser;

            let algumProjetoEnviadoComSucesso = false; // Flag para verificar se algum projeto foi enviado com sucesso

            for (const selectedProject of this.selectedProjectsList) {
                const selectedProjectId = selectedProject.id_project;

                try {
                    // A função projects agora retorna uma Promise que resolve com a resposta
                    const res = await api.projects([selectedProjectId], idUser);

                    if (res.status === 201) { // Verifica se o status da resposta é 201 (Criado)
                        algumProjetoEnviadoComSucesso = true; // Marca a flag como verdadeira se algum projeto foi enviado com sucesso
                    }
                } catch (error) {
                    console.error("Erro ao enviar projeto:", error); // Loga qualquer erro que ocorrer na tentativa de enviar o projeto
                }
            }

            // Verifica se algum projeto foi enviado com sucesso
            if (algumProjetoEnviadoComSucesso) {
                this.msgeditProject = true; // Supõe que isso controla a exibição de uma mensagem de sucesso na UI

                setTimeout(() => {
                    this.msgeditProject = false; // Esconde a mensagem de sucesso
                    window.location.reload(); // Recarrega a página
                }, 2000); // Espera 2 segundos antes de recarregar
            }
        },




        handleAccount() {
            this.mainDetails = true
            this.stacks = false
            this.projects = false
            this.finances = false
            this.evaluation = false
            this.vacations = false
            this.deliveries = false

            this.activeButton = 'account';
        },
        handleStack() {
            this.stacks = true
            this.mainDetails = false
            this.projects = false
            this.deliveries = false
            this.finances = false
            this.evaluation = false
            this.vacations = false
            this.activeButton = 'stacks';
        },
        handleProjects() {
            this.projects = true
            this.mainDetails = false
            this.stacks = false
            this.finances = false
            this.evaluation = false
            this.vacations = false
            this.deliveries = false
            this.activeButton = 'projects';
        },
        handleFinances() {
            this.finances = true
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.evaluation = false
            this.vacations = false
            this.deliveries = false
            this.activeButton = 'finances';
        },
        handleEvaluations() {
            this.evaluation = true
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.finances = false
            this.vacations = false
            this.deliveries = false
            this.activeButton = 'evaluation';
        },
        handleVacations() {
            this.vacations = true
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.finances = false
            this.evaluation = false
            this.deliveries = false
            this.activeButton = 'vacations';
        },

        handleDeliveries() {
            this.deliveries = true
            this.vacations = false
            this.mainDetails = false
            this.stacks = false
            this.projects = false
            this.finances = false
            this.evaluation = false
            this.activeButton = 'deliveries';
        },

        async handleNewAccount() {
            let firstName = this.firstname
            let lastName = this.lastname
            let password = this.password
            let position = this.position
            let birthday = this.birthday
            let phone = this.phone
            let address = this.address
            let zipcode = this.zipcode
            let country = this.country
            let language = this.language
            let level = this.level
            let email = this.email

            try {
                const response = await api.cadastro(firstName, lastName, password, email, position, birthday, phone, address, zipcode, country, language, level);

                if (response.status == 200 || response.status == 201 || response.status == 204 || response.status == 202) {
                    this.msg_success = true;

                    setTimeout(() => {
                        this.msg_success = false;
                        window.location.reload();
                    }, 3000);

                }

            } catch (error) {
                console.log("Tem um error ========>", error);

                if (error.response.status == 409) {
                    this.msg_email_error = true;

                    setTimeout(() => {
                        this.msg_email_error = false;
                    }, 3000);
                }

            }
        },

        async handleCheckVacation(id_vacation) {

            try {
                const response = await apiVacation.approve(id_vacation);

                setTimeout(() => {
                    window.location.reload();
                }, 1000);


            }

            catch (error) {
                console.log("Tem um error ========>", error);
            }

        },

        async handleBanVacation(id_vacation) {

            try {
                const response = await apiVacation.deletevacations(id_vacation);


                setTimeout(() => {
                    window.location.reload();
                }, 1000);


            }

            catch (error) {
                console.log("Tem um error ========>", error);
            }

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

#full-stars-example {

    /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
    .rating-group {
        display: inline-flex;
    }

    /* make hover effect work properly in IE */
    .rating__icon {
        pointer-events: none;
    }

    /* hide radio inputs */
    .rating__input {
        position: absolute !important;
        left: -9999px !important;
    }

    /* set icon padding and size */
    .rating__label {
        cursor: pointer;
        padding: 0 0.1em;
        font-size: 2rem;
    }

    /* set default star color */
    .rating__icon--star {
        color: orange;
    }

    /* set color of none icon when unchecked */
    .rating__icon--none {
        color: #eee;
    }

    /* if none icon is checked, make it red */
    .rating__input--none:checked+.rating__label .rating__icon--none {
        color: red;
    }

    /* if any input is checked, make its following siblings grey */
    .rating__input:checked~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make all stars orange on rating group hover */
    .rating-group:hover .rating__label .rating__icon--star {
        color: orange;
    }

    /* make hovered input's following siblings grey on hover */
    .rating__input:hover~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make none icon grey on rating group hover */
    .rating-group:hover .rating__input--none:not(:hover)+.rating__label .rating__icon--none {
        color: #eee;
    }

    /* make none icon red on hover */
    .rating__input--none:hover+.rating__label .rating__icon--none {
        color: red;
    }
}

#half-stars-example {

    /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
    .rating-group {
        display: inline-flex;
    }

    /* make hover effect work properly in IE */
    .rating__icon {
        pointer-events: none;
    }

    /* hide radio inputs */
    .rating__input {
        position: absolute !important;
        left: -9999px !important;
    }

    /* set icon padding and size */
    .rating__label {
        cursor: pointer;
        /* if you change the left/right padding, update the margin-right property of .rating__label--half as well. */
        padding: 0 0.1em;
        font-size: 2rem;
    }

    /* add padding and positioning to half star labels */
    .rating__label--half {
        padding-right: 0;
        margin-right: -0.6em;
        z-index: 2;
    }

    /* set default star color */
    .rating__icon--star {
        color: orange;
    }

    /* set color of none icon when unchecked */
    .rating__icon--none {
        color: #eee;
    }

    /* if none icon is checked, make it red */
    .rating__input--none:checked+.rating__label .rating__icon--none {
        color: red;
    }

    /* if any input is checked, make its following siblings grey */
    .rating__input:checked~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make all stars orange on rating group hover */
    .rating-group:hover .rating__label .rating__icon--star,
    .rating-group:hover .rating__label--half .rating__icon--star {
        color: orange;
    }

    /* make hovered input's following siblings grey on hover */
    .rating__input:hover~.rating__label .rating__icon--star,
    .rating__input:hover~.rating__label--half .rating__icon--star {
        color: #ddd;
    }

    /* make none icon grey on rating group hover */
    .rating-group:hover .rating__input--none:not(:hover)+.rating__label .rating__icon--none {
        color: #eee;
    }

    /* make none icon red on hover */
    .rating__input--none:hover+.rating__label .rating__icon--none {
        color: red;
    }
}

#full-stars-example-two {

    /* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
    .rating-group {
        display: inline-flex;
    }

    /* make hover effect work properly in IE */
    .rating__icon {
        pointer-events: none;
    }

    /* hide radio inputs */
    .rating__input {
        position: absolute !important;
        left: -9999px !important;
    }

    /* hide 'none' input from screenreaders */
    .rating__input--none {
        display: none
    }

    /* set icon padding and size */
    .rating__label {
        cursor: pointer;
        padding: 0 0.1em;
        font-size: 2rem;
    }

    /* set default star color */
    .rating__icon--star {
        color: orange;
    }

    /* if any input is checked, make its following siblings grey */
    .rating__input:checked~.rating__label .rating__icon--star {
        color: #ddd;
    }

    /* make all stars orange on rating group hover */
    .rating-group:hover .rating__label .rating__icon--star {
        color: orange;
    }

    /* make hovered input's following siblings grey on hover */
    .rating__input:hover~.rating__label .rating__icon--star {
        color: #ddd;
    }



}
</style>