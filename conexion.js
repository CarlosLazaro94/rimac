const { Console } = require('console');
const mysql = require('mysql2');


const configurationDB = {
    host:'test.ch8mpua8bceu.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password:'PanyAgua10',
    port:'3306',
    database:'test',
    debug: true
}

function initializeConnection(config) {
    function addDisconnectHandler(connection) {
      connection.on("error", function (error) {
        if (error instanceof Error) {
          if (error.code === "PROTOCOL_CONNECTION_LOST") {
            console.error(error.stack);
            console.log("Lost connection. Reconnecting...");
  
            initializeConnection(connection.config);
          } else if (error.fatal) {
            throw error;
          }
        }
      });
    }

    const connection = mysql.createConnection(config);

    addDisconnectHandler(connection);

    connection.connect();
    return connection;

}

const connection = initializeConnection(configurationDB);

module.exports = connection;
