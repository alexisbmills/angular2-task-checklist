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
                    <div class="row add-task">                    
                        <div class="col-md-4">                
                            <input
                                class="typl8-gamma form-control"
                                min-length="1"
                                [(ng-model)]="newTask.name" 
                                (keyup.enter)="onAddTask(newTask)" 
                                placeholder="Add a new task">
                            </div>               
                        <div class="col-md-4">      
                            <button class="btn btn-primary" (click)="onAddTask(newTask)">Add new Task</button>
                        </div>
                    </div>
                </div>
            </div>              
            <div class="tasks row">
                <div class="col-md-12">                 
                    <task-list></task-list>
                </div>
            </div> 
        </section>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, TaskListComponent],
    styles: [`
        .tasks {padding: 0; width: 100%; color: #454545; }        
        .selected { color: #369; }
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