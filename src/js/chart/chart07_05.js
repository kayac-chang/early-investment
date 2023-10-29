import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'

const ctx = document.getElementById('07_05_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["Health and Biotech", "IT & Software", "Hardware", 'Manufacturing', 'Media & Entertainment'],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [4.69, 2.69, 4.35, 1.30, 2.37].map((x) => x * (80 / 5)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => value / (80 / 5)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [43, 59, 37, 22, 30].map((x) => -x),
                    backgroundColor: blueGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: Math.abs
                    },
                }
            ],
        },
        options: {
            onResize,
            barThickness: 30,
            indexAxis: "y",
            scales: {
                x: {
                    ticks: {
                        callback: function (value) {
                            if (Math.sign(value) > 0) {
                                return value / (80 / 5)
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -80,
                    max: 80,
                    stacked: true,
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                    },
                    stacked: true
                }
            }
        },
    });