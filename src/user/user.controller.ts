import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  getProfile() {
    return { message: 'Get current user profile (guarded)' };
  }

  @Patch('profile')
  updateProfile(@Body() updateUserDto: UpdateUserDto) {
    return { message: 'Update user profile', data: updateUserDto };
  }

  @Delete('profile')
  deleteProfile() {
    return { message: 'Schedule user for deletion' };
  }
}
