export class ChecklistItem implements Deleteable {
    id: number;
    taskId: number;
    name: string;
    isChecked: boolean;
    isDeleted: boolean;

    constructor() {
        this.isChecked = false;
        this.isDeleted = false;
    }
}