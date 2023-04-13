<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      service: {
        name: '',
        status: ''
      },
      newName: '',
      newDescription: '',
      newStatus: ''
    }
  },
  methods: {
    updateService() {
      // Update the name, description, and status of the service
      this.service.name = this.newName;
      this.service.description = this.newDescription;
      this.service.status = this.newStatus;

      // Navigate back to the services list page
      this.$router.push('/editServices');
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
      Edit Event Service
      </h1>
      <div class="px-10 py-20">
          <form @submit.prevent="updateService">
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
                      v-model="newName" required
                  >
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
                      v-model="newDescription"
                  >
                  </label>
              </div>
              <!-- form field: update service description -->
              <div class="flex flex-col">
                    <span class="text-gray-700">Service Status</span>
                    <span style="color: #ff0000">*</span>
                    <div class="mt-1">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="status" value="Active" v-model="newStatus" required>
                            <span class="ml-2">Active</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="status" value="Inactive" v-model="newStatus" required>
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
                      type="submit"
                      class="bg-green-600 text-white rounded"
                    >
                      Update Service
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
