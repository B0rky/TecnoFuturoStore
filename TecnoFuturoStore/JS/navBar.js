// NAVBAR_MENU_JS ---------------------------------------------------------------------------------------------------------------------------------------------
// Despliegue_menu
document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");  // Boton_menu
    var despMen = document.getElementById("despMen");  // Menu_desplegable

    menuBtn.addEventListener("click", function() {
        despMen.classList.toggle("inactive");
        despMen.classList.toggle("active");
    });
});
    // Despliegue_submenu
    document.addEventListener("DOMContentLoaded", function() {
        var subdsbtn = document.getElementById("subdsbtn");  // Boton_activacion
        var subMenu = document.getElementById("subMenu"); // Submenu_desplegable
        var subList = document.getElementById("subList"); // Lista_Submenu

        subdsbtn.addEventListener("click", function() {
            subMenu.classList.toggle("inactive");
            subList.classList.toggle("inactive");
        });
    });