import { Test, TestingModule } from '@nestjs/testing';
import { CreateSheduleEmployeeService } from './create-shedule-employee.service';

describe('CreateSheduleEmployeeService', () => {
  let service: CreateSheduleEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateSheduleEmployeeService],
    }).compile();

    service = module.get<CreateSheduleEmployeeService>(CreateSheduleEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
