import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsBoolean } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsBoolean()
    active:Boolean
}
