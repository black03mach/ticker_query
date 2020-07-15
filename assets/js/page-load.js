// Display modal of navbar on page load so user can input a stock ticker
$(document).ready(function () {
    $('#page-load-modal').foundation('open');
    $('#modal-button').on('click', function () {
        event.preventDefault();
        // sets input to a variable
        let modalInputVal = $('#modal-input').val();

        //use global variable from stock-chart.js
        tickerUppercase = modalInputVal.toUpperCase();

        // call function from script.js
        callRequests(tickerUppercase);

        // call function from stock-chart.js
        getInitialSearchURL(tickerUppercase);
        displayNews(tickerUppercase);
        // close modal
        $('#page-load-modal').foundation('close');

        displayTickers();
    })

})