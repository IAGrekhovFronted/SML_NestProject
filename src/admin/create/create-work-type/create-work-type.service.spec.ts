import { Test, TestingModule } from '@nestjs/testing';
import { CreateWorkTypeService } from './create-work-type.service';

describe('CreateWorkTypeService', () => {
  let service: CreateWorkTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateWorkTypeService],
    }).compile();

    service = module.get<CreateWorkTypeService>(CreateWorkTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
