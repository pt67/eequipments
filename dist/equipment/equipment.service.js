"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentService = void 0;
const common_1 = require("@nestjs/common");
let EquipmentService = class EquipmentService {
    constructor() {
        this.equipmentList = [];
    }
    getAllEquipment() {
        return this.equipmentList;
    }
    addEquipment(equipment) {
        this.equipmentList.push(equipment);
        return equipment;
    }
    updateEquipment(id, updatedEquipment) {
        const index = this.equipmentList.findIndex(e => e.id === id);
        if (index !== -1) {
            this.equipmentList[index] = updatedEquipment;
            return updatedEquipment;
        }
        return null;
    }
    deleteEquipment(id) {
        this.equipmentList = this.equipmentList.filter(e => e.id !== id);
    }
    getEquipmentBySerial(serial) {
        return this.equipmentList.find(e => e.serial === serial);
    }
};
exports.EquipmentService = EquipmentService;
exports.EquipmentService = EquipmentService = __decorate([
    (0, common_1.Injectable)()
], EquipmentService);
//# sourceMappingURL=equipment.service.js.map