import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ListingService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }

  create(createListingDto: CreateListingDto) {
    return this.listing.create;
  }

  findOne() {
    return this.listing.findFirst;
  }

  update(id: number, updateExchangeDto: UpdateListingDto) {
    return `This action updates a #${id} exchange`;
  }


  remove(id: string) {
    return this.listing.delete({where:{id}});
  }
}
