export class UpdateFormDto {
  name?: string;
  description?: string;
  max_submissions_total?: number;
  submission_limit_per_user?: number;
  fields_schema?: any;
  config_context?: any;
  ttl_interval?: string;
  is_active?: boolean;
}
