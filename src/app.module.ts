import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [UserModule, AuthModule, PlanModule, SubscriptionModule, FeedbackModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService],
})
export class AppModule {}
