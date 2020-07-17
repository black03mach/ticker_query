// array of stored/previously saved tickers
var savedTickers = [];
var lastSavedTicker = "";

function saveTickers(symbol, companyLogo, companyName) {

    var stockObj = {
        ticker: symbol,
        logo: companyLogo,
        name: companyName
    }
    // if ticker is already in savedTickers array then do not push. If it's not in the array, then push
    var index = savedTickers.findIndex(function (stock) {
        return stock.ticker === symbol;
    });
    if (index < 0) {
        savedTickers.push(stockObj);
        localStorage.setItem('Ticker', JSON.stringify(savedTickers));
    }
    // console.log(savedTickers);

}

function displayTickers() {
    // if localStorage is not empty, parse JSON to savedTickers variable
    savedTickers = JSON.parse(window.localStorage.getItem('Ticker')) || [];
    lastSavedTicker = savedTickers[savedTickers.length - 1].ticker;
    // console.log(savedTickers);

    var htmlContent = '<div class="media-object"><div class="media-object-section"><div class="thumbnail"><img class="logos" src="" width="80px" alt="logo"></div></div><div class="media-object-section main-section"><h5 class="tickerNames"></h5><p class="companyNames"></p></div></div>';

    if (savedTickers.length !== undefined) {
        // refresh the html content by clearing it out first. Otherwise it will keep appending creating empty divs
        $('#saved-searches').empty();

        //dynamically generate html content
        $.each(savedTickers, function () {
            $('#saved-searches').append(htmlContent);
        })

        $('.tickerNames').each(function (index) {
            if (savedTickers[index] === undefined) {
                $(this).text('');
            } else {
                $(this).text(savedTickers[index].ticker);
                //set the container to id name of ticker symbol for use in click event below
                $(this).parents('.media-object').attr("id", savedTickers[index].ticker);
            }
        });
        $('.logos').each(function (index) {
            if (savedTickers[index] === undefined) {
                $(this).attr('src', "");
            } else {
                $(this).attr("src", savedTickers[index].logo);
            }

        });
        $('.companyNames').each(function (index) {
            if (savedTickers[index] === undefined) {
                $(this).text('');
            } else {
                $(this).text(savedTickers[index].name);
            }
        })
    }

}

// call APIs by clicking on previously searched tickers
$('#saved-searches').on('click', function (event) {
    // console.log(event.target);
    var previousSearchedTickerID = $(event.target).parents('.media-object').attr("id");
    console.log(previousSearchedTickerID);
    callRequests(previousSearchedTickerID);
    getChartURL(previousSearchedTickerID);
})