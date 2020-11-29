const connection = require('../conexion');
const queryString = require('querystring');



module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const body = queryString.parse(event['body']);
    const data = {
      idpersona: body.idpersona,
      nombre: body.nombre,                    
      altura: body.altura,
      masa: body.masa,
      colordepelo: body.colordepelo,
      colordepiel: body.colordepiel,
      colordeojos: body.colordeojos,
      añodenacimiento: body.añodenacimiento,
      genero:body.genero,
      mundonatal: body.mundonatal,
      películas: body.películas,
      especie: body.especie,
      vehículos: body.vehículos,
      navesestelares:body.navesestelares,
      url: body.url,
      estado:body.estado
    };
    
    const sql = 'INSERT INTO persona SET ?';
    connection.query(sql, [data], (error, result) => {
      if (error) {
        callback({
          statusCode: 500,
          body: JSON.stringify(error)
        })
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            res: `Todo insertado correctamente con id ${result.insertId}`
          })
        })
      }
    })
  };