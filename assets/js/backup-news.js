$('#search-button').on('click', function () {
    userChoice = $("#tickerInput").val();
    // console.log(userChoice);
    displayNews(userChoice);
})

function displayNews(userChoice) {
    var tiingoNewsUrl = "https://api.tiingo.com/tiingo/news?tickers=" + userChoice;

    $.ajax({
        url: tiingoNewsUrl,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 222338eebf677fe1d6b125f0d075e58c1017283d',
        },
        method: "GET",
    }).then(function (response) {
        console.log(response);
        var newsUrl = "";
        var articleDate = "";
        var articleTitle = "";
        var articleText = "";

        for (var i = 0; i < 4; i++) {
            newsUrl = response[i].url;
            articleDate = response[i].publishedDate;
            articleTitle = response[i].title;
            articleText = response[i].description;
            articleSource = response[i].source;

            $(`#news-url${i+1}`).text(articleTitle);
            $(`#news-url${i+1}`).attr('href', newsUrl);
            $(`#article-date${i+1}`).text(articleDate);
            $(`#source-name${i+1}`).text(articleSource);
            $(`#card-text${i+1}`).text(articleText);
        }
    })
}