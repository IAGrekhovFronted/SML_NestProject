import { Controller, Get, Body } from '@nestjs/common';
import { FindAllService } from './find-all/find-all.service';
import { FindOneService } from './find-one/find-one.service';
import { Prisma } from '@prisma/client';

class employeeId {
    employeeId:number
}

@Controller('find')
export class FindController {
    
    constructor (
        private findAll:FindAllService,
        private findOne:FindOneService
    ){}


    @Get('findAll')
    FindAll() {
        return this.findAll.findAll()
    }

    @Get('findOne')
    FindOne(@Body() employeeId:employeeId) {
        return this.findOne.findOne(employeeId.employeeId)
    }
}
