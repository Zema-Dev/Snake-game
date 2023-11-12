// Définition de la classe Snake
class Snake {
    // Constructeur de la classe
    constructor() {
        // Position initiale du serpent
        this.x = 0;
        this.y = 0;

        // Taille d'un bloc du serpent (équivalente à la taille d'un carré dans le jeu)
        this.blockSize = SQUARE_SIZE;

        // Liste des blocs composant le serpent
        this.blocks = [];

        // Ajout du premier bloc à la position initiale
        this.addBlock(this.x, this.y);

        // État du serpent (vivant ou mort)
        this.alive = true;
    }

    // Méthode pour ajouter un bloc au serpent
    addBlock(x, y) {
        // Création d'une instance de la classe Block et ajout à la liste des blocs du serpent
        const block = new Block(x, y, this.blockSize);
        this.blocks.push(block);
    }

    // Méthode pour déplacer la tête du serpent
    moveHead() {
        // Récupération de la tête du serpent
        const head = this.blocks[0];

        // Sauvegarde de l'ancienne position de la tête
        head.oldX = head.x;
        head.oldY = head.y;

        // Mise à jour de la position de la tête en fonction de la direction actuelle
        switch (currentDirection) {
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            default:
                break;
        }

        // Téléportation de la tête si elle sort de la carte
        head.teleportIfOutOfMap();
    }

    // Méthode pour calculer la nouvelle position d'un bloc du serpent
    calculateNewBlockPosition() {
        // Récupération de la position du dernier bloc du serpent
        let { x, y } = this.blocks[this.blocks.length - 1];

        // Calcul de la nouvelle position en fonction de la direction actuelle
        switch (currentDirection) {
            case 'left':
                x += 1;
                break;
            case 'right':
                x -= 1;
                break;
            case 'up':
                y += 1;
                break;
            case 'down':
                y -= 1;
                break;
            default:
                break;
        }

        return { x, y };
    }

    // Méthode pour gérer la collision avec la nourriture
    eat() {
        // Récupération de la tête du serpent
        const head = this.blocks[0];

        // Vérification si la tête est sur la même position que la nourriture
        if (head.x === food.x && head.y === food.y) {
            // Déplace la nourriture à une nouvelle position aléatoire
            food.setRandomPosition();

            // Calcul de la nouvelle position pour un nouveau bloc
            const { x, y } = this.calculateNewBlockPosition();

            // Ajout d'un nouveau bloc à la position calculée
            this.addBlock(x, y);
        }
    }

    // Méthode pour vérifier si un bloc du serpent touche la tête
    blockTouchHead(block) {
        // Récupération de la tête du serpent
        const head = this.blocks[0];
        const headX = head.x;
        const headY = head.y;

        // Vérification si la position du bloc correspond à la position de la tête
        return (headX === block.x && headY === block.y);
    }

    // Méthode de mise à jour du serpent (appelée à chaque itération de la boucle de jeu)
    update() {
        // Déplace la tête du serpent
        this.moveHead();

        // Gère la collision avec la nourriture
        this.eat();

        // Parcourt tous les blocs du serpent
        for (const [index, block] of this.blocks.entries()) {
            // Si le bloc n'est pas la tête
            if (index > 0) {
                // Récupération de l'ancienne position du bloc précédent
                const { oldX, oldY } = this.blocks[index - 1];

                // Positionne le bloc actuel à l'ancienne position du bloc précédent
                block.setPosition(oldX, oldY);

                // Vérifie si le bloc touche la tête du serpent
                if (this.blockTouchHead(block)) {
                    // Si oui, le serpent est marqué comme mort
                    this.alive = false;
                }
            }

            // Dessine le bloc sur le canvas
            block.draw();
        }
    }
}
