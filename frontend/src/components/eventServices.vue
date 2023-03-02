<!-- eslint-disable prettier/prettier -->
<script>
import { DateTime } from 'luxon'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  data() {
    return {
      services: [
      { id: 1, name: 'Service A', description: 'Description of Service A' },
      { id: 2, name: 'Service B', description: 'Description of Service B' },
      { id: 3, name: 'Service C', description: 'Description of Service C' },
      { id: 4, name: 'Service D', description: 'Description of Service D' },
      { id: 5, name: 'Service E', description: 'Description of Service E' },
      { id: 6, name: 'Service F', description: 'Description of Service F' },
      { id: 7, name: 'Service G', description: 'Description of Service G' }
      ]
    }
  },
  mounted() {
    this.getServices()
  },
  methods: {
    createService(name, description) {
      const id = Math.max(...this.services.map(service => service.id)) + 1
      this.services.push({ id, name, description })
    },

    getAllServices() {
      return this.services
    },
    
    updateService(id, name, description) {
      const index = this.services.findIndex(service => service.id === id)
      this.services.splice(index, 1, { id, name, description })
    },

    deleteService(id) {
      const index = this.services.findIndex(service => service.id === id)
      this.services.splice(index, 1)
    }
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
    <div class="ml-10">
        <!-- Empty left column -->
    </div>
    <div class="flex flex-col col-span-2">
      <table class="min-w-full shadow-md rounded">
        <thead class="bg-gray-50 text-xl">
          <tr>
              <th class="p-4 text-left">Service Name</th>
              <th class="p-4 text-left">Service Description</th>
              <th class="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="service in services" :key="service._id">
            <td>{{ service.name }}</td>
            <td>{{ service.description }}</td>
            <td>
              <button @click.prevent="updateService(service.id,service.name, service.desctiption)" class="btn btn-danger mx-2">Edit
              </button>
              <!-- //<router-link :to="{name: 'edit', params: { id: service._id }}" class="btn btn-success ">Edit</router-link> -->
              <button @click.prevent="deleteService(service.id)" class="btn btn-danger mx-2">Delete</button>
            </td>  
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
