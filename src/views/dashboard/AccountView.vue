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
            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">New /</span> Account</h4>
            <div class="row">




            </div>
            <div class="row">
              <div class="col-md-12">
                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                  <li class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'account' }" @click="handleAccount"><i
                        class="bx bx-user me-1"></i> New Account</button>
                  </li>

                  <li hidden class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'projects' }"
                      @click="handleProjects"><i class="bx bx-circle me-1"></i>
                      Projects</button>
                  </li>

                  <li hidden class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'finances' }"
                      @click="handleFinances"><i class="bx bx-dollar me-1"></i>
                      Finances</button>
                  </li>
                  <li hidden class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'evaluation' }"
                      @click="handleEvaluations"><i class="bx bx-star me-1"></i>
                      Evaluation</button>
                  </li>
                  <li hidden class="nav-item">
                    <button :class="{ 'nav-link': true, 'active': activeButton === 'vacations' }"
                      @click="handleVacations"><i class="bx bx-calendar me-1"></i>
                      Vacations</button>
                  </li>



                </ul>


                <div class="card mb-4">





                  <!-- Account -->

                  <div class="card-body">
                    <form @submit.prevent="handleNewAccount()">

                      <div class="alert alert-success" v-if="msg_success" role="alert">
                        <i class="fa fa-check"></i> User successfully registered
                      </div>

                      <div class="alert alert-danger" v-if="msg_email_error" role="alert">
                        <i class="fa fa-ban"></i> Oops... someone already uses this email... better choose another one or
                        go to your user list.
                      </div>

                      <div class="row" v-if="mainDetails">
                        <div class="mb-3 col-md-3">
                          <label for="organization" class="form-label">First Name</label>
                          <input type="text" class="form-control" id="organization" name="organization"
                            placeholder="António" v-model="firstname" />
                        </div>
                        <div class="mb-3 col-md-3">
                          <label for="organization" class="form-label">Last Name</label>
                          <input type="text" class="form-control" id="organization" name="organization"
                            placeholder="Moreira" v-model="lastname" />
                        </div>
                        <div class="mb-3 col-md-3">
                          <label for="organization" class="form-label">Password</label>
                          <input type="password" class="form-control" placeholder="Password" v-model="password" />
                        </div>
                        <div class="mb-3 col-md-3">
                          <label for="organization" class="form-label">Confirm Password</label>
                          <input type="password" class="form-control" placeholder="Confirm Password"
                            v-model="confirmPass" />
                          <p class="text-danger" v-if="confirmPass && !passwordsMatch"><i class="fa fa-ban"></i> Passwords
                            are not the same</p>
                          <p class="text-success" v-if="confirmPass && passwordsMatch"><i class="fa fa-check"></i> The
                            passwords check</p>
                        </div>
                        <div class="mb-3 col-md-4">
                          <label for="organization" class="form-label">E-mail</label>
                          <input type="text" class="form-control" id="organization" name="organization"
                            placeholder="name@knowledgebiz.pt" v-model="email" />
                        </div>
                        <div class="mb-3 col-md-4">
                          <label for="organization" class="form-label">Position in the company</label>
                          <input type="text" class="form-control" id="organization" name="organization"
                            placeholder="Senior Developer" v-model="position" />
                        </div>
                        <div class="mb-3 col-md-4">
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
                          <input type="text" class="form-control" v-model="addressQuery" @input="searchAddress"
                            placeholder="Digite o endereço">
                          <ul v-if="addressResults.length && showAddressResults" class="mt-3">
                            <li v-for="(result, index) in addressResults" :key="index" @click="selectAddress(result)">
                              {{ result.formatted }}
                            </li>
                          </ul>
                          <div v-if="isLoading">Carregando...</div>
                        </div>


                        <div class="mb-3 col-md-6">
                          <label for="zipCode" class="form-label">Zip Code</label>
                          <input type="text" class="form-control" id="zipCode" name="zipCode" v-model="zipcode"
                            placeholder="231465" maxlength="8" />
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
                            <option value="Portugal">Portugal</option>
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

                        <div class="mb-3 col-md-6">
                          <label for="language" class="form-label">Access level</label>
                          <select id="language" v-model="level" class="select2 form-select">
                            <option value="">Select</option>
                            <option value="2">Developer</option>
                            <option value="1">Manager</option>

                          </select>
                        </div>

                        <div class="mt-2">
                          <button type="submit" class="btn btn-primary me-2">Create new account</button>
                        </div>


                      </div>
                    </form>


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
                            <div class="form-check form-switch mb-2" v-for="(stack, index) in backendStacks" :key="index">
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
                            <div class="form-check form-switch mb-2" v-for="(all, index) in allprojects" :key="index">
                              <input class="form-check-input" type="checkbox" :id="'stackCheckbox' + index" />
                              <label class="form-check-label" :for="'stackCheckbox' + index">{{ all.projectname
                              }}</label>
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

                      <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Save</button>
                      </div>


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
                        <input type="text" class="form-control" id="organization" name="organization" placeholder="0,00"
                          v-model="hourly_rate" />
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">Basic salary</label>
                        <input type="text" class="form-control" id="organization" name="organization" placeholder="0,00"
                          v-model="basic_salary" />
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">Food subsidy</label>
                        <input type="text" class="form-control" placeholder="0,00" v-model="password" />
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">Transport vouchers</label>
                        <input type="text" class="form-control" placeholder="0,00" v-model="confirmPass" />
                      </div>
                      <div class="mb-3 col-md-12">
                        <label for="organization" class="form-label">Observations</label>
                        <textarea type="text" class="form-control" rows="3" v-model="confirmPass"></textarea>
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
                              <input disabled checked class="rating__input rating__input--none" name="rating3"
                                id="rating3-none" value="0" type="radio">
                              <label aria-label="1 star" class="rating__label" for="rating3-1"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio">
                              <label aria-label="2 stars" class="rating__label" for="rating3-2"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio">
                              <label aria-label="3 stars" class="rating__label" for="rating3-3"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio">
                              <label aria-label="4 stars" class="rating__label" for="rating3-4"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio">
                              <label aria-label="5 stars" class="rating__label" for="rating3-5"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3 col-md-4">
                        <label for="organization" class="form-label">Meeting delivery deadlines</label>

                        <div id="full-stars-example">
                          <div id="full-stars-example-two">
                            <div class="rating-group">
                              <input disabled checked class="rating__input rating__input--none" name="rating3"
                                id="rating3-none" value="0" type="radio">
                              <label aria-label="1 star" class="rating__label" for="rating3-1"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio">
                              <label aria-label="2 stars" class="rating__label" for="rating3-2"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio">
                              <label aria-label="3 stars" class="rating__label" for="rating3-3"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio">
                              <label aria-label="4 stars" class="rating__label" for="rating3-4"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio">
                              <label aria-label="5 stars" class="rating__label" for="rating3-5"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3 col-md-4">
                        <label for="organization" class="form-label">Teamwork</label>

                        <div id="full-stars-example">
                          <div id="full-stars-example-two">
                            <div class="rating-group">
                              <input disabled checked class="rating__input rating__input--none" name="rating3"
                                id="rating3-none" value="0" type="radio">
                              <label aria-label="1 star" class="rating__label" for="rating3-1"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio">
                              <label aria-label="2 stars" class="rating__label" for="rating3-2"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio">
                              <label aria-label="3 stars" class="rating__label" for="rating3-3"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio">
                              <label aria-label="4 stars" class="rating__label" for="rating3-4"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio">
                              <label aria-label="5 stars" class="rating__label" for="rating3-5"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3 col-md-4">
                        <label for="organization" class="form-label">Practical application of knowledge</label>

                        <div id="full-stars-example">
                          <div id="full-stars-example-two">
                            <div class="rating-group">
                              <input disabled checked class="rating__input rating__input--none" name="rating3"
                                id="rating3-none" value="0" type="radio">
                              <label aria-label="1 star" class="rating__label" for="rating3-1"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio">
                              <label aria-label="2 stars" class="rating__label" for="rating3-2"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio">
                              <label aria-label="3 stars" class="rating__label" for="rating3-3"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio">
                              <label aria-label="4 stars" class="rating__label" for="rating3-4"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio">
                              <label aria-label="5 stars" class="rating__label" for="rating3-5"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3 col-md-4">
                        <label for="organization" class="form-label">Knowledge of and compliance with internal
                          regulations</label>

                        <div id="full-stars-example">
                          <div id="full-stars-example-two">
                            <div class="rating-group">
                              <input disabled checked class="rating__input rating__input--none" name="rating3"
                                id="rating3-none" value="0" type="radio">
                              <label aria-label="1 star" class="rating__label" for="rating3-1"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio">
                              <label aria-label="2 stars" class="rating__label" for="rating3-2"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio">
                              <label aria-label="3 stars" class="rating__label" for="rating3-3"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio">
                              <label aria-label="4 stars" class="rating__label" for="rating3-4"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio">
                              <label aria-label="5 stars" class="rating__label" for="rating3-5"><i
                                  class="rating__icon rating__icon--star fa fa-star"></i></label>
                              <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3 col-md-12">
                        <label for="organization" class="form-label">Observations</label>
                        <textarea type="text" class="form-control" rows="3" v-model="confirmPass"></textarea>
                      </div>

                      <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Save</button>
                      </div>


                    </div>
                    <div class="row" v-if="vacations">
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="organization" name="organization"
                          placeholder="António" v-model="firstname" />
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="organization" name="organization"
                          placeholder="Moreira" v-model="lastname" />
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Password" v-model="password" />
                      </div>
                      <div class="mb-3 col-md-3">
                        <label for="organization" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" placeholder="Confirm Password"
                          v-model="confirmPass" />
                      </div>
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
                      <div class="mb-3 col-md-6">
                        <label for="language" class="form-label">Genre</label>
                        <select id="language" v-model="genre" class="select2 form-select">
                          <option value="">Select Genre</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>

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
import apiUpload from '../../services/upload/index'
import apiProject from '../../services/projects/index'
import api from '../../services/auth/index'
import Toast from '../../components/toast/index.vue'
import axios from 'axios';
export default {
  name: 'Main-Account',
  data() {
    return {
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
      genre: '',
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

    async handleNewAccount() {
      let firstName = this.firstname
      let lastName = this.lastname
      let password = this.password
      let position = this.position
      let birthday = this.birthday
      let sexo = this.genre
      let phone = this.phone
      let address = this.address
      let zipcode = this.zipcode
      let country = this.country
      let language = this.language
      let level = this.level
      let email = this.email

      try {
        const response = await api.cadastro(firstName, lastName, password, email, position, birthday, sexo, phone, address, zipcode, country, language, level);
        
        await api.sendewelcome(email, firstName, password);
        
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