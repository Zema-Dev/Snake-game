// Définition de la classe Food
class Food {
    // Constructeur de la classe
    constructor() {
        this.size = SQUARE_SIZE;

        // Initialisation de la position de la nourriture de manière aléatoire
        this.setRandomPosition();
    }

    // Méthode pour définir une position aléatoire pour la nourriture
    setRandomPosition() {
        // Calcul de la taille maximale en fonction de la taille de la nourriture
        const maxSize = ((GAME_SIZE / this.size) - 1);

        // Attribution de coordonnées x et y aléatoires pour la nourriture
        this.x = Math.round(Math.random() * GAME_SIZE % maxSize);
        this.y = Math.round(Math.random() * GAME_SIZE % maxSize);
    }

    // Méthode pour dessiner la nourriture sur le canvas
    draw() {
        // Configuration de la couleur de remplissage en jaune
        ctx.fillStyle = 'yellow';

        // Dessin de la nourriture sur le canvas
        // - this.x * this.size : Position horizontale ajustée en fonction de la taille de la nourriture
        // - this.y * this.size : Position verticale ajustée en fonction de la taille de la nourriture
        // - this.size : Largeur de la nourriture
        // - this.size : Hauteur de la nourriture
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}
