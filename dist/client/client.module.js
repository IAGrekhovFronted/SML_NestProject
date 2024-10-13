"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_client_service_1 = require("../prisma-client/prisma-client.service");
const client_method_controller_1 = require("./client-method/client-method.controller");
const create_request_service_1 = require("./client-method/create-request/create-request.service");
let ClientModule = class ClientModule {
};
exports.ClientModule = ClientModule;
exports.ClientModule = ClientModule = __decorate([
    (0, common_1.Module)({
        controllers: [client_method_controller_1.ClientMethodController],
        providers: [create_request_service_1.CreateRequestService, prisma_client_service_1.PrismaService]
    })
], ClientModule);
//# sourceMappingURL=client.module.js.map