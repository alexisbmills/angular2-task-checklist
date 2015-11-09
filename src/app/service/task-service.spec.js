var task_service_1 = require('./task-service');
describe('TaskService', function () {
    it('initialises with tasks and checklists', function () {
        var taskService = new task_service_1.TaskService();
        expect(taskService.tasks.length).toBe(0);
        expect(taskService.checklistItems.length).toBe(0);
    });
});
//# sourceMappingURL=task-service.spec.js.map