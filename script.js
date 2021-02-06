var deaths = document.querySelector("#deaths")
var infected = document.querySelector("#infected")
var recovered = document.querySelector("#recovered")
var time = document.querySelector("#time")

console.log(time)

fetch("https://covid19.mathdro.id/api")
.then((data) => data.json())
.then((json) => {
    infected.textContent = json.confirmed.value;
    recovered.textContent = json.recovered.value;
    deaths.textContent = json.deaths.value;
    time.textContent = new Date(json.lastUpdate).toDateString()
})
