import Chart from "chart.js/auto";
import { orangeGradient, blueGradient } from './color'
import onResize from './on-resize'

const ctx = document.getElementById("01_chart").getContext("2d")

export default () => {
  const chart = new Chart(ctx, {
    data: {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          type: "line",
          data: [262, 290, 294, 298, 439, 399, 412, 422],
          yAxisID: "y-right",
          borderColor: "#FFD057",
          pointBackgroundColor: "#39738E",
          pointBorderWidth: 0,
          datalabels: {
            align: "top",
            color: "#39738E",
          },
        },
        {
          type: "line",
          data: [null, null, null, null, null, null, null, null, 105],
          yAxisID: "y-right",
          borderColor: "#FFD057",
          showLine: false,
          pointBackgroundColor: "#39738E",
          pointBorderWidth: 0,
          datalabels: {
            align: "top",
            color: "#39738E",
          },
        },
        {
          type: "bar",
          data: [0.84, 0.62, 0.93, 0.93, 0.81, 1.32, 2.58, 2.22, 0.53],
          backgroundColor: [
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            blueGradient(ctx),
            blueGradient(ctx),
          ],
          yAxisID: "y-left",
          datalabels: {
            align: "start",
            anchor: "start",
            offset: function () {
              const width = window.innerWidth;
              if (width < 768) return -20;
              if (width < 1440) return -30;
              return -40;
            },
            color: "#fff",
          },
        },
      ],
    },
    options: {
      barPercentage: 0.9, // 柱子寬度佔類別寬度的百分比
      categoryPercentage: 1,
      onResize,
      scales: {
        "y-left": {
          position: "left",
          border: {
            display: false,
          },
          grid: {
            color: "#F8DEB9",
          },
          ticks: {
            color: "#6d4e00",
            padding: 10,
          },
          min: 0,
          max: 3,
          beginAtZero: true,
        },
        "y-right": {
          position: "right",
          border: {
            display: false,
          },
          grid: {
            color: "#F8DEB9",
          },
          ticks: {
            color: "#6d4e00",
            padding: 10,
            callback: function (value) {
              if (value === 0 || value % 100 === 0) {
                return value;
              } else {
                return null; // 不顯示該刻度
              }
            },
          },
          min: 0,
          max: 600,
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#5B340880",
          },
        },
      },
    },
  });

  const chart_01_switch = document.querySelector("#chart_01_switch");
  chart_01_switch.addEventListener("change", function () {
    if (this.checked) {
      chart.data.labels.push("2023 Q1");
    } else {
      chart.data.labels.pop();
    }
    chart.update()
  });
}