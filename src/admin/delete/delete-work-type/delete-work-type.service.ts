import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeleteWorkTypeService {
    constructor(private prisma: PrismaService) { }

    async DeleteWorkType(where: Prisma.EmployeeWorkTypeWhereUniqueInput) {
        return this.prisma.employeeWorkType.delete(
            { where }
        )
    }
}