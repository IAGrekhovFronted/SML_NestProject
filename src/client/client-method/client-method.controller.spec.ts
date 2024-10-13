import { Test, TestingModule } from '@nestjs/testing';
import { ClientMethodController } from './client-method.controller';

describe('ClientMethodController', () => {
  let controller: ClientMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientMethodController],
    }).compile();

    controller = module.get<ClientMethodController>(ClientMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
