import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.model';
export declare class EquipmentController {
    private readonly equipmentService;
    constructor(equipmentService: EquipmentService);
    getAllEquipment(): Equipment[];
    addEquipment(equipment: Equipment): Equipment;
    updateEquipment(id: string, equipment: Equipment): Equipment;
    deleteEquipment(id: string): void;
}
