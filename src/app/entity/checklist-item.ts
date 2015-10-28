export class ChecklistItem {    
    id: number;
    taskId: number;
    name: string;
    isChecked: boolean;    
    isDeleted: boolean;
}
var CHECKLIST_ITEMS: ChecklistItem[] = [    
  { "id": 11, "taskId": 11, "name": "Milk", isChecked: false, isDeleted: false },
  { "id": 12, "taskId": 11, "name": "Apples", isChecked: false, isDeleted: false },
  { "id": 13, "taskId": 11, "name": "Oranges", isChecked: false, isDeleted: false },
  { "id": 14, "taskId": 12, "name": "Buy tickets", isChecked: false, isDeleted: false },
  { "id": 15, "taskId": 12, "name": "Call James to arrange pickup", isChecked: false, isDeleted: false },
  { "id": 16, "taskId": 12, "name": "Invite Stefan", isChecked: false, isDeleted: false }
]