import { IsString, IsOptional, IsObject } from 'class-validator';

export class SubmitFormDto {
  @IsString()
  @IsOptional()
  chat_id?: string;

  @IsObject()
  response_data: any;
}
