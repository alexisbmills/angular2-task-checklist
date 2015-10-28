import {Injectable, bootstrap} from 'angular2/angular2'
import {Task} from '../entity/task';

var TASKS: Task[] = [
  { "id": 11, "name": "Grocery Shopping", isDeleted: false },
  { "id": 12, "name": "Football game on Wednesday", isDeleted: false },
  { "id": 13, "name": "Fix bathroom tap", isDeleted: false }
];

export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = TASKS;
  }
  getTasks() {
    return this.tasks;
  }
  addTask(newTask) {
    if (!newTask.name) {
      return;
    }
    var task: Task = {
      id: this.getNextId(),
      name: newTask.name,
      isDeleted: false
    }
    this.tasks.push(task);
    newTask.value = null;
  }
  getNextId() {
    var maxId = Math
      .max
      .apply(null, this.tasks.map(function(task) {
        return task.id;
      }));

    return maxId + 1;
  }
}
bootstrap([TaskService]);