import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

import { PrismaService } from './prisma-client/prisma-client.service';
import { CreateWorkTypeService } from './admin/create/create-work-type/create-work-type.service';
import { CreateSheduleEmployeeService } from './admin/create/create-shedule-employee/create-shedule-employee.service';
import { CreateEmployeeService } from './admin/create/create-employee/create-employee.service';
import { CreateEmployeeTypeService } from './admin/create/create-employee-type/create-employee-type.service';

import { CreateController } from './admin/create/create.controller';



@Module({
  imports: [AdminModule, ClientModule],
  controllers: [CreateController],
  providers: [
    PrismaService,
    CreateWorkTypeService,
    CreateSheduleEmployeeService,
    CreateEmployeeService,
    CreateEmployeeTypeService
  ],
})
export class AppModule { }
