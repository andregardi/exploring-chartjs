
var labels = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];
var revenues = [
    20000,
    14000,
    12000,
    15000,
    18000,
    19000,
    22000
];
var clients = [
    201,
    140,
    80,
    150,
    190,
    170,
    202
];
var mix = document.getElementById("mixChart").getContext('2d');
var mixChart = new Chart(mix, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: "Revenues",
                data: revenues,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                yAxisID: 'revenues',
            },
            {
                label: "Clients",
                data: clients,
                borderColor: 'rgba(0, 0, 0, 0)',
                backgroundColor: 'rgba(192, 75, 192, 0.5)',
                yAxisID: 'clients',
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    id: "revenues",
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Revenues (U$)'
                      }
                },
                {
                    id: "clients",
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Clients'
                      }
                },
            ]
        },
    }
});