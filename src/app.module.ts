import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [
<<<<<<< HEAD
    TypeOrmModule.forRoot({
=======
    /*TypeOrmModule.forRoot({
>>>>>>> 2eec01ce2873faec7efc5ef06c4e14adb0819220
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true
<<<<<<< HEAD
    }),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: process.env.DATABASE_URL,
    //   logging: false,
    //   dropSchema: false,
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
=======
    }),*/

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
>>>>>>> 2eec01ce2873faec7efc5ef06c4e14adb0819220
    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule,
    
    
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule { }
