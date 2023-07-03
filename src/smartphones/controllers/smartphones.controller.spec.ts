import { Test, TestingModule } from '@nestjs/testing';
import { SmartphonesController } from './smartphones.controller';

describe('SmartphonesController', () => {
  let controller: SmartphonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartphonesController],
    }).compile();

    controller = module.get<SmartphonesController>(SmartphonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
