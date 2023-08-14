// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${-31.61}&lon=${-60.70}&appid=4b5614d5227096c2c15fff9916399777`)
//     .then(response => response.json())
//     .then(value => console.log(value))

async function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${-31.61}&lon=${-60.70}&appid=4b5614d5227096c2c15fff9916399777`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
}


getWeather().then(valor => console.log(valor.weather[0].main))