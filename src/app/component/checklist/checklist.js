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
var task_service_1 = require('../../service/task-service');
var CheckListComponent = (function () {
    function CheckListComponent(taskService) {
        this.taskService = taskService;
    }
    CheckListComponent.prototype.getSelectedClass = function (item) {
        return { 'selected': item === this.selectedItem };
    };
    CheckListComponent.prototype.onEditItem = function (item) {
        this.selectedItem = item;
    };
    CheckListComponent.prototype.onSaveItem = function (item) {
        this.selectedItem = null;
    };
    CheckListComponent.prototype.onDeleteItem = function (item) {
        this.taskService.toggleDeleted(item);
    };
    CheckListComponent.prototype.onCheck = function (item) {
        this.taskService.toggleChecked(item);
    };
    CheckListComponent = __decorate([
        angular2_1.Component({
            selector: 'checklist',
            bindings: [task_service_1.TaskService],
            inputs: ['task']
        }),
        angular2_1.View({
            templateUrl: 'app/component/checklist/checklist.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            styles: ["\n        .checklist-item { padding: .8em 0; border-bottom: 1px solid #eee;}\n        .checklist-item .name { position: relative; }\n        .checklist-item .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }\n        .checklist-item .name:hover {color: #369; left: .2em; }\n        .selected { color: #369; }\n    "]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], CheckListComponent);
    return CheckListComponent;
})();
exports.CheckListComponent = CheckListComponent;
//# sourceMappingURL=checklist.js.map