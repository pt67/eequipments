import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.model';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get()
  getAllEquipment(): Equipment[] {
    return this.equipmentService.getAllEquipment();
  }

  @Post()
  addEquipment(@Body() equipment: Equipment): Equipment {
    return this.equipmentService.addEquipment(equipment);
  }

  @Put(':id')
  updateEquipment(@Param('id') id: string, @Body() equipment: Equipment): Equipment {
    return this.equipmentService.updateEquipment(id, equipment);
  }

  @Delete(':id')
  deleteEquipment(@Param('id') id: string): void {
    this.equipmentService.deleteEquipment(id);
  }
}
