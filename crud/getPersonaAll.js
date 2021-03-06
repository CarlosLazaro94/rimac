const connection = require('../conexion');
const queryString = require('querystring');



 
module.exports.findAll = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = 'SELECT * FROM persona';
    connection.query(sql, (error, rows) => {
      if (error) {
        callback({
          statusCode: 500,
          body: JSON.stringify(error)
        })
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            todos: rows
          })
        })
      }
    })
};