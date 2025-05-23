import { IsString } from "class-validator"

export class CreateUserDto {
  
  @IsString()
  nombre      : string;

  @IsString()
  biografia   : string;

  @IsString()
  correo      : string;
  
  @IsString()
  contraseña  : string;

  @IsString()
  ciudad      : string
}
