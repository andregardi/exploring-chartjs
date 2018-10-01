var labels = [
    "Vote for blue",
    "vote for red",
];
var data = [
    70,
    30,
];
var pie = document.getElementById("pieChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 0, 0, 1)'],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(192, 0, 0, 0.2)'],
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Colors election"
        }
    }
});