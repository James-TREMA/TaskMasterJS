class Task {
    constructor(title) {
      this.title = title;
      this.completed = false;
    }
  
    toggleCompleted() {
      this.completed = !this.completed;
    }
  }
  
  module.exports = Task;
  