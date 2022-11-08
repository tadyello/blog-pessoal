import { Controller, Get } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any){
    return resposta.redirect('/swagger')
<<<<<<< HEAD
    
=======
>>>>>>> 2eec01ce2873faec7efc5ef06c4e14adb0819220
  }
  
}
