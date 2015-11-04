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
    styles: [`
        .checklist {  } 
        .checklist .title { color: #2FA4E7; }
        .checklist .new-entity { padding-top: 1em; padding-bottom: 1em; }
        .checklist .new-entity input { width: 30em;}
        .checklist .checklist-item { color: #317EAC; padding: .8em 0;}
        .checklist .checklist-item .name { position: relative; cursor: pointer; display: inline-block; }
        .checklist .checklist-item .name:hover {color: #369;}
        .checklist .selected { color: #369; }
        .checklist .checked { text-decoration: line-through; color: #555 }
    `]
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