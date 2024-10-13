import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class FindOneService {
    constructor(
        private prisma: PrismaService
    ) { }

    async findOne(employeeId: number) {
        const employeeSlotSchedules = await this.prisma.employeeSlotSchedule.findMany(
            {
                include: {
                    WorkRequest: true
                },
                where: {
                    employeeId: employeeId
                }
            }
        )
        return employeeSlotSchedules
    }
}

