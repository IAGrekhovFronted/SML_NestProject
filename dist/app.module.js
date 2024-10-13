"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const admin_module_1 = require("./admin/admin.module");
const client_module_1 = require("./client/client.module");
const create_controller_1 = require("./admin/create/create.controller");
const delete_controller_1 = require("./admin/delete/delete.controller");
const prisma_client_service_1 = require("./prisma-client/prisma-client.service");
const create_work_type_service_1 = require("./admin/create/create-work-type/create-work-type.service");
const create_shedule_employee_service_1 = require("./admin/create/create-shedule-employee/create-shedule-employee.service");
const create_employee_service_1 = require("./admin/create/create-employee/create-employee.service");
const create_employee_type_service_1 = require("./admin/create/create-employee-type/create-employee-type.service");
const delete_employee_type_service_1 = require("./admin/delete/delete-employee-type/delete-employee-type.service");
const delete_work_type_service_1 = require("./admin/delete/delete-work-type/delete-work-type.service");
const delete_employee_service_1 = require("./admin/delete/delete-employee/delete-employee.service");
const delete_shedule_employee_service_1 = require("./admin/delete/delete-shedule-employee/delete-shedule-employee.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [admin_module_1.AdminModule, client_module_1.ClientModule],
        controllers: [create_controller_1.CreateController, delete_controller_1.DeleteController],
        providers: [
            prisma_client_service_1.PrismaService,
            create_work_type_service_1.CreateWorkTypeService,
            create_shedule_employee_service_1.CreateSheduleEmployeeService,
            create_employee_service_1.CreateEmployeeService,
            create_employee_type_service_1.CreateEmployeeTypeService,
            delete_work_type_service_1.DeleteWorkTypeService,
            delete_employee_type_service_1.DeleteEmployeeTypeService,
            delete_employee_service_1.DeleteEmployeeService,
            delete_shedule_employee_service_1.DeleteSheduleEmployeeService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map