<!-- eslint-disable prettier/prettier -->
<template>
    <main>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem">
                        <div class="card-body p-5 text-center">
                            <div class="mb-md-5 mt-md-4 pb-5">
                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                            <p class="text-white-50 mb-5">Please enter your credentials!</p>

                            <form @submit.prevent="store.login(username, password)" novalidate="true">
                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" class="form-control form-control-lg" v-model="username"/>
                                    <label class="form-label" for="typeEmailX">Username</label>
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password"/>
                                    <label class="form-label" for="typePasswordX">Password</label>
                                </div>

                                <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </template>
<!-- eslint-disable prettier/prettier -->
<script>
  import { useLoggedInUserStore } from "@/store/loggedInUser";
  
  export default {
    data: () => {
      return {
        username: "",
        password: "",
      };
    },
    setup() {
      const store = useLoggedInUserStore()
      return {
        // you can return the whole store instance to use it in the template
        store,
      }
    }
  };
</script>
