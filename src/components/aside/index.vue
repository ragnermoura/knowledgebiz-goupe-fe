<template id="Aside">
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <a href="#" class="app-brand-link">
        <span class="app-brand-logo demo">
          <img src="../../../assets/img/logo/logoKbz.png" width="200" alt="">
        </span>
      </a>

      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        <i class="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1" v-if="admin">
      <!-- Dashboard -->
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Dashboard</span>
      </li>

      <li class="menu-item">
        <a href="/you-overview" class="menu-link">
          <i class="menu-icon tf-icons bx bx-user"></i>
          <div data-i18n="Analytics">My Team</div>
        </a>
      </li>
      <li class="menu-item">
        <a href="/calendar" class="menu-link">
          <i class="menu-icon tf-icons bx bxs-calendar-check"></i>
          <div data-i18n="Analytics">My activities</div>
        </a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">
          <i class="menu-icon tf-icons bx bxs-doughnut-chart"></i>
          <div data-i18n="Analytics">Drawings <small class="text-danger">| Blocked</small></div>
        </a>
      </li>
      <li class="menu-item">
        <a href="/report" class="menu-link">
          <i class="menu-icon tf-icons bx bx-file"></i>
          <div data-i18n="Analytics">Reports</div>
        </a>
      </li>

      <li class="menu-item">
        <a href="/vacation-user" class="menu-link">
          <i class="menu-icon tf-icons bx bx-calendar"></i>
          <div data-i18n="Analytics">My vacation</div>
        </a>
      </li>
    
     

      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Manager</span>
      </li>

    
      <li class="menu-item" v-if="admin">
        <a href="/account-user" class="menu-link">
          <i class="menu-icon tf-icons bx bx-user-plus"></i>
          <div data-i18n="Analytics">Account <small class="text-success">| New Feature </small></div>
        </a>
      </li>
      <li class="menu-item" v-if="admin">
        <a href="/project" class="menu-link">
          <i class="menu-icon tf-icons bx bx-plus"></i>
          <div data-i18n="Analytics">Project <small class="text-success">| New Feature </small></div>
        </a>
      </li>
    
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Controller</span>
      </li>
    
      <li class="menu-item" v-if="admin">
        <a href="/all-project" class="menu-link">
          <i class="menu-icon tf-icons bx bx-list-check"></i>
          <div data-i18n="Analytics">All projects</div>
        </a>
      </li>
     
    </ul>

    <ul class="menu-inner py-1" v-if="dev">
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Main</span>
      </li>
      <!-- Dashboard -->
      <li class="menu-item">
        <a href="/dashboard-main-developer" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </a>
      </li>

      <li class="menu-item">
        <a href="/calendar" class="menu-link">
          <i class="menu-icon tf-icons bx bxs-doughnut-chart"></i>
          <div data-i18n="Analytics">My activities</div>
        </a>
      </li>
      <li class="menu-item">
        <a href="/vacation-user" class="menu-link">
          <i class="menu-icon tf-icons bx bx-calendar"></i>
          <div data-i18n="Analytics">My vacation</div>
        </a>
      </li>
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">List</span>
      </li>
      <li class="menu-item">
        <a href="/log" class="menu-link">
          <i class="menu-icon tf-icons bx bx-grid"></i>
          <div data-i18n="Analytics">Logs</div>
        </a>
      </li>
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

    if (token == null) {
      window.location.href = "/";
    } else if (token == '') {
      window.location.href = "/";
    }

    if (decode.id_nivel == 2) {
      this.dev = true
      this.admin = false

    }
    if (decode.id_nivel == 1) {
      this.dev = false
      this.admin = true

    }




  },
  methods: {
    async handleLogout() {
      localStorage.removeItem('token')

      window.location.href = "/";


    }
  }
}
</script>