import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
  ParseIntPipe
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

  @Get('profile/:id')
  getProfile(@Param('id', ParseIntPipe) id: number) {
    // get it from auth token ok

    return this.userService.getProfile(id);
  }

  @Patch('profile')
  updateProfile(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateProfile(updateUserDto);
  }

  @Delete('profile/:id')
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteProfile(id);
  }
}
