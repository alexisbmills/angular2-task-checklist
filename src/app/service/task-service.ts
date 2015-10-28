import {Injectable, bootstrap} from 'angular2/angular2'
import {Task} from '../entity/task';
import {ChecklistItem} from '../entity/checklist-item';

var TASKS: Task[] = [
  { "id": 11, "name": "Grocery Shopping", isDeleted: false },
  { "id": 12, "name": "Football game on Wednesday", isDeleted: false },
  { "id": 13, "name": "Fix bathroom tap", isDeleted: false }
];
var CHECKLIST_ITEMS: ChecklistItem[] = [    
  { "id": 11, "taskId": 11, "name": "Milk", isChecked: false, isDeleted: false },
  { "id": 12, "taskId": 11, "name": "Apples", isChecked: false, isDeleted: false },
  { "id": 13, "taskId": 11, "name": "Oranges", isChecked: false, isDeleted: false },
  { "id": 14, "taskId": 12, "name": "Buy tickets", isChecked: false, isDeleted: false },
  { "id": 15, "taskId": 12, "name": "Call James to arrange pickup", isChecked: false, isDeleted: false },
  { "id": 16, "taskId": 12, "name": "Invite Stefan", isChecked: false, isDeleted: false }
]
@Injectable()
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