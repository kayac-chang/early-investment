import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { gradient1, gradient2, gradient3, gradient4, gradient5 } from './color'

const ctx = document.getElementById("03_chart").getContext("2d");
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
                    data: [47, 53, 53, 45, 58, 49, 33, 34, 42],
                    borderColor: "#9F4D00",
                    pointBackgroundColor: "#9F4D00",
                    backgroundColor: gradient1(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#5B3408",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [68, 71, 74, 62, 76, 66, 52, 53, 65],
                    borderColor: "#E46E00",
                    pointBackgroundColor: "#E46E00",
                    backgroundColor: gradient2(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#5B3408",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [83, 84, 87, 78, 89, 80, 66, 69, 80],
                    borderColor: "#FE7A00",
                    pointBackgroundColor: "#FE7A00",
                    backgroundColor: gradient3(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#5B3408",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [88, 91, 92, 86, 94, 86, 73, 76, 85],
                    borderColor: "#FCAA5B",
                    pointBackgroundColor: "#FCAA5B",
                    backgroundColor: gradient4(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#5B3408",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [96, 98, 95, 91, 97, 91, 84, 85, 89],
                    borderColor: "#FFCC9B",
                    pointBackgroundColor: "#FFCC9B",
                    backgroundColor: gradient5(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#5B3408",
                        formatter: function (value) {
                            return value + "%"; // 顯示數據值
                        },
                    },
                },
                {
                    data: [48, 27, 59, 49, 32, 60, 71, 67, 71],
                    borderColor: "#FFCC9B",
                    pointBackgroundColor: "#FFCC9B",
                    backgroundColor: gradient5(ctx),
                    fill: true,
                    datalabels: {
                        align: "bottom",
                        anchor: "end",
                        color: "#5B3408",
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
                        color: "#6d4e00",
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
                        color: "#5B340880",
                    },
                },
            },
        },
    });

    const radio_01_btns = document.querySelectorAll("#btn_radio_01 button");
    radio_01_btns.forEach((button, index) => {
        button.addEventListener("click", () => {
            radio_01_btns.forEach((btn) => {
                btn.classList.remove("active_brown");
            });

            button.classList.add("active_brown");

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
};
