const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'inventario_db'
})

connection. connect((err) => {
  if (err) {
    console.error('Error de conexión', err);
  } else {
    console.log('Conexión exitosa');
    connection.end();
  }
});