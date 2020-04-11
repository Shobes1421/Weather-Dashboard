


let searchResults = [];

function displayCityWeather() {
    
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + "Denver" + "&a913a42d39784a6d853e47d1655e5041";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        //variables to capture API response properties
        let name = response.name;
        let tempKelvin = response.main.temp;
        let tempC = (tempKelvin - 273.15).toFixed(1);
        let tempF = (tempC * 1.8 + 32).toFixed(0);

        console.log(name);
        console.log(tempKelvin);
        console.log(tempC);
        console.log(tempF);
    })
};

displayCityWeather();

// Function to loop through array of search results returned from ajax call and renders all array values onto page as separate buttons
function renderSearchResults () {
    $("#search-results").empty();

    // For loop to cycle through search results array
    for (var i = 0; i < searchResults.length; i++) {

        var a = $("PLACEHOLDER FOR SEARCH BUTTON");

        a.attr("data-name", searchResults[i]);

        a.text(searchResults[i]);

        $("#search-results").append(a);
    }
};