import { Test, TestingModule } from '@nestjs/testing';
import { DeleteEmployeeTypeService } from './delete-employee-type.service';

describe('DeleteEmployeeTypeService', () => {
  let service: DeleteEmployeeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteEmployeeTypeService],
    }).compile();

    service = module.get<DeleteEmployeeTypeService>(DeleteEmployeeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
