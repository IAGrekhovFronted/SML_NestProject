import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';
export declare class CreateEmployeeTypeService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateEmployeeType(data: Prisma.EmployeeTypeCreateInput): Promise<{
        id: number;
        title: string;
        workTypeId: number | null;
    }>;
}
