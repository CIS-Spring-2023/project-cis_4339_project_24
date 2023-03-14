<!-- eslint-disable prettier/prettier -->
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
  
  export default {
    mounted() {
      // defines the rendering of donut chart
      this.renderChart();
    },
    methods: {
      renderChart() {
        const data = {
          // supposed zipcodes retreived from client data
          labels: ['77204', '77339', '77060', '77008', '77004'],
          datasets: [
            {
              label: "Zip Code",
              // number of supposed clients under the list of zipcode labels
              data: [15, 40, 20, 15, 10],
              // label section colors
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#56FF7B', '#BE36EB'],
              // label color on mouse hover
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#56FF7B', '#BE36EB'],
            },
          ],
        };
  
        const options = {
          responsive: true,
          maintainAspectRatio: false,
          // center hole cutout percentage
          cutoutPercentage: 50,
        };
        // defines properties of donut chart and call
        this.chart = new Chart(this.$refs.ZipChart, {
          type: 'doughnut',
          data,
          options,
        });
      },
    }
  };
</script>
<!-- eslint-disable prettier/prettier -->
<!-- defines donut chart display and call -->
<template>
    <div class="shadow-lg rounded-lg overflow-hidden">
      <canvas class="p-10" ref="ZipChart"></canvas>
    </div>
</template>
