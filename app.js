const APIKEY = '5349df1b44c7a71ff547dcdf8c53779c'
const URLBASE = 'https://api.openweathermap.org/data/2.5/weather?'
const city = document.getElementById('city')
const temperature = document.getElementById('temp')
const body = document.getElementById('body')
async function getClima(lat,lon){
 const url = URLBASE + `lat=${lat}&lon=${lon}&appid=${APIKEY}`
 await fetch(url).then((response)=>{
    return response.json()
 }).then((data)=>{
  updateDom(data.main.temp,data.name)
 }).catch((err)=>{
 console.log(err)
 })
}

function updateDom(temp,name){
  city.innerHTML = `Cuidad: ${name}`
  temperature.innerHTML = `Temperatura: ${temp}`
  if(temp >= 290){
    body.style.backgroundColor = 'yellow'
  }
}

navigator.geolocation.getCurrentPosition(position =>{
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    getClima(lat,lon)
})