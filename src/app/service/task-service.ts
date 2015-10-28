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
  checklistItems: ChecklistItem[];
  constructor() {
    this.tasks = TASKS;
    this.checklistItems = CHECKLIST_ITEMS;
  }
  getTasks() {
    return this.tasks;
  }
  addTask(newTask) {
    if (!newTask.name) {
      return;
    }
    var task: Task = {
      id: this.getNextId(this.tasks),
      name: newTask.name,
      isDeleted: false
    }
    this.tasks.push(task);
    newTask.value = null;
  }
  getTaskChecklist(task: Task) {
    return this.checklistItems.filter(function(value: ChecklistItem, index: number, array: ChecklistItem[]) {
      return (value.taskId == task.id);
    });
  }
  getNextId(collection) {
    var maxId = Math
      .max
      .apply(null, collection.map(function(item) {
        return item.id;
      }));

    return maxId + 1;
  }
}