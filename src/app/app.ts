import {bootstrap, View, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskListComponent} from './component/task-list/task-list';
import {Task} from './entity/task';
import {TaskService} from './service/task-service';
@Component({
    selector: 'my-app',
    bindings: [TaskService]
})
@View({
    templateUrl: 'app/app.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, TaskListComponent],
    styles: [`
        .new-entity { padding-top: 1em; padding-bottom: 1em; }
        .new-entity input { width: 30em;}
    `],
})
class AppComponent {
    public title = 'Tasks';
    public taskService: TaskService;
    public newTask: Task;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
        this.resetNewTask();
    }

    resetNewTask() {
        this.newTask = new Task();
        this.newTask.name = null;
        this.newTask.isDeleted = false;
    }

    onAddTask(newTask) {
        this.taskService.addTask(newTask);
        this.resetNewTask();
    }
}
bootstrap(AppComponent);