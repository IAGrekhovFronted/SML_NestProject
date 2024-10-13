import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeleteEmployeeService {
    constructor(private prisma: PrismaService) { }

    async DeleteEmployee(where: Prisma.EmployeeWhereUniqueInput) {
        return this.prisma.employee.delete(
            { where }
        )
    }
}