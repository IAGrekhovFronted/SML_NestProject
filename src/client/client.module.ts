import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

import { ClientMethodController } from './client-method/client-method.controller';

import { CreateRequestService } from './client-method/create-request/create-request.service';

@Module({
  controllers: [ClientMethodController],
  providers: [CreateRequestService, PrismaService]
})
export class ClientModule {}
