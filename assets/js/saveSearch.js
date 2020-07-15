var newTickers = [];

function displayTickers(input) {
    //parse object of arrays in local storage or else if empty will just be empty

    // var getTickers = JSON.parse(window.localStorage.getItem('Ticker')) || [];
    // console.log(getTickers)
    var stockObj = {
        "ticker": input
    }
    newTickers.push(stockObj);
    localStorage.setItem('Ticker', JSON.stringify(newTickers));
    // console.log(modalInputVal);

    // var saveSearch = $("<h5>").text(getTickers);
    // $("#ticker1").val(localStorage.getItem(getTickers)).append(saveSearch);


}