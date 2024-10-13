import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class FindAllService {
    constructor(
        private prisma: PrismaService
    ) { }

    async findAll () {
        return await this.prisma.workRequest.findMany()
    }
}
