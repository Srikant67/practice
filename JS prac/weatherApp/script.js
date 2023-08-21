const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const weatherContainer = document.querySelector(".weather-container");

const grantContainer = document.querySelector(".grant-container");
const grantBtn = document.querySelector("[data-grant]");

const searchForm = document.querySelector("[data-searchForm]");
const searchInput = document.querySelector("[data-searchInput]");
const searchBtn = document.querySelector("[data-search]");

const loading = document.querySelector(".loading    ");

const userInfoContainer = document.querySelector(".user-weather-info");

const errorImg = document.querySelector(".error");
const apikey = "bc3767b362a9130a5f45e84a3320332e";
let currTab = userTab;
currTab.classList.add("current-tab");
getFromSessionStorage();

userTab.addEventListener("click",() =>{
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click",() => {
    //pass clicked tab as input parameter
    switchTab(searchTab);
});

function switchTab(clickedTab){
    if(clickedTab!=currTab){
        currTab.classList.remove("current-tab");
        currTab = clickedTab;
        currTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            errorImg.classList.remove("active");
            userInfoContainer.classList.remove("active");
            grantContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

function getFromSessionStorage(){
    const localCoords = sessionStorage.getItem("user-coordinates");
    if(!localCoords){
        grantContainer.classList.add("active");
    }
    else{
        const coords = JSON.parse(localCoords);
        fetchUserWeatherInfo(coords);
    }
}

async function fetchUserWeatherInfo(coords){
    const {lat,lon} = coords;
    grantContainer.classList.remove("active");
    loading.classList.add("active");
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);
        const data = await response.json();
        loading.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }catch(err){
        errorImg.classList.add("active");
        userInfoContainer.classList.remove("active");
    }
}

function renderWeatherInfo(data){
    const cityName = document.querySelector("[data-cityName]");
    const country = document.querySelector("[data-countryIcon]");
    const description = document.querySelector("[data-desc]");
    const weatherImg = document.querySelector("[data-weatherImg]");
    const Temperature = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloud = document.querySelector("[data-cloud]");

    cityName.innerText = data?.name;
    country.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    description.innerText = data?.weather?.[0]?.description;
    weatherImg.src =`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    Temperature.innerText = data.main.temp + " °C";
    windspeed.innerText = data.wind.speed + " m/s";
    humidity.innerText = data.main.humidity + "%";
    cloud.innerText = data.clouds.all + " %";
}

grantBtn.addEventListener("click",getLocation);
async function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        res.value = "Geolocation is not supported by this browser.";
        }
}

function showPosition(position){
    const userCoords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoords));
    fetchUserWeatherInfo(userCoords);
}


searchBtn.addEventListener("click",(e) => {
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName == "")
        return;
    else{
        fetchCityWeatherInfo(cityName);
    }
});

async function fetchCityWeatherInfo(cityName){
    loading.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantContainer.classList.remove("active");
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`);
        const data = await response.json();
        loading.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }catch(err){
        errorImg.classList.add("active");
        userInfoContainer.classList.remove("active");
    }
}









// gfg method

// fetch(base)
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         let temp = Math.floor(data.main.temp) + "°C";
//         newTemp = Math.floor(data.main.temp) + "°C";
//         let desc = data.weather[0].description;
//         let cityDesc = data.name + "," + data.sys.country;
//         let newPara = document.createElement('p');
//         newPara.textContent = "City = " + cityDesc + " Temperature = " + temp + " Description = " + desc;
//         document.body.appendChild(newPara);
// });

//babbar method

// async function showWeather(){
//     const city = goa;
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
//     const data = await response.json();
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)}` + "°C";
//     document.body.appendChild(newPara);
// }

// //fetching api response based on mentioned city

// async function fetchWeatherDetails(){
//     try{
//         let city = inp.value;
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
//         const data = await response.json();
//         renderWeatherInfo(data);
//     } catch(err) {
//         console.log("Error found lmao", err);
//     }
// }

// //rendering the information in a text field

// async function renderWeatherInfo(data){
//     res.value = Math.floor(data.main.temp) + "°C";
// }

// //get user's position and using a callback function to fetch weather details

// async function getCurrentLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(getCurrentWeather);
//       } else {
//         res.value = "Geolocation is not supported by this browser.";
//       }
// }

// //fetch api response based on current user's position (latitude and longitude)

// async function getCurrentWeather(position){
//     try{
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);
//         const data = await response.json();
//         console.log("weather data => ", data);
//         renderWeatherInfo(data);
//     } catch(err) {
//         console.log("Error found lmao", err);
//     }
// }