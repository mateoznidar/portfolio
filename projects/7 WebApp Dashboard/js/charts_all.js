const trafficChart = document.getElementById("traffic-chart");
const hourly = document.querySelector(".hourly");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

function removeActive() {
    let active = document.getElementsByClassName("active");
    for ( let i = 0; i < active.length; i++ ) {
        active[i].classList.remove("active");
    }
};

const trafficPerHour = {
    labels: ["10", "20", "30", "40", "50", "60"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [45, 148, 130, 112, 91, 178],
        backgroundColor: 'rgba(120, 130, 200, .2)',
        borderWidth: 1,
    }]
};

const trafficPerDay = {
    labels: ["0-4", "4-8", "8-12", "12-16", "16-20", "20-24"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [41, 88, 12, 19, 55, 99],
        backgroundColor: 'rgba(120, 130, 200, .2)',
        borderWidth: 1,
    }]
};

const trafficPerWeek = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [111, 155, 99, 169, 101, 55, 14],
        backgroundColor: 'rgba(120, 130, 200, .2)',
        borderWidth: 1,
    }]
};

const trafficPerMonth = {
    labels: ["1-5", "5-10", "10-15", "15-20", "20-25", "25-30", "30-31"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [779, 1211, 899, 2103, 1149, 1999, 1453, 957],
        backgroundColor: 'rgba(120, 130, 200, .2)',
        borderWidth: 1,
    }]
};

const traffic = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};


let trafficChartShow = new Chart(trafficChart, {
    type: 'line',
    data: trafficPerDay,
    options: traffic 
});

hourly.addEventListener("click", () => {
    removeActive();
    trafficChartShow.data = trafficPerHour;
    trafficChartShow.update();
    hourly.classList.add("active");
});

daily.addEventListener("click", () => {
    removeActive();
    trafficChartShow.data = trafficPerDay;
    trafficChartShow.update();
    daily.classList.add("active");
});

weekly.addEventListener("click", () => {
    removeActive();
    trafficChartShow.data = trafficPerWeek;
    trafficChartShow.update();
    weekly.classList.add("active");
});

monthly.addEventListener("click", () => {
    removeActive();
    trafficChartShow.data = trafficPerMonth;
    trafficChartShow.update();
    monthly.classList.add("active");
});

// daily traffic 

const dailyChart = document.getElementById("daily-chart");

const dailyChartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: 'Number of Visits',
        data: [38, 111, 144, 75, 177, 211, 108],
        backgroundColor: '#7477BF',
        borderWidth: 1,
    }]
};

const dailyTraffic = {
    aspectRatio: 2,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChartShow = new Chart(dailyChart, {
    type: 'bar',
    data: dailyChartData,
    options: dailyTraffic
});


// pie chart 

const mobileChart = document.getElementById("mobile-chart");

const mobileChartData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: 'Users per Device',
        data: [1248, 852, 1587],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileTraffic = {
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 15,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChartShow = new Chart(mobileChart, {
    type: 'doughnut',
    data: mobileChartData,
    options: mobileTraffic
});
