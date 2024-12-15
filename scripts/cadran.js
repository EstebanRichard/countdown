// Sélection de l'élément où afficher le compte à rebours
const countdownElement = document.getElementById("countdown");

// Date cible : 18 décembre à 17h
const targetDate = new Date("2024-12-18T17:00:00");

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        // Si la date cible est atteinte
        countdownElement.textContent = "Le moment est arrivé !";
        clearInterval(interval); // Arrête la mise à jour
        return;
    }

    // Calcul des jours, heures, minutes et secondes restants
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Affichage du compte à rebours
    countdownElement.textContent = `0m 0s 0d 0a 0m 0s ${days}j ${hours}h ${minutes}m ${seconds}s`;
}

// Mise à jour toutes les secondes
const interval = setInterval(updateCountdown, 1000);

// Lancer immédiatement une première mise à jour
updateCountdown();
