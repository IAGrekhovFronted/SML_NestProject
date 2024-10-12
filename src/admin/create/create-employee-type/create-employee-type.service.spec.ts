import { Test, TestingModule } from '@nestjs/testing';
import { CreateEmployeeTypeService } from './create-employee-type.service';

describe('CreateEmployeeTypeService', () => {
  let service: CreateEmployeeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateEmployeeTypeService],
    }).compile();

    service = module.get<CreateEmployeeTypeService>(CreateEmployeeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
