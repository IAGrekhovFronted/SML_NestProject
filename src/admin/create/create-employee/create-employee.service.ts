import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateEmployeeService {
    constructor(private prisma: PrismaService) { }

    async CreateEmployee(data: Prisma.EmployeeCreateInput) {
        return this.prisma.employee.create(
            { data }
        )
    }
}