import { Test, TestingModule } from '@nestjs/testing';
import { DeleteWorkTypeService } from './delete-work-type.service';

describe('DeleteWorkTypeService', () => {
  let service: DeleteWorkTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteWorkTypeService],
    }).compile();

    service = module.get<DeleteWorkTypeService>(DeleteWorkTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
