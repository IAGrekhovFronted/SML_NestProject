import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateWorkTypeService {

    constructor(private prisma: PrismaService) { }

    async CreateWorkType(data: Prisma.EmployeeWorkTypeCreateInput) {
        console.log("Переданные данные в запросе: ", data)
        return this.prisma.employeeWorkType.create(
            { data }
        )
    }
}
