import { IsString } from "class-validator";

export class CreateVentaDto {
    @IsString()
    userId : string;
    @IsString()
    productId : string;
}
