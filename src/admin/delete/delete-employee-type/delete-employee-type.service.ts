import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeleteEmployeeTypeService {
    constructor(private prisma: PrismaService) { }

    async DeleteEmployeeType(where: Prisma.EmployeeTypeWhereUniqueInput) {
        return this.prisma.employeeType.delete(
            { where }
        )
    }
}