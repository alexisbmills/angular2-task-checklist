var task_1 = require('./task');
describe('Task', function () {
    it('initialises as not deleted', function () {
        var task = new task_1.Task();
        expect(task.isDeleted).toBe(false);
    });
});
//# sourceMappingURL=task.spec.js.map