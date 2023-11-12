// Constantes définissant la taille du jeu et la taille de chaque carré
const GAME_SIZE = 600;
const SQUARE_SIZE = 20;

// Initialisation du canvas et du contexte 2D
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Initialisation du serpent et de la nourriture
const snake = new Snake(SQUARE_SIZE);
const food = new Food();

// Variable pour stocker la direction actuelle du serpent
let currentDirection = 'right';

// Fonction pour détecter les touches du clavier
function detectKeyPressed() {
    document.addEventListener('keydown', function (event) {
        // Mise à jour de la direction en fonction de la touche de la flèche pressée
        switch (event.key) {
            case 'ArrowLeft':
                currentDirection = 'left';
                break;
            case 'ArrowRight':
                currentDirection = 'right';
                break;
            case 'ArrowUp':
                currentDirection = 'up';
                break;
            case 'ArrowDown':
                currentDirection = 'down';
                break;
            default:
                break;
        }
    });
}

function clearScreen() {
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
    clearScreen(); 
    food.draw();   // Dessine la nourriture
    snake.update(); 
    if (snake.alive) {
        setTimeout(update, 150); // Mise à jour avec un délai (vitesse de déplacement du serpent)
    }
}

function start() {
    detectKeyPressed(); // Ajoute un écouteur d'événements clavier
    update(); 
}

start(); // Appelle la fonction start() pour commencer le jeu
