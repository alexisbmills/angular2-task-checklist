var checklist_item_1 = require('./checklist-item');
describe('ChecklistItem', function () {
    it('initialises as not deleted', function () {
        var item = new checklist_item_1.ChecklistItem();
        expect(item.isDeleted).toBe(false);
    });
});
//# sourceMappingURL=checklist-item.spec.js.map