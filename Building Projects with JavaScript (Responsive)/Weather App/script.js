const apiKey = '83467daa0af229d4b60215c8c6f2881e'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=ikeja'

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '˚c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
}
checkWeather()