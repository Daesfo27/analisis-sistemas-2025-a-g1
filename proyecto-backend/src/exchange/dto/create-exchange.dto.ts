import { IsString } from "class-validator"

export class CreateExchangeDto {

    @IsString()
    libroOfrecido     : string

    @IsString()
    libroDeseado      : string

    @IsString()
    estado            : string
}
