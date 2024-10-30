// Sélectionne le bouton et le compteur
const incrementButton = document.getElementById('increment-btn');
const counterDisplay = document.getElementById('counter');

// Initialise le compteur à 0
let counterValue = 0;

// Fonction pour incrémenter le compteur
function incrementCounter() {
    counterValue += 1; // Incrémente le compteur de 1
    counterDisplay.textContent = counterValue; // Met à jour l'affichage du compteur
}

// Ajoute un écouteur d'événement au bouton pour appeler la fonction lors d'un clic
incrementButton.addEventListener('click', incrementCounter);
