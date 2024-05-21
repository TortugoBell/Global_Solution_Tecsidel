document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenuButton = document.getElementById('closeMenuButton');

    const porticoOverlay = document.getElementById('porticoOverlay');
    const closePorticoOverlay = document.getElementById('closePorticoOverlay');

    menuButton.addEventListener('click', function () {
        menuOverlay.style.display = 'flex';
    });

    closeMenuButton.addEventListener('click', function () {
        menuOverlay.style.display = 'none';
    });

    // Example of opening the portico overlay, in practice, this should be done based on some user action
    document.querySelectorAll('.portico-box .row .col').forEach(function (portico) {
        portico.addEventListener('click', function () {
            porticoOverlay.style.display = 'flex';
        });
    });

    closePorticoOverlay.addEventListener('click', function () {
        porticoOverlay.style.display = 'none';
    });

    // Example of initializing a chart
    const ctx = document.getElementById('paymentChart').getContext('2d');
    const paymentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9'],
            datasets: [{
                label: 'Pagamentos Concluídos',
                data: [96, 78, 75, 98, 100, 100, 99, 100, 87],
                backgroundColor: 'rgba(228, 0, 130, 0.5)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Example of updating chart data
    document.getElementById('updateChartButton').addEventListener('click', function () {
        // Generate random data
        const newData = Array.from({ length: 9 }, () => Math.floor(Math.random() * 100));
        // Update chart data
        paymentChart.data.datasets[0].data = newData;
        // Update chart
        paymentChart.update();
    });
});