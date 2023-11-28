## Exercice : "Gestionnaire de Tâches"

### Description du Projet
Gestionnaire de tâches développé en Node.js. On utilise la programmation orientée objet et les modules pour créer, gérer, et afficher des tâches.

### Fonctionnalités
- **Ajout de Tâches** : Permet d'ajouter de nouvelles tâches à une liste.
- **Suppression de Tâches** : Permet de supprimer des tâches spécifiques de la liste.
- **Affichage de Tâches** : Affiche toutes les tâches présentes dans la liste avec leur état (complétée ou non complétée).

### Structure du Projet
- `task.js` : Contient la classe `Task` avec les propriétés `title` et `completed`, et une méthode `toggleCompleted()` pour changer l'état de la tâche.
- `addTask.js` : Module pour ajouter des tâches à la liste.
- `deleteTask.js` : Module pour supprimer une tâche de la liste.
- `displayTasks.js` : Module pour afficher les tâches de la liste.
- `index.js` : Point d'entrée principal du programme qui utilise les modules mentionnés ci-dessus.

### Utilisation
1. **Ajouter une Tâche** : Crée une nouvelle tâche et l'ajoute à la liste.
2. **Modifier l'État d'une Tâche** : Change l'état de la tâche (complétée/non complétée).
3. **Supprimer une Tâche** : Retire une tâche spécifique de la liste.
4. **Afficher les Tâches** : Montre toutes les tâches actuelles avec leur état.

Cette exercice illustre l'utilisation efficace des modules en Node.js, permettant une gestion claire et organisée des différentes fonctionnalités dans une application.