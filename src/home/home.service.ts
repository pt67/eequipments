import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHome(): string {
    return 'Welcome to the Equipment Management System!';
  }
}
