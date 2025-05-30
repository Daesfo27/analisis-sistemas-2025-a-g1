import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  create(createUserDto: CreateUserDto) {
    return this.user.create({
      data: createUserDto})
  }

  findAll() {
    return this.user.findMany({orderBy: {createdAt: 'desc'}});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: string) {
    return this.user.delete({
      where: { id }})
  }
}
