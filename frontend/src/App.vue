<!-- eslint-disable prettier/prettier -->
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',
  data() {
    return {
      orgName: 'Group 24'
    }
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
  },
  setup() {
    // function that checks if a user is logged in
    const user = useLoggedInUserStore();
    return { user };
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <!-- Start: Login page -->
            <!-- any user can see login tab upon openning the web app -->

              <!-- hides login menu tab after either user logs in -->
              <!-- login tab appears again after users logout -->
            <li v-if="!user.isLoggedIn && !user.isLoggedIn2">
              <router-link to="/logIn" class="nav-link">
                <span
                  style="position: relative; top: 6px; "
                  class="material-icons"
                  >login</span
                >
                Log In
              </router-link>
            </li>
            <!-- check which user logs in and displays a welcome message with users corresponding name -->
            <li class="nav-item dropdown" v-if="user.isLoggedIn || user.isLoggedIn2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarUserMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >person</span
                > Welcome, {{ user.name }}
              </a>
              <!-- Drop down menu for user to logout from -->
              <ul class="dropdown-menu" aria-labelledby="navbarUserMenuLink">
                <li class="nav-item">
                  <!-- users are redirected to the dashboard after they log out -->
                  <a href="/">
                    <span @click="store.logout()" class="material-icons">logout</span>Logout
                  </a>
                </li>
              </ul>
            </li>
            <!-- End: Login page -->

            <!-- Start: Dashboard page -->
            <li>
              <!-- any user can see dashboard tab upon openning the web app -->
              <router-link to="/" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <!-- End: Dashboard page -->

            <!-- Start: Find client page -->
            <li>
              <!-- gives access to both users to view this page -->
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/findclient" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <!-- End: Find client page -->

            <!-- Start: Find event page -->
            <li>
              <!-- gives access to both users to view this page -->
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/findevents" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
            <!-- End: Find event page -->

            <!-- Start: Find service page -->
            <li>
              <!-- gives access to both users to view this page -->
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/findService" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Service
              </router-link>
            </li>
            <!-- End: Find service page -->

            <!-- Start: Event services page -->
            <li>
              <!-- gives access to both users to view this page -->
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/eventServices" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >list</span
                >
                Event Services
              </router-link>
            </li>
            <!-- End: Event services page -->

            <!-- Start: Client intake form page -->
            <li>
              <!-- gives access only to editor to use this page -->
              <router-link v-if="user.isLoggedIn" to="/intakeform" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <!-- End: Client intake form page -->

            <!-- Start: Create event form page -->
            <li>
              <!-- gives access only to editor to use this page -->
              <router-link v-if="user.isLoggedIn" to="/eventform" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <!-- End: Create event form page -->

            <!-- Start: Create service form page -->
            <li>
              <!-- gives access only to editor to use this page -->
              <router-link v-if="user.isLoggedIn" to="/serviceForm" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >create</span
                >
                Create Service
              </router-link>
            </li>
            <!-- End: Create service form page -->

            <!-- Start: Edit services form page -->
            <li>
              <!-- gives access only to editor to use this page -->
              <router-link v-if="user.isLoggedIn" to="/editServices" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >edit</span
                >
                Edit Services
              </router-link>
            </li>
            <!-- End: Edit services form page -->
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
a {
  text-decoration: none;
}
</style>
