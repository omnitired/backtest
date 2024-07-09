import { Test, TestingModule } from '@nestjs/testing';
import { SupplyChainService } from './supply-chains.service';

describe('SupplyChainsService', () => {
  let service: SupplyChainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplyChainService],
    }).compile();

    service = module.get<SupplyChainService>(SupplyChainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
