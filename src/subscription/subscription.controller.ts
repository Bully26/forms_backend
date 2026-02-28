import { Body, Controller, Post } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Controller('subscription')
export class SubscriptionController {
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return {
      message: 'Create a subscription for the authenticated user',
      data: createSubscriptionDto,
    };
  }
}
