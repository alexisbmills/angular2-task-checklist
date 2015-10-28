import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {TaskService} from '../service/task-service';
class Task {
    id: number;
    name: string;
    isDeleted: boolean;
}
@Component({
    selector: 'task-list',
    template: `
        <div class="row task" *ng-for="#task of tasks" [ng-class]="getSelectedClass(task)">
            <div class="col-md-8 name">
                <input type="text" class="typl8-gamma form-control edit-task" value="{{task.name}}" min-length="1" *ng-if="selectedTask === task">
                <span class="task-name typl8-gamma" *ng-if="selectedTask !== task">{{task.name}}</span>
            </div>
            <div class="col-md-4 actions">           
                <span *ng-if="selectedTask === task">                 
                    <button class="btn btn-default" (click)="onSaveTask(task)">
                        <span class="glyphicon glyphicon-floppy-save"></span> Save
                    </button>                           
                    <button class="btn btn-default" (click)="onCancelSaveTask(task)">
                        <span class="glyphicon glyphicon-floppy-save"></span> Save
                    </button> 
                </span>
                <span *ng-if="selectedTask !== task">
                    <button class="btn btn-default" (click)="onEditTask(task)">
                        <span class="glyphicon glyphicon-edit"></span> Edit
                    </button> 
                    <button class="btn btn-default" (click)="onDeleteTask(task)">
                        <span class="glyphicon glyphicon-remove"></span> Delete
                    </button>
                </span>
            </div>
        </div>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styles: [`
        .task { padding: .8em 0; border-bottom: 1px solid #eee;}
        .task .name { position: relative; }
        .task .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }
        .task .name:hover {color: #369; left: .2em; }        
        .selected { color: #369; }
    `],
})
export class TaskList {
    public tasks: Array<Task>;
    public selectedTask: Task;
    constructor(taskService: TaskService) {
        this.tasks = taskService.getTasks();
    }
    getSelectedClass(task: Task) {
        return { 'selected': task === this.selectedTask };
    }
    onEditTask(task: Task) {
        this.selectedTask = task;
    }
    onSaveTask(task: Task) {
        this.selectedTask = null;
    }
    onDeleteTask(task) {
        task.isDeleted = true;    
    }
}