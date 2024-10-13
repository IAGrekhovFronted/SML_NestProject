import { Test, TestingModule } from '@nestjs/testing';
import { CreateRequestService } from './create-request.service';

describe('CreateRequestService', () => {
  let service: CreateRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateRequestService],
    }).compile();

    service = module.get<CreateRequestService>(CreateRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
