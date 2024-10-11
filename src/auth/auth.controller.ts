import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private authClient: ClientProxy) {}

  @Post('login')
  async login(@Body() loginData: { username: string; password: string }) {
    return this.authClient.send({ cmd: 'login' }, loginData);
  }
}
