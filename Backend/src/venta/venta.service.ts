import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class VentaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  create(createVentaDto: CreateVentaDto) {
    return this.venta.create({
      data: createVentaDto,
    });
  }

  findAll() {
    return this.venta.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
      user: true,
      product: true, 
    },
    });
  }

 

  remove(id: string) {
    return this.venta.delete({
      where: { id }
    });
  }
}
