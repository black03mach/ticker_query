// Display modal of navbar on page load so user can input a stock ticker
$(document).ready(function () {
    if (sessionStorage.getItem('pageAlreadyVisited') === null) {
        sessionStorage.setItem('pageAlreadyVisited', 'yes');
        $('#page-load-modal').foundation('open');
        $('#modal-button').on('click', function () {
            event.preventDefault();
            // sets input to a variable
            let modalInputVal = $('#modal-input').val();

            //use global variable from stock-chart.js
            tickerUppercase = modalInputVal.toUpperCase();

            // call function from script.js
            callRequests(tickerUppercase);
            displayTickers();
            // call function from stock-chart.js
            getChartURL(tickerUppercase);
            displayNews(tickerUppercase);
            // close modal
            $('#page-load-modal').foundation('close');
        })
    } else { // if page has been already visited, display the last stock
        displayTickers(); // call function to display previously saved stock and last stock
        console.log(lastSavedTicker);
        callRequests(lastSavedTicker);
        getChartURL(lastSavedTicker);
        displayNews(lastSavedTicker);
    }

})