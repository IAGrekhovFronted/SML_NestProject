import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateSheduleEmployeeService {
    constructor(private prisma: PrismaService) { }

    async CreateEmployee(data: Prisma.EmployeeBaseScheduleCreateInput) {
        return this.prisma.employeeBaseSchedule.create(
            { data }
        )
    }
}