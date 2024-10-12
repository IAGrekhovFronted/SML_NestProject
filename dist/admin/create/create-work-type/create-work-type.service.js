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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkTypeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_client_service_1 = require("../../../prisma-client/prisma-client.service");
let CreateWorkTypeService = class CreateWorkTypeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async CreateWorkType(data) {
        console.log("Переданные данные в запросе: ", data);
        return this.prisma.employeeWorkType.create({ data });
    }
};
exports.CreateWorkTypeService = CreateWorkTypeService;
exports.CreateWorkTypeService = CreateWorkTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_client_service_1.PrismaService])
], CreateWorkTypeService);
//# sourceMappingURL=create-work-type.service.js.map