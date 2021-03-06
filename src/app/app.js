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
var task_list_1 = require('./component/task-list/task-list');
var task_1 = require('./entity/task');
var task_service_1 = require('./service/task-service');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.title = 'Tasks';
        this.taskService = taskService;
        this.resetNewTask();
    }
    AppComponent.prototype.resetNewTask = function () {
        this.newTask = new task_1.Task();
        this.newTask.name = null;
        this.newTask.isDeleted = false;
    };
    AppComponent.prototype.onAddTask = function (newTask) {
        this.taskService.addTask(newTask);
        this.resetNewTask();
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            bindings: [task_service_1.TaskService]
        }),
        angular2_1.View({
            templateUrl: 'app/app.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, task_list_1.TaskListComponent],
            styles: ["\n        .new-entity { padding-top: 1em; padding-bottom: 1em; }\n        .new-entity input { width: 30em;}\n    "],
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map