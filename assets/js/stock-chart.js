// Load stock charts based on Ticker search. Charts are generated via chart.js library

// const apikeyMC = "5bb6d4317d6a3147707689eedc985177"; //tickerAPIKey: d36814bc6409a96b343b47b09e7eb44a;
var ticker = "";
var tickerUppercase = "";
// setup canvas
const ctx = document.getElementById("chart").getContext("2d");
// initialize an empty chart;
var myChart = new Chart(ctx, {});

// click event to get today's chart when Search button is clicked
$('#search-button').on('click', function () {
    event.preventDefault();
    ticker = $('#tickerInput').val().trim();
    tickerUppercase = ticker.toUpperCase(); //API call only works with Uppercase ticker symbols
    // console.log(tickerUppercase);
    getChartURL(tickerUppercase);

});

// click event to get historical charts when different timeframes are clicked
$('#stock-history').on('click', function (event) {
    let range = event.target.id;
    let text = $(event.target).text();
    let history = "";
    if (range === "5min") {
        history = "historical-chart/5min/";
    } else {
        history = "historical-price-full/";
    }
    let queryURL =
        "https://financialmodelingprep.com/api/v3/" + history + tickerUppercase + "?apikey=" + tickerAPIKey;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        if (range === "5min") {
            displayTodayChart(response);
        } else {
            displayHistoryChart(response, range, text);
        }
    });
});

// call function when Search button is clicked on Page Load
function getChartURL(tickerSymbol) {
    let queryPageLoadURL = "https://financialmodelingprep.com/api/v3/historical-chart/5min/" + tickerSymbol + "?apikey=" + tickerAPIKey;
    $.ajax({
        url: queryPageLoadURL,
        method: "GET",
    }).then(function (response) {
        displayTodayChart(response);
    });
}

// show today/latest day's stock prices
function displayTodayChart(stockData) {
    window.__stockData = stockData;

    let today = stockData[0].date.split(" ");
    let closePrice = [];
    let closeTime = [];

    // find index value for the latest day
    for (let i = 0; i < stockData.length; i++) {
        let day = stockData[i].date.split(" "); //"2020-07-10 09:55:00";
        if (day[0] !== today[0]) {
            break;
        }
        closePrice.push(stockData[i].close);
        closeTime.push(day[1]);
    }

    // reverse price to graph from earliest to latest data
    closePrice.reverse();
    closeTime.reverse();

    // removes previous instance of myChart before creating a new one
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: closeTime,
            datasets: [{
                label: today[0],
                data: closePrice,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
                fill: false,
                pointRadius: 0,
            }, ],
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return '$' + value;
                        }
                    }

                }]
            }
        },
    });
    myChart.update();
}


// display historical daily prices based on parameter input
function displayHistoryChart(stockData, dayRange, textContent) {
    window.__stockData = stockData;

    let dailyPrice = [];
    let dates = [];

    for (let i = (dayRange - 1); i >= 0; i--) {
        dailyPrice.push(stockData.historical[i].close);
        dates.push(stockData.historical[i].date);
    }

    // removes previous instance of myChart before creating a new one
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: textContent,
                data: dailyPrice,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
                fill: false,
                pointRadius: 0,
            }, ],
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return '$' + value;
                        }
                    }

                }]
            }
        },
    });
    myChart.update();
}