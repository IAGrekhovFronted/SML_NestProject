import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateEmployeeTypeService {
    constructor(private prisma: PrismaService) { }

    async CreateEmployeeType(data: Prisma.EmployeeTypeCreateInput) {
        return this.prisma.employeeType.create(
            { data }
        )
    }
}