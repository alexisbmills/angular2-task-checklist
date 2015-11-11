import {TaskService} from './task-service';
import {Task} from '../entity/task';
import {ChecklistItem} from '../entity/checklist-item';

describe('TaskService', () => {

	let taskService = new TaskService();

	beforeEach(() => {
		var firstTask = new Task();
		firstTask.name = 'Run tests';
		var savedFirstTask = taskService.addTask(firstTask);
		var secondTask = new Task();
		secondTask.name = 'Go shopping';
		var savedSecondTask = taskService.addTask(secondTask);
		var deletedTask = new Task();
		deletedTask.name = 'Deleted task';
		deletedTask.isDeleted = true;
		taskService.addTask(deletedTask);

		var firstItem = new ChecklistItem();
		firstItem.name = 'Standard item';
		firstItem.isChecked = false;
		firstItem.isDeleted = false;
		taskService.addChecklistItemToTask(firstItem, savedFirstTask);
		var secondItem = new ChecklistItem();
		secondItem.name = 'Checked item';
		secondItem.isChecked = true;
		secondItem.isDeleted = false;
		taskService.addChecklistItemToTask(secondItem, savedFirstTask);
		var thirdItem = new ChecklistItem();
		thirdItem.name = 'Deleted item';
		thirdItem.isChecked = false;
		thirdItem.isDeleted = true;
		taskService.addChecklistItemToTask(thirdItem, savedFirstTask);
		var fourthItem = new ChecklistItem();
		fourthItem.name = 'Another task checklist item';
		fourthItem.isChecked = false;
		fourthItem.isDeleted = false;
		taskService.addChecklistItemToTask(fourthItem, savedSecondTask);

	});

	afterEach(() => {
		taskService.tasks = [];
		taskService.checklistItems = [];
	});

	it('initialises with an array of tasks and checklist items', () => {
		expect(taskService.tasks.length).toBe(3);
		expect(taskService.checklistItems.length).toBe(4);
	});

	it('returns an array of not-deleted tasks', () => {
		expect(taskService.getActiveTasks().length).toBe(2);
	});

	it('returns tasks ordered by ID descending', () => {
		let activeTasks = taskService.getActiveTasks();
		expect(activeTasks[0].id).toBe(2);
		expect(activeTasks[1].id).toBe(1);

	});

	it('adds a task and returns saved task with new ID', () => {
		let newTask = new Task();
		newTask.name = 'Run more tests';
		let savedNewTask = taskService.addTask(newTask);
		expect(savedNewTask.id).toBe(4);
	});

	it('saves a task and returns self', () => {
		var firstTask = taskService.getActiveTasks()[0];
		firstTask.name = 'saved task';
		let taskServiceReturned = taskService.saveTask(firstTask);
		expect(taskServiceReturned).toBe(taskService);
		expect(taskService.getActiveTasks()[0].name).toBe(firstTask.name);

	});

	it('returns the next highest id value', () => {
		expect(taskService.getNextId(taskService.tasks)).toBe(4);
	});

	it('returns active checklist items for a task', () => {
		let firstTask = taskService.tasks[0];
		expect(taskService.getTaskActiveChecklist(firstTask).length).toBe(2);
	});

	it('returns checklist items ordered by ID descending', () => {
		let firstTask = taskService.tasks[0];
		let checklistitems = taskService.getTaskActiveChecklist(firstTask);
		expect(checklistitems[0].id).toBe(2);
		expect(checklistitems[1].id).toBe(1);
	});

	it('adds an item to a task and returns the saved item with a new ID and the assigned task ID', () => {
		var firstItem = new ChecklistItem();
		firstItem.name = 'Standard item';
		firstItem.isChecked = false;
		var task = taskService.tasks[1]
		let savedItem = taskService.addChecklistItemToTask(firstItem, task);
		expect(savedItem.id).toBe(5);
		expect(savedItem.taskId).toBe(task.id);
	});

	it('deletes a task', () => {
		var firstTask = taskService.tasks[0];
		taskService.toggleDeleted(firstTask);
		expect(firstTask.isDeleted).toBe(true);
	});

	it('deletes a checklist item', () => {
		var firsItem = taskService.checklistItems[0];
		taskService.toggleDeleted(firsItem);
		expect(firsItem.isDeleted).toBe(true);
	});

	it('checks a checklist item', () => {
		var uncheckedItem = taskService.checklistItems[0];
		taskService.toggleChecked(uncheckedItem);
		expect(uncheckedItem.isChecked).toBe(true);
	});

	it('unchecks a checklist item', () => {
		var checkedItem = taskService.checklistItems[1];
		taskService.toggleChecked(checkedItem);
		expect(checkedItem.isChecked).toBe(false);
	});


});