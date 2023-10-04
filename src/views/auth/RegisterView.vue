<template id="Register">
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register Card -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
                  <img src="../../../assets/img/logo/logoKbz.png" width="300" alt="">
                </span>
              </a>
            </div>
            <!-- /Logo -->
            <h4 class="mb-2">Adventure starts here 🚀</h4>
            <p class="mb-4">Make your app management easy and fun!</p>

            <form id="formAuthentication" @submit.prevent="handleRegister">

              <div class="alert alert-warning" v-if="emailErro" role="alert">
                ⚠️ Someone is already using this email, try another one!
              </div>
              <div class="alert alert-danger" v-if="erro500" role="alert">
                ⚠️ <strong>Error 500</strong> - We're having internal problems. Come back later!
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="username" class="form-label">Firstname</label>
                  <input type="text" v-model="firstname" class="form-control" id="username" name="username"
                    placeholder="Enter your username" autofocus />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="username" class="form-label">Lastname</label>
                  <input type="text" class="form-control" v-model="lastname" id="username" name="username"
                    placeholder="Enter your username" autofocus />
                </div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" v-model="email" id="email" name="email"
                  placeholder="Enter your email" />
              </div>
              <div class="mb-3 form-password-toggle">
                <label class="form-label" for="password">Password</label>
                <div class="input-group input-group-merge">
                  <input type="password" id="password" v-model="senha" class="form-control" name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password" />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" required type="checkbox" id="terms-conditions" name="terms" />
                  <label class="form-check-label" for="terms-conditions">
                    I agree to
                    <a href="javascript:void(0);">privacy policy & terms</a>
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary d-grid w-100">Sign up</button>
            </form>

            <p class="text-center">
              <span>Already have an account?</span>
              <a href="/">
                <span>Sign in instead</span>
              </a>
            </p>
          </div>
        </div>
        <!-- Register Card -->
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../services/auth/index'
export default {
  name: 'Register',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      senha: '',
      emailErro: false,
      erro500: false,
    };
  },

  mounted() {
    let erroEmail = localStorage.getItem('error')

    if (erroEmail == 409) {
      this.emailErro = true
      this.erro500 = false
    } else if (erroEmail == 500) {
      this.erro500 = true
      this.emailErro = false
    }
  },


  methods: {
    async handleRegister() {
      let youFirstname = this.firstname
      let youLastname = this.lastname
      let youEmail = this.email
      let youPass = this.senha


      await api.cadastro(youFirstname, youLastname, youEmail, youPass)
    },


  }
}
</script>