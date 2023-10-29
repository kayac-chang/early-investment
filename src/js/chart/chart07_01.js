import Chart from "chart.js/auto";
import onResize from "./on-resize";

const onResize07 = (chart) => {
    const windowWidth = window.innerWidth
    let pointRadius
    if (windowWidth >= 768 && windowWidth < 1440) {
        pointRadius = 16
    } else if (windowWidth >= 1440) {
        pointRadius = 16
    } else {
        pointRadius = 10
    }
    chart.data.datasets.forEach(function (dataset) {
        dataset.pointRadius = pointRadius
        dataset.pointHoverRadius = pointRadius
    })

    // 重新渲染圖表
    chart.update()
}

export default () =>
    new Chart(document.getElementById('07_01_chart').getContext("2d"), {
        type: "line",
        data: {
            labels: [
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023 Q1",
            ],
            datasets: [
                {
                    data: [22, 38, 38, 60, 48, 32, 59, 55, 9],
                    borderColor: "#A0CFFC",
                    pointBackgroundColor: "#A0CFFC",
                    datalabels: {
                        color: "#fff",
                    },
                },
                {
                    data: [39, 37, 22, 34, 86, 76, 48, 69, 14],
                    borderColor: "#4382A0",
                    pointBackgroundColor: "#4382A0",
                    datalabels: {
                        color: "#fff",
                    },
                },
                {
                    data: [98, 128, 109, 128, 184, 129, 151, 129, 21],
                    borderColor: "#FF7B01",
                    pointBackgroundColor: "#FF7B01",
                    datalabels: {
                        color: "#fff",
                    },
                },
                {
                    data: [174, 190, 179, 182, 240, 240, 268, 270, 76],
                    borderColor: "#FFC11C",
                    pointBackgroundColor: "#FFC11C",
                    datalabels: {
                        color: "#D86800",
                    },
                },
            ],
        },
        options: {
            pointRadius: 10,
            pointHoverRadius: 10,
            onResize: function (chart) {
                onResize(chart)
                onResize07(chart)
            },
            layout: {
                padding: {
                    right: 30,
                },
            },
            scales: {
                y: {
                    border: {
                        display: false,
                    },
                    grid: {
                        color: "#DBDBDB",
                    },
                    ticks: {
                        color: "#6D4E00",
                        padding: 10,
                    },
                    min: 0,
                    max: 300,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#6D4E00",
                    },
                },
            },
        },
    });
