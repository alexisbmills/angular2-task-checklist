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
  { "id": 16, "taskId": 12, "name": "Invite Stefan", isChecked: false, isDeleted: false },
  { "id": 17, "taskId": 13, "name": "Call James to arrange pickup", isChecked: false, isDeleted: false }
]
@Injectable()
export class TaskService {
  tasks: Task[];
  checklistItems: ChecklistItem[];
  constructor() {
    this.tasks = TASKS;
    this.checklistItems = CHECKLIST_ITEMS;
  }
  getActiveTasks() {
    return this
      .tasks
      .filter(function(value: Task, index: number, array: Task[]) {
        return (value.isDeleted === false);
      })
      .sort(function(a: Task, b: Task) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
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
  saveTask(task: Task) {
    var editedTask: Task;
    editedTask = this.tasks.find(function(value: Task, index: number, array: Task[]) {
      return (value.id == task.id);
    });
    editedTask = task;
  }
  getTaskActiveChecklist(task: Task) {
    console.log('getting list for task id: ' + task.id);
    return this
      .checklistItems
      .filter(function(value: ChecklistItem, index: number, array: ChecklistItem[]) {
        return (value.taskId == task.id && false === value.isDeleted);
      })
      .sort(function(a: ChecklistItem, b: ChecklistItem) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
  }
  addChecklistItemToTask(newChecklistItem, task: Task) {
    if (!newChecklistItem.name) {
      return;
    }
    var checklistItem: ChecklistItem = {
      id: this.getNextId(this.checklistItems),
      taskId: task.id,
      name: newChecklistItem.name,
      isChecked: false,
      isDeleted: false
    }
    this.checklistItems.push(checklistItem);
    newChecklistItem.value = null;
  }
  toggleChecked(checklistItem: ChecklistItem) {
    checklistItem.isChecked = !checklistItem.isChecked;
  }
  toggleDeleted(deletable: Deleteable) {
    deletable.isDeleted = !deletable.isDeleted;
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