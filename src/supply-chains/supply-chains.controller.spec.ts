import { Test, TestingModule } from '@nestjs/testing';
import { SupplyChainController } from './supply-chains.controller';
import { SupplyChainService } from './supply-chains.service';

describe('SupplyChainsController', () => {
  let controller: SupplyChainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyChainController],
      providers: [SupplyChainService],
    }).compile();

    controller = module.get<SupplyChainController>(SupplyChainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
