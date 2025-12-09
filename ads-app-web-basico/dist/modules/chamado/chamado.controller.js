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
exports.ChamadoController = void 0;
const common_1 = require("@nestjs/common");
const chamado_service_1 = require("./chamado.service");
const chamado_dto_1 = require("./chamado.dto");
const generic_validator_1 = require("../../common/validator/generic.validator");
let ChamadoController = class ChamadoController {
    chamadoService;
    constructor(chamadoService) {
        this.chamadoService = chamadoService;
    }
    async consulta() {
        const chamados = await this.chamadoService.getAll();
        return { listaChamados: chamados };
    }
    formularioCadastro() {
        return {};
    }
    async formularioCadastroSalvar(dadosForm, req, res) {
        const resultado = await (0, generic_validator_1.validate)(chamado_dto_1.ChamadoDto, dadosForm);
        if (resultado.isError) {
            req.addFlash('error', resultado.getErrors);
            req.setOld(dadosForm);
            return res.redirect('/chamado/novo');
        }
        else {
            await this.chamadoService.create(dadosForm);
            req.addFlash('success', 'Chamado adicionado com sucesso!');
            return res.redirect('/chamado');
        }
    }
};
exports.ChamadoController = ChamadoController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('chamado/listagem'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "consulta", null);
__decorate([
    (0, common_1.Get)('/novo'),
    (0, common_1.Render)('chamado/formulario-cadastro'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChamadoController.prototype, "formularioCadastro", null);
__decorate([
    (0, common_1.Post)('/novo/salvar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "formularioCadastroSalvar", null);
exports.ChamadoController = ChamadoController = __decorate([
    (0, common_1.Controller)('/chamado'),
    __metadata("design:paramtypes", [chamado_service_1.ChamadoService])
], ChamadoController);
//# sourceMappingURL=chamado.controller.js.map