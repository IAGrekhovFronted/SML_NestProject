import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

import { CreateController } from './admin/create/create.controller';
import { DeleteController } from './admin/delete/delete.controller';

import { PrismaService } from './prisma-client/prisma-client.service';

import { CreateWorkTypeService } from './admin/create/create-work-type/create-work-type.service';
import { CreateSheduleEmployeeService } from './admin/create/create-shedule-employee/create-shedule-employee.service';
import { CreateEmployeeService } from './admin/create/create-employee/create-employee.service';
import { CreateEmployeeTypeService } from './admin/create/create-employee-type/create-employee-type.service';

import { DeleteEmployeeTypeService } from './admin/delete/delete-employee-type/delete-employee-type.service';
import { DeleteWorkTypeService } from './admin/delete/delete-work-type/delete-work-type.service';
import { DeleteEmployeeService } from './admin/delete/delete-employee/delete-employee.service';
import { DeleteSheduleEmployeeService } from './admin/delete/delete-shedule-employee/delete-shedule-employee.service';



@Module({
  imports: [AdminModule, ClientModule],
  controllers: [CreateController, DeleteController],
  providers: [
    PrismaService,
    CreateWorkTypeService,
    CreateSheduleEmployeeService,
    CreateEmployeeService,
    CreateEmployeeTypeService,
    DeleteWorkTypeService,
    DeleteEmployeeTypeService,
    DeleteEmployeeService,
    DeleteSheduleEmployeeService
  ],
})

export class AppModule { }
