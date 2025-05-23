import { IsNumber, IsString } from "class-validator"

export class CreateBookDto {
    @IsString()
    titulo :          string;

    @IsString()
    autor   :         string;

    @IsString()
    codigoLibro :     string;

    @IsString()
    estado :          string;
    
    @IsNumber()
    propietario  :    number   

    @IsString()  
    disponibilidad :  string 
}