import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(@Inject() private userClient: ClientProxy) {}

  @Post()
  async addUser(@Body() userData: { username: string; password: string }) {
    return this.userClient.send({ cmd: 'add_user' }, userData);
  }

  @Get(':id')
  async getUser(@Param() id: string) {
    return this.userClient.send({ cmd: 'get_user' }, id);
  }
}
