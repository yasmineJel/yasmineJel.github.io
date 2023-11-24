// Script pour rendre les recettes dynamiques en fonction du nombre de verres
document.getElementById('verres').addEventListener('change', function() {
    const nombreVerres = parseInt(this.value);
    const cocktailTitle = document.getElementById('cocktailTitle');
    const recette = document.getElementById('recette');
  
    // Mettre à jour le titre du cocktail et la recette en fonction du nombre de verres
    if (window.location.hash === '#mojito') {
      cocktailTitle.textContent = 'Mojito';
      // Mettre à jour la recette pour le Mojito en fonction du nombre de verres
      // Exemple : Modifier les quantités d'ingrédients pour chaque nombre de verres
      if (nombreVerres === 1) {
        recette.innerHTML = 'Recette du Mojito pour 1 verre';
      } else if (nombreVerres === 2) {
        recette.innerHTML = 'Recette du Mojito pour 2 verres';
      }
      // Ajoute d'autres conditions pour différents nombres de verres
    } else if (window.location.hash === '#sex-on-the-beach') {
      // Faire de même pour les autres cocktails
    } else if (window.location.hash === '#aperol-spritz') {
      // Faire de même pour les autres cocktails
    }
    // Ajouter des conditions pour chaque cocktail avec son identifiant
  });
  