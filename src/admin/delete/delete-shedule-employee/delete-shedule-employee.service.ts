import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeleteSheduleEmployeeService {
    constructor(private prisma: PrismaService) { }

    async DeleteBaseShedule(where: Prisma.EmployeeBaseScheduleWhereUniqueInput) {
        return this.prisma.employeeBaseSchedule.delete(
            { where }
        )
    }
}