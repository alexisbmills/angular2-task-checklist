export class Task implements Deleteable {
    id: number;
    name: string;
    isDeleted: boolean;

    constructor() {
        this.isDeleted = false;
    }
}