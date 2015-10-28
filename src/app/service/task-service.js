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
var TASKS = [
    { "id": 11, "name": "Grocery Shopping", isDeleted: false },
    { "id": 12, "name": "Football game on Wednesday", isDeleted: false },
    { "id": 13, "name": "Fix bathroom tap", isDeleted: false }
];
var CHECKLIST_ITEMS = [
    { "id": 11, "taskId": 11, "name": "Milk", isChecked: false, isDeleted: false },
    { "id": 12, "taskId": 11, "name": "Apples", isChecked: false, isDeleted: false },
    { "id": 13, "taskId": 11, "name": "Oranges", isChecked: false, isDeleted: false },
    { "id": 14, "taskId": 12, "name": "Buy tickets", isChecked: false, isDeleted: false },
    { "id": 15, "taskId": 12, "name": "Call James to arrange pickup", isChecked: false, isDeleted: false },
    { "id": 16, "taskId": 12, "name": "Invite Stefan", isChecked: false, isDeleted: false }
];
var TaskService = (function () {
    function TaskService() {
        this.tasks = TASKS;
        this.checklistItems = CHECKLIST_ITEMS;
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.addTask = function (newTask) {
        if (!newTask.name) {
            return;
        }
        var task = {
            id: this.getNextId(this.tasks),
            name: newTask.name,
            isDeleted: false
        };
        this.tasks.push(task);
        newTask.value = null;
    };
    TaskService.prototype.getTaskChecklist = function (task) {
        return this.checklistItems.filter(function (value, index, array) {
            return (value.taskId == task.id);
        });
    };
    TaskService.prototype.getNextId = function (collection) {
        var maxId = Math
            .max
            .apply(null, collection.map(function (item) {
            return item.id;
        }));
        return maxId + 1;
    };
    TaskService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskService);
    return TaskService;
})();
exports.TaskService = TaskService;
//# sourceMappingURL=task-service.js.map