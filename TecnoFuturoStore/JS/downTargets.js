// DOWN_TARGET'S JS ------------------------------------------------------------------------------------------------------------------------------------------

//Especificaciones_Del_Marcado
//DT(X) -----> Down_Target (Nºtarjeta / NºTarget)
//Title -----> Titulos
//Price -----> Precios
//Img -----> Imagenes
//NumX & NumY -----> Numeros_De_Slide - X = Cambiante - Y = Fijo

// Target_One -- -- -- -- --
document.addEventListener("DOMContentLoaded", function() {

    var DT1Title = document.getElementById("DT1Title");
    var DT1Price = document.getElementById("DT1Price");
    var DT1Img = document.getElementById("DT1Img");
    var numX1 = document.getElementById("numX1");
    var numY1 = document.getElementById("numY1");

    numY1.innerHTML ="4";

    // Funciones_De_Cambio
    function change1() {
        DT1Title.innerHTML = "Audifonos __ <br>HyperX<br>Cloud";
        DT1Price.innerHTML = "$140.000";
        DT1Img.src = "/settings/img/Audifonos2.webp";
        numX1.innerHTML ="1";
    }
    
    function change2() {
        DT1Title.innerHTML = "Sony<br>WH-1000XM4";
        DT1Price.innerHTML = "$160.000";
        DT1Img.src = "/settings/img/audifonos3.png";
        numX1.innerHTML ="2";
    }
    
    function change3() {
        DT1Title.innerHTML = "Bose__<br>QuietComfort<br>35 II";
        DT1Price.innerHTML = "$120.000";
        DT1Img.src = "/settings/img/Audifonos2.webp";
        numX1.innerHTML ="3";
    }
    
    function change4() {
        DT1Title.innerHTML = "Sennheiser Momentum<br>True Wireless 2";
        DT1Price.innerHTML = "$185.000";
        DT1Img.src = "/settings/img/audifonos.png";
        numX1.innerHTML ="4";
    }

    
    // Array de funciones
    const changeFunc = [change1, change2, change3, change4];
    
    // Índice de la función actual
    let indiceFuncionActual = 0;

    // Ejecutar_Intervalos
    function ejecutarFunciones() {

        changeFunc[indiceFuncionActual]();

        // Incrementa el índice de la función actual
        indiceFuncionActual++;

        // Si hemos alcanzado el final del array, reiniciamos el índice
        if (indiceFuncionActual >= changeFunc.length) {
            indiceFuncionActual = 0;
        }
    }

    ejecutarFunciones();
    setInterval(ejecutarFunciones, 5000);

});

// Target_Two -- -- -- -- --
document.addEventListener("DOMContentLoaded", function() {

    var DT2Title = document.getElementById("DT2Title");
    var DT2Price = document.getElementById("DT2Price");
    var DT2Img = document.getElementById("DT2Img");
    var numX2 = document.getElementById("numX2");
    var numY2 = document.getElementById("numY2");

    numY2.innerHTML ="4";

    // Funciones_De_Cambio
    function change1() {
        DT2Title.innerHTML = "Audifonos __ <br>HyperX<br>Cloud";
        DT2Price.innerHTML = "$140.000";
        DT2Img.src = "/settings/img/Audifonos2.webp";
        numX2.innerHTML ="1";
    }
    
    function change2() {
        DT2Title.innerHTML = "Sony<br>WH-1000XM4";
        DT2Price.innerHTML = "$160.000";
        DT2Img.src = "/settings/img/audifonos3.png";
        numX2.innerHTML ="2";
    }
    
    function change3() {
        DT2Title.innerHTML = "Bose__<br>QuietComfort<br>35 II";
        DT2Price.innerHTML = "$120.000";
        DT2Img.src = "/settings/img/Audifonos2.webp";
        numX2.innerHTML ="3";
    }
    
    function change4() {
        DT2Title.innerHTML = "Sennheiser Momentum<br>True Wireless 2";
        DT2Price.innerHTML = "$185.000";
        DT2Img.src = "/settings/img/audifonos.png";
        numX2.innerHTML ="4";
    }

    
    // Array_Funciones
    const changeFunc = [change1, change2, change3, change4];
    
    let actualFunction = 0;

    // Ejecutar_Intervalos
    function ejecutarFunciones() {

        changeFunc[actualFunction]();

        actualFunction++;

        // Reiniciar_Al_Finalizar
        if (actualFunction >= changeFunc.length) {
            actualFunction = 0;
        }
    }

    ejecutarFunciones();
    setInterval(ejecutarFunciones, 5000);

});