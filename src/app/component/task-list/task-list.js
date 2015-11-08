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
var checklist_1 = require('../checklist/checklist');
var task_service_1 = require('../../service/task-service');
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
        this.editingTask = null;
        this.viewingTask = null;
    }
    TaskListComponent.prototype.getSelectedClass = function (task) {
        return { 'selected': task === this.editingTask || task === this.viewingTask };
    };
    TaskListComponent.prototype.getLowerFocusClass = function (task) {
        return { 'sub-focus': task !== this.viewingTask && null !== this.viewingTask };
    };
    TaskListComponent.prototype.getFirstRowClass = function (index) {
        return { 'first': index === 0 };
    };
    TaskListComponent.prototype.getChecklistClass = function (task) {
        return { 'checklist-selected': task === this.viewingTask };
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
        if (task === this.viewingTask) {
            this.viewingTask = null;
            return;
        }
        this.viewingTask = task;
    };
    TaskListComponent = __decorate([
        angular2_1.Component({
            selector: 'task-list',
            bindings: [task_service_1.TaskService]
        }),
        angular2_1.View({
            templateUrl: 'app/component/task-list/task-list.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, checklist_1.CheckListComponent],
            styleUrls: ['app/component/task-list/task-list.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
})();
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.js.map