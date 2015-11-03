var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var checklist_item_1 = require('../../entity/checklist-item');
var checklist_1 = require('../checklist/checklist');
var task_service_1 = require('../../service/task-service');
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
        this.resetNewItem();
    }
    TaskListComponent.prototype.getSelectedClass = function (task) {
        return { 'selected': task === this.editingTask };
    };
    TaskListComponent.prototype.onEditTask = function (task) {
        this.editingTask = task;
    };
    TaskListComponent.prototype.onSaveTask = function (task) {
        this.editingTask = null;
    };
    TaskListComponent.prototype.onCancelSaveTask = function () {
        this.editingTask = null;
    };
    TaskListComponent.prototype.onDeleteTask = function (task) {
        if (confirm('Delete this task?')) {
            this.taskService.toggleDeleted(task);
        }
    };
    TaskListComponent.prototype.onViewChecklist = function (task) {
        console.log('viewing task id: ' + task.id);
        this.viewingTask = task;
    };
    TaskListComponent.prototype.onAddChecklistItem = function (newItem, task) {
        this.taskService.addChecklistItemToTask(newItem, task);
        this.resetNewItem();
    };
    TaskListComponent.prototype.resetNewItem = function () {
        this.newItem = new checklist_item_1.ChecklistItem();
        this.newItem.name = null;
        this.newItem.isDeleted = false;
        this.newItem.isChecked = false;
    };
    TaskListComponent = __decorate([
        angular2_1.Component({
            selector: 'task-list',
            bindings: [task_service_1.TaskService]
        }),
        angular2_1.View({
            templateUrl: 'app/component/task-list/task-list.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, checklist_1.CheckListComponent],
            styles: ["\n        .task { padding: .8em 0; border-bottom: 1px solid #eee;}\n        .task .name { position: relative; }\n        .task .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }\n        .task .name:hover {color: #369; left: .2em; }\n        .selected { color: #369; }\n    "]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
})();
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.js.map