const express = require("express");
const hbs = require("hbs");

const app = express();
let direccion = "Insurgentes Sur 601";

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
// Make everything inside of public/ available

app.get('/', (solicitud, respuesta, siguiente)=>{
  let data = {
    nombre: "German Dominguez Montes",
    bootcamp: "IronHack WebDev Part Time",
    address: direccion
  };
  respuesta.render('index', data);
});

app.get('/about',(solicitud, respuesta, siguiente)=>{
  let clases = {
    clase1: "Dynamic views",
    clase2: "Partials"
  };
  respuesta.render('about', clases);
});
const port = process.env.PORT || 3000;

// Server Started
app.listen(port, () => {
  console.log('My first app listening on port 3000!')
});
