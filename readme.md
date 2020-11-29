# API SWAPI STAR WARS

## About / Synopsis

*API para el consumo  de swapi star wars brinda el listado por ID, guardar datos en base de *datos MYSQL, asi mismo mostrar datos guardo en MYSQL

## Table of contents


> * [Title / Repository Name](#API SWAPI STAR WARS)
>   * [Installation](#Installation)
>   * [Code](#code)
>     * [Requirements](#requirements)
>     * [Build](#build)
>     * [Deploy (how to install build product)](#Build)
>     * [Parametros](#variables post)

## Installation

Sample:

* npm install -g serverless
* npm install

## Code

### requirements

* serverless 
* nodejs
* Mysql
* express

### Build

    sls deploy

## Contributing / Reporting issues

Link to JIRA component (or project if there is no component for that project). Samples:

* endpoints:
  -[getPersonaSWAPI](https://q2b304ne9k.execute-api.us-east-1.amazonaws.com/dev/api/people/{id})
  -[getEspeciesSWAPI](https://q2b304ne9k.execute-api.us-east-1.amazonaws.com/dev/api/especies/{id})
  -[postPersonaDB](https://q2b304ne9k.execute-api.us-east-1.amazonaws.com/dev/api/people)
  -[getPersonaAllDB](https://q2b304ne9k.execute-api.us-east-1.amazonaws.com/dev/api/people)


## Variable Post

[{
      idpersona:" " ,
      nombre:" " ,                    
      altura:" " ,
      masa:" " ,
      colordepelo:" " ,
      colordepiel:" " ,
      colordeojos:" " ,
      añodenacimiento:" " ,
      genero:" " ,
      mundonatal:" " ,
      películas:" " ,
      especie:" " ,
      vehículos:" " ,
      navesestelares: " ",
      url: " " ,
      estado: 1 or 0
}]
