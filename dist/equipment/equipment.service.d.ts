import { Equipment } from './equipment.model';
export declare class EquipmentService {
    private equipmentList;
    getAllEquipment(): Equipment[];
    addEquipment(equipment: Equipment): Equipment;
    updateEquipment(id: string, updatedEquipment: Equipment): Equipment;
    deleteEquipment(id: string): void;
    getEquipmentBySerial(serial: string): Equipment;
}
