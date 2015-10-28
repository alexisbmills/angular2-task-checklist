var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TASKS = [
    { "id": 11, "name": "Grocery Shopping", isDeleted: false },
    { "id": 12, "name": "Football game on Wednesday", isDeleted: false },
    { "id": 13, "name": "Fix bathroom tap", isDeleted: false }
];
var TaskService = (function () {
    function TaskService() {
        this.tasks = TASKS;
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskService);
    return TaskService;
})();
//# sourceMappingURL=task-service.js.map