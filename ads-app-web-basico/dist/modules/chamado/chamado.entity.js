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
exports.Chamado = exports.Situacao = exports.Prioridade = void 0;
const typeorm_1 = require("typeorm");
var Prioridade;
(function (Prioridade) {
    Prioridade["BAIXA"] = "Baixa";
    Prioridade["MEDIA"] = "M\u00E9dia";
    Prioridade["ALTA"] = "Alta";
    Prioridade["CRITICA"] = "Cr\u00EDtica";
})(Prioridade || (exports.Prioridade = Prioridade = {}));
var Situacao;
(function (Situacao) {
    Situacao["Aberto"] = "Aberto";
    Situacao["EmAndamento"] = "Em andamento";
    Situacao["Testando"] = "Testando";
    Situacao["Finalizado"] = "Finalizado";
})(Situacao || (exports.Situacao = Situacao = {}));
let Chamado = class Chamado extends typeorm_1.BaseEntity {
    id;
    titulo;
    descricao;
    situacao;
    prioridade;
    criadoEm;
    atualizadoEm;
};
exports.Chamado = Chamado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chamado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chamado.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Chamado.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chamado.prototype, "situacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Prioridade, default: Prioridade.MEDIA }),
    __metadata("design:type", String)
], Chamado.prototype, "prioridade", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Chamado.prototype, "criadoEm", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Chamado.prototype, "atualizadoEm", void 0);
exports.Chamado = Chamado = __decorate([
    (0, typeorm_1.Entity)('chamados')
], Chamado);
//# sourceMappingURL=chamado.entity.js.map