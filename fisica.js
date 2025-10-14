// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos do menu
    const menuToggle = document.getElementById('menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    // Cria a barra lateral (sidebar) dinamicamente
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = 'sidebar';

    // Clona os links da navbar para dentro da sidebar
    if (navbarLinks) {
        const linksHtml = navbarLinks.innerHTML;
        sidebar.innerHTML = `
            <div class="sidebar-header">
                <h3>Navegação</h3>
                <button class="close-btn" id="close-btn">&times;</button>
            </div>
            ${linksHtml}
        `;
        document.body.appendChild(sidebar);
    }
    
    // Seleciona o botão de fechar dentro da sidebar criada
    const closeBtn = document.getElementById('close-btn');

    // Função para abrir a sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const sidebarElement = document.getElementById('sidebar');
            if (sidebarElement) {
                sidebarElement.classList.add('open');
            }
        });
    }

    // Função para fechar a sidebar
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const sidebarElement = document.getElementById('sidebar');
            if (sidebarElement) {
                sidebarElement.classList.remove('open');
            }
        });
    }

    // Opcional: Fechar a sidebar se clicar fora dela
    document.addEventListener('click', function(event) {
        const sidebarElement = document.getElementById('sidebar');
        // Se o clique foi fora da sidebar e não no botão de abrir
        if (sidebarElement && !sidebarElement.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebarElement.classList.remove('open');
        }
    });

});