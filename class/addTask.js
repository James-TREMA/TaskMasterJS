// addTask.js
const Task = require('./task');

module.exports = function ajouterTache(taches, titre) {
    const nouvelleTache = new Task(titre);
    taches.push(nouvelleTache);
    console.log(`Tâche ajoutée : ${titre}`);
};
