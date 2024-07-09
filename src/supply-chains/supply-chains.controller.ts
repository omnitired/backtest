import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { SupplyChainService } from './supply-chains.service';
import { SupplyChain } from './entities/supply-chain.entity';
import { CreateSupplyChainItemDto } from './dto/create-supply-chain.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('supply-chain')
export class SupplyChainController {
  constructor(private readonly supplyChainService: SupplyChainService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new supply chain item' })
  create(@Body() createItemDto: CreateSupplyChainItemDto) {
    return this.supplyChainService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateItemDto: Partial<SupplyChain>) {
    return this.supplyChainService.update(id, updateItemDto);
  }

  @Post(':id/event')
  addEvent(@Param('id') id: number, @Body() event: any) {
    return this.supplyChainService.addEvent(id, event);
  }

  @Get(':id/events')
  findAllEvents(@Param('id') id: number) {
    return this.supplyChainService.findAllEvents(id);
  }

  @Get(':id/events/last')
  findLastEvent(@Param('id') id: number) {
    return this.supplyChainService.findLastEvent(id);
  }
}
