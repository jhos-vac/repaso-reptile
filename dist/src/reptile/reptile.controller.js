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
exports.ReptileController = void 0;
const common_1 = require("@nestjs/common");
const controller_reptile_dto_1 = require("./Dto/controller-reptile.dto");
let ReptileController = class ReptileController {
    creat() {
        return `This action retuns all insects`;
    }
    async create(createreptiledto) {
        return `This action adds a new insects, ${createreptiledto.name}`;
    }
    update(id, createreptiledto) {
        return `This action updates a #${id} dog`;
    }
    remove(id) {
        return `This action remove a #${id} dog`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ReptileController.prototype, "creat", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [controller_reptile_dto_1.CreatereptileDto]),
    __metadata("design:returntype", Promise)
], ReptileController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, controller_reptile_dto_1.CreatereptileDto]),
    __metadata("design:returntype", void 0)
], ReptileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReptileController.prototype, "remove", null);
ReptileController = __decorate([
    (0, common_1.Controller)('reptile')
], ReptileController);
exports.ReptileController = ReptileController;
//# sourceMappingURL=reptile.controller.js.map