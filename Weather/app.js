const input = document.querySelector('.weather input')
const address = document.querySelector('.weather_address')
const date = document.querySelector('.weather_time')
const temp = document.querySelector('.weather_degree span')
const description = document.querySelector('.weather_description')
const visibility = document.querySelector('.weather_sub-text-visibility')
const wind = document.querySelector('.weather_sub-text-wind')
const humidity = document.querySelector('.weather_sub-text-humidity')
const container = document.querySelector('.weather_container')

function getWeather(location){

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ab32d8ddac683403f98631c8699b08cc`
  const data = fetch(api)
    .then((response) => response.json())
    .then((data) => {
      if(data.cod === 200) {
        address.innerHTML = `${data.name}, ${data.sys.country}`
        date.innerHTML =  new Date().toLocaleString();
        visibility.innerHTML = data.visibility+ 'm';
        wind.innerHTML = data.wind.speed + 'm/s';
        humidity.innerHTML = data.main.humidity + '%';
        temp.innerHTML =  Math.round(data.main.temp - 273.15);
        description.innerHTML = data.weather? data.weather[0].main : 'Unknow';
        container.classList.add('weather_show')
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  console.log(data)
}

input.addEventListener('keydown',(e)=>{
  if(e.keyCode === 13){
    getWeather(e.target.value)
  }
})