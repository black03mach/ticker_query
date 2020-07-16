var newTickers = [];


function saveTickers(symbol, companyLogo, companyName) {
    var stockObj = {
        ticker: symbol,
        logo: companyLogo,
        name: companyName
    }
    newTickers.push(stockObj);
    localStorage.setItem('Ticker', JSON.stringify(newTickers));

    console.log(newTickers);

}



function displayTickers() {
    var getTickers = JSON.parse(window.localStorage.getItem('Ticker')) || [];
    console.log(getTickers);

    $('.tickerNames').each(function (index) {
        if (getTickers[index] === undefined) {
            $(this).text('');
        } else {
            $(this).text(getTickers[index].ticker);
        }
    });
    $('.logos').each(function (index) {
        if (getTickers[index] === undefined) {
            $(this).attr('src', "");
        } else {
            $(this).attr("src", getTickers[index].logo);
        }

    });
    $('.companyNames').each(function (index) {
        if (getTickers[index] === undefined) {
            $(this).text('');
        } else {
            $(this).text(getTickers[index].name);
        }
    })
    // for (var i = 0; i < getTickers.length; i++) {
    // getTickers.forEach(function(){
    // var tickerNames = $(`<h5 id=${i}>')
    //     $(".tickerNames").text(getTickers[i].ticker);
    //     $('.logos').attr("src", getTickers[i].logo);
    //     $('.companyNames').text(getTickers[i].name);
    // // })

}