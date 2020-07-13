// Patrick's work begin

var tickerAPIKey = "d36814bc6409a96b343b47b09e7eb44a";
var newsAPIKey = "fybsnxqp9z369dpyru1k6ndejeoj7n2pytwfntsq"

$('button').on('click', function (){
    event.preventDefault();
    tickerInput = $('#tickerInput').val().trim();
    //console.log(tickerInput);
    // Ill check this code once we have everything up and running.
    // console.log(tickerInput)
    var tickerqueryURL = "https://financialmodelingprep.com/api/v3/profile/" + tickerInput + "?apikey=" + tickerAPIKey;
    var tickerratioURL = "https://financialmodelingprep.com/api/v3/ratios/" + tickerInput +"?period=quarter&apikey=" + tickerAPIKey;
    var ytdURL = "https://financialmodelingprep.com/api/v3/quote/" + tickerInput + "?apikey=" + tickerAPIKey;
    var newsqueryURL = "https://stocknewsapi.com/api/v1?tickers="+ tickerInput +"&items=50&token=" + newsAPIKey ; 
    // console.log(tickerqueryURL);
    // console.log(newsqueryURL);
    // console.log(ytdURL);

    // Stock metric AJAX call
    $.ajax({
        url : tickerqueryURL,
        method : "GET"
    }).then(function(responseMetric){
        //console.log(responseMetric);
        var betaMetric = responseMetric[0].beta;
        var divMetric = responseMetric[0].lastDiv;
        var companyDesciption = responseMetric[0].description;
        var currentPrice = responseMetric[0].price;
        var symbol = responseMetric[0].symbol;
        var companyImage = responseMetric[0].image;

        $("#beta").text(betaMetric);
        $("#dividend").text(divMetric);
        $("#description").text(companyDesciption);
        $("#currentPrice").text(currentPrice);
        $("#ticker").text(symbol);
        $("#companyImage").image(companyImage);
    })

    // Stock year high
    $.ajax({
        url : ytdURL,
        method : "GET"
    }).then(function(ytdMetric){
        var ytdHigh = ytdMetric[0].yearHigh;

        $("#yearHigh").text(ytdHigh);
    })
 
    // Stock Ratios AJAX call
    $.ajax({
        url : tickerratioURL,
        method : "GET"
    }).then(function(ratioResponse){
        console.log(ratioResponse) 
        var peRatio = ratioResponse[0].priceEarningsRatio;
        var pricebookRatio = ratioResponse[0].priceToBookRatio;

        $("#peRatio").text(peRatio);
        $("#pbRatio").text(pricebookRatio);
    })

    // News AJAX call
    $.ajax({
        url : newsqueryURL,
        method : "GET"
    }).then(function(response){
        //console.log(response)
    })
})

//add a function to show the stock metrics
//create a function to save the search
