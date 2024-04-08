document.getElementById("formulario-contacto").addEventListener("submit", function(event) {

    event.preventDefault();
  
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var contacto = document.getElementById("contacto").value;
  
    var cuerpoCorreo = "Nombre: " + nombre + "\n";
    cuerpoCorreo += "Asunto: " + asunto + "\n";
    cuerpoCorreo += "Mensaje: " + mensaje + "\n";
    cuerpoCorreo += "Contacto: " + contacto;
  
    // Enviar_Correo - SMTPJS
    Email.send({

      SecureToken: "tu_token_generado_en_smtpjs",
      To: "destinatario@example.com",
      From: "remite@example.com",
      Subject: "Nuevo mensaje de contacto",
      Body: cuerpoCorreo
    
    }).then(
      function() {
        alert("¡Correo enviado exitosamente!");
      },
      function(error) {
        console.error("Error al enviar el correo:", error);
        alert("Error al enviar el correo. Por favor, inténtalo nuevamente.");
      }
    );
  });