export default (chart) => {
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