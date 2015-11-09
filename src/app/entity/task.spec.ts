import {Task} from './task';

describe('Task', () => {
	it('initialises as not deleted', () => {
		let task = new Task();
		expect(task.isDeleted).toBe(false);
	});
});