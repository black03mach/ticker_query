const apikey = "8e4224a6c89ac32e4391f54b6ae018b6"; //5bb6d4317d6a3147707689eedc985177; //9714af7a1ecb25c559e2ffb4c260df2b;
let ticker = "SPY"; // default ticker

$(document).ready(function(){

    let defautlUrl = "https://financialmodelingprep.com/api/v3/historical-chart/5min/SPY?apikey=" + apikey;
    $.ajax({
        url: defautlUrl,
        method: "GET",
    }).then(function (response) {
            displayTodayChart(response);
    });

});



$('#stock-history').on('click', function(event){
    let range=event.target.id;
    let text = $(event.target).text();
    let history = "";
    if(range==="5min") {
        history = "historical-chart/5min/";
    } else {
        history = "historical-price-full/";
    }
    let queryURL =
	"https://financialmodelingprep.com/api/v3/"+history+ticker+"?apikey=" +
	apikey;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        if(range==="5min") {
            displayTodayChart(response);
        } else {
            displayHistoryChart(response, range, text);
        }
    });
});


function displayTodayChart(stockData) {
    window.__stockData = stockData;
    
    let today = stockData[0].date.split(" ");
    let closePrice = [];
    let closeTime = [];

    // find index value for the latest day
    for (let i=0; i<stockData.length; i++){
        let day = stockData[i].date.split(" "); //"2020-07-10 09:55:00";
        closePrice.push(stockData[i].close);
        closeTime.push(day[1]);
        if (day[0]!== today[0]){
            break;
        }
    }

    closePrice.reverse();
    closeTime.reverse();

	const ctx = document.getElementById("chart").getContext("2d");
	const myChart = new Chart(ctx, {
		type: "line",
		data: {
			labels: closeTime,
			datasets: [
				{
					label: today[0],
					data: closePrice,
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 2,
					fill: false,
					pointRadius: 0,
				},
			],
		},
		options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                    
                }]
            }
		},
	});
}

function displayHistoryChart(stockData, dayRange, textContent){
    window.__stockData = stockData;

    let dailyPrice=[];
    let dates = [];

    for(let i=dayRange; i>=0; i--){
        dailyPrice.push(stockData.historical[i].close);
        dates.push(stockData.historical[i].date);
    }


    const ctx = document.getElementById("chart").getContext("2d");
	const myChart = new Chart(ctx, {
		type: "line",
		data: {
			labels: dates,
			datasets: [
				{
                    label: textContent,
					data: dailyPrice,
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 2,
					fill: false,
					pointRadius: 0,
				},
			],
		},
		options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                    
                }]
            }
		},
	});
}