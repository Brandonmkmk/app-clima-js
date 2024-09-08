
const APIKEY = '5349df1b44c7a71ff547dcdf8c53779c'
const URLBASE = 'https://api.openweathermap.org/data/2.5/weather?'
const body = document.getElementById('body')
const container = document.getElementById('container')
const cityName = document.getElementById('city')
const btnSearch = document.getElementById('btn_search')
const weatherIcon = document.getElementById('weather_icon')

async function getClima(city){

  const url = URLBASE + `q=${city}&appid=${APIKEY}`
  await fetch(url).then((response)=>{
     return response.json()
  }).then((data)=>{
   updateDom(data.main.temp,data.name,data.weather[0].main)
  }).catch((err)=>{
  console.log(err)
  })
 }

 function updateDom(temperature,city,weather){
  const celcius = temperature - 273.15
  container.innerHTML = `
  <h2>Cuidad: ${city}</h2>
  <h2>Temperatura: ${Math.floor(celcius)}</h2>
  <h2>Cielo: ${weather}</h2>
  `
  container.style.backgroundColor = 'rgba(80, 80, 80, 0.8)'
  container.style.borderRadius = '10px'
  container.style.color = 'white'
  
  // city.innerHTML = `Cuidad: ${name}`
  // temperature.innerHTML = `Temperatura: ${Math.floor(kelvinToCelcius)}`
}

btnSearch.addEventListener('click',async ()=>{
 if(cityName.value === ''){
  container.innerHTML = `
  <h3>Ingresa una cuidad a buscar</h3>
  `
  container.style.backgroundColor = 'orange'
  container.style.color = '#f4f2ee'
  container.style.borderRadius = '5px'
  return 
  
 }     
 await getClima(cityName.value)
 cityName.value = ''
//  weatherIcon.style.display = 'none'
})





