<!-- eslint-disable prettier/prettier -->
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
    setup() {
        return { v$: useVuelidate({ $autoDirty: true }) }
    },
    data() {
        return {
            org: '',
            service: {
                servname: '',
                description: '',
                status: '',
            }
        }
    },
    // retreiving services for current org instance
    created() {
        axios.get(`${apiURL}/org`).then((res) => {
        this.org = res.data._id
        })
    },
    // reset scroll position to very top of page
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        async registerService() {
        // Checks to see if there are any errors in validation
        const isFormCorrect = await this.v$.$validate()
        // If no errors found. isFormCorrect = True then the form is submitted
        if (isFormCorrect) {
            axios
            .post(`${apiURL}/services`, this.service)
            .then(() => {
                alert('Service has been added.')
                this.$router.push({ name: 'findService' })
            })
            .catch((error) => {
                console.log(error)
            })
        }
        }
    },
    // sets validations for the various data properties
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
        Event Service Form
        </h1>
        <div class="px-10 py-20">
            <form @submit.prevent="registerService">
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
                <!-- form field: add service description -->
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
                <!-- form field: add service current status -->
                <div class="flex flex-col">
                    <span class="text-gray-700">Service Status</span>
                    <span style="color: #ff0000">*</span>
                    <div class="mt-1">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="status" value="Active" v-model="service.status" />
                            <span class="ml-2">Active</span>
                            <span class="text-black" v-if="v$.service.status.$error">
                                <p
                                class="text-red-700"
                                v-for="error of v$.service.status.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}!
                                </p>
                            </span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="status" value="Inactive" v-model="service.status" />
                            <span class="ml-2">Inactive</span>
                            <span class="text-black" v-if="v$.service.status.$error">
                                <p
                                class="text-red-700"
                                v-for="error of v$.service.status.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}!
                                </p>
                            </span>
                        </label>
                    </div>
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
    </main>
</template>
