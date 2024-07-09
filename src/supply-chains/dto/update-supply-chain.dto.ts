import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplyChainItemDto } from './create-supply-chain.dto';

export class UpdateSupplyChainDto extends PartialType(
  CreateSupplyChainItemDto,
) {}
