
document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    const images = ['imagenes/hero-background-2.webp', 'imagenes/hero-background-3.webp', 'imagenes/hero-background-4.webp'];
    let index = 0;
    const intervalTime = 4000; // Intervalo de cambio de imagen en milisegundos

    function changeBackground() {
        hero.classList.add('fade-out'); // Agregar clase para desvanecer la imagen actual
        setTimeout(function () {
            hero.style.backgroundImage = `url('${images[index]}')`; // Cambiar la imagen de fondo
            index = (index + 1) % images.length; // Avanzar al siguiente índice de imagen
            hero.classList.remove('fade-out'); // Eliminar clase para mostrar la nueva imagen
        }, 500); // Tiempo de espera antes de cambiar la imagen (en milisegundos)
    }

    //Verificar el tamaño de la pantalla al cargar y redimensionar
    function checkScreenSize() {
        const mq = window.matchMedia("(min-width: 768px)");
        
        if (mq.matches) {
             //Cambiar automáticamente las imágenes cada intervalTime en pantallas grandes
            setInterval(changeBackground, intervalTime);
        } else {
            // Mantener una sola imagen fija en pantallas pequeñas
            hero.style.backgroundImage = `url('${images[0]}')`;
        }
    }

    // Llamar a la función al cargar la página y al cambiar el tamaño de la pantalla
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});





// Obtener la referencia al ícono de WhatsApp
const whatsappIcon = document.getElementById('whatsapp-icon');

// Agregar un event listener para detectar el desplazamiento de la página
window.addEventListener('scroll', function() {
    // Obtener la posición vertical actual de la página
    const scrollY = window.scrollY || window.pageYOffset;

    // Mostrar u ocultar el ícono de WhatsApp dependiendo del desplazamiento
    if (scrollY > 100) {
        whatsappIcon.style.display = 'block';
    } else {
        whatsappIcon.style.display = 'none';
    }
});


