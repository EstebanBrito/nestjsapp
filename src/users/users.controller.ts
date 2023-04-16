import { Controller, Body, Get, Post, Patch, Delete } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){

    }

    @Post()
    createUser(@Body() newUserData: CreateUserDTO){
        return this.userService.createUser(newUserData)
    }
}
