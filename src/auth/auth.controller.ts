import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return { message: 'Register a new user', data: createUserDto };
  }

  @Post('login')
  login(@Body() loginDto: any) {
    return { message: 'Login and get JWT token' };
  }
}
