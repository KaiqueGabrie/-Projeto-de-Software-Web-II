"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashMiddleware = void 0;
const common_1 = require("@nestjs/common");
let FlashMiddleware = class FlashMiddleware {
    use(req, res, next) {
        req.addFlash = (type, message) => {
            if (!req.session)
                req.session = {};
            if (!req.session.flash)
                req.session.flash = {};
            if (!req.session.flash[type])
                req.session.flash[type] = [];
            if (Array.isArray(message)) {
                for (const item of message) {
                    req.session.flash[type].push(item);
                }
            }
            else {
                req.session.flash[type].push(message);
            }
        };
        req.flash = (type) => {
            if (!req.session || !req.session.flash)
                return [];
            const msgs = req.session.flash[type] || [];
            req.session.flash[type] = [];
            return [...msgs];
        };
        res.locals.success = req.flash('success');
        res.locals.error = req.flash('error');
        next();
    }
};
exports.FlashMiddleware = FlashMiddleware;
exports.FlashMiddleware = FlashMiddleware = __decorate([
    (0, common_1.Injectable)()
], FlashMiddleware);
//# sourceMappingURL=flash.middleware.js.map