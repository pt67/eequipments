import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment.model';

@Injectable()
export class EquipmentService {
  private equipmentList: Equipment[] = [];

  getAllEquipment(): Equipment[] {
    return this.equipmentList;
  }

  addEquipment(equipment: Equipment): Equipment {
    this.equipmentList.push(equipment);
    return equipment;
  }

  updateEquipment(id: string, updatedEquipment: Equipment): Equipment {
    const index = this.equipmentList.findIndex(e => e.id === id);
    if (index !== -1) {
      this.equipmentList[index] = updatedEquipment;
      return updatedEquipment;
    }
    return null;
  }

  deleteEquipment(id: string): void {
    this.equipmentList = this.equipmentList.filter(e => e.id !== id);
  }

  getEquipmentBySerial(serial: string): Equipment {
    return this.equipmentList.find(e => e.serial === serial);
  }
}
