import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
<<<<<<< HEAD
    .setTitle('Blog Tadyello')
    .setDescription('Blog Pessoal-Bootcamp Generation Brasil')
    .setContact('Generation Brasil', 'www.brazil.generation.org', 'tadyello@hotmail.com')
=======
    .setTitle('Blog Mentalize')
    .setDescription('Blog Pessoal Bootcamp Generation')
    .setContact('Generation Brasil', 'tadyello.github.io', 'tadyello@hotmail.com')
>>>>>>> 2eec01ce2873faec7efc5ef06c4e14adb0819220
    .setVersion('1.0')
    .addBearerAuth()
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/swagger', app, document)



  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(process.env.PORT || 8000);
}
bootstrap();


