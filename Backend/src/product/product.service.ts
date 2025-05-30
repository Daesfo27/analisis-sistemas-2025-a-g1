import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ProductService extends PrismaClient implements OnModuleInit { 
  onModuleInit() {
    this.$connect();
  }
  create(createProductDto: CreateProductDto) {
    return this.product.create({
      data: createProductDto
    });
  }

  findAll() {
    return this.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  

  remove(id: string) {
    return this.product.delete({
      where: { id }
    });
  }
}
