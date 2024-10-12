import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';
export declare class CreateSheduleEmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateEmployee(data: Prisma.EmployeeBaseScheduleCreateInput): Promise<{
        id: number;
        start: Date;
        end: Date;
        employeeId: number;
    }>;
}
