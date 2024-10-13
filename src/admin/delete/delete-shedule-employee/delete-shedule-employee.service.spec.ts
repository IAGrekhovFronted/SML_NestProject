import { Test, TestingModule } from '@nestjs/testing';
import { DeleteSheduleEmployeeService } from './delete-shedule-employee.service';

describe('DeleteSheduleEmployeeService', () => {
  let service: DeleteSheduleEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteSheduleEmployeeService],
    }).compile();

    service = module.get<DeleteSheduleEmployeeService>(DeleteSheduleEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
