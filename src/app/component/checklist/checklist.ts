import {bootstrap, View, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ChecklistItem} from '../../entity/checklist-item';
import {Task} from '../../entity/task';
import {TaskService} from '../../service/task-service';

@Component({
    selector: 'checklist',
    bindings: [TaskService],
    inputs: ['viewingTask:viewingTask']
})
@View({
    templateUrl: 'app/component/checklist/checklist.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['app/component/checklist/checklist.css']
})
export class CheckListComponent {
    viewingTask: Task;
    newItem: ChecklistItem;
    selectedItem: ChecklistItem;
    constructor(public taskService: TaskService) {
        this.resetNewItem();
    }
    getSelectedClass(item: ChecklistItem) {
        return { 'selected': item === this.selectedItem };
    }
    getCheckedClass(item: ChecklistItem) {
        return { 'checked': item.isChecked };
    }
    resetNewItem() {
        this.newItem = new ChecklistItem();
        this.newItem.name = null;
        this.newItem.isDeleted = false;
        this.newItem.isChecked = false;
    }
    onAddChecklistItem(newItem, task: Task) {
        this.taskService.addChecklistItemToTask(newItem, task);
        this.resetNewItem();
    }
    onEditItem(item: ChecklistItem) {
        this.selectedItem = item;
    }
    onCancelSaveItem() {
        this.selectedItem = null;
    }
    onSaveItem(item: ChecklistItem) {
        this.selectedItem = null;
    }
    onDeleteItem(item: ChecklistItem) {
        if (confirm('Delete this item?')) {
            this.taskService.toggleDeleted(item);
        }
    }
    onCheck(item: ChecklistItem) {
        this.taskService.toggleChecked(item);
    }
}