//Configurar SW
let swLocation = "sw.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "./sw.js"; //Varia según el host
  navigator.serviceWorker.register(swLocation);
}


console.log("aplicacion pwa");