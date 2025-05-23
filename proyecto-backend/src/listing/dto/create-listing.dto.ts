import { IsString } from "class-validator"

export class CreateListingDto {

  @IsString()
  bookId          :  string;
  
  @IsString()
  ubicacion       :  string;
}
