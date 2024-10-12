import { CreateWorkTypeService } from './create-work-type/create-work-type.service';
import { CreateEmployeeService } from './create-employee/create-employee.service';
import { CreateSheduleEmployeeService } from './create-shedule-employee/create-shedule-employee.service';
import { CreateEmployeeTypeService } from './create-employee-type/create-employee-type.service';
import { Prisma } from '@prisma/client';
export declare class CreateController {
    private createWorkTypeService;
    private createEmployee;
    private CreateShedule;
    private CreateEmployeeType;
    constructor(createWorkTypeService: CreateWorkTypeService, createEmployee: CreateEmployeeService, CreateShedule: CreateSheduleEmployeeService, CreateEmployeeType: CreateEmployeeTypeService);
    EmployeeWorkType(data: Prisma.EmployeeWorkTypeCreateInput): Promise<{
        id: number;
        title: string;
        price: number;
    }>;
    EmployeeType(data: Prisma.EmployeeTypeCreateInput): Promise<{
        id: number;
        title: string;
        workTypeId: number | null;
    }>;
    Employee(data: Prisma.EmployeeCreateInput): Promise<{
        id: number;
        name: string;
        EmployeeTypeId: number;
    }>;
    BaseShedule(data: Prisma.EmployeeBaseScheduleCreateInput): Promise<{
        id: number;
        start: Date;
        end: Date;
        employeeId: number;
    }>;
}
