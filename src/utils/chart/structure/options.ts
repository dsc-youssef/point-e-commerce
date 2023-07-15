// Types
import type { ChartOptions } from 'chart.js';

// Utils
import { themeColors } from '../../colors';

export const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x',
  scales: {
    y: {
      ticks: {
        color: themeColors.danger,
        font: {
          weight: "500",
          family: 'Poppins',
          size: 11
          
        }
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
      }
    },
    x: {
      ticks: {
        color: themeColors.danger,
        font: {
          weight: "500",
          family: 'Poppins',
          size: 11
        }
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true
      }
    },
  },


  plugins: {
    legend: {
      display: true,
      labels: {
        color: themeColors.danger,
        font: {
          weight: "600",
          family: "Poppins"
        }
      }
    },
    subtitle: {
      display: false,
      text: 'Custom Chart Subtitle'
    }
  }
}

export default options;