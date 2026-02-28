import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService],
})
export class AppModule {}
