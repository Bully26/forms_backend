import { Controller, Get } from '@nestjs/common';

@Controller('plan')
export class PlanController {
  @Get()
  findAll() {
    return { message: 'List available plans' };
  }
}
