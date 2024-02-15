$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_toggle = $("#open"); // Asegúrate de que el ID coincida con el botón en tu HTML
    var timer; // Variable para guardar la referencia del temporizador

    // Selector para el contenedor del sobre y los elementos a mostrar/ocultar
    var envelopeWrapper = $('.envlope-wrapper');
    var flowersAndBubbles = $('.flowers, .bubbles');

    btn_toggle.click(function() {
        if(envelope.hasClass("open")) {
            close();
            btn_toggle.text("Abrir");
        } else {
            open();
            btn_toggle.text("Reiniciar");
        }
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        // Cancela cualquier temporizador existente antes de iniciar uno nuevo
        clearTimeout(timer);

        timer = setTimeout(function() {
            // Opciones adicionales al abrir
            envelope.animate({
                top: "100%" // Desplaza la carta hacia abajo hasta que desaparezca
            }, 1000, function() {
                // Después de que la carta desaparece
                envelopeWrapper.hide(); // Oculta el contenedor del sobre
                flowersAndBubbles.show(); // Muestra las flores y las burbujas
            });
        }, 20000); // Ajusta este tiempo según la duración total de las animaciones de los corazones
    }
    
    function close() {
        // Cancela el temporizador para evitar que la animación de cierre se ejecute si ya se ha iniciado el proceso de cierre
        clearTimeout(timer);
        envelope.addClass("close").removeClass("open").stop(true).css('top', '80vh'); // Restablece la posición de la carta
        envelopeWrapper.show(); // Muestra el contenedor del sobre nuevamente
        flowersAndBubbles.hide(); // Oculta las flores y las burbujas
    }
});