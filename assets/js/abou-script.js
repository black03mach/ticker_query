// Sarah's work begin
var apiKey = "75mcsxzsde9ronsyffilsqncg6djkx8ecrsofimm";
var queryUrl = "http://stocknewsapi.com/api/v1?";
tickerInput = "aapl";

$('#search-button').on('click', function () {
    event.preventDefault();
    var um = {};
    um["items"] = 50;
    um["token"] = apiKey;
    um["tickers"] = tickerInput;
    //section=alltickers&items=50&token=75mcsxzsde9ronsyffilsqncg6djkx8ecrsofimm"+ tickerInput +"&appid=" + apiKey
    var queryActual = queryUrl + $.param(um);
    console.log(queryActual);
    $.ajax({
        url: "https://stocknewsapi.com/api/v1?items=50&token=75mcsxzsde9ronsyffilsqncg6djkx8ecrsofimm&tickers=aapl",
        method: "GET",
        contentType: "application/json",
    }).then(function (response) {
        console.log(response)
    })
})

//    newsInput = $('#newsInput').val().trim();
$('#button').on('click', function () {
    // function display()  {
    //     var a = [];
    //     for ( var i = 0; i < 4; i++ ) {
    //         cardBody.append("#");
    //         card.append(cardBody)
    //         $("#current-weather-container").append(card);    
})