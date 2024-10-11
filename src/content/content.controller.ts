import { Body, Controller, Inject, Post, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('content')
export class ContentController {
  constructor(@Inject('POST_SERVICE') private postClient: ClientProxy) {}

  @Post()
  async addContent(
    @Body() contentData: { title: string; content: string; authorId: number },
  ) {
    return this.postClient.send({ cmd: 'add_content' }, contentData);
  }

  @Get('contents')
  async getPosts() {
    return this.postClient.send({ cmd: 'get_contents' }, {});
  }
}
