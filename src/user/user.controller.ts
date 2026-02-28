import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('profile')
  getProfile() {
    return this.userService.getProfile();
  }

  @Patch('profile')
  updateProfile(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateProfile(updateUserDto);
  }

  @Delete('profile')
  deleteProfile() {
    return this.userService.deleteProfile();
  }
}
