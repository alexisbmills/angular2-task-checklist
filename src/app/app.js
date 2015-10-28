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
var task_list_1 = require('./task-list/task-list');
var Task = (function () {
    function Task() {
    }
    return Task;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tasks';
        this.viewMode = 'taskList';
        this.resetNewTask();
    }
    AppComponent.prototype.resetNewTask = function () {
        this.newTask = new Task();
        this.newTask.name = null;
        this.newTask.isDeleted = false;
    };
    AppComponent.prototype.onAddTask = function (newTask) {
        console.log('adding');
        if (!newTask.name) {
            return;
        }
        var task = {
            id: this.getNextId(),
            name: newTask.name,
            isDeleted: false
        };
        this.tasks.push(task);
        newTask.value = null;
    };
    AppComponent.prototype.getNextId = function () {
        var maxId = Math
            .max
            .apply(null, this.tasks.map(function (task) {
            return task.id;
        }));
        return maxId + 1;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n        <section>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h1>{{title}}</h1>\n                </div>\n            </div>\n            <section class=\"row\" *ng-if=\"viewMode ==='taskList'\">\n                <div class=\"col-md-12\">\n                    <h2>My Tasks</h2>  \n                    <div class=\"row add-task\">                    \n                        <div class=\"col-md-4\">                \n                            <input\n                                class=\"typl8-gamma form-control\"\n                                min-length=\"1\"\n                                [(ng-model)]=\"newTask.name\" \n                                (keyup.enter)=\"onAddTask(newTask)\" \n                                placeholder=\"Add a new task\">\n                            </div>               \n                        <div class=\"col-md-4\">      \n                            <button class=\"btn btn-primary\" (click)=\"onAddTask(newTask)\">Add new Task</button>\n                        </div>\n                    </div>\n                    <div class=\"tasks\">                    \n                        <task-list class=\"row\" items=\"tasks\"></task-list>\n                    </div>\n                </div>\n            </section>   \n        </section>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, task_list_1.TaskList],
            styles: ["\n        .tasks {padding: 0; width: 100%; color: #454545; }        \n        .selected { color: #369; }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [TaskService]);
//# sourceMappingURL=app.js.map