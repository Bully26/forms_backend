export class CreatePlanDto {
  name: string;
  message_limit: number;
  message_size_limit_bytes: number;
  is_active?: boolean;
}
