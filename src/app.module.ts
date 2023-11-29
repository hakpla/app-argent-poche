import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from './entities/compte.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: "./database.sqlite",
      synchronize: true,
      entities: [Compte, User],

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
