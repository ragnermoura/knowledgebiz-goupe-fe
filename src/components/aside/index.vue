<template id="Aside">
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <a href="/" class="app-brand-link">
        <span class="app-brand-logo demo">
          <img src="../../../src/assets/img/logo/logoKbz.png" width="200" alt="">
        </span>
      </a>

      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        <i class="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboard -->
      <li class="menu-item" v-if="dev">
        <a href="/dashboard-main-developer" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </a>
      </li>
      <li class="menu-item" v-if="admin">
        <a href="/report" class="menu-link">
          <i class="menu-icon tf-icons bx bxs-copy-alt"></i>

          <div data-i18n="Analytics">Reports</div>
        </a>
      </li>
      <li class="menu-item" v-if="dev">
        <a href="/calendar" class="menu-link">
          <i class="menu-icon tf-icons bx bx-calendar"></i>
          <div data-i18n="Analytics">My calendar</div>
        </a>
      </li>
      <li class="menu-item" hidden v-if="dev">
        <a href="/calendar" class="menu-link">
          <i class="menu-icon tf-icons bx bx-circle"></i>
          <div data-i18n="Analytics">My requests  </div>
        </a>
      </li>
      <li class="menu-item" hidden v-if="admin">
        <a href="/calendar" class="menu-link">
          <i class="menu-icon tf-icons bx bx-mail-send"></i>
          <div data-i18n="Analytics">Requests received</div>
        </a>
      </li>


      <!-- Layouts -->


      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Main</span>
      </li>
      <li class="menu-item" v-if="dev">
        <a href="/account-user" class="menu-link">
          <i class="menu-icon tf-icons bx bx-dock-top"></i>
          <div data-i18n="Analytics">Account Settings</div>
        </a>
      </li>
      <li class="menu-item" v-if="admin">
        <a href="/project" class="menu-link">
          <i class="menu-icon tf-icons bx bx-edit"></i>
          <div data-i18n="Analytics">Projects</div>
        </a>
      </li>
      <li class="menu-item" hidden v-if="admin">
        <a href="" class="menu-link">
          <i class="menu-icon tf-icons bx bxs-buildings"></i>
          <div data-i18n="Analytics">Equipment/assets</div>
        </a>
      </li>
      <li class="menu-item" v-if="dev">
        <a href=" " class="menu-link">
          <i class="menu-icon tf-icons bx bxs-doughnut-chart"></i>
          <div data-i18n="Analytics">My activities  <small class="text-danger">| Blocked</small></div>
        </a>
      </li>
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Manager</span>
      </li>
      <li class="menu-item" v-if="dev">
        <a href="/log" class="menu-link">
          <i class="menu-icon tf-icons bx bx-grid"></i>
          <div data-i18n="Analytics">Logs</div>
        </a>
      </li>
      <li class="menu-item" v-if="dev">
        <a href="" class="menu-link">
          <i class="menu-icon tf-icons bx bx-code"></i>
          <div data-i18n="Analytics">My projects <small class="text-danger">| Blocked</small></div>
        </a>
      </li>
      <li class="menu-item" v-if="admin">
        <a href="/all-project" class="menu-link">
          <i class="menu-icon tf-icons bx bx-list-check"></i>
          <div data-i18n="Analytics">All projects</div>
        </a>
      </li>
      <li class="menu-item" hidden v-if="dev">
        <a href="#" class="menu-link">
          <i class="menu-icon tf-icons bx bx-user"></i>
          <div data-i18n="Analytics">My teams</div>
        </a>
      </li>

      <!-- Cards -->

      <!-- User interface -->


      <!-- Extended components -->




      <!-- Forms & Tables -->


      <!-- Tables -->



    </ul>
  </aside>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: 'Aside',
  data() {
    return {
      admin: false,
      dev: false,
      name: '',
      lastname: '',
     
    }
  },
  mounted() {
    let token = localStorage.getItem('token')
    let decode = VueJwtDecode.decode(token);

    if(decode)

    if (decode.id_nivel == 2) {
      this.dev = true
      this.admin = false
      
    }


  }
}
</script>