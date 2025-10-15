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
                <button class="close-btn" id="sidebar-close-btn">&times;</button>
            </div>
            ${linksHtml}
        `;
        document.body.appendChild(sidebar);
        
        const closeBtn = document.getElementById('sidebar-close-btn');

        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('open');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                sidebar.classList.remove('open');
            });
        }
    }
    
    // --- CÓDIGO DO FILTRO (Sem alterações) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const allDesignCards = document.querySelectorAll('.design-card'); // Renomeado para evitar conflito

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            allDesignCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- CÓDIGO CORRIGIDO PARA O MODAL (POP-UP) ---
    
    // 1. Seleciona os elementos do Modal
    const modal = document.getElementById('design-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');

    // 2. Adiciona um "ouvinte" de clique para CADA card
    allDesignCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega as informações do card que foi clicado
            const image = card.querySelector('.card-image-container img');
            const title = card.querySelector('.card-info h3');
            const description = card.querySelector('.card-info p');
            const tagsContainer = card.querySelector('.card-tags');

            // Coloca as informações dentro do modal
            modalImage.src = image.src;
            modalImage.alt = image.alt;
            modalTitle.textContent = title.textContent;
            modalDescription.textContent = description.textContent;

            // Limpa as tags antigas e copia as novas
            modalTags.innerHTML = '';
            if (tagsContainer) {
                modalTags.innerHTML = tagsContainer.innerHTML;
            }

            // Mostra o modal
            modal.classList.add('open');
        });
    });

    // 3. Função para fechar o modal
    function closeModal() {
        modal.classList.remove('open');
    }

    // 4. Adiciona os eventos de fechamento
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        // Fecha ao clicar no fundo escuro
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});