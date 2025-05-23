import { PartialType } from '@nestjs/mapped-types';
import { CreateListingDto } from './create-listing.dto';
import { IsBoolean } from 'class-validator';
import { isFloat32Array } from 'util/types';

export class UpdateListingDto extends PartialType(CreateListingDto) {

    @IsBoolean()
  esIntercambio     :boolean
}
