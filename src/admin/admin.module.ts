import { Module } from '@nestjs/common';

import { CreateController } from './create/create.controller';
import { DeleteController } from './delete/delete.controller';

import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { CreateWorkTypeService } from './create/create-work-type/create-work-type.service';
import { CreateEmployeeService } from './create/create-employee/create-employee.service';
import { CreateSheduleEmployeeService } from './create/create-shedule-employee/create-shedule-employee.service';
import { CreateEmployeeTypeService } from './create/create-employee-type/create-employee-type.service';

import { DeleteWorkTypeService } from './delete/delete-work-type/delete-work-type.service';
import { DeleteEmployeeTypeService } from './delete/delete-employee-type/delete-employee-type.service';
import { DeleteEmployeeService } from './delete/delete-employee/delete-employee.service';
import { DeleteSheduleEmployeeService } from './delete/delete-shedule-employee/delete-shedule-employee.service';
import { FindController } from './find/find.controller';
import { FindAllService } from './find/find-all/find-all.service';
import { FindOneService } from './find/find-one/find-one.service';


@Module({
  controllers: [CreateController, DeleteController, FindController],
  providers: [
    PrismaService, 
    CreateWorkTypeService, 
    CreateEmployeeService, 
    CreateSheduleEmployeeService,
    CreateEmployeeTypeService, 
    DeleteWorkTypeService,
    DeleteEmployeeTypeService,
    DeleteEmployeeService,
    DeleteSheduleEmployeeService,
    FindAllService,
    FindOneService 
  ]
})

export class AdminModule { }
