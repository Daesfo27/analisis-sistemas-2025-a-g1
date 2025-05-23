import { IsString } from "class-validator"

export class CreateMessageDto {

    @IsString()
  deUsuario      : string;
  
  @IsString()
  paraUsuario    : string;

  @IsString()
  contenido      : string;

  @IsString()
  enviadoEn      : string;
}
