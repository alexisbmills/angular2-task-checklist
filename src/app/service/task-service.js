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
var TASKS = [];
var CHECKLIST_ITEMS = [];
var TaskService = (function () {
    function TaskService() {
        this.tasks = TASKS;
        this.checklistItems = CHECKLIST_ITEMS;
    }
    /**
     * Get all non-deleted tasks
     *
     * @return Task[]
     */
    TaskService.prototype.getActiveTasks = function () {
        return this
            .tasks
            .filter(function (value, index, array) {
            return (value.isDeleted === false);
        })
            .sort(function (a, b) {
            if (a.id > b.id) {
                return -1;
            }
            if (a.id < b.id) {
                return 1;
            }
            return 0;
        });
    };
    /**
     * Add a new task
     *
     * @param Object new task - do this better
     * @return TaskService
     */
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
        return this;
    };
    /**
     * Save a task
     *
     * @return TaskService
     */
    TaskService.prototype.saveTask = function (task) {
        var editedTask;
        editedTask = this.tasks.find(function (value, index, array) {
            return (value.id == task.id);
        });
        editedTask = task;
        return this;
    };
    /**
     * Get non-deleted checklist items for a task
     *
     * @param Task
     *
     */
    TaskService.prototype.getTaskActiveChecklist = function (task) {
        return this
            .checklistItems
            .filter(function (value, index, array) {
            return (value.taskId == task.id && false === value.isDeleted);
        })
            .sort(function (a, b) {
            if (a.id > b.id) {
                return -1;
            }
            if (a.id < b.id) {
                return 1;
            }
            return 0;
        });
    };
    TaskService.prototype.addChecklistItemToTask = function (newChecklistItem, task) {
        if (!newChecklistItem.name) {
            return;
        }
        var checklistItem = {
            id: this.getNextId(this.checklistItems),
            taskId: task.id,
            name: newChecklistItem.name,
            isChecked: false,
            isDeleted: false
        };
        this.checklistItems.push(checklistItem);
        newChecklistItem.value = null;
    };
    TaskService.prototype.toggleChecked = function (checklistItem) {
        checklistItem.isChecked = !checklistItem.isChecked;
    };
    TaskService.prototype.toggleDeleted = function (deletable) {
        deletable.isDeleted = !deletable.isDeleted;
    };
    /**
     * Simulate incrementing ID
     *
     * @return number
     */
    TaskService.prototype.getNextId = function (collection) {
        if (0 === collection.length) {
            return 1;
        }
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