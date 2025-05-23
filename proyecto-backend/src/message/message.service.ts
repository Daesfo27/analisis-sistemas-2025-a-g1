import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class MessageService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createMessageDto: CreateMessageDto) {
    return this.message.create;
  }

  findOne() {
    return this.message.findFirst;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: string) {
    return this.message.delete({where:{id}});
  }
}
