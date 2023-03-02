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
      { id: 7, name: 'Service G', description: 'Description of Service G' },
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

<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        List of Event Services
      </h1>
    </div>
    <hr class="mt-10 mb-10" />
    <!-- Display Data -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
    >
      <div class="ml-10">
        <!-- left empty column -->
      </div>
      
      <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="p-4 text-left">Service Name</th>
              <th class="p-4 text-left">Service Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr
              @click="getAllServices(service._id)"
              v-for="service in services"
              :key="service._id"
            >
              <td class="p-2 text-left">{{ service.name }}</td>
              <td class="p-2 text-left">{{ service.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
