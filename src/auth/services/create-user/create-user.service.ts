import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CheckEmailExistService } from './check-if-email-exist.service';
import { HashPasswordService } from './hash-password.service';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly checkEmailService: CheckEmailExistService,
    private readonly hashPasswordService: HashPasswordService,
  ) {}

  async createUser(createUserDTO: CreateUserDto): Promise<User> {
    await this.checkEmailService.checkUser(createUserDTO.email);
    createUserDTO.password = await this.hashPasswordService.hashPassword(
      createUserDTO.password,
    );
    const user = await this.userRepository.create(createUserDTO);
    return await this.userRepository.save(user);
  }
}
