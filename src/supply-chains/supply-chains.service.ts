import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplyChain } from './entities/supply-chain.entity';
import { CreateSupplyChainItemDto } from './dto/create-supply-chain.dto';

@Injectable()
export class SupplyChainService {
  constructor(
    @InjectRepository(SupplyChain)
    private itemsRepository: Repository<SupplyChain>,
  ) {}

  create(item: CreateSupplyChainItemDto): Promise<SupplyChain> {
    return this.itemsRepository.save(item);
  }

  update(id: number, updateItemDto: Partial<SupplyChain>): Promise<any> {
    return this.itemsRepository.update(id, updateItemDto);
  }

  addEvent(id: number, event: any): Promise<any> {
    return this.itemsRepository.update(id, {
      events: () => `array_append(events, ${JSON.stringify(event)})`,
    });
  }

  findAllEvents(id: number): Promise<SupplyChain> {
    return this.itemsRepository.findOne({ where: { id } });
  }

  findLastEvent(id: number): Promise<any> {
    return this.itemsRepository.query(
      `SELECT events[array_upper(events, 1)] as last_event FROM supply_chain_item WHERE id = $1`,
      [id],
    );
  }
}
