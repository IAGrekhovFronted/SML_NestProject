"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const common_1 = require("@nestjs/common");
const create_work_type_service_1 = require("./create-work-type/create-work-type.service");
const create_employee_service_1 = require("./create-employee/create-employee.service");
const create_shedule_employee_service_1 = require("./create-shedule-employee/create-shedule-employee.service");
const create_employee_type_service_1 = require("./create-employee-type/create-employee-type.service");
const client_1 = require("@prisma/client");
let CreateController = class CreateController {
    constructor(createWorkTypeService, createEmployee, CreateShedule, CreateEmployeeType) {
        this.createWorkTypeService = createWorkTypeService;
        this.createEmployee = createEmployee;
        this.CreateShedule = CreateShedule;
        this.CreateEmployeeType = CreateEmployeeType;
    }
    EmployeeWorkType(data) {
        return this.createWorkTypeService.CreateWorkType(data);
    }
    EmployeeType(data) {
        return this.CreateEmployeeType.CreateEmployeeType(data);
    }
    Employee(data) {
        return this.createEmployee.CreateEmployee(data);
    }
    BaseShedule(data) {
        return this.CreateShedule.CreateEmployee(data);
    }
};
exports.CreateController = CreateController;
__decorate([
    (0, common_1.Post)('EmployeeWorkType'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CreateController.prototype, "EmployeeWorkType", null);
__decorate([
    (0, common_1.Post)('EmployeeType'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CreateController.prototype, "EmployeeType", null);
__decorate([
    (0, common_1.Post)('Employee'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CreateController.prototype, "Employee", null);
__decorate([
    (0, common_1.Post)('BaseShedule'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CreateController.prototype, "BaseShedule", null);
exports.CreateController = CreateController = __decorate([
    (0, common_1.Controller)('create'),
    __metadata("design:paramtypes", [create_work_type_service_1.CreateWorkTypeService,
        create_employee_service_1.CreateEmployeeService,
        create_shedule_employee_service_1.CreateSheduleEmployeeService,
        create_employee_type_service_1.CreateEmployeeTypeService])
], CreateController);
//# sourceMappingURL=create.controller.js.map