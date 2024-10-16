import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth/auth.controller';
import { ContentController } from './content/content.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
      {
        name: 'CONTENT_SERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
  controllers: [AuthController, ContentController, UserController],
})
export class AppModule {}
