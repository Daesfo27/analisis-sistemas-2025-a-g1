import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDto } from './create-message.dto';
import { IsBoolean } from 'class-validator';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
    @IsBoolean()
    active:Boolean
}
