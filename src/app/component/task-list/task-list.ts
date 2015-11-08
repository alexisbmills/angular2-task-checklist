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
    styleUrls: ['app/component/task-list/task-list.css']
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