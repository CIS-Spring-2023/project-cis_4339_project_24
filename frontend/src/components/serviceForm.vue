<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
        // hardcoded list of event services
        services: [
            { id: 1, name: 'Service A', description: 'Description of Service A', status: 'Active' },
            { id: 2, name: 'Service B', description: 'Description of Service B', status: 'Active' },
            { id: 3, name: 'Service C', description: 'Description of Service C', status: 'Inactive' },
            { id: 4, name: 'Service D', description: 'Description of Service D', status: 'Active' },
            { id: 5, name: 'Service E', description: 'Description of Service E', status: 'Active' },
            { id: 6, name: 'Service F', description: 'Description of Service F', status: 'Inactive' },
            { id: 7, name: 'Service G', description: 'Description of Service G', status: 'Active' }
            ],
            // takes input and appends new service to the array of services
            newService: { name: '', description: '', status: '' }
    }
  },
    methods: {
      addService: function() {
        // Generate a new ID for the service
        var id = this.services.length + 1;
        
        // Add the new service to the list
        this.services.push({
          id: id,
          name: this.newService.name,
          description: this.newService.description,
          status: this.newService.status
        });
        
        // Clear the form inputs
        this.newService.name = '';
        this.newService.description = '';
        this.newService.status = '';
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
        Event Service Form
        </h1>
        <div class="px-10 py-20">
            <form @submit.prevent="addService">
                <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
                >
                <h2 class="text-2xl font-bold">Service Details</h2>
                <!-- form field: add service name -->
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Name</span>
                    <span style="color: #ff0000">*</span>
                    <!-- service name is required to add as a new service -->
                    <input 
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="newService.name" required
                    >
                    </label>
                </div>
                <!-- form field: add service description -->
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Description</span>
                    <!-- service description is optional -->
                    <input 
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="newService.description"
                    >
                    </label>
                </div>
                <!-- form field: add service current status -->
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Status</span>
                    <span style="color: #ff0000">*</span>
                    <!-- service status is required to add as a new service -->
                    <input 
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="newService.status" required
                    >
                    </label>
                </div>
                </div>
                <!-- submit button -->
                <div class="flex justify-between mt-10 mr-20">
                    <!-- appends new service to the list of services displayed in this same page -->
                    <button class="bg-red-700 text-white rounded" type="submit">
                    Add Service
                    </button>
                </div>
            </form>
        </div>
        <!-- displays list of all services -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            <div class="ml-10">
            <h2 class="text-2xl font-bold">List of Services</h2>
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
