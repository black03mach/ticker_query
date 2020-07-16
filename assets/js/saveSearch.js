var newTickers = [];


function saveTickers(input) {
    var stockObj = {
        ticker:input
    }
    newTickers.push(stockObj);
    localStorage.setItem('Ticker', JSON.stringify(newTickers));

    console.log(newTickers);

}



function displayTickers () {
 var getTickers = JSON.parse(window.localStorage.getItem('Ticker')) || [];

 for (var i = 0; i < getTickers.length; i++) {
    console.log(getTickers[i].ticker);
    $("#ticker1").text(getTickers[i].ticker);
 }




}
displayTickers();