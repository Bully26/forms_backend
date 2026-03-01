import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
 @IsNumber()
 @IsNotEmpty()
 id:number;

 @IsString()  
 name?:string;

 @IsString()
 email?:string;
}
