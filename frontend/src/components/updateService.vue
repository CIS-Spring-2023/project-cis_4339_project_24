<!-- eslint-disable prettier/prettier -->
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  props: ['id'],
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      service: {
        servname: '',
        description: '',
        status: ''
      }
    }
  },
  created() {
    axios.get(`${apiURL}/services/id/${this.$route.params.id}`).then((res) => {
      // simplified setting service
      this.service = res.data
    })
  },  
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    async updateService() {
      // Checks to see if there are any errors in validation
      const isFormCorrect = await this.v$.$validate()
      // If no errors found. isFormCorrect = True then the form is submitted
      if (isFormCorrect) {
        axios
          .put(`${apiURL}/services/update/${this.id}`, this.service)
          .then(() => {
            alert('Update has been saved.')
            this.$router.back()
          })
      }
    },
    // hard delete method
    deleteService() {
      // Show confirmation dialog
      if (confirm("Are you sure you want to permanently delete this service?")) {
        axios.delete(`${apiURL}/services/${this.id}`).then(() => {
          alert('Service has been deleted.')
          this.$router.push({ name: 'findService' })
        })
      }
    }
  },    
  validations() {
      return {
        service: {
          servname: { required },
          status: { required }
        }
      }
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <main>
      <h1
      class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
      Edit Service
      </h1>
      <div class="px-10 py-20">
          <form @submit.prevent="handleSubmitForm">
              <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
              >
              <h2 class="text-2xl font-bold">Service Details</h2>
              <!-- form field: update service name -->
              <div class="flex flex-col">
                  <label class="block">
                    <span class="text-gray-700">Service Name</span>
                    <span style="color: #ff0000">*</span>
                    <!-- service name is required for an update to be made -->
                    <input 
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="service.servname"
                    />
                    <span class="text-black" v-if="v$.service.servname.$error">
                      <p
                        class="text-red-700"
                        v-for="error of v$.service.servname.$errors"
                        :key="error.$uid"
                      >
                        {{ error.$message }}!
                      </p>
                    </span>
                  </label>
              </div>
              <!-- form field: update service description -->
              <div class="flex flex-col">
                  <label class="block">
                  <span class="text-gray-700">Service Description</span>
                  <!-- service description is optional -->
                  <input 
                      type="text"
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      v-model="service.description"
                  >
                  </label>
              </div>
              <!-- form field: update service description -->
              <div class="flex flex-col">
                    <span class="text-gray-700">Service Status</span>
                    <span style="color: #ff0000">*</span>
                    <div class="mt-1">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="status" value="Active" v-model="service.status">
                            <span class="ml-2">Active</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="status" value="Inactive" v-model="service.status">
                            <span class="ml-2">Inactive</span>
                        </label>
                    </div>
                </div>
              </div>
              <!-- grid container -->
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
                >
                  <!-- update button, redirects user back to the editServices.vue page after a successful update -->
                  <div class="flex justify-between mt-10 mr-20">
                    <button
                      @click="updateService"
                      type="submit"
                      class="bg-green-600 text-white rounded"
                    >
                      Update Service
                    </button>
                  </div>
                  <!-- delete button, redirects user back to the findService.vue page after a successful delete -->
                  <div class="flex justify-between mt-10 mr-20">
                    <button
                      @click.prevent="deleteService"
                      type="submit"
                      class="bg-red-700 text-white rounded"
                    >
                      Permanently Delete Service
                    </button>
                  </div>
                  <!-- cancel button, redirects user back to the editServices.vue page -->
                  <div class="flex justify-between mt-10 mr-20">
                    <button
                      type="reset"
                      class="bg-red-600 text-white rounded"
                      @click="$router.back()"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
          </form>
      </div>
  </main>
</template>
