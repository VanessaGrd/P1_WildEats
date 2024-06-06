

        // Sélectionne l'image par son id
        const iconHeart = document.getElementById('iconHeart');

        // Ajoute un écouteur d'événement pour le clic
        iconHeart.addEventListener('click', () => {
            // Vérifie la source actuelle de l'image et change en conséquence
            if (iconHeart.src.includes('assets/iconHeart.svg')) {
                iconHeart.src = 'assets/heart.svg';
                iconHeart.alt = 'heartVert';
            } else {
                iconHeart.src = 'assets/iconHeart.svg';
                iconHeart.alt = 'iconHeart';
            }
        });
   