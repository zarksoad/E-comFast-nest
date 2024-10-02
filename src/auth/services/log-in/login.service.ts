import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/login-user.dto';
import { GenerateTokenService } from './generate-token.service';
import { CheckUserExistService } from './check-user-exist.service';
import { CheckPasswordService } from './check-password.service';
import { log } from 'console';

@Injectable()
export class LogInService {
  constructor(
    private readonly generateTokenService: GenerateTokenService,
    private readonly checkUserExistService: CheckUserExistService,
    private readonly checkPasswordService: CheckPasswordService,
  ) {}

  async LogIn(
    loginDto: LoginDto,
  ): Promise<{ message: string; accessToken: string }> {
    const user = await this.checkUserExistService.checkUser(loginDto.email);
    await this.checkPasswordService.checkPassword(
      loginDto.password,
      user.password,
    );
    const { accessToken } = await this.generateTokenService.token(
      user.id,
      user.role_id,
    );
    return { message: 'this is your token', accessToken };
  }
}
