export class CreateSubscriptionDto {
  plan_id: number;
  start_date: Date;
  end_date?: Date;
  is_active?: boolean;
}
