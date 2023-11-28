// displayTasks.js
module.exports = function afficherTaches(taches) {
    console.log("Liste des Tâches :");
    taches.forEach(tache => {
        console.log(`- ${tache.title} [${tache.completed ? 'Complétée' : 'Non Complétée'}]`);
    });
};
