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
