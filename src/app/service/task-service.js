var angular2_1 = require('angular2/angular2');
var TASKS = [
    { "id": 11, "name": "Grocery Shopping", isDeleted: false },
    { "id": 12, "name": "Football game on Wednesday", isDeleted: false },
    { "id": 13, "name": "Fix bathroom tap", isDeleted: false }
];
var TaskService = (function () {
    function TaskService() {
        this.tasks = TASKS;
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.addTask = function (newTask) {
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
    TaskService.prototype.getNextId = function () {
        var maxId = Math
            .max
            .apply(null, this.tasks.map(function (task) {
            return task.id;
        }));
        return maxId + 1;
    };
    return TaskService;
})();
exports.TaskService = TaskService;
angular2_1.bootstrap([TaskService]);
//# sourceMappingURL=task-service.js.map