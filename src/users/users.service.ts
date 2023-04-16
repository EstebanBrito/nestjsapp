import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'
import { CreateUserDTO } from './dto/createUser.dto'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    createUser(user: CreateUserDTO){
        const newUser = this.userRepository.create(user);
        // returns Promise
        return this.userRepository.save(newUser);
    }
}
