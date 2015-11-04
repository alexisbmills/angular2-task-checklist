import {bootstrap, View, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskListComponent} from './component/task-list/task-list';
import {Task} from './entity/task';
import {TaskService} from './service/task-service';
@Component({
    selector: 'my-app',
    bindings: [TaskService]
})
@View({
    template: `
        <section>
            <div class="row">
                <div class="col-md-12">
                    <h1>{{title}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h2>My Tasks</h2>  
                    <div class="form-inline">
                        <div class="form-group new-entity">           
                            <input
                                class="form-control"
                                min-length="1"
                                [(ng-model)]="newTask.name" 
                                (keyup.enter)="onAddTask(newTask)" 
                                placeholder="What are your tasks?">
                        </div>
                        <button class="btn btn-primary" (click)="onAddTask(newTask)">Add new task</button>
                    </div>
                </div>
            </div>              
            <task-list></task-list>                
        </section>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, TaskListComponent],
    styles: [`     
        .selected { color: #369; }
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