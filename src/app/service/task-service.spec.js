var task_service_1 = require('./task-service');
var task_1 = require('../entity/task');
var checklist_item_1 = require('../entity/checklist-item');
describe('TaskService', function () {
    var taskService = new task_service_1.TaskService();
    beforeEach(function () {
        var firstTask = new task_1.Task();
        firstTask.name = 'Run tests';
        var savedFirstTask = taskService.addTask(firstTask);
        var secondTask = new task_1.Task();
        secondTask.name = 'Go shopping';
        var savedSecondTask = taskService.addTask(secondTask);
        var deletedTask = new task_1.Task();
        deletedTask.name = 'Deleted task';
        deletedTask.isDeleted = true;
        taskService.addTask(deletedTask);
        var firstItem = new checklist_item_1.ChecklistItem();
        firstItem.name = 'Standard item';
        firstItem.isChecked = false;
        firstItem.isDeleted = false;
        taskService.addChecklistItemToTask(firstItem, savedFirstTask);
        var secondItem = new checklist_item_1.ChecklistItem();
        secondItem.name = 'Checked item';
        secondItem.isChecked = true;
        secondItem.isDeleted = false;
        taskService.addChecklistItemToTask(secondItem, savedFirstTask);
        var thirdItem = new checklist_item_1.ChecklistItem();
        thirdItem.name = 'Deleted item';
        thirdItem.isChecked = false;
        thirdItem.isDeleted = true;
        taskService.addChecklistItemToTask(thirdItem, savedFirstTask);
        var fourthItem = new checklist_item_1.ChecklistItem();
        fourthItem.name = 'Another task checklist item';
        fourthItem.isChecked = false;
        fourthItem.isDeleted = false;
        taskService.addChecklistItemToTask(fourthItem, savedSecondTask);
    });
    afterEach(function () {
        taskService.tasks = [];
        taskService.checklistItems = [];
    });
    it('initialises with an array of tasks and checklist items', function () {
        expect(taskService.tasks.length).toBe(3);
        expect(taskService.checklistItems.length).toBe(4);
    });
    it('returns an array of not-deleted tasks', function () {
        expect(taskService.getActiveTasks().length).toBe(2);
    });
    it('returns tasks ordered by ID descending', function () {
        var activeTasks = taskService.getActiveTasks();
        expect(activeTasks[0].id).toBe(2);
        expect(activeTasks[1].id).toBe(1);
    });
    it('adds a task and returns saved task with new ID', function () {
        var newTask = new task_1.Task();
        newTask.name = 'Run more tests';
        var savedNewTask = taskService.addTask(newTask);
        expect(savedNewTask.id).toBe(4);
    });
    it('saves a task and returns self', function () {
        var firstTask = taskService.getActiveTasks()[0];
        firstTask.name = 'saved task';
        var taskServiceReturned = taskService.saveTask(firstTask);
        expect(taskServiceReturned).toBe(taskService);
        expect(taskService.getActiveTasks()[0].name).toBe(firstTask.name);
    });
    it('returns the next highest id value', function () {
        expect(taskService.getNextId(taskService.tasks)).toBe(4);
    });
    it('returns active checklist items for a task', function () {
        var firstTask = taskService.tasks[0];
        expect(taskService.getTaskActiveChecklist(firstTask).length).toBe(2);
    });
    it('returns checklist items ordered by ID descending', function () {
        var firstTask = taskService.tasks[0];
        var checklistitems = taskService.getTaskActiveChecklist(firstTask);
        expect(checklistitems[0].id).toBe(2);
        expect(checklistitems[1].id).toBe(1);
    });
    it('adds an item to a task and returns the saved item with a new ID and the assigned task ID', function () {
        var firstItem = new checklist_item_1.ChecklistItem();
        firstItem.name = 'Standard item';
        firstItem.isChecked = false;
        var task = taskService.tasks[1];
        var savedItem = taskService.addChecklistItemToTask(firstItem, task);
        expect(savedItem.id).toBe(5);
        expect(savedItem.taskId).toBe(task.id);
    });
    it('deletes a task', function () {
        var firstTask = taskService.tasks[0];
        taskService.toggleDeleted(firstTask);
        expect(firstTask.isDeleted).toBe(true);
    });
    it('deletes a checklist item', function () {
        var firsItem = taskService.checklistItems[0];
        taskService.toggleDeleted(firsItem);
        expect(firsItem.isDeleted).toBe(true);
    });
    it('checks a checklist item', function () {
        var uncheckedItem = taskService.checklistItems[0];
        taskService.toggleChecked(uncheckedItem);
        expect(uncheckedItem.isChecked).toBe(true);
    });
    it('unchecks a checklist item', function () {
        var checkedItem = taskService.checklistItems[1];
        taskService.toggleChecked(checkedItem);
        expect(checkedItem.isChecked).toBe(false);
    });
});
//# sourceMappingURL=task-service.spec.js.map