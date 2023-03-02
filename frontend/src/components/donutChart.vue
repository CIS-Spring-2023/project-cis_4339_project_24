<!-- eslint-disable prettier/prettier -->
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
  
  export default {
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const data = {
          labels: ['77204', '77339', '77060', '77008', '77004'],
          datasets: [
            {
              label: "Zip Code",
              data: [15, 40, 20, 15, 10],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#56FF7B', '#BE36EB'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#56FF7B', '#BE36EB'],
            },
          ],
        };
  
        const options = {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 50,
        };
  
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
<template>
    <div class="shadow-lg rounded-lg overflow-hidden">
      <canvas class="p-10" ref="ZipChart"></canvas>
    </div>
</template>
