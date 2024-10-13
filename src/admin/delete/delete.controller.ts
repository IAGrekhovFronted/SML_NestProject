import { Controller, Body, Delete } from '@nestjs/common';

import { DeleteWorkTypeService } from './delete-work-type/delete-work-type.service';
import { DeleteEmployeeTypeService } from './delete-employee-type/delete-employee-type.service';
import { DeleteEmployeeService } from './delete-employee/delete-employee.service';
import { DeleteSheduleEmployeeService } from './delete-shedule-employee/delete-shedule-employee.service';

import { Prisma } from '@prisma/client';

@Controller('delete')
export class DeleteController {

    constructor(
        private deleteWorkType: DeleteWorkTypeService,
        private deleteEmployeeType: DeleteEmployeeTypeService,
        private deleteEmployee: DeleteEmployeeService,
        private deleteSheduleEmployee: DeleteSheduleEmployeeService
    ) { }

    @Delete('WorkType')
    WorkType(@Body() where: Prisma.EmployeeWorkTypeWhereUniqueInput) {
        return this.deleteWorkType.DeleteWorkType(where)
    }

    @Delete('EmployeeType')
    EmployeeType(@Body() where: Prisma.EmployeeTypeWhereUniqueInput) {
        return this.deleteEmployeeType.DeleteEmployeeType(where)
    }

    @Delete('Employee')
    Employee(@Body() where: Prisma.EmployeeWhereUniqueInput) {
        return this.deleteEmployee.DeleteEmployee(where)
    }

    @Delete('BaseShedule')
    BaseShedule(@Body() where: Prisma.EmployeeBaseScheduleWhereUniqueInput) {
        return this.deleteSheduleEmployee.DeleteBaseShedule(where)
    }

}
