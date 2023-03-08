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
    Event Services
    </h1>
    <br>
    <br>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      <div class="ml-10">
      <h2 class="text-2xl font-bold">List of Services</h2>
      <h3 class="italic">Includes all active and inactive services</h3>
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
              <tr v-for="service in services" :key="service._id">
                  <td class="p-2 text-left">
                  {{ service.name }}
                  </td>
                  <td class="p-2 text-left">
                  {{ service.description }}
                  </td>
                  <td class="p-2 text-left">{{ service.status }}</td>
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
