const api = {
    key: "0eb36101fd90d52de1c9c4ab0f26411a",
    baseurl: "https://api.openweathermap.org/data/2.5"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) { //13 is return key or "enter"
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=#${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
}