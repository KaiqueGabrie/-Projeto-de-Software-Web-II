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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    home() {
        return {
            title: 'Início',
            bodyClass: '',
            page: 'home',
        };
    }
    menu() {
        return {
            title: 'Cardápio',
            bodyClass: 'sub_page',
            page: 'menu',
        };
    }
    sobre() {
        return {
            title: 'Sobre nós',
            bodyClass: 'sub_page',
            page: 'sobre',
        };
    }
    reservas() {
        return {
            title: 'Reservas',
            bodyClass: 'sub_page',
            page: 'reservas',
        };
    }
    carrinho() {
        return {
            title: 'Carrinho',
            bodyClass: 'sub_page',
            page: 'carrinho',
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('home'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "home", null);
__decorate([
    (0, common_1.Get)('menu'),
    (0, common_1.Render)('menu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "menu", null);
__decorate([
    (0, common_1.Get)('sobre'),
    (0, common_1.Render)('sobre'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sobre", null);
__decorate([
    (0, common_1.Get)('reservas'),
    (0, common_1.Render)('book'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "reservas", null);
__decorate([
    (0, common_1.Get)('carrinho'),
    (0, common_1.Render)('cart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "carrinho", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map