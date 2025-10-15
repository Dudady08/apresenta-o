document.addEventListener('DOMContentLoaded', function() {
    
    // --- CÓDIGO DO MENU MOBILE (Sem alterações) ---
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
    
    // --- CÓDIGO DO FILTRO CORRIGIDO ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const designCards = document.querySelectorAll('.design-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' apenas ao botão clicado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            designCards.forEach(card => {
                // ALTERAÇÃO AQUI: Pega a string de categorias e a transforma em uma lista (array)
                // Ex: "web criacao" vira ["web", "criacao"]
                const categories = card.getAttribute('data-category').split(' ');

                // ALTERAÇÃO AQUI: Verifica se o filtro é 'all' OU se a lista de categorias do card INCLUI o filtro
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block'; // Mostra o card
                } else {
                    card.style.display = 'none'; // Esconde o card
                }
            });
        });
    });
});