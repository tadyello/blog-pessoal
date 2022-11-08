import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá Mundo!';
  }
  getProjeto(): string {
<<<<<<< HEAD
    return 'Blog Pessoal';
=======
    return 'Mentalize';
>>>>>>> 2eec01ce2873faec7efc5ef06c4e14adb0819220
  }
  getCidade(): string {
    return 'Rio de Janeiro';
  }
}
