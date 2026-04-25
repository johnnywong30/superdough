import { Test, TestingModule } from '@nestjs/testing';
import { CalcsController } from './calcs.controller';
import { CalcsService } from './calcs.service';

describe('CalcsController', () => {
  let controller: CalcsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcsController],
      providers: [CalcsService],
    }).compile();

    controller = module.get<CalcsController>(CalcsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
