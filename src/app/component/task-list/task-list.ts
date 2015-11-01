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
        .task { padding: .8em 0; border-bottom: 1px solid #eee;}
        .task .name { position: relative; }
        .task .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }
        .task .name:hover {color: #369; left: .2em; }
        .selected { color: #369; }
    `]
})
export class TaskListComponent {
    editingTask: Task;
    viewingTaskChecklist: Task;
    newItem: ChecklistItem;
    constructor(public taskService: TaskService) {
    }
    getSelectedClass(task: Task) {
        return { 'selected': task === this.editingTask };
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
        console.log('viewing');
        this.viewingTaskChecklist = task;
    }
    onAddChecklistItem(newItem, task: Task) {
        this.taskService.addChecklistItemToTask(newItem, task);
        this.resetNewItem();
    }
    resetNewItem() {        
        this.newItem = new ChecklistItem();
        this.newItem.name = null;
        this.newItem.isDeleted = false;
        this.newItem.isChecked = false;
    }
}