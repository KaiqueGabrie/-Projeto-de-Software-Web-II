"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidator = void 0;
const class_validator_1 = require("class-validator");
class BaseValidator {
    #_data;
    #_isError = false;
    #_errors = [];
    get isError() {
        return this.#_isError;
    }
    get getErrors() {
        return this.#_errors;
    }
    get getData() {
        return this.#_data;
    }
    async validator(data) {
        this.#_data = data;
        const errors = await (0, class_validator_1.validate)(data, {
            whitelist: true,
            validationError: { target: false, value: false },
        });
        errors.forEach((e) => {
            if (e.constraints) {
                this.#_isError = true;
                for (const constraint in e.constraints) {
                    this.#_errors.push({
                        property: e.property,
                        message: e.constraints[constraint],
                    });
                }
            }
        });
        return this;
    }
}
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=base.validator.js.map