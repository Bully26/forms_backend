import { IsString, IsOptional, IsInt, IsBoolean, IsObject, IsArray } from 'class-validator';

export class UpdateFormDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  max_submissions_total?: number;

  @IsInt()
  @IsOptional()
  submission_limit_per_user?: number;

  @IsBoolean()
  @IsOptional()
  validate?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  fields_schema?: string[];

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
