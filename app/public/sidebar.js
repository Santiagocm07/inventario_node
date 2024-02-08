/*const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode"
    }else {
        modeText.innerText = "Dark mode"
    }
})*/

// Código del sidebar
const sidebarContent = `
    <nav class="sidebar close">
    <!-- Contenido del sidebar -->
        <header>
        <div class="text logo">
            <span class="name">Menú de tareas</span>
            <span class="profe">Logistica</span>
        </div>
        <i class="bx bx-menu toggle"></i>
        </header>

        <div class="menu-bar">
        <div class="menu">
            <li class="search-box">
            <i class="bx bx-search icon"></i>
            <input type="text" placeholder="Buscar...">
            </li>

            <ul class="menu-links">
            <li class="nav-link">
                <a href="admin">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Dashboard</span>
                </a>
            </li>

            <li class="nav-link">
                <a href="tbl_producto">
                <i class="bx bx-cube icon"></i>
                <span class="text nav-text">Referencias</span>
                </a>
            </li>

            <li class="nav-link">
                <a href="#">
                <i class="bx bx-math icon"></i>
                <span class="text nav-text">Movimientos</span>
                </a>
            </li>

            <li class="nav-link">
                <a href="#">
                <i class="bx bx-bell icon"></i>
                <span class="text nav-text">Notificaciones</span>
                </a>
            </li>

            <li class="nav-link">
                <a href="#">
                <i class="bx bxs-user-detail icon"></i>
                <span class="text nav-text">Usuario</span>
                </a>
            </li>
        </div>

        <div class="bottom-content">
            <li class="">
            <a href="#">
                <i class="bx bx-log-out icon"></i>
                <span class="text nav-text">Salir</span>
            </a>
            </li>
            <li class="mode">
            <div class="sun-moon">
                <i class="bx bx-moon icon moon"></i>
                <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text">Modo oscuro</span>
            <div class="toggle-switch">
                <span class="switch"></span>
            </div>
            </li>
        </div>
        </div>
    </nav>
    `;

// Función para cargar el contenido del sidebar en el contenedor
function loadSidebar() {
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebarContent;
  }
}

// Llama a la función para cargar el sidebar cuando la página se cargue completamente
window.addEventListener('DOMContentLoaded', loadSidebar);



