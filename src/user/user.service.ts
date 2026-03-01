import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from '../prisma';
import { asyncWrapProviders } from 'async_hooks';


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
      console.error("Prisma error during user creation:", error);
      if (error.code === 'P2002') {
        return { message: 'User with this email already exists' };
      }
      throw error;
    }
  }
  async getProfile(UserId: number) {
    try {
      const getUser = await prisma.user.findUnique({
        where: {
          id: UserId
        }
      });
      if (!getUser) {
        return { message: "User not found" };
      }
      return getUser ? getUser : { message: "User not found" };
    }
    catch (error) {
      console.log("Error during fetching user profile");
      return error;
    }


  }

  async updateProfile(updateUserDto: UpdateUserDto) {
    const { id, name, email } = updateUserDto;

    if (!id) {
      return { message: "User id is required" };
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          ...(name !== undefined && { name }),
          ...(email !== undefined && { email }),
        },
      });

      return updatedUser ? updatedUser : { message: "User not found" };
    }
    catch (error) {
      console.log("Error during updating user profile");
      return { message: "Error during update" };
    }
  }

  async deleteProfile(UserId: number) {
    if (!UserId) {
      return { message: "User id is required" };
    }
    console.log(UserId);
    try {
      const deleteUser = await prisma.user.delete({
        where: {
          id: UserId
        }
      });

      return deleteUser ? { message: "User deleted successfully" } : { message: "User not found" };
    }
    catch (error) {
      console.log("Error during deleting user profile");
      return { message: "Error during deletion" };
    }
  }
}
