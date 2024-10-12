import { Module } from '@nestjs/common';

import { CreateController } from './create/create.controller';

import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { CreateWorkTypeService } from './create/create-work-type/create-work-type.service';
import { CreateEmployeeService } from './create/create-employee/create-employee.service';
import { CreateSheduleEmployeeService } from './create/create-shedule-employee/create-shedule-employee.service';
import { CreateEmployeeTypeService } from './create/create-employee-type/create-employee-type.service';


@Module({
  controllers: [CreateController],
  providers: [PrismaService, CreateWorkTypeService, CreateEmployeeService, CreateSheduleEmployeeService, CreateEmployeeTypeService]
})

export class AdminModule { }
