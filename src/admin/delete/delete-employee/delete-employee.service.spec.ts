import { Test, TestingModule } from '@nestjs/testing';
import { DeleteEmployeeService } from './delete-employee.service';

describe('DeleteEmployeeService', () => {
  let service: DeleteEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteEmployeeService],
    }).compile();

    service = module.get<DeleteEmployeeService>(DeleteEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
