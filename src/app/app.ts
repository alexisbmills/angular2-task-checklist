import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskList} from './task-list/task-list';
class Task {
    id: number;
    name: string;
    isDeleted: boolean;
}
@Component({
    selector: 'my-app',
    template: `
        <section>
            <div class="row">
                <div class="col-md-12">
                    <h1>{{title}}</h1>
                </div>
            </div>
            <section class="row" *ng-if="viewMode ==='taskList'">
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
                    <div class="tasks">                    
                        <task-list class="row" items="tasks"></task-list>
                    </div>
                </div>
            </section>   
        </section>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, TaskList],
    styles: [`
        .tasks {padding: 0; width: 100%; color: #454545; }        
        .selected { color: #369; }
    `],
})
class AppComponent {
    public title = 'Tasks';
    public newTask: Task;
    protected viewMode: string;
    constructor() {
        this.viewMode = 'taskList';
        this.resetNewTask();
    }
    resetNewTask() {        
        this.newTask = new Task();
        this.newTask.name = null;
        this.newTask.isDeleted = false;
    }
    onAddTask(newTask) {
        console.log('adding');
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
bootstrap(AppComponent, [TaskService]);