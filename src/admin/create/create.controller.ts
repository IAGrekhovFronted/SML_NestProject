import { Body, Controller, Post } from '@nestjs/common';

import { CreateWorkTypeService } from './create-work-type/create-work-type.service';
import { CreateEmployeeService } from './create-employee/create-employee.service';
import { CreateSheduleEmployeeService } from './create-shedule-employee/create-shedule-employee.service';
import { CreateEmployeeTypeService } from './create-employee-type/create-employee-type.service';

import { Prisma } from '@prisma/client';

@Controller('create')
export class CreateController {

    constructor(
        private createWorkType: CreateWorkTypeService,
        private createEmployee: CreateEmployeeService,
        private CreateShedule: CreateSheduleEmployeeService,
        private CreateEmployeeType: CreateEmployeeTypeService
    ) { }

    @Post('WorkType')
    WorkType(@Body() data: Prisma.EmployeeWorkTypeCreateInput) {
        return this.createWorkType.CreateWorkType(data)
    }

    @Post('EmployeeType')
    EmployeeType(@Body() data: Prisma.EmployeeTypeCreateInput) {
        return this.CreateEmployeeType.CreateEmployeeType(data)
    }

    @Post('Employee')
    Employee(@Body() data: Prisma.EmployeeCreateInput) {
        return this.createEmployee.CreateEmployee(data)
    }

    @Post('BaseShedule')
    BaseShedule(@Body() data: Prisma.EmployeeBaseScheduleCreateInput) {
        return this.CreateShedule.CreateEmployee(data)
    }
}