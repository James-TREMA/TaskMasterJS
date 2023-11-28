// deleteTask.js
module.exports = function supprimerTache(taches, titreTacheASupprimer) {
    const index = taches.findIndex(tache => tache.title === titreTacheASupprimer);
    if (index > -1) {
        taches.splice(index, 1);
        console.log(`Tâche supprimée : ${titreTacheASupprimer}`);
    } else {
        console.log('Tâche non trouvée.');
    }
};
