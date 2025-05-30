import { IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;
    @IsString()
    price: string;
    @IsString()
    cantidad: string;
}
