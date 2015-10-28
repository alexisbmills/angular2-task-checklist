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
var task_service_1 = require('../service/task-service');
var TaskList = (function () {
    function TaskList(taskService) {
        this.tasks = taskService.getTasks();
    }
    TaskList.prototype.getSelectedClass = function (task) {
        return { 'selected': task === this.selectedTask };
    };
    TaskList.prototype.onEditTask = function (task) {
        this.selectedTask = task;
    };
    TaskList.prototype.onSaveTask = function (task) {
        this.selectedTask = null;
    };
    TaskList.prototype.onDeleteTask = function (task) {
        task.isDeleted = true;
    };
    TaskList = __decorate([
        angular2_1.Component({
            selector: 'task-list',
            bindings: [task_service_1.TaskService]
        }),
        angular2_1.View({
            template: "\n        <div class=\"row task\" *ng-for=\"#task of tasks\" [ng-class]=\"getSelectedClass(task)\">\n            <div class=\"col-md-8 name\">\n                <input type=\"text\" class=\"typl8-gamma form-control edit-task\" value=\"{{task.name}}\" min-length=\"1\" *ng-if=\"selectedTask === task\">\n                <span class=\"task-name typl8-gamma\" *ng-if=\"selectedTask !== task\">{{task.name}}</span>\n            </div>\n            <div class=\"col-md-4 actions\">\n                <span *ng-if=\"selectedTask === task\">\n                    <button class=\"btn btn-default\" (click)=\"onSaveTask(task)\">\n                        <span class=\"glyphicon glyphicon-floppy-save\"></span> Save\n                    </button>\n                    <button class=\"btn btn-default\" (click)=\"onCancelSaveTask(task)\">\n                        <span class=\"glyphicon glyphicon-floppy-save\"></span> Save\n                    </button>\n                </span>\n                <span *ng-if=\"selectedTask !== task\">\n                    <button class=\"btn btn-default\" (click)=\"onEditTask(task)\">\n                        <span class=\"glyphicon glyphicon-edit\"></span> Edit\n                    </button>\n                    <button class=\"btn btn-default\" (click)=\"onDeleteTask(task)\">\n                        <span class=\"glyphicon glyphicon-remove\"></span> Delete\n                    </button>\n                </span>\n            </div>\n        </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            styles: ["\n        .task { padding: .8em 0; border-bottom: 1px solid #eee;}\n        .task .name { position: relative; }\n        .task .name { cursor: pointer; display: inline-block;  position: relative; left: 0; transition: all 0.2s ease; }\n        .task .name:hover {color: #369; left: .2em; }\n        .selected { color: #369; }\n    "]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskList);
    return TaskList;
})();
exports.TaskList = TaskList;
angular2_1.bootstrap(TaskList);
//# sourceMappingURL=task-list.js.map