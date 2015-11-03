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
        .checklist { padding-top: .2em; padding-bottom: .2em; background-color: #e1e1e1; }
        .checklist .checklist-item { padding: .8em 0; border-bottom: 1px solid #eee;}
        .checklist .checklist-item .name { position: relative; }
        .checklist .checklist-item .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }
        .checklist .checklist-item .name:hover {color: #369; left: .2em; }
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
    onSaveItem(item: ChecklistItem) {
        this.selectedItem = null;
    }
    onDeleteItem(item: ChecklistItem) {
        this.taskService.toggleDeleted(item);
    }
    onCheck(item: ChecklistItem) {
        this.taskService.toggleChecked(item);
    }
}