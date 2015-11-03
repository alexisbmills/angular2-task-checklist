import {bootstrap, View, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ChecklistItem} from '../../entity/checklist-item';
import {Task} from '../../entity/task';
import {TaskService} from '../../service/task-service';

@Component({
    selector: 'checklist',
    bindings: [TaskService],
    inputs: ['checklist:checklist']
})
@View({
    templateUrl: 'app/component/checklist/checklist.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styles: [`
        .checklist-item { padding: .8em 0; border-bottom: 1px solid #eee;}
        .checklist-item .name { position: relative; }
        .checklist-item .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }
        .checklist-item .name:hover {color: #369; left: .2em; }
        .selected { color: #369; }
    `]
})
export class CheckListComponent {
    checklist: Array<ChecklistItem>;
    selectedItem: ChecklistItem;
    constructor(public taskService: TaskService) {
    }
    getSelectedClass(item: ChecklistItem) {
        return { 'selected': item === this.selectedItem };
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