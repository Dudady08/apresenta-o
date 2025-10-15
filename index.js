// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function() {

    // --- CÓDIGO DO MENU MOBILE (Existente) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    if (menuToggle && navbarLinks) {
        const sidebar = document.createElement('aside');
        sidebar.className = 'sidebar';
        sidebar.id = 'sidebar';

        const linksHtml = navbarLinks.innerHTML;
        sidebar.innerHTML = `
            <div class="sidebar-header">
                <h3>Navegação</h3>
                <button class="close-btn" id="close-btn">&times;</button>
            </div>
            ${linksHtml}
        `;
        document.body.appendChild(sidebar);
        
        const closeBtn = document.getElementById('close-btn');

        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('open');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                sidebar.classList.remove('open');
            });
        }
    }
    
    // --- CÓDIGO CORRIGIDO PARA O BOTÃO "EXPLORAR MATÉRIAS" ---
    const exploreBtn = document.getElementById('exploreBtn');
    const materiasSection = document.getElementById('materias');

    if (exploreBtn && materiasSection) {
        exploreBtn.addEventListener('click', function() {
            // A função scrollIntoView rola a página até o elemento
            materiasSection.scrollIntoView({
                behavior: 'smooth' // Rola suavemente em vez de pular direto
            });
        });
    }

});