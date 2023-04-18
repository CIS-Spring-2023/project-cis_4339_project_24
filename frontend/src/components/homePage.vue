<!-- eslint-disable prettier/prettier -->
<script>
import { DateTime } from 'luxon'
import axios from 'axios'
import AttendanceChart from './barChart.vue'
import DonutZip from './donutzipChart.vue'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  components: {
    // call to display bar chart
    AttendanceChart,
    // call to display donut chart
    DonutZip   
  },
  data() {
    return {
      recentEvents: [],
      labels: [],
      chartData: [],
      labels2: [],
      chartData2: [],
      loading: false,
      error: null,
      loading2: false,
      error2: null
    }
  },
  mounted() {
    this.getAttendanceData()
    this.getZipData()
  },
  methods: {
    async getAttendanceData() {
      try {
        this.error = null
        this.loading = true
        const response = await axios.get(`${apiURL}/events/attendance`)
        this.recentEvents = response.data
        this.labels = response.data.map(
          (item) => `${item.name} (${this.formattedDate(item.date)})`
        )
        this.chartData = response.data.map((item) => item.attendees.length)
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: 'Server Response',
            message: err.message
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: 'Unable to Reach Server',
            message: err.message
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: 'Application Error',
            message: err.message
          }
        }
      }
      this.loading = false
    },
    async getZipData() {
      try {
        this.error2 = null
        this.loading2 = true
        const response = await axios.get(`${apiURL}/clients/zip`)
        const data = response.data
        console.log(response.data)
        this.labels2 = data.map((item) => item._id)
        this.chartData2 = data.map((item) => item.count)
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error2 = {
            title: 'Server Response',
            message: err.message
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error2 = {
            title: 'Unable to Reach Server',
            message: err.message
          }
        } else {
          // There's probably an error in your code
          this.error2 = {
            title: 'Application Error',
            message: err.message
          }
        }
      }
      this.loading2 = false
    },
    formattedDate(datetimeDB) {
      const dt = DateTime.fromISO(datetimeDB, {
        zone: 'utc'
      })
      return dt
        .setZone(DateTime.now().zoneName, { keepLocalTime: true })
        .toLocaleString()
    },
    // method to allow click through table to event details
    editEvent(eventID) {
      this.$router.push({ name: 'eventdetails', params: { id: eventID } })
    }
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Welcome
      </h1>
      <br />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
      >
        <div class="ml-10"></div>
        <div class="flex flex-col col-span-2">
          <table class="min-w-full shadow-md rounded">
            <thead class="bg-gray-50 text-xl">
              <tr class="p-4 text-left">
                <th class="p-4 text-left">Event Name</th>
                <th class="p-4 text-left">Event Date</th>
                <th class="p-4 text-left">Number of Attendees</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <tr
                @click="editEvent(event._id)"
                v-for="event in recentEvents"
                :key="event._id"
              >
                <td class="p-2 text-left">{{ event.name }}</td>
                <td class="p-2 text-left">{{ formattedDate(event.date) }}</td>
                <td class="p-2 text-left">{{ event.attendees.length }}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <br>
            <h2 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Events Attendance</h2>
            <br>
            <AttendanceChart
              v-if="!loading && !error"
              :label="labels"
              :chart-data="chartData"
            ></AttendanceChart>
            <br>
            

            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading">
              <p
                class="text-6xl font-bold text-center text-gray-500 animate-pulse"
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
          </div>
          <div>
            <br>
            <h2 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Clients by Zip Code</h2>
            <br>
            <DonutZip
              v-if="!loading && !error"
              :label="labels2"
              :chart-data="chartData2"
            ></DonutZip>
            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading2">
              <p
                class="text-6xl font-bold text-center text-gray-500 animate-pulse"
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error2">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error2.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error2.message }}
              </p>
            </div>
          </div>
      </div>
      </div>
    </div>
  </main>
</template>
