<!-- eslint-disable prettier/prettier -->
<script>
import axios from 'axios'
import { useLoggedInUserStore } from "@/store/loggedInUser";
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  data() {
    return {
        queryData: [],
        // Parameter for search to occur
        searchBy: '',
        servname: '',
        status: ''
    }
  },
  mounted() {
    this.getServices()
  },
  setup() {
    // function that checks if a user is logged in
    const user = useLoggedInUserStore();
    return { user };
  },
  methods: {
    handleSubmitForm() {
      let endpoint = ''
      if (this.searchBy === 'Service Name') {
        endpoint = `services/search/?servname=${this.servname}&searchBy=name`
      } else if (this.searchBy === 'Service Status') {
        endpoint = `services/search/?status=${this.status}&searchBy=sstatus`
      }
      axios.get(`${apiURL}/${endpoint}`).then((res) => {
        this.queryData = res.data
      })
    },
    // abstracted method to get services
    getServices() {
      axios.get(`${apiURL}/services`).then((res) => {
        this.queryData = res.data
      })
      window.scrollTo(0, 0)
    },
    clearSearch() {
      // Resets all the variables
      this.searchBy = ''
      this.servname = ''
      this.status = ''

      this.getServices()
    },
    editService(serviceID) {
      // Restrict editing unless user is logged in
      if (this.user.isLoggedIn) {
        this.$router.push({ name: 'updateService', params: { id: serviceID } });
      } else {
        // Show error message or redirect to login page
        // depending on your application's logic
        alert('You are not authorized to make changes on these records.');
      }
    }
  }
};
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        List of Services
      </h1>
    </div>
    <div class="px-10 pt-20">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
      >
        <h2 class="text-2xl font-bold">Search Service By</h2>
        <!-- Displays search field options-->
        <div class="flex flex-col">
          <select
            class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="searchBy"
          >
            <option value="Service Name">Service Name</option>
            <option value="Service Status">Service Status</option>
          </select>
        </div>
        <!-- Displays Service Name search field parameter-->
        <div class="flex flex-col" v-if="searchBy === 'Service Name'">
          <label class="block">
            <input
              type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="servname"
              v-on:keyup.enter="handleSubmitForm"
              placeholder="Enter service name"
            />
          </label>
        </div>
        <!-- Displays Service Status search field parameters-->
        <div class="flex flex-col" v-if="searchBy === 'Service Status'">
            <label>
                <input
                type="radio"
                name="status"
                value="Active"
                v-model="status"
                @keyup.enter="handleSubmitForm"
                />
                Active
            </label>
            <label>
                <input
                type="radio"
                name="status"
                value="Inactive"
                v-model="status"
                @keyup.enter="handleSubmitForm"
                />
                Inactive
            </label>
            </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
      >
        <div></div>
        <div></div>
        <div class="mt-5 grid-cols-2">
          <button
            class="mr-10 border border-red-700 bg-white text-red-700 rounded"
            @click="clearSearch"
            type="submit"
          >
            Clear Search
          </button>
          <button
            class="bg-red-700 text-white rounded"
            @click="handleSubmitForm"
            type="submit"
          >
            Search for Service
          </button>
        </div>
      </div>
    </div>

    <hr class="mt-10 mb-10" />
    <!-- Display Found Data -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
    >
      <div class="ml-10">
        <h2 class="text-2xl font-bold">List of Services</h2>
        <h3 class="italic">Click table row to edit/display an entry</h3>
      </div>
      <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="p-4 text-left">Service Name</th>
              <th class="p-4 text-left">Service Description</th>
              <th class="p-4 text-left">Service Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr 
            @click="editService(service._id)"
            v-for="service in queryData" :key="service._id">
              <td class="p-2 text-left">{{ service.servname }}</td>
              <td class="p-2 text-left">{{ service.description }}</td>
              <td class="p-2 text-left">{{ service.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
