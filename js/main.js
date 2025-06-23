// Espera a que todo el contenido del HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleccionar todos los elementos necesarios
    const menuLinks = document.querySelectorAll('.main-menu a');
    const topics = document.querySelectorAll('.content-area .topic');

    // Función para mostrar el tema seleccionado y ocultar los demás
    function showTopic(topicId) {
        // Oculta todos los temas
        topics.forEach(function(topic) {
            topic.style.display = 'none';
        });

        // Muestra solo el tema que corresponde al ID
        const topicToShow = document.getElementById(topicId);
        if (topicToShow) {
            topicToShow.style.display = 'block';
        }
    }

    // 2. Por defecto, mostrar el primer tema al cargar la página
    showTopic('introduccion');

    // 3. Añadir un "escuchador" de clics a cada enlace del menú
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Previene el comportamiento por defecto del enlace (que es saltar en la página)
            event.preventDefault(); 

            // Obtiene el ID del tema desde el atributo href del enlace (ej: '#introduccion' -> 'introduccion')
            const topicId = link.getAttribute('href').substring(1);
            
            // Llama a la función para mostrar el tema seleccionado
            showTopic(topicId);
        });
    });

});