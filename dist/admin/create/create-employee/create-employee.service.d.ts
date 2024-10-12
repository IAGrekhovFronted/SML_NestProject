import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';
export declare class CreateEmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateEmployee(data: Prisma.EmployeeCreateInput): Promise<{
        id: number;
        name: string;
        EmployeeTypeId: number;
    }>;
}
