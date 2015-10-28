import {Task} from '../entity/task';
var TASKS: Task[] = [
  { "id": 11, "name": "Grocery Shopping", isDeleted: false },
  { "id": 12, "name": "Football game on Wednesday", isDeleted: false },
  { "id": 13, "name": "Fix bathroom tap", isDeleted: false }
];
@Injectable()
class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = TASKS;
  }
  getTasks() {
    return this.tasks;
  }
}