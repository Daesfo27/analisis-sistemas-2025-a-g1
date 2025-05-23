import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { UpdateExchangeDto } from './dto/update-exchange.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ExchangeService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect
  }
  create(createExchangeDto: CreateExchangeDto) {
    return this.exchange.create;
  }

  findOne() {
    return this.exchange.findFirst;
  }

  remove(id: string) {
    return this.exchange.delete({where:{id}});
  }
}
