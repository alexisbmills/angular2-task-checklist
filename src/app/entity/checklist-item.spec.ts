import {ChecklistItem} from './checklist-item';

describe('ChecklistItem', () => {
	it('initialises as not deleted', () => {
		let item = new ChecklistItem();
		expect(item.isDeleted).toBe(false);
	});
});