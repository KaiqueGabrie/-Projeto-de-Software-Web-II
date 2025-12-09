"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
exports.helpers = {
    dateFormat: (date) => {
        const locale = new Date(date);
        return locale.toLocaleString('pt-BR');
    },
    inc: (value) => parseInt(value) + 1,
    json: (context) => JSON.stringify(context, null, 2),
    'selected-option': (id, compareId, oldId) => {
        if (oldId)
            return id == oldId ? 'selected' : '';
        return id == compareId ? 'selected' : '';
    },
    isString: (value) => typeof value === 'string',
    year: () => new Date().getFullYear(),
    getError: (errors, key) => {
        const errorObj = errors?.find((i) => i.property == key);
        return errorObj ? errorObj.message : null;
    },
    getValue: (old, defaultValue) => {
        return old || defaultValue;
    },
};
//# sourceMappingURL=hbs-functions.js.map