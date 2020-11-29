'use strict';
const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));


module.exports.getPersonaSWAPI = async event => {

  let id = event.pathParameters.id;
  const array = []
  await axios.get(`https://swapi.py4e.com/api/people/${id}`).then(res => array.push(res.data))

  const persona = []

  array.map(el => {
      persona.push({
                    "Nombre": el.name,                    
                    "Altura": el.height,
                    "Masa": el.mass,
                    "color de pelo": el.hair_color,
                    "color de piel": el.skin_color,
                    "color de ojos": el.eye_color,
                    "Año de nacimiento": el.birth_year,
                    "Genero":el.gender,
                    "mundo natal": el.homeworld,
                    "Películas": el.films,
                    "Especie": el.species,
                    "Vehículos": el.vehicles,
                    "naves estelares":el.starships,
                    "Creado": el.created,
                    "Editado":el.edited ,
                    "Url": el.url
                  })
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: persona,
        input: event.id,
      },
      null,
      2
    ),
  };

};

module.exports.getEspeciesSWAPI = async event => {

  let id = event.pathParameters.id;
  const array = []
  await axios.get(`https://swapi.py4e.com/api/species/${id}`).then(res => array.push(res.data))
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: array,
        input: event.id,
      },
      null,
      2
    ),
  };

};





