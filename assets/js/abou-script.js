// Sarah's work begin
var apiKey = "75mcsxzsde9ronsyffilsqncg6djkx8ecrsofimm";
var queryUrl = "http://stocknewsapi.com/api/v1?"; 
// tickerInput = " ";

$('button').on('click', function (){
    event.preventDefault();    
    var tickerNews = {};
    // um["items"] = 50;
    // um["token"] = apiKey;
    userChoice = $(".search input").val();
    //section=alltickers&items=50&token=75mcsxzsde9ronsyffilsqncg6djkx8ecrsofimm"+ tickerInput +"&appid=" + apiKey
    var queryActual = queryUrl + $.param(tickerNews);
    console.log(queryActual);
    $.ajax({
        url : "https://stocknewsapi.com/api/v1?items=50&token=75mcsxzsde9ronsyffilsqncg6djkx8ecrsofimm&tickers="+userChoice,
        method : "GET",
        contentType: "application/json",
    }).then(function(response){   
        console.log(response);
    const data = response.data;
    var newsUrl1 = data[0].news_url;
    var articleDate1 = data[0].date;
    var articleTitle1 = data[0].title;
    var articleText1 = data[0].text;
    $('#news-url1').text(articleTitle1);
    $("#news-url1").attr("href",newsUrl1);
    $('#article-date1').text(articleDate1);
    $('#source-name1').text(articleTitle1);
    $('.card-body1-para').text(articleText1);

    
    var newsUrl2 = data[1].news_url;
    var articleDate2 = data[1].date;
    var articleTitle2 = data[1].title;
    var articleText2 = data[1].text;
    $('#news-url2').text(articleTitle2);
    $("#news-url2").attr("href",newsUrl2);
    $('#article-date2').text(articleDate2);
    $('#source-name2').text(articleTitle2);
    $('.card-body1-para').text(articleText2);

    var newsUrl3 = data[2].news_url;
    var articleDate3 = data[2].date;
    var articleTitle3 = data[2].title;
    var articleText3 = data[2].text;
    $('#news-url3').text(articleTitle3);
    $("#news-url3").attr("href",newsUrl3);
    $('#article-date3').text(articleDate3);
    $('#source-name3').text(articleTitle3);
    $('.card-body1-para').text(articleText3);

   
    var newsUrl4 = data[3].news_url;
    var articleDate4 = data[3].date;
    var articleTitle4 = data[3].title;
    var articleText4 = data[3].text;
    $('#news-url4').text(articleTitle4);
    $("#news-url4").attr("href",newsUrl4);
    $('#article-date4').text(articleDate4);
    $('#source-name4').text(articleTitle4);
    $('.card-body1-para').text(articleText4);

    })
})


