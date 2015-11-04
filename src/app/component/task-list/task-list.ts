import {bootstrap, View, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ChecklistItem} from '../../entity/checklist-item';
import {Task} from '../../entity/task';
import {CheckListComponent} from '../checklist/checklist'
import {TaskService} from '../../service/task-service';

@Component({
    selector: 'task-list',
    bindings: [TaskService]
})
@View({
    templateUrl: 'app/component/task-list/task-list.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, CheckListComponent],
    styles: [`
        .tasks { color: #454545; }   
        .task { padding: .8em 0; border-top: 1px solid #eee;}
        .task.first { border-top: 0; } 
        .task .sub-focus { color: #d7d7d7;}
        .task .task-name { position: relative; }
        .task .task-name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }
        .task .task-name:hover {color: #369; left: .2em; }
        .selected { color: #369; }
        .checklist-base { visibility: hidden; opacity: 0;  transition: all 0.2s ease;}
        .checklist-selected { visibility: visible; opacity: 1; }
    `]
})
export class TaskListComponent {
    editingTask: Task;
    viewingTask: Task;
    constructor(public taskService: TaskService) {
        this.editingTask = null;
        this.viewingTask = null;
    }
    getSelectedClass(task: Task) {
        return { 'selected': task === this.editingTask || task === this.viewingTask };
    }
    getLowerFocusClass(task: Task) {
        return { 'sub-focus': task !== this.viewingTask && null !== this.viewingTask };
    }
    getFirstRowClass(index: number) {
        return { 'first': index === 0 };
    }
    getChecklistClass(task: Task) {
        return { 'checklist-selected': task === this.viewingTask };        
    }
    onEditTask(task: Task) {
        this.editingTask = task;
    }
    onSaveTask(task: Task) {
        this.editingTask = null;
    }
    onCancelSaveTask() {
        this.editingTask = null;
    }
    onDeleteTask(task: Task) {
        if (confirm('Delete this task?')) {
            this.taskService.toggleDeleted(task);
        }
    }
    onViewChecklist(task: Task) {
        if (task === this.viewingTask) {
            this.viewingTask = null;
            return;
        }
        this.viewingTask = task;
    }
}