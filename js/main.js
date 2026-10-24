console.log("Lord Snake Online");

// ==================== MENÚ MÓVIL ====================
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');

    if (!menu || !toggle) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.classList.toggle('open');
    });

    // Cerrar al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.classList.remove('open');
        });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('open');
            toggle.classList.remove('open');
        }
    });
});

// ==================== RESALTAR MENÚ ACTIVO ====================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtenemos la URL actual (ej: /Lord-Snake-/estrategias/estrategias.html)
    const currentPath = window.location.pathname;
    
    // 2. Obtenemos solo el nombre del archivo actual (ej: estrategias.html)
    // Si estamos en la raíz (acaba en /), lo tratamos como index.html
    let currentPage = currentPath.split('/').pop();
    if (currentPage === '' || currentPage === 'Lord-Snake-') {
        currentPage = 'index.html';
    }

    // 3. Recorremos los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        // 4. Obtenemos el href del enlace y extraemos su nombre de archivo
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop();

        // 5. Si el archivo actual coincide con el del enlace, lo marcamos
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});

// ==================== CARGA DIFERIDA DE VÍDEOS DE YOUTUBE ====================
function playVideo(element) {
    // Obtenemos el ID del vídeo del atributo data-id
    const videoId = element.getAttribute('data-id');
    
    // Creamos el iframe real de YouTube
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('referrerPolicy', 'strict-origin-when-cross-origin');
    // Estilos para que el iframe ocupe el 100% del contenedor
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    
    // Vaciamos el contenedor (quitamos la imagen y el botón) y ponemos el iframe
    element.innerHTML = '';
    element.appendChild(iframe);
}