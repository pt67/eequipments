"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentController = void 0;
const common_1 = require("@nestjs/common");
const equipment_service_1 = require("./equipment.service");
const equipment_model_1 = require("./equipment.model");
let EquipmentController = class EquipmentController {
    constructor(equipmentService) {
        this.equipmentService = equipmentService;
    }
    getAllEquipment() {
        return this.equipmentService.getAllEquipment();
    }
    addEquipment(equipment) {
        return this.equipmentService.addEquipment(equipment);
    }
    updateEquipment(id, equipment) {
        return this.equipmentService.updateEquipment(id, equipment);
    }
    deleteEquipment(id) {
        this.equipmentService.deleteEquipment(id);
    }
};
exports.EquipmentController = EquipmentController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], EquipmentController.prototype, "getAllEquipment", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [equipment_model_1.Equipment]),
    __metadata("design:returntype", equipment_model_1.Equipment)
], EquipmentController.prototype, "addEquipment", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, equipment_model_1.Equipment]),
    __metadata("design:returntype", equipment_model_1.Equipment)
], EquipmentController.prototype, "updateEquipment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquipmentController.prototype, "deleteEquipment", null);
exports.EquipmentController = EquipmentController = __decorate([
    (0, common_1.Controller)('equipment'),
    __metadata("design:paramtypes", [equipment_service_1.EquipmentService])
], EquipmentController);
//# sourceMappingURL=equipment.controller.js.map