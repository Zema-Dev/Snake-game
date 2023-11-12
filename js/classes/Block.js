// Définition de la classe Block
class Block {
    // Constructeur de la classe
    constructor(x, y, size) {
        // Initialisation des propriétés de l'objet Block
        this.x = x; // Position en x
        this.y = y; // Position en y
        this.oldX = x; // Ancienne position en x (pour le déplacement)
        this.oldY = y; // Ancienne position en y (pour le déplacement)
        this.size = size; // Taille du bloc
    }

    // Méthode pour téléporter le bloc s'il est en dehors de la carte
    teleportIfOutOfMap() {
        // Calcul de la taille maximale en fonction de la taille du bloc
        const maxSize = GAME_SIZE / this.size;
        
        // Vérification et téléportation si le bloc est en dehors de la carte
        if (this.x < 0) {
            this.x = maxSize;
        } else if (this.x > maxSize) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = maxSize;
        } else if (this.y > maxSize) {
            this.y = 0;
        }
    }

    // Méthode pour définir la position du bloc
    setPosition(x, y) {
        // Sauvegarde de l'ancienne position
        this.oldX = this.x;
        this.oldY = this.y;

        // Mise à jour de la position
        this.x = x;
        this.y = y;
    }

    // Méthode pour dessiner le bloc sur le canvas
    draw() {
        // Configuration de la couleur de remplissage en rouge
        ctx.fillStyle = 'red';
        
        // Dessin du bloc sur le canvas
        // - this.x * this.size : Position horizontale ajustée en fonction de la taille du bloc
        // - this.y * this.size : Position verticale ajustée en fonction de la taille du bloc
        // - this.size : Largeur du bloc
        // - this.size : Hauteur du bloc
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}
