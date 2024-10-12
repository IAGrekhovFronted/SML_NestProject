import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';
export declare class CreateWorkTypeService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateWorkType(data: Prisma.EmployeeWorkTypeCreateInput): Promise<{
        id: number;
        title: string;
        price: number;
    }>;
}
