/*const mysql = require('mysql')

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
});*/

import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'inventario_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión', err);
  } else {
    console.log('Conexión exitosa');
    //connection.end();
  }
});

app.get('/productos', (req, res) => {
  connection.query('SELECT tbl_tipo.DescripcionTipo , tbl_producto.* , tbl_marca.DescripcionMarca FROM tbl_producto INNER JOIN tbl_tipo ON tbl_producto.id_tipo = tbl_tipo.id_tipo INNER JOIN tbl_marca ON tbl_producto.id_marca = tbl_marca.id_marca;', (error, results) => {
    if (error) {
      console.error('Error al obtener usuarios desde la base de datos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});

export { connection };