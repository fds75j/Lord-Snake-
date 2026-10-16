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
