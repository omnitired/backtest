import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplyChainItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  custodian: string;
}
