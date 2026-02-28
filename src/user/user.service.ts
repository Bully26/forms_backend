import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from '../prisma';


@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
        },
      });
      return { message: 'User created successfully', data: newUser };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('User with this email already exists');
      }
      throw error;
    }
  }
  getProfile() {
    return { message: 'Get current user profile (guarded)' };
  }

  updateProfile(updateUserDto: UpdateUserDto) {
    return { message: 'Update user profile', data: updateUserDto };
  }

  deleteProfile() {
    return { message: 'Schedule user for deletion' };
  }
}
