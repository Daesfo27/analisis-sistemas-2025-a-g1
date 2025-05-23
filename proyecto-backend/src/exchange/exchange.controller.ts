import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { UpdateExchangeDto } from './dto/update-exchange.dto';

@Controller('exchange')
export class ExchangeController{
  constructor(private readonly exchangeService: ExchangeService) {}

  @Post()
  create(@Body() createExchangeDto: CreateExchangeDto) {
    return this.exchangeService.create(createExchangeDto);
  }

  @Get('')
  findOne() {
    return this.exchangeService.findOne();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exchangeService.remove(id);
  }
}
