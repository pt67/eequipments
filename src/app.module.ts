import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';

@Module({
  imports: [],
  controllers: [AppController, HomeController],
  providers: [AppService, HomeService],
})
export class AppModule {}
