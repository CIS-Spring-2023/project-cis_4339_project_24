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
              <ul class="dropdown-menu" aria-labelledby="navbarUserMenuLink">
                <li class="nav-item">
                  <a href="/">
                    <span @click="store.logout()" class="material-icons">logout</span>Logout
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/findclient" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/findevents" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn || user.isLoggedIn2" to="/eventServices" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >list</span
                >
                Event Services
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn" to="/intakeform" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn" to="/eventform" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn" to="/serviceForm" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >create</span
                >
                Create Service
              </router-link>
            </li>
            <li>
              <router-link v-if="user.isLoggedIn" to="/editServices" class="nav-link">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >edit</span
                >
                Edit Services
              </router-link>
            </li>
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
