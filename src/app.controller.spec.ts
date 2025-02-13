import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';

describe('AppController', () => {
  let appController: AppController;
  let homeController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, HomeController],
      providers: [AppService, HomeService],
    }).compile();

    appController = app.get<AppController>(AppController);
    homeController = app.get<HomeController>(HomeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('home', () => {
    it('should return "Welcome to the Equipment Management System!"', () => {
      expect(homeController.getHome()).toBe('Welcome to the Equipment Management System!');
    });
  });
});
