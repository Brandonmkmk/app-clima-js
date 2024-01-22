
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
  <h2></h2>
  `
  // city.innerHTML = `Cuidad: ${name}`
  // temperature.innerHTML = `Temperatura: ${Math.floor(kelvinToCelcius)}`
  if(celcius >= 11 &&  celcius <=30){
    body.style.backgroundImage = `url(https://images.unsplash.com/photo-1606170034961-ee40e2dbe6bf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbWElMjBzb2xlYWRvfGVufDB8fDB8fHww)`
    body.style.backgroundSize = "cover"; // Ajusta la imagen para cubrir todo el fondo
    body.style.backgroundRepeat = "no-repeat";
  }else if(celcius >=31 && celcius <= 40){
    body.style.backgroundImage = `url(https://www.24morelos.com/content/images/wp-content/uploads/2018/05/calor-sol-caliente-clima-temperatura-termometro.jpg)`
    body.style.backgroundSize = "cover"; // Ajusta la imagen para cubrir todo el fondo
    body.style.backgroundRepeat = "no-repeat";
  }else if(celcius <=10){
    body.style.backgroundImage = `url(assets/cuidad_fria.jpg)`
    body.style.backgroundSize = "cover"; // Ajusta la imagen para cubrir todo el fondo
    body.style.backgroundRepeat = "no-repeat";
  }
}

btnSearch.addEventListener('click',async ()=>{   
 await getClima(cityName.value)
 cityName.value = ''
 weatherIcon.style.display = 'none'
})





