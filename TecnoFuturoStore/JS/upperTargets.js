// UPPER_TARGET'S JS ------------------------------------------------------------------------------------------------------------------------------------------

//Especificaciones_Del_Marcado

//PMark -----> Marca_Producto
//HCash -----> Costo_Producto
//HProduct -----> Nombre_Producto
//ACI -----> Imagen_Producto
//Los_Numero_Indican_El_Numero_De_Tarjeta

document.addEventListener("DOMContentLoaded", function() {

    function card1() {
        var T1L_PMark = document.getElementById("T1L_PMark");
        var T1L_HCash = document.getElementById("T1L_HCash");
        var T1L_HProduct = document.getElementById("T1L_HProduct");
        var ACI1 = document.getElementById("ACI1");

        T1L_PMark.innerHTML = "Asus";
        T1L_HCash.innerHTML = "$19.000";
        T1L_HProduct.innerHTML = "Mouse Inalambrico";
        ACI1.src = "/settings/img/Mousegamer.jpg";
    }

    function card2() {
        var T2L_PMark = document.getElementById("T2L_PMark");
        var T2L_HCash = document.getElementById("T2L_HCash");
        var T2L_HProduct = document.getElementById("T2L_HProduct");
        var ACI2 = document.getElementById("ACI2");

        T2L_PMark.innerHTML = "Lenovo";
        T2L_HCash.innerHTML = "$25.000";
        T2L_HProduct.innerHTML = "MousePad";
        ACI2.src = "/settings/img/mousepad.webp";
    }

    function card3() {
        var T3L_PMark = document.getElementById("T3L_PMark");
        var T3L_HCash = document.getElementById("T3L_HCash");
        var T3L_HProduct = document.getElementById("T3L_HProduct");
        var ACI3 = document.getElementById("ACI3");

        T3L_PMark.innerHTML = "RedDragon";
        T3L_HCash.innerHTML = "$34.000";
        T3L_HProduct.innerHTML = "Audifonos";
        ACI3.src = "/settings/img/audifonos.png";
    }

    function card4() {
        var T4L_PMark = document.getElementById("T4L_PMark");
        var T4L_HCash = document.getElementById("T4L_HCash");
        var T4L_HProduct = document.getElementById("T4L_HProduct");
        var ACI4 = document.getElementById("ACI4");
        
        T4L_PMark.innerHTML = "RedDragon";
        T4L_HCash.innerHTML = "$59.990";
        T4L_HProduct.innerHTML = "Teclado";
        ACI4.src = "/settings/img/Teclado.png";
    }


    card1();
    card2();
    card3();
    card4();
    

});