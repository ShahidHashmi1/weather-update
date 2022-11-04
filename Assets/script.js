var searchBtn = document.getElementById("searchBtn");
var imageContainer = document.getElementById("image-icon");
var resultsToday = document.getElementById("resultsToday")
var todayHeader = document.getElementById("today-header")
var resultsOne = document.getElementById("results1");
var resultsTwo = document.getElementById("results2");
var resultsThree = document.getElementById("results3");
var resultsFour = document.getElementById("results4");
var resultsFive = document.getElementById("results5");

var APIkey = "bb56cc62c7d3b69e2713f0d6ea4d0a03";

function getApi() {
    var cityText = document.querySelector("#search-input").value;
    console.log(cityText)

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityText + "&id=524901&units=imperial&appid=" + APIkey)

    .then(function (response) {
        return response.json();
})
    .then(function (data) {
        console.log(data);

    var cityName = document.createElement("h3");
    var conditions = document.createElement("p");
    var genTemp = document.createElement("p");
    var humidity = document.createElement("p");
    var windspeed = document.createElement("p")
    var icon = document.createElement("img")
    var timeStampOne = document.createElement("h4")
    timeStampOne.textContent = moment(data.list[2].dt_txt, "YYYY-MM-DD HH").format("MM/DD")
    timeStampOne.setAttribute('class', 'text-center')
    cityName.textContent = data.city.name;
    genTemp.textContent = "Temp: " + data.list[2].main.temp + "°";
    conditions.textContent = "Conditions: " + data.list[2].weather[0].description;
    humidity.textContent = "Humidity: " + data.list[2].main.humidity + "°";
    windspeed.textContent = "Windspeed: " + data.list[2].wind.speed + "mps";
    var iconID = data.list[2].weather[0].icon;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconID}.png`);
    icon.setAttribute('class', 'card-img-top');
    icon.setAttribute('alt', 'icon');
    resultsOne.textContent = ""
    resultsOne.append(timeStampOne);
    resultsOne.append(icon);
    resultsOne.append(cityName);
    resultsOne.append(genTemp);
    resultsOne.append(conditions);
    resultsOne.append(humidity);
    resultsOne.append(windspeed);

    var cityNameTwo = document.createElement("h3");
    var conditionsTwo = document.createElement("p");
    var genTempTwo = document.createElement("p");
    var humidityTwo = document.createElement("p");
    var windspeedTwo = document.createElement("p")
    var iconTwo = document.createElement("img")
    var timeStampTwo = document.createElement("h4")
    timeStampTwo.textContent = moment(data.list[10].dt_txt, "YYYY-MM-DD HH").format("MM/DD")
    timeStampTwo.setAttribute('class', 'text-center')
    cityNameTwo.textContent = data.city.name;
    genTempTwo.textContent = "Temp: " + data.list[10].main.temp + "°";
    conditionsTwo.textContent = "Conditions: " + data.list[10].weather[0].description;
    humidityTwo.textContent = "Humidity: " + data.list[10].main.humidity + "°";
    windspeedTwo.textContent = "Windspeed: " + data.list[10].wind.speed + "mps";
    var iconIDtwo = data.list[10].weather[0].icon;
    iconTwo.setAttribute('src', `https://openweathermap.org/img/wn/${iconIDtwo}@2x.png`);
    iconTwo.setAttribute('class', 'card-img-top');
    iconTwo.setAttribute('alt', 'icon');
    resultsTwo.textContent = ""
    resultsTwo.append(timeStampTwo);
    resultsTwo.append(iconTwo);
    resultsTwo.append(cityNameTwo);
    resultsTwo.append(genTempTwo);
    resultsTwo.append(conditionsTwo);
    resultsTwo.append(humidityTwo);
    resultsTwo.append(windspeedTwo);

    var cityNameThree = document.createElement("h3");
    var conditionsThree = document.createElement("p");
    var genTempThree = document.createElement("p");
    var humidityThree = document.createElement("p");
    var windspeedThree = document.createElement("p")
    var iconThree = document.createElement("img")
    var timeStampThree = document.createElement("h4")
    timeStampThree.textContent = moment(data.list[18].dt_txt, "YYYY-MM-DD HH").format("MM/DD")
    timeStampThree.setAttribute('class', 'text-center')
    cityNameThree.textContent = data.city.name;
    genTempThree.textContent = "Temp: " + data.list[18].main.temp + "°";
    conditionsThree.textContent = "Conditions: " + data.list[18].weather[0].description;
    humidityThree.textContent = "Humidity: " + data.list[18].main.humidity + "°";
    windspeedThree.textContent = "Windspeed: " + data.list[18].wind.speed + "mps";
    var iconIDthree = data.list[18].weather[0].icon;
    iconThree.setAttribute('src', `https://openweathermap.org/img/wn/${iconIDthree}@2x.png`);
    iconThree.setAttribute('class', 'card-img-top');
    iconThree.setAttribute('alt', 'icon');
    resultsThree.textContent = ""
    resultsThree.append(timeStampThree);
    resultsThree.append(iconThree);
    resultsThree.append(cityNameThree);
    resultsThree.append(genTempThree);
    resultsThree.append(conditionsThree);
    resultsThree.append(humidityThree);
    resultsThree.append(windspeedThree);

    var cityNameFour = document.createElement("h3");
    var conditionsFour = document.createElement("p");
    var genTempFour = document.createElement("p");
    var humidityFour = document.createElement("p");
    var windspeedFour = document.createElement("p")
    var iconFour = document.createElement("img")
    var timeStampFour = document.createElement("h4")
    timeStampFour.textContent = moment(data.list[26].dt_txt, "YYYY-MM-DD HH").format("MM/DD")
    timeStampFour.setAttribute('class', 'text-center')
    cityNameFour.textContent = data.city.name;
    genTempFour.textContent = "Temp: " + data.list[26].main.temp + "°";
    conditionsFour.textContent = "Conditions: " + data.list[26].weather[0].description;
    humidityFour.textContent = "Humidity: " + data.list[26].main.humidity + "°";
    windspeedFour.textContent = "Windspeed: " + data.list[26].wind.speed + "mps";
    var iconIDfour = data.list[26].weather[0].icon;
    iconFour.setAttribute('src', `https://openweathermap.org/img/wn/${iconIDfour}@2x.png`);
    iconFour.setAttribute('class', 'card-img-top');
    iconFour.setAttribute('alt', 'icon');
    resultsFour.textContent = ""
    resultsFour.append(timeStampFour);
    resultsFour.append(iconFour);
    resultsFour.append(cityNameFour);
    resultsFour.append(genTempFour);
    resultsFour.append(conditionsFour);
    resultsFour.append(humidityFour);
    resultsFour.append(windspeedFour);

    var cityNameFive = document.createElement("h3");
    var conditionsFive = document.createElement("p");
    var genTempFive = document.createElement("p");
    var humidityFive = document.createElement("p");
    var windspeedFive = document.createElement("p");
    var iconFive = document.createElement("img");
    var timeStampFive = document.createElement("h4")
    timeStampFive.textContent = moment(data.list[34].dt_txt, "YYYY-MM-DD HH").format("MM/DD")
    timeStampFive.setAttribute('class', 'text-center')
    cityNameFive.textContent = data.city.name;
    genTempFive.textContent = "Temp: " + data.list[34].main.temp + "°";
    conditionsFive.textContent = "Conditions: " + data.list[34].weather[0].description;
    humidityFive.textContent = "Humidity: " + data.list[34].main.humidity + "°";
    windspeedFive.textContent = "Windspeed: " + data.list[34].wind.speed + "mps";
    var iconIDfive = data.list[34].weather[0].icon;
    iconFive.setAttribute('src', `https://openweathermap.org/img/wn/${iconIDfive}@2x.png`);
    iconFive.setAttribute('class', 'card-img-top');
    iconFive.setAttribute('alt', 'icon');
    resultsFive.textContent = ""
    resultsFive.append(timeStampFive);
    resultsFive.append(iconFive);
    resultsFive.append(cityNameFive);
    resultsFive.append(genTempFive);
    resultsFive.append(conditionsFive);
    resultsFive.append(humidityFive);
    resultsFive.append(windspeedFive);

    var cityNameToday = document.createElement("h2")
    cityNameToday.textContent = "Today's weather in " + data.city.name
    var iconToday = document.createElement("img");
    iconIDToday = data.list[0].weather[0].icon;
    iconToday.setAttribute('src', `https://openweathermap.org/img/wn/${iconIDToday}@2x.png`);
    iconToday.setAttribute('class', 'card-img-top');
    iconToday.setAttribute('alt', 'icon');

    var genTempToday = document.createElement("p");
    genTempToday.textContent = "Temp: " + data.list[0].main.temp + "°";
    var conditionsToday = document.createElement("p")
    conditionsToday.textContent = "Conditions: " + data.list[0].weather[0].description;
    var humidityToday = document.createElement("p")
    humidityToday.textContent = "Humidity: " + data.list[34].main.humidity + "°";
    var windSpeedToday = document.createElement("p")
    windSpeedToday.textContent = "Windspeed: " + data.list[34].wind.speed + "mps";
    resultsToday.textContent = ""
    resultsToday.append(cityNameToday)
    resultsToday.append(iconToday)
    resultsToday.append(genTempToday)
    resultsToday.append(conditionsToday)
    resultsToday.append(humidityToday)
    resultsToday.append(windSpeedToday)

})
}

function showResults() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
    card.classList.remove('hide-display')
    let fiveDayText = document.getElementById('five-text')
    fiveDayText.classList.remove('hide-display')
})
}

let cityList = [];
let saveList = document.getElementById("savedSearches");
let saveItem = document.createElement("li");


const saveItems = () => {
    let input = document.querySelector('#search-input').value;
    localStorage.setItem('user-input', input)
    let a = document.createElement('a');
    a.setAttribute('href', `https://api.openweathermap.org/data/2.5/forecast?q=${input}&id=524901&units=imperial&appid=${APIkey}`)
    let newTag = document.createElement('li');
    newTag.appendChild(a);
    newTag.textContent = input;
    newTag.setAttribute('class', 'savedItems');
    saveList.append(newTag)
    getHistory()
}

const getHistory = () => {
    let history = JSON.parse(localStorage.getItem('user-input'));
    return history;
}

searchBtn.addEventListener("click", getApi);
searchBtn.addEventListener("click", showResults);
searchBtn.addEventListener("click", saveItems);
