/*/let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    columnDefs: [
        {className: "centered", targets: [0, 1, 2, 3, 4, 5, 6]},
        {orderable: false, targets: [5,6]},
        //{searchable: false, targets: [1]}//
    ],
    pageLength: 3,
    destroy: true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando ...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }

};

const initDataTable= async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }

    await listUsers();

    dataTable= $("#datatable_users").DataTable(dataTableOptions);

    dataTableIsInitialized = true;
};

const listUsers= async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        
        let content = ``;
        users.forEach((user, index) =>{
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
                <td><i class='bx bx-check' style="color: green;"></i></td>
                <td>
                  <button class="btn btn-sm btn-primary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class='bx bxs-edit-alt'></i></button>
                  <button class="btn btn-sm btn-danger"><i class='bx bxs-trash'></i></button>
                </td>
            </tr>`;
        });
        tableBody_users.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});*/

//tabla buena
/*let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
  columnDefs: [
    { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6] },
    { orderable: false, targets: [5, 6] },
    //{searchable: false, targets: [1]}//
  ],
  pageLength: 10,
  destroy: true,
  language: {
    lengthMenu: "Mostrar _MENU_ registros por página",
    zeroRecords: "Ningún usuario encontrado",
    info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
    infoEmpty: "Ningún usuario encontrado",
    infoFiltered: "(filtrados desde _MAX_ registros totales)",
    search: "Buscar:",
    loadingRecords: "Cargando ...",
    paginate: {
      first: "Primero",
      last: "Último",
      next: "Siguiente",
      previous: "Anterior",
    },
  },
};

const initDataTable = async () => {
  if (dataTableIsInitialized) {
    dataTable.destroy();
  }

  await listUsers();

  dataTable = $("#datatable_productos").DataTable(dataTableOptions);

  dataTableIsInitialized = true;
};

const listUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/productos");
    const users = await response.json();

    let content = ``;
    users.forEach((user, index) => {
      content += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.Referencia}</td>
                <td>${user.DescripcionProducto}</td>
                <td>${user.DescripcionTipo}</td>
                <td>${user.DescripcionMarca}</td>
                <td>${user.DescripcionPresentacion}</td>
                <td>
                  <button class="btn btn-sm btn-primary" class="btn btn-primary" data-bs-toggle="modal" onclick="openModal(${
                    user.id_producto})"><i class='bx bxs-edit-alt'></i></button>
                  <button class="btn btn-sm btn-danger" onclick="ALA()"><i class='bx bxs-trash'></i></button>
                </td>
            </tr>`;
    });
    tableBody_productos.innerHTML = content;
  } catch (ex) {
    alert(ex);
  }
};

window.addEventListener("load", async () => {
  await initDataTable();
});

function ALA() {
  //   console.log("ola");
  //   Swal.fire("Viejo verde!");
  Swal.fire({
    title: "<strong><u>Alerta</u></strong>",
    icon: "info",
    html: `
      ¿Seguro quieres eliminar este producto?
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Aceptar!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
      <i class="fa fa-thumbs-down"> Cancelar</i>
    `,
    cancelButtonAriaLabel: "Thumbs down",
  });
}

function openModal(productID) {
  // Actualiza el atributo data-bs-target para apuntar a la modal específica
  const modalButton = document.querySelector(
    '.btn-primary[data-bs-toggle="modal"]'
  );
  modalButton.setAttribute("data-bs-target", `#ModalProducto${productID}`);

  // Abre la modal
  const modal = new bootstrap.Modal(
    document.getElementById(`ModalProducto${productID}`)
  );
  modal.show();
}*/

let dataTableIsInitialized = false;
const table = document.getElementById("table");
const modal = document.getElementById("modal");
const inputs = document.querySelectorAll("input");
let count = 0;

const initDataTable = async () => {
  if (dataTableIsInitialized) {
    dataTable.destroy();
  }

  await listUsers();

  dataTable = $("#datatable_productos").DataTable(dataTableOptions);

  dataTableIsInitialized = true;
};

const listUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/productos");
    const users = await response.json();

    let content = ``;
    users.forEach((user, index) => {
      content += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.Referencia}</td>
                <td>${user.DescripcionProducto}</td>
                <td>${user.DescripcionTipo}</td>
                <td>${user.DescripcionMarca}</td>
                <td>${user.DescripcionPresentacion}</td>
                <td>
                  <button class="btn btn-sm btn-primary" class="btn btn-primary" data-bs-toggle="modal" onclick="openModal(${
                    user.id_producto})"><i class='bx bxs-edit-alt'></i></button>
                  <button class="btn btn-sm btn-danger" onclick="ALA()"><i class='bx bxs-trash'></i></button>
                </td>
            </tr>`;
    });
    tableBody_productos.innerHTML = content;
  } catch (ex) {
    alert(ex);
  }
};

window.addEventListener("load", async () => {
  await initDataTable();
});

function ALA() {
  //   console.log("ola");
  //   Swal.fire("Viejo verde!");
  Swal.fire({
    title: "<strong><u>Alerta</u></strong>",
    icon: "info",
    html: `
      ¿Seguro quieres eliminar este producto?
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Aceptar!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
      <i class="fa fa-thumbs-down"> Cancelar</i>
    `,
    cancelButtonAriaLabel: "Thumbs down",
  });
}

//Modal editar//
function openModal(){
  window.addEventListener("click", (e) => {
    if (e.target.matches(".btn-warning")) {
      let data = e.target.parentElement.parentElement.children;
      fillData(data);
      modal.classList.toggle("translate");
    }

    if (e.target.matches(".btn-danger")) {
    modal.classList.toggle("translate");
    count=0
    }
  });

  const fillData = (data) => {
    for (let index of inputs) {
      index.value = data[count].textContent;
      console.log(index);
      count += 1;
    }
  };
}