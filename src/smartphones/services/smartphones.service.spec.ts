import { Test, TestingModule } from '@nestjs/testing';
import { SmartphonesService } from './smartphones.service';

describe('SmartphonesService', () => {
  let service: SmartphonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartphonesService],
    }).compile();

    service = module.get<SmartphonesService>(SmartphonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
