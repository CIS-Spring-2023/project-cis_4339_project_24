<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      services: [
      { id: 1, name: 'Service A', description: 'Description of Service A', status: 'Active' },
      { id: 2, name: 'Service B', description: 'Description of Service B', status: 'Active' },
      { id: 3, name: 'Service C', description: 'Description of Service C', status: 'Inactive' },
      { id: 4, name: 'Service D', description: 'Description of Service D', status: 'Active' },
      { id: 5, name: 'Service E', description: 'Description of Service E', status: 'Active' },
      { id: 6, name: 'Service F', description: 'Description of Service F', status: 'Inactive' },
      { id: 7, name: 'Service G', description: 'Description of Service G', status: 'Active' }
      ]
    }
  },
  methods: {
    getAllServices() {
      return this.services
    },
    deleteService(index) {
      // Show confirmation dialog
      if (confirm("Are you sure you want to delete this service?")) {
        // removes service
        this.services.splice(index, 1);
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
        Edit Event Services
        </h1>
        <br>
        <br>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
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
                        <th class="p-4 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-300">
                    <tr v-for="service in services" :key="service._id">
                        <td class="p-3 text-left">
                        {{ service.name }}
                        </td>
                        <td class="p-3 text-left" style="white-space: nowrap;">
                        {{ service.description }}
                        </td>
                        <td class="p-3 text-left">{{ service.status }}</td>
                        <td>
                          <div class="btn-group">
                          <router-link :to="{name: 'updateService', params: { id: service.id }}" class="btn btn-success">Edit</router-link>
                          <button @click.prevent="deleteService(service._id)" class="btn btn-danger mx-2">Delete</button>
                          </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br>
                <br>
                <br>
            </div>
        </div>
    </main>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
.btn-group {
  display: flex;
  flex-direction: row;
}
</style>