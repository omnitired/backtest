import { Module } from '@nestjs/common';
import { SupplyChainService } from './supply-chains.service';
import { SupplyChainController } from './supply-chains.controller';
import { SupplyChain } from './entities/supply-chain.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SupplyChainController],
  providers: [SupplyChainService],
  imports: [TypeOrmModule.forFeature([SupplyChain])],
  // exports: [TypeOrmModule],
})
export class SupplyChainsModule {}
