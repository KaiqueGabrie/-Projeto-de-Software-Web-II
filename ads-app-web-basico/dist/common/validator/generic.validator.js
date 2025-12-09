"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericValidator = void 0;
exports.validate = validate;
const class_transformer_1 = require("class-transformer");
const base_validator_1 = require("./base.validator");
class GenericValidator extends base_validator_1.BaseValidator {
    dtoClass;
    constructor(dtoClass) {
        super();
        this.dtoClass = dtoClass;
    }
    async validate(data) {
        const dados = (0, class_transformer_1.plainToInstance)(this.dtoClass, data);
        return this.validator(dados);
    }
}
exports.GenericValidator = GenericValidator;
async function validate(dtoClass, data) {
    const validator = new GenericValidator(dtoClass);
    return validator.validate(data);
}
//# sourceMappingURL=generic.validator.js.map