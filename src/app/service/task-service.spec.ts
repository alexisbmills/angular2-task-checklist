import {TaskService} from './task-service';

describe('TaskService', () => {
	it('initialises with tasks and checklists', () => {
		let taskService = new TaskService();
		expect(taskService.tasks.length).toBe(0);
		expect(taskService.checklistItems.length).toBe(0);
	});
});