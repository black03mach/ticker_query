

// Patrick's work begin

var tickerAPIKey = "d36814bc6409a96b343b47b09e7eb44a";
var newsAPIKey = "fybsnxqp9z369dpyru1k6ndejeoj7n2pytwfntsq"

$('button').on('click', function (){
    event.preventDefault();
    tickerInput = $('#tickerInput').val().trim();
    // Ill check this code once we have everything up and running.
    // console.log(tickerInput)
    var tickerqueryURL = "https://financialmodelingprep.com/api/v3/profile/" + tickerInput + "?apikey=" + tickerAPIKey;
    var newsqueryURL = "https://stocknewsapi.com/api/v1?tickers="+ tickerInput +"&items=50&token=" + newsAPIKey ; 
    console.log(tickerqueryURL);
    console.log(newsqueryURL);

    // Stock metric AJAX call
    $.ajax({
        url : tickerqueryURL,
        method : "GET"
    }).then(function(response){
        console.log(response)
    })
    // News AJAX call
    $.ajax({
        url : newsqueryURL,
        method : "GET"
    }).then(function(response){
        console.log(response)
    })
})

// Patrick's work end
