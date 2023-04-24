<!-- eslint-disable prettier/prettier -->
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    }
  },
  async mounted() {
    const backgroundColor = Object.keys(this.chartData).map(() => this.getColor())
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, '1)')
    )
    await new Chart(this.$refs.DonutZip, {
      type: 'doughnut',
      data: {
        labels: this.label,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: this.chartData
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true // displays legend
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    })
  },
  methods: {
    getColor(index) {
      let channel = () => Math.random() * 255
      return `rgba(${channel()}, ${channel()}, ${channel()}, 0.2)`
    }
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas class="p-10" ref="DonutZip"></canvas>
  </div>
</template>