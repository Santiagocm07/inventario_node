/*document.getElementById('NuevoProducto').addEventListener('click', function() {
    // Obtener los valores de los campos de entrada
    var referencia = document.getElementById('Referencia').value;
    var descripcionProducto = document.getElementById('DescripcionProducto').value;
    var idTipo = document.getElementById('id_tipo').value;
    var idMarca = document.getElementById('id_marca').value;
    var descripcionPresentacion = document.getElementById('DescripcionPresentacion').value;
  
    // Crear un objeto con los datos del producto
    var producto = {
      referencia: referencia,
      descripcionProducto: descripcionProducto,
      idTipo: idTipo,
      idMarca: idMarca,
      descripcionPresentacion: descripcionPresentacion
    };
  
    // Enviar los datos al servidor utilizando Fetch API
    fetch('guardar_producto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Error en la respuesta del servidor');
    })
    .then(data => {
      // Hacer algo con la respuesta del servidor si es necesario
      console.log(data);
      // Cerrar la modal si se envían los datos correctamente
      $('#CrearProducto').modal('hide');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  //función para crear nuevos usuarios
/*async function crearProducto(datos) {
  try {
    const sql = "INSERT INTO tbl_producto VALUES (?, ?, ?, ?, ?, ?)";
    const values = ["", datos.referencia, datos.descripcionProducto, datos.id_tipo, datos.id_marca, datos.descripcionPresentacion];

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error(error);
      } else {
        console.log(results);
      }
    });
  } catch (error) {
    console.error(error);
  }
}*/
  