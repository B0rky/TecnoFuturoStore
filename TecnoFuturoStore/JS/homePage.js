document.addEventListener("DOMContentLoaded", function() {

    // PRINCIPAL_CONTENT - HOMEPAGE ---------------------------------------------------------------------------------------------------
    function PrincipalHome() {

        // Nav_Bar_HomePage -- -- -- -- -- -- -- -- -- --

        function barNavContent() {
            var HPNL1 = document.getElementById("HPNL1");
            var HPNL2 = document.getElementById("HPNL2");
            var NBImg = document.getElementById("NBImg");
    
            HPNL1.innerHTML = "Sobre Nosotros";
            HPNL2.innerHTML = "Contacto";
            NBImg.src = "/settings/img/logo.png";
        }
        
        // Central_SlideOne_HomePage -- -- -- -- -- -- -- -- -- --
        var HPCS1Img = document.getElementById("HPCS1Img");
        var HPAPH1 = document.getElementById("HPAPH1");

        function slideContentOne() {

            HPCS1Img.src = "/settings/img/logo.png";

            HPAPH1.innerHTML = "- Pagina Principal";

        }

        // Central_SlideTWo_HomePage -- -- -- -- -- -- -- -- -- --
        var HPCS2Img1 = document.getElementById("HPCS2Img1");
        var HPCS2Img2 = document.getElementById("HPCS2Img2");
        var HPCS2Img3 = document.getElementById("HPCS2Img3");

        var HPCS2H2 = document.getElementById("HPCS2H2");
        var HPCS2P = document.getElementById("HPCS2P");
        var HPCS2B = document.getElementById("HPCS2B");

        function slideContentTwo() {
            HPCS2Img1.src = "/settings/img/expositiva1.png";
            HPCS2Img2.src = "/settings/img/expositiva2.png";
            HPCS2Img3.src = "/settings/img/expositiva3.png";

            HPCS2H2.innerHTML = "Vive el futuro con nosotros";
            HPCS2P.innerHTML = "Bienvenido a TecnoFuturo Store, gracias por elegirnos.<br>Tecnologia y más a la puerta de tu casa. Contamos con envíos<br>a todo chile y atención de pedidos 24/7.<br>Tambien contamos con nuestro punto de venta fisico";
            HPCS2B.innerHTML = "Contacta con nosotros";
        }

        // Central_SlideThree_HomePage -- -- -- -- -- -- -- -- -- --
        

        function slideContentThree() {
            
        }

        barNavContent();
        slideContentOne();
        slideContentTwo();
        slideContentThree();

    };
    
    PrincipalHome();
    
});

function buttonOneHP() {
    var HPNL1 = document.getElementById('HPNL1');
    var central = document.getElementById('central');

    if (HPNL1.innerHTML === 'Inicio') {
        HPNL1.innerHTML = 'Sobre Nosotros';
        central.style.marginTop = '0vh';
        HPAPH1.innerHTML = "- Pagina Principal";
    } else {
        HPNL1.innerHTML = 'Inicio';
        central.style.marginTop = '-100vh';
        HPAPH1.innerHTML = "- Sobre Nosotros";
    }
}

function buttonTwoHP() {
    var HPNL1 = document.getElementById('HPNL1');
    var HPNL2 = document.getElementById('HPNL2');
    var central = document.getElementById('central');

    HPNL1.innerHTML = 'Inicio';
    central.style.marginTop = '-200vh';
    HPAPH1.innerHTML = "- Contactanos";
}