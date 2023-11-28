// index.js
const ajouterTache = require('./class/addTask');
const supprimerTache = require('./class/deleteTask');
const afficherTaches = require('./class/displayTasks');

let taches = [];

// Ajouter des tâches
ajouterTache(taches, 'Apprendre Node.js');
ajouterTache(taches, 'Aller au supermarché');
afficherTaches(taches);

// Modifier l'état d'une tâche
taches[0].toggleCompleted();

// Afficher les tâches
afficherTaches(taches);

// Supprimer une tâche
supprimerTache(taches, 'Aller au supermarché');
afficherTaches(taches);
