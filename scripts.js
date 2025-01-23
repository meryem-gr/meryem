document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('figure');

    figures.forEach(figure => {
        // Vérifier et ajouter tabindex si nécessaire
        if (!figure.hasAttribute('tabindex')) {
            figure.setAttribute('tabindex', '0');
        }

        // Ajouter des événements de souris
        figure.addEventListener('mouseover', () => {
            figure.style.borderColor = 'blue';
        });

        figure.addEventListener('mouseout', () => {
            figure.style.borderColor = '';
        });

        // Ajouter des événements de clavier
        figure.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                figure.click();
            }
        });

        // Ajouter des événements de clic
        figure.addEventListener('click', () => {
            alert(`Vous avez cliqué sur : ${figure.querySelector('figcaption').textContent}`);
        });
    });
});
