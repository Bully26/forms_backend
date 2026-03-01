import { IsString, IsOptional, IsInt, IsBoolean, IsObject } from 'class-validator';

export class CreateFormDto {
  @IsInt()
  user_id: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  max_submissions_total?: number;

  @IsInt()
  @IsOptional()
  submission_limit_per_user?: number;

  @IsObject()
  fields_schema: any;

  @IsObject()
  @IsOptional()
  config_context?: any;

  @IsString()
  @IsOptional()
  ttl_interval?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
