
import Chart from 'chart.js/auto';
import { gradient6, gradient7, gradient8, gradient9, gradient10 } from './color'
import onResize from './on-resize';

const ctx = document.getElementById("04_chart").getContext("2d");
export default () => {
    const chart = new Chart(ctx, {
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
                    data: [6, 11, 7, 6, 13, 6, 2, 3, 4],
                    borderColor: "#39738E",
                    pointBackgroundColor: "#39738E",
                    backgroundColor: gradient6(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#39738E",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [15, 22, 15, 13, 25, 12, 6, 8, 10],
                    borderColor: "#53A6CC",
                    pointBackgroundColor: "#53A6CC",
                    backgroundColor: gradient7(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#39738E",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [27, 38, 26, 27, 43, 22, 12, 16, 19],
                    borderColor: "#80B6CF",
                    pointBackgroundColor: "#80B6CF",
                    backgroundColor: gradient8(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#39738E",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [34, 52, 33, 39, 56, 29, 17, 22, 24],
                    borderColor: "#A7D7EE",
                    pointBackgroundColor: "#A7D7EE",
                    backgroundColor: gradient9(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#39738E",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [52, 73, 40, 51, 68, 39, 29, 34, 30],
                    borderColor: "#C8E3EF",
                    pointBackgroundColor: "#C8E3EF",
                    backgroundColor: gradient10(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#39738E",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [4, 3, 5, 8, 3, 9, 16, 16, 10],
                    borderColor: "#C8E3EF",
                    pointBackgroundColor: "#C8E3EF",
                    backgroundColor: gradient10(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#39738E",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            onResize,
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
                        color: "#39738E",
                        padding: 10,
                        callback: function (value) {
                            return value + "%";
                        },
                    },
                    min: 0,
                    max: 100,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#39738E80",
                    },
                },
            },
        },
    });

    const radio_02_btns = document.querySelectorAll("#btn_radio_02 button");
    radio_02_btns.forEach((button, index) => {
        button.addEventListener("click", () => {
            radio_02_btns.forEach((btn) => {
                btn.classList.remove("active_blue");
            });

            button.classList.add("active_blue");

            const datasets = chart.data.datasets;
            datasets.forEach((item) => {
                item.hidden = true;
            });

            if (index === 0) {
                datasets.forEach((item) => {
                    item.hidden = false;
                });
            } else {
                datasets[index - 1].hidden = false;
            }

            chart.update();
        });
    });
}