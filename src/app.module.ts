import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { EquipmentController } from './equipment/equipment.controller';
import { EquipmentService } from './equipment/equipment.service';

@Module({
  imports: [],
  controllers: [AppController, HomeController, EquipmentController],
  providers: [AppService, HomeService, EquipmentService],
})
export class AppModule {}
